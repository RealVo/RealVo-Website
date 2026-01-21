// src/components/WhyRealVoExists.tsx
import React, { useEffect, useRef } from 'react';
import Section from './Section';

const WhyRealVoExists: React.FC = () => {
  const whyRef = useRef<HTMLSpanElement | null>(null);

  // Re-trigger pulse animation when the phrase scrolls into view
  useEffect(() => {
    const node = whyRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.remove('animate-pulse-once');
            void node.offsetWidth; // force reflow
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
      background="white"
      className="bg-white overflow-hidden border-t border-gray-100"
    >
      <div className="space-y-10 md:space-y-16">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-realvo-charcoal dark:text-white">
            Why So Many{' '}
            <span ref={whyRef} className="text-realvo-teal animate-pulse-once">
              Voices Go Unheard
            </span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Understanding comes from human communication — but it often breaks down when people
            aren’t given a natural, private way to speak in their own words.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-6xl">
          {/* Keep pill tight to grid; add extra gap only before insight */}
          <div className="space-y-4 md:space-y-6">
            {/* Pill */}
            <div className="inline-flex items-center space-x-2 bg-realvo-light dark:bg-gray-800 px-3 py-1.5 rounded-full text-base font-medium text-realvo-blue dark:text-realvo-teal">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-realvo-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-realvo-teal" />
              </span>
              <span>Traditional Approaches Fall Short</span>
            </div>

            {/* Two-column: image left, text right (equal height driven by text) */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-14 items-stretch">
              {/* LEFT: Image */}
              <div className="lg:col-span-2 h-full min-h-0">
                <div className="h-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white">
                  <img
                    src="/why_realvo_exists/lone_chair_ghost_original_cropped_v2.png"
                    alt="A quiet seat in the foreground with a conversation happening in the background"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* RIGHT: Text */}
              <div className="lg:col-span-3 min-w-0 h-full min-h-0">
                <div className="h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                  <div className="h-full p-7 md:p-8">
                    <div className="space-y-6">
                      <div className="min-w-0">
                        <h4 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                          Metrics capture data — not meaning.
                        </h4>
                        <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                          Dashboards and forms are effective for numbers, but they miss emotion, nuance,
                          and the human context behind what people think, feel, and experience.
                        </p>
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                          Interviews and filming don’t scale.
                        </h4>
                        <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                          Scheduling, crews, and cameras are resource-heavy — and often feel staged or
                          intimidating, limiting who participates and how honest they can be.
                        </p>
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                          Participation favors the confident.
                        </h4>
                        <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                          When participation feels formal, public, or performative, only a small subset of
                          people are willing to speak — and critical perspectives are lost.
                        </p>
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                          Organizations need human insight to act.
                        </h4>
                        <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                          Decisions about culture, experience, and communication are stronger when they’re
                          shaped by real voices — not just dashboards and reports.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gap only between grid and insight */}
            <div className="pt-10 md:pt-12 lg:pt-16">
              {/* ✅ Transition Insight Card (LOCKED) */}
              <div className="flex justify-center">
                <div
                  className="
                    relative
                    bg-white dark:bg-gray-900
                    border border-gray-200 dark:border-gray-800
                    rounded-2xl
                    px-10 py-8
                    shadow-md
                    max-w-3xl
                    w-full
                    text-center
                  "
                >
                  {/* Icon badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div
                      className="
                        bg-realvo-light dark:bg-gray-800
                        p-4
                        rounded-full
                        shadow-md
                        border border-gray-200 dark:border-gray-700
                        flex items-center justify-center
                      "
                    >
                      <svg
                        className="
                          w-7 h-7
                          text-realvo-teal
                          drop-shadow-[0_3px_8px_rgba(80,180,170,0.45)]
                        "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>

                  <p className="mt-4 text-2xl md:text-3xl font-semibold leading-snug tracking-tight">
                    <span className="block text-gray-500 dark:text-gray-400">
                      When people are truly heard
                      <span className="hidden md:inline">,</span>
                    </span>

                    <span className="block md:hidden" />

                    <span className="block mt-1 text-realvo-charcoal dark:text-white font-bold">
                      meaningful change becomes possible.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* /Gap */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyRealVoExists;
