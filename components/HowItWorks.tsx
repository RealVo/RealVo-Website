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

const HowItWorks: React.FC = () => {
  const worksRef = useRef<HTMLSpanElement | null>(null);

  // detect when the KIOSK enters/leaves view (mobile-friendly)
  const kioskViewRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  const TOTAL_STEPS = 7;
  const AUTO_MS = 2000;

  const [activeStep, setActiveStep] = useState<number>(1);
  const [mode, setMode] = useState<InteractionMode>('none');

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

  const stepSrc = useMemo(() => `/how_it_works/hiw_step_${activeStep}.png`, [activeStep]);

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

  // Preload step images
  useEffect(() => {
    for (let i = 1; i <= TOTAL_STEPS; i++) {
      const img = new Image();
      img.src = `/how_it_works/hiw_step_${i}.png`;
    }
  }, []);

  // When KIOSK enters view, force Step 1 (every time)
  useEffect(() => {
    const el = kioskViewRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);

            // Force Step 1 when the kiosk comes into view
            cancelHoverLeaveTimer();
            setMode('none');
            setIsHoveringKiosk(false);
            setIsKioskTapPaused(false);
            setActiveStep(1);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-cycle when idle
  useEffect(() => {
    if (!isInView) return;
    if (mode !== 'none') return;
    if (isHoveringKiosk) return;
    if (isKioskTapPaused) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const t = window.setInterval(goNext, AUTO_MS);
    return () => window.clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, mode, isHoveringKiosk, isKioskTapPaused]);

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

    setIsKioskTapPaused(prev => {
      const next = !prev;

      // If resuming, nudge to next step so it feels responsive
      if (!next) {
        setActiveStep(s => (s % TOTAL_STEPS) + 1);
      }

      return next;
    });
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

                  <div className="pb-8">
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
  This workflow is fully customizable — from profile fields and question formats to recording limits and interface design.
</p>
          
        </div>

        {/* RIGHT: KIOSK (keep your original shadow untouched) */}
        <div ref={kioskViewRef} className="relative">
          {/* NOTE: Keeping your original overflow behavior + shadow exactly as-is */}
          <div className="relative flex justify-center overflow-hidden md:overflow-visible">
            {/* Wrapper so pills can anchor to the image */}
            <div className="relative">
              <img
                src={stepSrc}
                alt={`RealVo kiosk step ${activeStep}`}
                className="
                  w-full max-w-[520px]
                  h-auto
                  drop-shadow-none
                  md:drop-shadow-[0_24px_50px_rgba(0,0,0,0.35)]
                  transition-opacity duration-300 ease-out
                "
                draggable={false}
                onMouseEnter={handleKioskEnter}
                onMouseLeave={handleKioskLeave}
                onClick={handleKioskTapToggle}
              />

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
