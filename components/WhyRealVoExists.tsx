// src/components/WhyRealVoExists.tsx
import React, { useEffect, useRef } from 'react';
import { BarChart3, Video, Shield, Users } from 'lucide-react';
import Section from './Section';

const WhyRealVoExists: React.FC = () => {
  const existsRef = useRef<HTMLSpanElement | null>(null);

  // Re-trigger pulse on "Exists" when section comes into view
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
      background="light"
      className="border-t border-gray-100"
    >
      {/* Section heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal dark:text-white leading-tight">
          Why RealVo{' '}
          <span
            ref={existsRef}
            className="text-realvo-blue animate-pulse-once"
          >
            Exists
          </span>
        </h2>
      </div>

      {/* Two-column WHY grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* LEFT – FOR ORGANIZATIONS */}
        <div>
          <p className="text-xs md:text-sm font-semibold tracking-[0.22em] uppercase text-gray-600 mb-3">
            For organizations
          </p>

          {/* Trimmed org subline */}
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-md">
            Traditional tools capture metrics and comments. RealVo turns lived
            experiences into the human insight behind your programs, culture,
            and communication.
          </p>

          <div className="space-y-5 text-sm md:text-base">
            {/* 1 – Surveys miss the story */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#2AB8B0]/40 text-realvo-blue transition-colors duration-200">
                <BarChart3 size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                  Surveys miss the story.
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  They’re good at tracking metrics, but not at capturing
                  emotion, nuance, or the “why” behind how people feel and what
                  they need.
                </p>
              </div>
            </div>

            {/* 2 – Interviews and filming don’t scale */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#2AB8B0]/40 text-realvo-blue transition-colors duration-200">
                <Video size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                  Interviews and filming don’t scale.
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Crews, cameras, and schedules are resource-heavy and often
                  feel staged or intimidating, limiting who you actually hear
                  from.
                </p>
              </div>
            </div>

            {/* 3 – People need a way to share */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#2AB8B0]/40 text-realvo-blue transition-colors duration-200">
                <Shield size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                  People need a way to share that feels right.
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Many will open up when the experience feels guided, private,
                  and on their own terms — not like a performance or a formal
                  evaluation.
                </p>
              </div>
            </div>

            {/* 4 – Leaders need real perspectives */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#2AB8B0]/40 text-realvo-blue transition-colors duration-200">
                <Users size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                  Leaders need real perspectives to act on.
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Decisions about culture, experience, and communication are
                  stronger when they’re shaped by real voices — not just
                  dashboards and reports.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT – FOR THE PEOPLE YOU SERVE */}
        <div>
          <p className="text-xs md:text-sm font-semibold tracking-[0.22em] uppercase text-gray-600 mb-3">
            For the people you serve
          </p>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-md">
            People share more — and share honestly — when the experience feels
            natural, private, and on their terms.
          </p>

          <div className="space-y-5 text-sm md:text-base">
            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                People open up in private.
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Without an interviewer, audience, or camera crew, people share
                what they wouldn’t say in a group setting or formal meeting.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                Guided prompts make expression easy.
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Clear, thoughtful prompts help people articulate what they feel
                — even if they don’t usually know how to put it into words.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                The experience feels natural and familiar.
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                A simple, intuitive interface removes pressure and replaces
                “performing on camera” with a comfortable moment of reflection.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-realvo-charcoal dark:text-white">
                Authenticity comes through in their own words.
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Real tone, emotion, and nuance emerge — giving you the depth
                that surveys and text responses can’t capture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing line – match subline style from Achieve */}
      <p className="mt-12 text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-center">
        When you remove those barriers and start hearing real voices, RealVo
        turns that honesty into outcomes you can actually act on.
      </p>
    </Section>
  );
};

export default WhyRealVoExists;
