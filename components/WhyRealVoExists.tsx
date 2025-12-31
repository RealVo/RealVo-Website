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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-realvo-charcoal dark:text-white">
  It Starts With{' '}
  <span
    ref={whyRef}
    className="text-realvo-teal animate-pulse-once"
  >
    Real Voices
  </span>
</h2>

          {/* Subline */}
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Understanding comes from human communication — when people are given a natural, private way to speak in their own words.
          </p>
        </div>

        {/* Two-column layout: Organizations (left) / Users (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT COLUMN – ORGANIZATIONS */}
          <div className="space-y-5">
            {/* ✅ Eyebrow pill (moved ABOVE image) */}
            <div className="inline-flex items-center space-x-2 bg-realvo-light dark:bg-gray-800 px-3 py-1.5 rounded-full text-base font-medium text-realvo-blue dark:text-realvo-teal">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-realvo-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-realvo-teal"></span>
              </span>
              <span>Why Traditional Approaches Fall Short</span>
            </div>

            {/* Image card for orgs */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-900 aspect-[4/3]">
              <img
                src="/whyrealvo_fororganizations.jpg"
                alt="Organizations gaining deeper insight through real human voices"
                className="w-full h-full object-cover opacity-85"
              />
            </div>

            {/* Bullets – organization challenges */}
            <div className="space-y-4 text-sm md:text-base">
              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  Metrics capture data — not meaning.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Dashboards and forms are effective for numbers, but they miss emotion, nuance, and the human context behind what people think, feel, and experience.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  Interviews and filming don’t scale.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Scheduling, crews, and cameras are resource-heavy — and often feel staged or intimidating, limiting who participates and how honest they can be.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  Many voices go unheard.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  When participation feels formal, public, or performative, only a small subset of people are willing to speak — and critical perspectives are lost.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  Organizations need human insight to act.
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
            {/* ✅ Eyebrow pill (moved ABOVE image) */}
            <div className="inline-flex items-center space-x-2 bg-realvo-light dark:bg-gray-800 px-3 py-1.5 rounded-full text-base font-medium text-realvo-blue dark:text-realvo-teal">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-realvo-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-realvo-teal"></span>
              </span>
              <span>Why People Open Up</span>
            </div>

            {/* Image card for users */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-900 aspect-[4/3]">
              <img
                src="/whyrealvo_peopleserved.jpg"
                alt="People sharing their experiences in a calm, private recording space"
                className="w-full h-full object-cover opacity-85"
              />
            </div>

            {/* Bullets – why users embrace (explained for orgs) */}
            <div className="space-y-4 text-sm md:text-base">
              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  People speak more freely in private.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Without an interviewer, audience, or camera crew, people share what they wouldn’t say in group settings, meetings, or public forums.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  Guided prompts unlock expression.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Clear, thoughtful questions help people reflect and articulate what matters — in their own way.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  The experience feels natural and pressure-free.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  A simple, intuitive interface removes the pressure of “being recorded” and replaces it with a calm moment of personal reflection.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white">
                  Authenticity comes through in their own words.
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Tone, emotion, pauses, and nuance emerge — revealing stories and perspectives that written responses can’t capture.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Transition Insight Card */}
<div className="mt-20 mb-28 flex justify-center">
  <div
    className="
      relative
      bg-white dark:bg-gray-900
      border border-gray-200 dark:border-gray-800
      rounded-2xl
      px-10 py-8
      shadow-md
      max-w-3xl
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
    meaningful change follows.
  </span>
</p>
</div>
</div>

</div> {/* closes space-y-10 md:space-y-16 */}
</Section>
);
};

export default WhyRealVoExists;


