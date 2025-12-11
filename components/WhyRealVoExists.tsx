// src/components/WhyRealVoExists.tsx
import React, { useEffect, useRef } from 'react';
import Section from './Section';

const WhyRealVoExists: React.FC = () => {
  const whyRef = useRef<HTMLSpanElement | null>(null);

  // Re-trigger pulse animation when section comes into view
  useEffect(() => {
    const node = whyRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && node) {
            node.classList.remove('animate-pulse-once');
            // force reflow so browser treats it as a new animation
            void node.offsetWidth;
            node.classList.add('animate-pulse-once');
          }
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="why-realvo-exists"
      className="overflow-hidden border-t border-gray-100"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* VISUAL – LEFT COLUMN */}
        <div className="lg:col-span-6 order-1">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Team reviewing video insights on laptops"
              className="w-full h-full object-cover opacity-80"
            />

            {/* Bottom overlay card */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-md rounded-xl px-5 py-4 shadow-lg flex flex-col gap-1">
                <p className="text-[11px] tracking-[0.22em] font-semibold uppercase text-gray-500">
                  Why RealVo Exists
                </p>
                <p className="text-xs sm:text-sm text-gray-700">
                  Transforming lived experiences into insight leaders can see, hear,
                  and act on.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TEXT – RIGHT COLUMN */}
        <div className="lg:col-span-6 order-2">
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-realvo-blue mb-3">
            Why RealVo Exists
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal dark:text-white mb-4 leading-tight">
            Because numbers alone don’t tell the{' '}
            <span
              ref={whyRef}
              className="text-realvo-charcoal dark:text-white animate-pulse-once"
            >
              whole story.
            </span>
          </h2>

          {/* Intro paragraph */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-xl">
            Traditional tools capture metrics and surface comments. RealVo exists to
            help organizations truly understand lived experiences, so decisions about
            programs, culture, and communication are grounded in real human stories.
          </p>

          {/* Problem bullets */}
          <div className="space-y-4 text-sm md:text-base">
            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                Surveys miss the story.
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-300 leading-relaxed">
                They’re good at tracking metrics, but not at capturing emotion,
                nuance, or the “why” behind how people feel and what they need.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                Interviews and filming don’t scale.
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-300 leading-relaxed">
                Scheduling, crews, and cameras are resource-heavy — and often feel
                staged or intimidating for participants, limiting who you actually
                hear from.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                People need a safe way to share.
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-300 leading-relaxed">
                Many will open up when the experience feels guided, private, and on
                their own terms — not like a performance or a formal evaluation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                Leaders need real perspectives to act on.
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-300 leading-relaxed">
                Decisions about culture, student or community experience, and
                communication are stronger when they’re shaped by real voices — not
                just dashboards and reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyRealVoExists;
