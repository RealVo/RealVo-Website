// src/components/WhyRealVoExists.tsx

import React from 'react';
import Section from './Section';

const WhyRealVoExists: React.FC = () => {
  return (
    <Section
      id="why-realvo-exists"
      className="py-12 md:py-16 border-t border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow / label */}
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-realvo-blue dark:text-realvo-teal mb-3">
          Why RealVo exists
        </p>

        {/* Heading + intro */}
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-realvo-charcoal dark:text-white">
            Because numbers alone don’t tell the whole story.
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl">
            Traditional tools capture metrics and surface comments. RealVo exists to help organizations
            truly understand lived experiences, so decisions about programs, culture, and communication
            are grounded in real human stories.
          </p>
        </div>

        {/* Problem bullets */}
        <div className="grid gap-4 md:gap-5">
          <div>
            <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal dark:text-white">
              Surveys miss the story.
            </h3>
            <p className="mt-1 text-sm md:text-base text-gray-600 dark:text-gray-300">
              They’re good at tracking metrics, but not at capturing emotion, nuance, or the “why”
              behind how people feel and what they need.
            </p>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal dark:text-white">
              Interviews and filming don’t scale.
            </h3>
            <p className="mt-1 text-sm md:text-base text-gray-600 dark:text-gray-300">
              Scheduling, crews, and cameras are resource-heavy — and often feel staged or intimidating
              for participants, limiting who you actually hear from.
            </p>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal dark:text-white">
              People need a safe way to share.
            </h3>
            <p className="mt-1 text-sm md:text-base text-gray-600 dark:text-gray-300">
              Many will open up when the experience feels guided, private, and on their own terms — not
              like a performance or a formal evaluation.
            </p>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal dark:text-white">
              Leaders need real perspectives to act on.
            </h3>
            <p className="mt-1 text-sm md:text-base text-gray-600 dark:text-gray-300">
              Decisions about culture, student or community experience, and communication are stronger
              when they’re shaped by real voices — not just dashboards and reports.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyRealVoExists;

