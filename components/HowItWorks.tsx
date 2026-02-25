import React, { useEffect, useMemo, useRef, useState } from 'react';
import Section from './Section';

const steps = [
  { number: 1, title: 'Welcome & Context', desc: 'Set the tone with a custom welcome message aligned to your program.' },
  { number: 2, title: 'Consent & Privacy', desc: 'Present clear, transparent permissions before recording begins.' },
  { number: 3, title: 'User Profile Details', desc: 'Capture key participant information to properly contextualize each submission.' },
  { number: 4, title: 'Guided Reflection', desc: 'Prompt thoughtful responses through tailored questions.' },
  { number: 5, title: 'Record', desc: 'Capture responses in a calm, distraction-free recording interface.' },
  { number: 6, title: 'Review & Confirm', desc: 'Participants can review and refine before submitting.' },
  { number: 7, title: 'Thank You', desc: 'A closing message thanks the participant and confirms their session is complete' },
];

type InteractionMode = 'none' | 'hover' | 'click';

// ─── Attract loop timing for Step 1 (milliseconds) ───────────────────────────
const ATTRACT_MS = 3000;     // how long each Step 1 image shows before alternating
const ATTRACT_FADE_MS = 800; // crossfade duration between 1a and 1b
// ─────────────────────────────────────────────────────────────────────────────

