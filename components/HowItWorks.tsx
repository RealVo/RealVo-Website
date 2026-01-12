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

// Base kiosk (no step overlay)
const KIOSK_BASE = '/how_it_works/hiw_wallmount_kiosk.png';

// Only the two full kiosk step images you have so far
const STEP_FULL_IMAGES = [
  '/how_it_works/hiw_step_1.png',
  '/how_it_works/hiw_step_2.png',
];

const AUTOPLAY_MS = 3500;

const HowItWorks: React.FC = () => {
  const worksRef = useRef<HTMLSpanElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringSteps, setIsHoveringSteps] = useState(false);

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

  // ✅ Display logic:
  // step 1 -> hiw_step_1.png
  // step 2 -> hiw_step_2.png
  // step 3-7 -> fallback to step 2 (so you can test today)
  const getKioskImageForStep = (index: number) => {
    if (index === 0) return STEP_FULL_IMAGES[0];
    if (index === 1) return STEP_FULL_IMAGES[1];
    return STEP_FULL_IMAGES[1]; // fallback until you upload steps 3–7
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

        {/* RIGHT: KIOSK IMAGE (FULL SWAP) */}
        <div className="relative flex justify-center">
          {/* subtle soft glow behind kiosk */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[520px] h-[520px] rounded-full bg-realvo-teal/10 blur-3xl" />
          </div>

          {/* Base kiosk (optional — keeps layout stable if an image ever fails) */}
          <img
            src={KIOSK_BASE}
            alt=""
            aria-hidden="true"
            className="
              absolute inset-0 m-auto
              w-full max-w-[560px] h-auto
              opacity-0
            "
            draggable={false}
          />

          {/* Active step kiosk (full image from Photoshop) */}
          <img
            src={getKioskImageForStep(activeIndex)}
            alt="RealVo kiosk experience preview"
            className="
              relative z-10
              w-full max-w-[560px] h-auto
              select-none
              drop-shadow-[0_28px_70px_rgba(0,0,0,0.22)]
            "
            draggable={false}
          />
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;

