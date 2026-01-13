import React, { useEffect, useMemo, useRef, useState } from 'react';
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

const HowItWorks: React.FC = () => {
  const worksRef = useRef<HTMLSpanElement | null>(null);

  // Step image rotation
  const TOTAL_STEPS = 7;
  const AUTO_MS = 2000; // you set this to 2000

  const [activeStep, setActiveStep] = useState<number>(1);
  const [mode, setMode] = useState<InteractionMode>('none');

  // ✅ NEW: pause when hovering the kiosk image
  const [isHoveringKiosk, setIsHoveringKiosk] = useState(false);

  const stepsWrapRef = useRef<HTMLDivElement | null>(null);

  const stepSrc = useMemo(() => {
    return `/how_it_works/hiw_step_${activeStep}.png`;
  }, [activeStep]);

  const goNext = () => {
    setActiveStep(prev => (prev % TOTAL_STEPS) + 1);
  };

  const resumeAutoFromNext = () => {
    // when hover-away or click-off, continue onto the NEXT step
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

  // Preload step images (prevents blank flash on first swap)
  useEffect(() => {
    for (let i = 1; i <= TOTAL_STEPS; i++) {
      const img = new Image();
      img.src = `/how_it_works/hiw_step_${i}.png`;
    }
  }, []);

  // ✅ Auto-cycle when idle (NOT hovering steps, NOT click-locked, NOT hovering kiosk)
  useEffect(() => {
    if (mode !== 'none') return;
    if (isHoveringKiosk) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const t = window.setInterval(() => {
      goNext();
    }, AUTO_MS);

    return () => window.clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, isHoveringKiosk]);

  // Click-off to resume auto
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
  }, [mode]);

  const handleHoverEnter = (n: number) => {
    if (mode === 'click') return; // ignore hover while click-locked
    setMode('hover');
    setActiveStep(n);
  };

  const handleHoverLeave = () => {
    if (mode !== 'hover') return;
    resumeAutoFromNext();
  };

  const handleClickStep = (n: number) => {
    setMode('click');
    setActiveStep(n);
  };

  // ✅ NEW: kiosk hover pause/resume (without changing the step)
  const handleKioskEnter = () => {
    if (mode === 'click') return; // don't interfere with click-locked behavior
    setIsHoveringKiosk(true);
  };

  const handleKioskLeave = () => {
    if (mode === 'click') return;
    setIsHoveringKiosk(false);
    // Resume and continue to the next step
    if (mode === 'none') {
      setActiveStep(prev => (prev % TOTAL_STEPS) + 1);
    }
  };

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

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            A simple, human-centered workflow for capturing meaningful stories — in person or
            online. We&apos;ve removed the friction so you can focus on the insight.
          </p>

          <div
            ref={stepsWrapRef}
            onMouseLeave={handleHoverLeave}
            className="space-y-0"
          >
            {steps.map((step, i) => {
              const isActive = activeStep === step.number;

              return (
                <div
                  key={step.number}
                  className="flex group cursor-pointer select-none"
                  onMouseEnter={() => handleHoverEnter(step.number)}
                  onClick={() => handleClickStep(step.number)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleClickStep(step.number);
                  }}
                >
                  <div className="flex flex-col items-center mr-6">
                    <div
                      className={[
                        'w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors',
                        isActive
                          ? 'border-realvo-blue bg-realvo-blue text-white'
                          : 'border-realvo-slate/30 text-realvo-slate group-hover:border-realvo-blue group-hover:bg-realvo-blue group-hover:text-white',
                      ].join(' ')}
                    >
                      {step.number}
                    </div>

                    {i !== steps.length - 1 && (
                      <div className="w-px h-full bg-gray-300 dark:bg-gray-700 my-2" />
                    )}
                  </div>

                  <div className="pb-8">
                    <h4 className="text-lg font-bold text-realvo-charcoal dark:text-white mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Click a step to preview. Click anywhere off the list to resume.
          </p>
        </div>

        {/* RIGHT: KIOSK (pause on hover) */}
        <div className="relative">
          <div className="relative flex justify-center">
            <img
              src={stepSrc}
              alt={`RealVo kiosk step ${activeStep}`}
              className="
                w-full max-w-[520px]
                h-auto
                drop-shadow-[0_24px_50px_rgba(0,0,0,0.25)]
                transition-opacity duration-300 ease-out
              "
              draggable={false}
              onMouseEnter={handleKioskEnter}
              onMouseLeave={handleKioskLeave}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