const HowItWorks: React.FC = () => {
  const worksRef = useRef<HTMLSpanElement | null>(null);

  // detect when the KIOSK enters/leaves view (mobile-friendly)
  const kioskViewRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  const TOTAL_STEPS = 7;
  const AUTO_MS = 2000;

  const [activeStep, setActiveStep] = useState<number>(1);
  const [mode, setMode] = useState<InteractionMode>('none');

  // Step 1 attract sub-frame: 'a' or 'b'
  const [attractFrame, setAttractFrame] = useState<'a' | 'b'>('a');

  // pause controls (desktop hover + mobile tap)
  const [isHoveringKiosk, setIsHoveringKiosk] = useState(false);
  const [isKioskTapPaused, setIsKioskTapPaused] = useState(false);

  const stepsWrapRef = useRef<HTMLDivElement | null>(null);

  // Hover-leave debounce so pill -> headline doesn't "resume" between them
  const hoverLeaveTimerRef = useRef<number | null>(null);
  const cancelHoverLeaveTimer = () => {
    if (hoverLeaveTimerRef.current) {
      window.clearTimeout(hoverLeaveTimerRef.current);
      hoverLeaveTimerRef.current = null;
    }
  };

  // Derive the image src:
  // - Step 1 in auto/idle mode → alternate between 1a and 1b
  // - Step 1 when user has manually selected it (hover/click) → show 1a
  // - All other steps → single image as before
  const stepSrc = useMemo(() => {
    if (activeStep === 1) {
      const frame = mode === 'none' ? attractFrame : 'a';
      return `/how_it_works/hiw_step_1${frame}.png`;
    }
    return `/how_it_works/hiw_step_${activeStep}.png`;
  }, [activeStep, attractFrame, mode]);

  const goNext = () => setActiveStep(prev => (prev % TOTAL_STEPS) + 1);

  const resumeAutoFromNext = () => {
    setMode('none');
    setActiveStep(prev => (prev % TOTAL_STEPS) + 1);
  };

  // Pulse animated headline text
  useEffect(() => {
    const node = worksRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && node) {
            node.classList.remove('animate-pulse-once');
            void node.offsetWidth;
            node.classList.add('animate-pulse-once');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Preload step images (including 1a and 1b)
  useEffect(() => {
    const img1a = new Image();
    img1a.src = '/how_it_works/hiw_step_1a.png';
    const img1b = new Image();
    img1b.src = '/how_it_works/hiw_step_1b.png';
    for (let i = 2; i <= TOTAL_STEPS; i++) {
      const img = new Image();
      img.src = `/how_it_works/hiw_step_${i}.png`;
    }
  }, []);

  // Track whether we have entered view at least once (to avoid re-resetting on scroll)
  const hasEnteredViewRef = useRef(false);

  // When KIOSK enters view: start animation from Step 1 on first entry only
  useEffect(() => {
    const el = kioskViewRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);

            // Only reset to Step 1 on first entry — not on every scroll bounce
            if (!hasEnteredViewRef.current) {
              hasEnteredViewRef.current = true;
              cancelHoverLeaveTimer();
              setMode('none');
              setIsHoveringKiosk(false);
              setIsKioskTapPaused(false);
              setActiveStep(1);
              setAttractFrame('a');
            }
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.1 } // lower threshold — stays true on mobile while interacting
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Single paused ref — source of truth for the interval
  const isPausedRef = useRef(false);
  isPausedRef.current = isKioskTapPaused || isHoveringKiosk || mode !== 'none';

  // Refs so the interval callback always sees latest step/frame without restarting
  const activeStepRef = useRef(activeStep);
  const attractFrameRef = useRef(attractFrame);
  activeStepRef.current = activeStep;
  attractFrameRef.current = attractFrame;

  // Single permanent interval — starts when in view, never restarts
  // All pause/resume logic is handled inside tick() via refs
  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    // Counts AUTO_MS ticks elapsed on the current step-1 frame
    let attractTicks = 0;
    const attractTicksNeeded = Math.round(ATTRACT_MS / AUTO_MS);

    const tick = () => {
      // Check paused state via ref — no stale closure issues
      if (isPausedRef.current) return;

      if (activeStepRef.current === 1) {
        attractTicks++;
        if (attractTicks < attractTicksNeeded) return; // hold current frame
        attractTicks = 0;
        if (attractFrameRef.current === 'a') {
          setAttractFrame('b');
        } else {
          setAttractFrame('a');
          setActiveStep(2);
        }
      } else {
        attractTicks = 0;
        setActiveStep(prev => (prev % TOTAL_STEPS) + 1);
      }
    };

    // One interval, runs forever while in view — tick() skips when paused
    const t = window.setInterval(tick, AUTO_MS);
    return () => window.clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  // Click-off to resume auto (only when click-locked)
  useEffect(() => {
    if (mode !== 'click') return;

    const onDocMouseDown = (e: MouseEvent) => {
      const wrap = stepsWrapRef.current;
      if (!wrap) return;

      const target = e.target as Node | null;
      if (target && !wrap.contains(target)) {
        resumeAutoFromNext();
      }
    };

    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const handleHoverEnter = (n: number) => {
    if (mode === 'click') return;
    cancelHoverLeaveTimer();
    setMode('hover');
    setActiveStep(n);
  };

  const handleHoverLeaveTight = () => {
    if (mode !== 'hover') return;
    cancelHoverLeaveTimer();
    hoverLeaveTimerRef.current = window.setTimeout(() => {
      resumeAutoFromNext();
    }, 50);
  };

  const handleClickStep = (n: number) => {
    cancelHoverLeaveTimer();
    setMode('click');
    setActiveStep(n);
  };

  // Kiosk hover pause/resume (desktop)
  const handleKioskEnter = () => {
    if (mode === 'click') return;
    setIsHoveringKiosk(true);
  };

  const handleKioskLeave = () => {
    if (mode === 'click') return;
    setIsHoveringKiosk(false);

    // Nudge on desktop resume so it feels responsive (matches what you liked)
    if (mode === 'none' && !isKioskTapPaused) {
      setActiveStep(prev => (prev % TOTAL_STEPS) + 1);
    }
  };

  // Kiosk tap toggle (mobile): tap = pause, tap again = resume
  const handleKioskTapToggle = () => {
    if (mode === 'click') return;
    // Simply toggle paused — sequencer restarts automatically via useEffect
    setIsKioskTapPaused(prev => !prev);
  };

  // ✅ One unified paused state for pills
  const isPaused = isHoveringKiosk || isKioskTapPaused;

  return (
    <Section id="how-it-works" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: STEPS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-realvo-charcoal dark:text-white mb-6">
            The{' '}
            <span ref={worksRef} className="text-realvo-teal animate-pulse-once">
              User Experience
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            A flexible, customizable experience that guides participants from welcome through to completion.
          </p>

          {/* Mobile helper line */}
          <p className="lg:hidden mt-2 mb-8 pl-[56px] text-xs text-gray-400">
            Scroll down to see the kiosk in action.
          </p>

          <div ref={stepsWrapRef} className="space-y-0 mt-6">
            {steps.map((step, i) => {
              const isActive = activeStep === step.number;

              return (
                <div key={step.number} className="flex group select-none">
                  <div className="flex flex-col items-center mr-6">
                    <button
                      type="button"
                      onMouseEnter={() => handleHoverEnter(step.number)}
                      onMouseLeave={handleHoverLeaveTight}
                      onClick={() => handleClickStep(step.number)}
                      className={[
                        'w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors',
                        'cursor-pointer',
                        isActive
                          ? 'border-realvo-blue bg-realvo-blue text-white'
                          : 'border-realvo-slate/30 text-realvo-slate hover:border-realvo-blue hover:bg-realvo-blue hover:text-white',
                      ].join(' ')}
                      aria-label={`Show step ${step.number}`}
                    >
                      {step.number}
                    </button>

                    {i !== steps.length - 1 && (
                      <div className="w-px h-full bg-gray-300 dark:bg-gray-700 my-2" />
                    )}
                  </div>

                  <div className="pb-6 md:pb-8">
                    <button
                      type="button"
                      onMouseEnter={() => handleHoverEnter(step.number)}
                      onMouseLeave={handleHoverLeaveTight}
                      onClick={() => handleClickStep(step.number)}
                      className="text-left cursor-pointer"
                      aria-label={`Show step ${step.number}: ${step.title}`}
                    >
                      <h4 className="text-lg font-bold text-realvo-charcoal dark:text-white mb-1">
                        {step.title}
                      </h4>
                    </button>

                    <p className="text-sm text-gray-500 dark:text-gray-400">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Customization disclaimer */}
          <p className="mt-0 md:mt-1 pl-[56px] text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
            This visual represents a simplified example. Each deployment is configured to your objectives — including profile fields, optional multiple-choice inputs, question structure, recording limits, and overall session flow.
          </p>
          
        </div>

        {/* RIGHT: KIOSK (keep your original shadow untouched) */}
        <div ref={kioskViewRef} className="relative">
          {/* NOTE: Keeping your original overflow behavior + shadow exactly as-is */}
          <div className="relative flex justify-center overflow-hidden md:overflow-visible">
            {/* Wrapper so pills can anchor to the image */}
            {/* Wrapper so pills can anchor to the image */}
            <div className="relative">
              <div
                className="relative w-full max-w-[520px] drop-shadow-none md:drop-shadow-[0_24px_50px_rgba(0,0,0,0.35)]"
                onMouseEnter={handleKioskEnter}
                onMouseLeave={handleKioskLeave}
                onClick={handleKioskTapToggle}
              >
                {/* ── Layer 1 (bottom): 1a — always mounted, never unmounts ── */}
                <img
                  src="/how_it_works/hiw_step_1a.png"
                  alt="RealVo kiosk step 1a"
                  className="w-full h-auto block"
                  draggable={false}
                />

                {/* ── Layer 2: 1b — fades in/out over 1a ── */}
                <img
                  src="/how_it_works/hiw_step_1b.png"
                  alt="RealVo kiosk step 1b"
                  className="absolute inset-0 w-full h-auto block"
                  style={{
                    opacity: activeStep === 1 && attractFrame === 'b' ? 1 : 0,
                    transition: `opacity ${ATTRACT_FADE_MS}ms ease-in-out`,
                  }}
                  draggable={false}
                />

                {/* ── Layer 3 (top): Steps 2–7 — hard cut, covers 1a/1b instantly ── */}
                {activeStep !== 1 && (
                  <img
                    src={stepSrc}
                    alt={`RealVo kiosk step ${activeStep}`}
                    className="absolute inset-0 w-full h-auto block"
                    draggable={false}
                  />
                )}
              </div>

              {/* Desktop pill */}
              <div className="hidden lg:block pointer-events-none absolute bottom-3 right-3 text-[11px] text-gray-500 dark:text-gray-400 bg-white/70 dark:bg-gray-900/60 backdrop-blur px-2 py-1 rounded-md">
                {isPaused ? 'Paused' : 'Hover to pause'}
              </div>

              {/* Mobile pill */}
              <div className="lg:hidden pointer-events-none absolute bottom-3 right-3 text-[11px] text-gray-500 dark:text-gray-400 bg-white/70 dark:bg-gray-900/60 backdrop-blur px-2 py-1 rounded-md">
                Tap to {isPaused ? 'play' : 'pause'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
