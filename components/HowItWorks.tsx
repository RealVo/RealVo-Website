import React, { useEffect, useRef } from 'react';
import Section from './Section';

const steps = [
  {
    number: '1',
    title: 'Welcome & Context',
    desc: 'Set the stage with a custom welcome message.',
  },
  {
    number: '2',
    title: 'Disclaimer & Privacy',
    desc: 'Clear, transparent permissions.',
  },
  {
    number: '3',
    title: 'Profile Questions',
    desc: 'Understand who is speaking (name, email, role, etc.).',
  },
  {
    number: '4',
    title: 'Reflection',
    desc: 'Guided prompts to elicit deep thought.',
  },
  {
    number: '5',
    title: 'Record',
    desc: 'Capture messages in a calm, distraction-free recording interface.',
  },
  {
    number: '6',
    title: 'Review or Retry',
    desc: 'Participants can refine what they said before submitting.',
  },
  {
    number: '7',
    title: 'Submit & Upload',
    desc: 'Secure transfer to your VB.tv dashboard.',
  },
];

const HowItWorks: React.FC = () => {
  const worksRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = worksRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && node) {
            node.classList.remove('animate-pulse-once');
            // force reflow so the browser treats it as a fresh animation
            void node.offsetWidth;
            node.classList.add('animate-pulse-once');
          }
        });
      },
      {
        threshold: 0.5, // when the section is nicely in view
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="how-it-works" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: STEPS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-realvo-charcoal dark:text-white mb-6">
  How RealVo{' '}
  <span
    ref={worksRef}
    className="text-realvo-teal animate-pulse-once"
  >
    Works
  </span>
</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            A simple, human-centered workflow for capturing meaningful stories — in person or
            online. We&apos;ve removed the friction so you can focus on the insight.
          </p>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className="flex group">
                <div className="flex flex-col items-center mr-6">
                  {/* Circle buttons 1–7 with blue hover + white text */}
                  <div className="w-8 h-8 rounded-full border-2 border-realvo-slate/30 flex items-center justify-center text-xs font-bold text-realvo-slate group-hover:border-realvo-blue group-hover:bg-realvo-blue group-hover:text-white transition-colors">
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

        {/* RIGHT: REALVO RECORDER MOCKUP WITH HOVER ANIMATION */}
        <div className="relative group">
          <div className="absolute inset-0 bg-realvo-teal/10 transform rotate-3 rounded-2xl group-hover:rotate-2 transition-transform duration-700" />
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <div className="bg-realvo-charcoal p-4 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="text-gray-400 text-xs">RealVo Recorder</div>
            </div>

            <div className="aspect-video bg-gray-900 relative flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1598550476439-c9483a7f73fc?q=80&w=800"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                alt="Professional Recording Interface"
              />
              <div className="relative z-10 text-center p-8 w-full max-w-md">
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
                  &quot;How has this event impacted your perspective?&quot;
                </h3>
                <div className="w-16 h-16 rounded-full border-4 border-red-500 flex items-center justify-center mx-auto cursor-pointer hover:scale-110 transition-transform bg-black/20 backdrop-blur-sm">
                  <div className="w-6 h-6 bg-red-500 rounded-sm" />
                </div>
                <p className="text-white/90 mt-4 text-sm font-medium bg-black/30 inline-block px-3 py-1 rounded-full backdrop-blur-sm">
                  00:42 / 02:00
                </p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full w-3/4" />
              <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
