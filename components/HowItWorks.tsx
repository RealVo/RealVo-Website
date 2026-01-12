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

// ✅ Your kiosk image in /public
const KIOSK_IMAGE_SRC = '/how_it_works/hiw_wallmount_kiosk.png';

// ✅ ONLY the two images you uploaded so far:
const STEP_SCREEN_IMAGES = [
  '/how_it_works/hiw_step_1.png',
  '/how_it_works/hiw_step_2.png',
];

// Screen window position on the kiosk image (percent-based, responsive)
// (This matches the earlier assumption; tweak later if needed.)
const SCREEN_WINDOW = {
  leftPct: 24.3,
  topPct: 24.3,
  widthPct: 51.0,
  heightPct: 49.7,
};

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

  // Auto-rotate screens unless user is hovering the step list
  useEffect(() => {
    if (isHoveringSteps) return;

    const id = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1) % steps.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [isHoveringSteps]);

  // ✅ fallback mapping:
  // step 1 -> image 1
  // step 2 -> image 2
  // steps 3-7 -> fallback to image 2
  const getDisplayImageSrc = (stepIndex: number) => {
    if (stepIndex === 0) return STEP_SCREEN_IMAGES[0]; // step 1
    return STEP_SCREEN_IMAGES[1]; // step 2 + fallback for 3-7
  };

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

        {/* RIGHT: FLOATING KIOSK + SCREEN OVERLAY */}
        <div className="relative flex justify-center">
          {/* Subtle soft glow behind kiosk */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[520px] h-[520px] rounded-full bg-realvo-teal/10 blur-3xl" />
          </div>

          <div className="relative z-10 w-full max-w-[560px]">
            {/* Kiosk image */}
            <img
              src={KIOSK_IMAGE_SRC}
              alt="RealVo kiosk head unit"
              className="
                w-full h-auto block select-none
                drop-shadow-[0_28px_70px_rgba(0,0,0,0.22)]
              "
              draggable={false}
            />

            {/* Screen window overlay */}
            <div
              className="absolute z-20 overflow-hidden"
              style={{
                left: `${SCREEN_WINDOW.leftPct}%`,
                top: `${SCREEN_WINDOW.topPct}%`,
                width: `${SCREEN_WINDOW.widthPct}%`,
                height: `${SCREEN_WINDOW.heightPct}%`,
                borderRadius: '10px',
              }}
            >
              {/* One image only (no stack needed while testing) */}
              <img
                src={getDisplayImageSrc(activeIndex)}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;

