import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';

const steps = [
  { number: '1', title: 'Welcome & Context', desc: 'Set the stage with a custom welcome message.' },
  { number: '2', title: 'Disclaimer & Privacy', desc: 'Clear, transparent permissions.' },
  { number: '3', title: 'Profile Questions', desc: 'Understand who is speaking (name, email, role, etc.).' },
  { number: '4', title: 'Reflection', desc: 'Guided prompts to elicit deep thought.' },
  { number: '5', title: 'Record', desc: 'Capture messages in a calm, distraction-free recording interface.' },
  { number: '6', title: 'Review or Retry', desc: 'Participants can refine what they said before submitting.' },
  { number: '7', title: 'Submit & Upload', desc: 'Secure transfer to your VB.tv dashboard.' },
];

const KIOSK_BASE = '/how_it_works/hiw_wallmount_kiosk.png';

const AUTOPLAY_MS = 3500;
const FADE_MS = 250;

const HowItWorks: React.FC = () => {
  const worksRef = useRef<HTMLSpanElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringSteps, setIsHoveringSteps] = useState(false);

  // Crossfade states
  const [currentSrc, setCurrentSrc] = useState<string>(KIOSK_BASE);
  const [prevSrc, setPrevSrc] = useState<string | null>(null);

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

  // Map step -> image (for now: only steps 1 & 2 exist; others fall back to step 2)
  const getKioskImageForStep = (index: number) => {
    if (index === 0) return '/how_it_works/hiw_step_1.png';
    if (index === 1) return '/how_it_works/hiw_step_2.png';
    return '/how_it_works/hiw_step_2.png'; // fallback until steps 3–7 exist
  };

  // Drive crossfade whenever activeIndex changes
  useEffect(() => {
    const next = getKioskImageForStep(activeIndex);

    // If unchanged, do nothing
    if (next === currentSrc) return;

    setPrevSrc(currentSrc);
    setCurrentSrc(next);

    const t = window.setTimeout(() => {
      setPrevSrc(null);
    }, FADE_MS);

    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  // Auto-rotate steps unless user is hovering the list
  useEffect(() => {
    if (isHoveringSteps) return;

    const id = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1) % steps.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [isHoveringSteps]);

  const handleStepEnter = (index: number) => {
    setIsHoveringSteps(true);
    setActiveIndex(index);
  };

  const handleStepsLeave = () => {
    setIsHoveringSteps(false);
  };

  return (
    <Section id="how-it-works" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: STEPS */}
        <div onMouseLeave={handleStepsLeave}>
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

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="flex group cursor-default"
                onMouseEnter={() => handleStepEnter(i)}
              >
                <div className="flex flex-col items-center mr-6">
                  <div
                    className={`
                      w-8 h-8 rounded-full border-2
                      flex items-center justify-center text-xs font-bold
                      transition-colors
                      ${
                        i === activeIndex
                          ? 'border-realvo-blue bg-realvo-blue text-white'
                          : 'border-realvo-slate/30 text-realvo-slate group-hover:border-realvo-blue group-hover:bg-realvo-blue group-hover:text-white'
                      }
                    `}
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
            ))}
          </div>
        </div>

        {/* RIGHT: KIOSK PREVIEW (FULL IMAGE SWAP) */}
        <div className="relative flex justify-center">
          {/* subtle soft glow behind kiosk */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[520px] h-[520px] rounded-full bg-realvo-teal/10 blur-3xl" />
          </div>

          <div className="relative w-full max-w-[560px]">
            {/* Previous image (fades out) */}
            {prevSrc && (
              <img
                src={prevSrc}
                alt=""
                aria-hidden="true"
                className="
                  absolute inset-0 w-full h-auto
                  select-none
                  drop-shadow-[0_28px_70px_rgba(0,0,0,0.22)]
                  opacity-0
                "
                style={{ transition: `opacity ${FADE_MS}ms ease-in-out`, opacity: 0 }}
                draggable={false}
              />
            )}

            {/* Current image (fades in) */}
            <img
              src={currentSrc}
              alt="RealVo kiosk experience preview"
              className="
                absolute inset-0 w-full h-auto
                select-none
                drop-shadow-[0_28px_70px_rgba(0,0,0,0.22)]
              "
              style={{ transition: `opacity ${FADE_MS}ms ease-in-out`, opacity: 1 }}
              draggable={false}
            />

            {/* Spacer keeps layout height stable */}
            <img
              src={KIOSK_BASE}
              alt=""
              aria-hidden="true"
              className="w-full h-auto opacity-0 select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
