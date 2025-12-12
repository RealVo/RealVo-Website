// src/components/WhyRealVoExists.tsx
import React, { useEffect, useRef } from 'react';
import Section from './Section';

const WhyRealVoExists: React.FC = () => {
  const existsRef = useRef<HTMLSpanElement | null>(null);

  // Re-trigger "Exists" pulse animation when heading comes into view
  useEffect(() => {
    const node = existsRef.current;
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

  return (
    <Section
      id="why-realvo-exists"
      // base background from Section is "white" – this teal override wins
      className="overflow-hidden border-t border-gray-100 bg-realvo-teal/10"
    >
      {/* SECTION HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <p className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-gray-500 mb-3">
          Why RealVo Exists
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-realvo-charcoal dark:text-white leading-tight">
          Why RealVo{' '}
          <span
            ref={existsRef}
            className="text-realvo-blue animate-pulse-once"
          >
            Exists
          </span>
        </h2>
      </div>

      {/* TWO-COLUMN WHY LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* LEFT — FOR ORGANIZATIONS */}
        <div>
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-gray-600 mb-3">
            For Organizations
          </p>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
            Traditional tools capture metrics and surface comments. RealVo helps
            you understand lived experiences, so decisions about programs,
            culture, and communication are grounded in real human stories.
          </p>

          <div className="space-y-4 text-sm md:text-base text-gray-700 dark:text-gray-200">
            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                Surveys miss the story.
              </h3>
              <p className="mt-1 leading-relaxed">
                They’re good at tracking metrics, but not at capturing emotion,
                nuance, or the “why” behind how people feel and what they need.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                Interviews and filming don’t scale.
              </h3>
              <p className="mt-1 leading-relaxed">
                Scheduling, crews, and cameras are resource-heavy — and often
                feel staged or intimidating for participants, limiting who you
                actually hear from.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                People need a way to share that feels right.
              </h3>
              <p className="mt-1 leading-relaxed">
                Many will open up when the experience feels guided, private, and
                on their own terms — not like a performance or a formal
                evaluation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                Leaders need real perspectives to act on.
              </h3>
              <p className="mt-1 leading-relaxed">
                Decisions about culture, experience, and communication are
                stronger when they’re shaped by real voices — not just
                dashboards and reports.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — FOR THE PEOPLE YOU SERVE */}
        <div>
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-gray-600 mb-3">
            For the people you serve
          </p>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
            People share more — and share honestly — when the experience feels
            natural, private, and on their terms.
          </p>

          <div className="space-y-4 text-sm md:text-base text-gray-700 dark:text-gray-200">
            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                People open up in private.
              </h3>
              <p className="mt-1 leading-relaxed">
                Without an interviewer, audience, or camera crew, people share
                what they wouldn’t say in a group setting or formal meeting.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                Guided prompts make expression easy.
              </h3>
              <p className="mt-1 leading-relaxed">
                Clear, thoughtful prompts help people articulate what they feel
                — even if they don’t usually know how to put it into words.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                The experience feels natural and familiar.
              </h3>
              <p className="mt-1 leading-relaxed">
                A simple, intuitive interface removes pressure and replaces
                “performing on camera” with a comfortable moment of reflection.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                Authenticity comes through in their own words.
              </h3>
              <p className="mt-1 leading-relaxed">
                Real tone, emotion, and nuance emerge — giving you the depth
                that surveys and text responses can’t capture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CLOSING SENTENCE */}
      <div className="mt-10 md:mt-12 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
          When you remove those barriers and start hearing real voices, RealVo
          turns that honesty into outcomes you can actually act on.
        </p>
      </div>
    </Section>
  );
};

export default WhyRealVoExists;
