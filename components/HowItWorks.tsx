import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Section from './Section';

const steps = [
  { number: 1, title: 'Welcome & Context', desc: 'Set the stage with a custom welcome message.' },
  { number: 2, title: 'Disclaimer & Privacy', desc: 'Clear, transparent permissions.' },
  { number: 3, title: 'Profile Questions', desc: 'Understand who is speaking (name, email, role, etc.).' },
  { number: 4, title: 'Reflection', desc: 'Guided prompts to elicit deep thought.' },
  { number: 5, title: 'Record', desc: 'Capture messages in a calm, distraction-free recording interface.' },
  { number: 6, title: 'Review or Retry', desc: 'Participants can refine what they said before submitting.' },
  { number: 7, title: 'Submit & Upload', desc: 'Secure transfer to your VB.tv dashboard.' },
];

type InteractionMode = 'none' | 'hover' | 'click';

const TOTAL_STEPS = 7;
const AUTO_MS = 2000;

const HowItWorks: React.FC = () => {
  const worksRef = useRef<HTMLSpanElement | null>(null);

  const kioskViewRef = useRef<HTMLDivElement | null>(null);
  const stepsWrapRef = useRef<HTMLDivElement | null>(null);

  const [activeStep, setActiveStep] = useState<number>(1);
  const [mode, setMode] = useState<InteractionMode>('none');

  // This is ONLY used for the pill text + accessibility
  const [isPaused, setIsPaused] = useState(false);

  // Hard timer control (prevents iOS state/timing weirdness)
  const intervalRef = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const goNext = useCallback(() => {
    setActiveStep(prev => (prev % TOTAL_STEPS) + 1);
  }, []);

  const startAuto = useCallback(() => {
    clearTimer();

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    intervalRef.current = window.setInterval(goNext, AUTO_MS);
  }, [clearTimer, goNext]);

  const stopAuto = useCallback(() => {
    clearTimer();
  }, [clearTimer]);

  const stepSrc = useMemo(() => `/how_it_works/hiw_step_${activeStep}.png`, [activeStep]);

  // Hover-leave debounce so pill -> headline doesn't "resume" between them
  const hoverLeaveTimerRef = useRef<number | null>(null);
  const cancelHoverLeaveTimer = () => {
    if (hoverLeaveTimerRef.current) {
      window.clearTimeout(hoverLeaveTimerRef.current);
      hoverLeaveTimerRef.current = null;
    }
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

  // Start/stop based on kiosk visibility
  useEffect(() => {
    const el = kioskViewRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            cancelHoverLeaveTimer();
            setMode('none');
            setIsPaused(false);
            setActiveStep(1);
            startAuto();
          } else {
            stopAuto();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startAuto, stopAuto]);

  // Click-off to resume auto (only when click-locked)
  useEffect(() => {
    if (mode !== 'click') return;

    const onDocMouseDown = (e: MouseEvent) => {
      const wrap = stepsWrapRef.current;
      if (!wrap) return;

      const target = e.target as Node | null;
      if (target && !wrap.contains(target)) {
        setMode('none');
        setIsPaused(false);
        setActiveStep(prev => (prev % TOTAL_STEPS) + 1);
        startAuto();
      }
    };

    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, [mode, startAuto]);

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
      setMode('none');
      setActiveStep(prev => (prev % TOTAL_STEPS) + 1);
      startAuto();
    }, 50);
  };

  const handleClickStep = (n: number) => {
    cancelHoverLeaveTimer();
    setMode('click');
    stopAuto();
    setIsPaused(true);
    setActiveStep(n);
  };

  // Desktop: hover pause/resume
  const handleKioskEnter = useCallback(() => {
    if (mode === 'click') return;
    stopAuto();
    setIsPaused(true);
  }, [mode, stopAuto]);

  const handleKioskLeave = useCallback(() => {
    if (mode === 'click') return;
    setIsPaused(false);
    startAuto();
  }, [mode, startAuto]);

  // Mobile: tap pause/resume (iOS-safe)
  const handleKioskTapToggle = useCallback(() => {
    if (mode === 'click') return;

    setIsPaused(prev => {
      const next = !prev;

      if (next) {
        stopAuto();
      } else {
        // nudge forward so it feels responsive when resuming
        setActiveStep(s => (s % TOTAL_STEPS) + 1);
        startAuto();
      }

      return next;
    });
  }, [mode, startAuto, stopAuto]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => stopAuto();
  }, [stopAuto]);

  return (
    <Section id="how-it-works" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: STEPS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-realvo-charcoal dark:text-white mb-6">
            How RealVo{' '}
            <span ref={worksRef} className="text-realvo-teal animate-pulse-once">
              Works
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            A simple, human-centered workflow for capturing meaningful stories — in person or online.
            We&apos;ve removed the friction so you can focus on the insight.
          </p>

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
        </div>

        {/* RIGHT: KIOSK */}
        <div ref={kioskViewRef} className="relative">
          <div className="relative flex justify-center overflow-visible">
            <div
              className="relative select-none"
              onMouseEnter={handleKioskEnter}
              onMouseLeave={handleKioskLeave}
              onClick={handleKioskTapToggle}
              role="button"
              tabIndex={0}
              aria-label={
                isPaused
                  ? 'How it works preview paused. Tap to resume.'
                  : 'How it works preview playing. Tap to pause.'
              }
            >
              <img
                src={stepSrc}
                alt={`RealVo kiosk step ${activeStep}`}
                className="
                  w-full max-w-[520px]
                  h-auto
                  drop-shadow-[0_24px_50px_rgba(0,0,0,0.35)]
                  transition-opacity duration-300 ease-out
                "
                draggable={false}
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
