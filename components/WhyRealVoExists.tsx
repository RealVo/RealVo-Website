// src/components/WhyRealVoExists.tsx
import React from 'react';
import Section from './Section';

const WhyRealVoExists: React.FC = () => {
  return (
    <Section
      id="why-realvo-exists"
      background="white"
      padding="xl"
      className="border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* LEFT: IMAGE / VISUAL */}
        <div className="md:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
              alt="Team watching and discussing stories"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 bg-white/85 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-realvo-blue mb-1">
                Why RealVo exists
              </p>
              <p className="text-xs text-gray-600">
                Transforming lived experiences into insight leaders can see,
                hear, and act on.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: COPY */}
        <div className="md:col-span-7">
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-realvo-blue dark:text-realvo-teal mb-3">
            Why RealVo exists
          </p>

          {/* Heading + intro */}
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-realvo-charcoal dark:text-white">
              Because numbers alone don’t tell the whole story.
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              Traditional tools capture metrics and surface comments. RealVo
              exists to help organizations truly understand lived experiences,
              so decisions about programs, culture, and communication are
              grounded in real human stories.
            </p>
          </div>

          {/* Problems list – single column for clarity */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal dark:text-white">
                Surveys miss the story.
              </h3>
              <p className="mt-1 text-sm md:text-[0.95rem] text-gray-600 dark:text-gray-300">
                They’re good at tracking metrics, but not at capturing emotion,
                nuance, or the “why” behind how people feel and what they need.
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal dark:text-white">
                Interviews and filming don’t scale.
              </h3>
              <p className="mt-1 text-sm md:text-[0.95rem] text-gray-600 dark:text-gray-300">
                Scheduling, crews, and cameras are resource-heavy — and often
                feel staged or intimidating for participants, limiting who you
                actually hear from.
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal dark:text-white">
                People need a safe way to share.
              </h3>
              <p className="mt-1 text-sm md:text-[0.95rem] text-gray-600 dark:text-gray-300">
                Many will open up when the experience feels guided, private, and
                on their own terms — not like a performance or a formal
                evaluation.
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal dark:text-white">
                Leaders need real perspectives to act on.
              </h3>
              <p className="mt-1 text-sm md:text-[0.95rem] text-gray-600 dark:text-gray-300">
                Decisions about culture, student or community experience, and
                communication are stronger when they’re shaped by real voices —
                not just dashboards and reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyRealVoExists;
