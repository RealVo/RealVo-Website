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
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && node) {
            node.classList.remove('animate-pulse-once');
            // force reflow so the browser treats it as a new animation
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
      background="white"
      className="bg-white overflow-hidden border-t border-gray-100"
    >
      <div className="space-y-10 md:space-y-16">
        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal dark:text-white leading-tight">
            Why RealVo{' '}
            <span ref={whyRef} className="text-realvo-blue animate-pulse-once">
              Exists
            </span>
          </h2>
        </div>

        {/* Two-column layout: Organizations (left) / Users (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT COLUMN – ORGANIZATIONS */}
          <div className="space-y-5">
            {/* Image card for orgs */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-900 aspect-[4/3]">
              <img
                src="/whyrealvo_fororganizations.jpg"
                alt="Organizations gaining deeper insight through real human voices"
                className="w-full h-full object-cover opacity-85"
              />
            </div>

            {/* Eyebrow pill */}
            <div className="inline-flex items-center space-x-2 bg-realvo-light dark:bg-gray-800 px-3 py-1.5 rounded-full text-base font-medium text-realvo-blue dark:text-realvo-teal">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-realvo-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-realvo-teal"></span>
              </span>
              <span>For Organizations</span>
            </div>

            {/* Intro copy */}
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Traditional tools capture metrics — RealVo captures human communication in a way that drives attention, empathy, and action.
            </p>

            {/* Bullets – organization challenges */}
            <div className="space-y-4 text-sm md:text-base">
              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  Surveys miss the story.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  They’re good at tracking metrics, but not at capturing emotion, nuance, or
                  the “why” behind how people feel and what they need.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  Interviews and filming don’t scale.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Scheduling, crews, and cameras are resource-heavy — and often feel staged
                  or intimidating for participants, limiting who you actually hear from.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  People need a way to share that feels right.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Many will open up when the experience feels guided, private, and on their
                  own terms — not like a performance or a formal evaluation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  Leaders need real perspectives to act on.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Decisions about culture, experience, and communication are stronger when
                  they’re shaped by real voices — not just dashboards and reports.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – USERS */}
          <div className="space-y-5">
            {/* Image card for users */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-900 aspect-[4/3]">
              <img
                src="whyrealvo_peopleserved.jpg"
                alt="People sharing their experiences in a calm, private recording space"
                className="w-full h-full object-cover opacity-85"
              />
            </div>

            {/* Eyebrow pill */}
            <div className="inline-flex items-center space-x-2 bg-realvo-light dark:bg-gray-800 px-3 py-1.5 rounded-full text-base font-medium text-realvo-blue dark:text-realvo-teal">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-realvo-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-realvo-teal"></span>
              </span>
              <span>For the People You Serve</span>
            </div>

            {/* User subline */}
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              People share more — and share honestly — when the experience feels natural,
              private, and on their terms.
            </p>

            {/* Bullets – why users embrace RealVo (explained for orgs) */}
            <div className="space-y-4 text-sm md:text-base">
              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  People open up in private.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Without an interviewer, audience, or camera crew, people share what they
                  wouldn’t say in a group setting or formal meeting.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  Guided prompts make expression easy.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Clear, thoughtful prompts help people articulate what they feel — even if
                  they don’t usually know how to put it into words.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  The experience feels natural and familiar.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Speaking to a simple, intuitive interface removes pressure and replaces
                  “performing on camera” with a comfortable moment of reflection.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  Authenticity comes through in their own words.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Real tone, emotion, and nuance emerge — giving you the depth that surveys
                  and text responses can’t capture.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Transition into "What You Can Achieve" */}
        <p className="mt-6 md:mt-8 text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
          When you remove those barriers and start hearing real voices, RealVo turns
          that honesty into outcomes you can actually act on.
        </p>
      </div>
    </Section>
  );
};

export default WhyRealVoExists;
