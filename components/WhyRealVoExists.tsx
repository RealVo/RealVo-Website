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
      className="border-t border-gray-100 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* VISUAL – LEFT COLUMN (desktop) */}
        <div className="lg:col-span-6 order-1">
          <div className="relative">
            <div className="relative rounded-2xl bg-gray-900 p-3 shadow-2xl border border-gray-200/80">
              {/* Browser bar */}
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2 mb-[-1px]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-gray-900/60 text-gray-400 text-[11px] py-1 px-4 rounded-md inline-block">
                    Real voices in action
                  </div>
                </div>
              </div>

              {/* “Insight vs numbers” mock */}
              <div className="bg-white dark:bg-gray-800 rounded-b-xl px-6 py-6 space-y-5">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                      Feedback view
                    </p>
                    <h4 className="text-lg font-bold text-realvo-charcoal">
                      Leadership Development Program
                    </h4>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">NPS score</p>
                    <p className="text-2xl font-bold text-realvo-blue">78</p>
                  </div>
                </div>

                {/* Two-column contrast: number vs story */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                      Metric snapshot
                    </p>
                    <div className="space-y-2">
                      <div className="h-2.5 bg-gray-200 rounded w-5/6" />
                      <div className="h-2 bg-gray-200 rounded w-2/3" />
                      <div className="h-2 bg-gray-200 rounded w-4/5" />
                    </div>
                  </div>

                  <div className="bg-realvo-blue/5 rounded-xl p-4 border border-realvo-blue/15">
                    <p className="text-xs font-semibold text-realvo-blue uppercase mb-2">
                      RealVo reflection
                    </p>
                    <div className="space-y-2">
                      <div className="h-2.5 bg-realvo-blue/20 rounded w-11/12" />
                      <div className="h-2.5 bg-realvo-blue/10 rounded w-10/12" />
                      <div className="h-2.5 bg-realvo-blue/10 rounded w-9/12" />
                    </div>
                    <p className="mt-3 text-xs text-gray-500">
                      “This program changed how I show up for my team…”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating label */}
            <div className="absolute -bottom-5 -right-4 bg-white shadow-lg border border-gray-100 rounded-xl px-4 py-3 text-xs text-gray-600 max-w-[210px]">
              <p className="font-semibold text-realvo-charcoal">
                Beyond dashboards
              </p>
              <p>Pair the numbers with real, human context.</p>
            </div>
          </div>
        </div>

        {/* COPY – RIGHT COLUMN */}
        <div className="lg:col-span-6 order-2">
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-realvo-blue mb-3">
            Why RealVo exists
          </p>

          {/* Heading + animated phrase */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-realvo-charcoal mb-4">
            Because numbers alone{' '}
            <span
              ref={whyRef}
              className="text-realvo-blue animate-pulse-once"
            >
              don’t tell the whole story.
            </span>
          </h2>

          {/* Intro paragraph */}
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            Traditional tools capture metrics and surface comments. RealVo exists
            to help organizations truly understand lived experiences, so
            decisions about programs, culture, and communication are grounded in
            real human stories.
          </p>

          {/* Problem bullets */}
          <div className="space-y-5 max-w-xl">
            <div>
              <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal">
                Surveys miss the story.
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                They’re good at tracking metrics, but not at capturing emotion,
                nuance, or the “why” behind how people feel and what they need.
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal">
                Interviews and filming don’t scale.
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Scheduling crews and cameras is resource-heavy, and can feel
                staged or intimidating for participants, limiting who you
                actually hear from.
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal">
                People need a safe way to share.
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Many will open up when the experience feels guided, private, and
                on their own terms — not like a performance or a formal
                evaluation.
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-base font-semibold text-realvo-charcoal">
                Leaders need real perspectives to act on.
              </h3>
              <p className="mt-1 text-sm text-gray-600">
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
