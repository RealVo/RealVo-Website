// src/components/WhyRealVoExists.tsx
import React, { useEffect, useRef } from 'react';
import Section from './Section';

const WhyRealVoExists: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const highlightRef = useRef<HTMLSpanElement | null>(null);

  // Re-trigger pulse animation when the section comes into view
  useEffect(() => {
    const sectionNode = sectionRef.current;
    const highlightNode = highlightRef.current;
    if (!sectionNode || !highlightNode) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // restart the animation each time it comes into view
            highlightNode.classList.remove('animate-pulse-once');
            // force reflow so the browser treats it as a new animation
            void highlightNode.offsetWidth;
            highlightNode.classList.add('animate-pulse-once');
          }
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(sectionNode);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="why-realvo-exists"
      className="border-t border-gray-100 bg-white"
    >
      <div
        ref={sectionRef}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        {/* VISUAL – LEFT COLUMN */}
        <div className="lg:col-span-5 order-1">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
              alt="Person reflecting in front of a laptop"
              className="w-full h-full object-cover opacity-90"
            />

            {/* Overlay label card */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-gray-200">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gray-500 mb-1">
                  Why RealVo Exists
                </p>
                <p className="text-sm text-realvo-charcoal">
                  Transforming lived experiences into insight leaders can see,
                  hear, and act on.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TEXT – RIGHT COLUMN */}
        <div className="lg:col-span-7 order-2 space-y-6">
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-realvo-blue mb-1">
            Why RealVo Exists
          </p>

          {/* Heading with animated phrase */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-realvo-charcoal dark:text-white leading-tight">
            Because numbers alone{' '}
            <span
              ref={highlightRef}
              className="text-realvo-blue dark:text-realvo-teal"
            >
              don’t tell the whole story.
            </span>
          </h2>

          {/* Intro copy */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Traditional tools capture metrics and surface comments. RealVo
            exists to help organizations truly understand lived experiences, so
            decisions about programs, culture, and communication are grounded in
            real human stories — not just dashboards and reports.
          </p>

          {/* Problem bullets */}
          <div className="grid gap-5 md:gap-6">
            <div>
              <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal dark:text-white">
                Surveys miss the story.
              </h3>
              <p className="mt-1 text-sm md:text-[15px] text-gray-600 dark:text-gray-300">
                They’re good at tracking metrics, but not at capturing emotion,
                nuance, or the “why” behind how people feel and what they need.
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal dark:text-white">
                Interviews and filming don’t scale.
              </h3>
              <p className="mt-1 text-sm md:text-[15px] text-gray-600 dark:text-gray-300">
                Scheduling, crews, and cameras are resource-heavy — and often
                feel staged or intimidating for participants, limiting who you
                actually hear from.
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal dark:text-white">
                People need a safe way to share.
              </h3>
              <p className="mt-1 text-sm md:text-[15px] text-gray-600 dark:text-gray-300">
                Many will open up when the experience feels guided, private, and
                on their own terms — not like a performance or a formal
                evaluation.
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal dark:text-white">
                Leaders need real perspectives to act on.
              </h3>
              <p className="mt-1 text-sm md:text-[15px] text-gray-600 dark:text-gray-300">
                Decisions about culture, student or community experience, and
                communication are stronger when they’re shaped by real voices —
                the lived experiences behind the numbers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyRealVoExists;
