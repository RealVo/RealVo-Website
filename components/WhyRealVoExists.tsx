// src/components/WhyRealVoExists.tsx
import React, { useEffect, useRef } from 'react';
import Section from './Section';

const WhyRealVoExists: React.FC = () => {
  const whyRef = useRef<HTMLSpanElement | null>(null);

  // Re-trigger pulse animation when "whole story." comes into view
  useEffect(() => {
    const node = whyRef.current;
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* VISUAL – LEFT COLUMN */}
        <div className="lg:col-span-6 order-1">
          <div className="relative">
            {/* Portrait image card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700 bg-gray-900 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Team reviewing video insights on laptops"
                className="w-full h-full object-cover opacity-85"
              />
              {/* Soft gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            </div>

            {/* Floating pill styled like the Hero "Insight Captured" pill */}
            <div className="absolute -bottom-6 -left-2 sm:-left-4 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 sm:gap-4 max-w-xs">
              <div className="bg-green-100 dark:bg-green-900/30 p-1.5 sm:p-2 rounded-full text-green-600 dark:text-green-400">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-xs sm:text-sm text-realvo-charcoal dark:text-white">
                  Why RealVo Exists
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-300">
                  Transforming lived experiences into insight leaders can see,
                  hear, and act on.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TEXT – RIGHT COLUMN */}
        <div className="lg:col-span-6 order-2">
          {/* Heading (eyebrow removed to avoid repetition) */}
          <h2 className="text-3xl md:text-4xl font-semibold text-realvo-charcoal dark:text-white leading-tight mb-4">
            Because numbers alone don’t tell the{' '}
            <span
              ref={whyRef}
              className="text-realvo-charcoal dark:text-white animate-pulse-once"
            >
              whole story.
            </span>
          </h2>

          {/* Intro paragraph */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-6">
            Traditional tools capture metrics and surface comments. RealVo exists to
            help organizations truly understand lived experiences, so decisions about
            programs, culture, and communication are grounded in real human stories.
          </p>

          {/* Problem bullets */}
          <div className="space-y-5 text-sm md:text-base">
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
