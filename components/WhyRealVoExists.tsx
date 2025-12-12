// src/components/WhyRealVoExists.tsx
import React, { useEffect, useRef } from 'react';
import { BarChart3, Video, Shield, Users } from 'lucide-react';
import Section from './Section';

const WhyRealVoExists: React.FC = () => {
  const whyRef = useRef<HTMLSpanElement | null>(null);

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
      background="light"
      className="overflow-hidden border-t border-gray-100"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* LEFT — IMAGE */}
<div className="lg:col-span-6 order-1">
  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900 aspect-[4/5] max-w-xl mx-auto lg:mx-0">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
      alt="Team reviewing video insights"
      className="w-full h-full object-cover opacity-80"
    />

    {/* Small caption card */}
    <div className="absolute bottom-6 left-6">
      <div className="bg-white/90 backdrop-blur-md rounded-xl px-5 py-4 shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Why RealVo Exists
        </p>
        <p className="text-xs text-gray-700">
          Transforming lived experiences into insight leaders can see, hear, and act on.
        </p>
      </div>
    </div>
  </div>
</div>

        {/* RIGHT — TEXT */}
        <div className="lg:col-span-6 order-2">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal dark:text-white mb-4 leading-tight">
            Because numbers alone don’t tell the{' '}
            <span
              ref={whyRef}
              className="text-realvo-blue animate-pulse-once"
            >
              whole story.
            </span>
          </h2>

          {/* Intro Paragraph */}
<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-2xl">
  Traditional tools capture metrics and surface comments. RealVo exists to help organizations truly
  understand lived experiences, so decisions about programs, culture, and communication are grounded
  in real human stories.
</p>

          {/* BULLETS */}
          <div className="space-y-6">

            {/* 1 — Surveys miss the story */}
            <div className="flex items-start gap-4">
              <div
                className="
                  flex-none shrink-0
                  w-8 h-8
                  rounded-full
                  bg-[#2AB8B0]/50
                  flex items-center justify-center
                  text-white
                  transition-colors duration-200
                  hover:bg-realvo-blue
                "
              >
                <BarChart3 size={16} strokeWidth={2} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white mb-1">
                  Surveys miss the story.
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  They’re good at tracking metrics, but not at capturing emotion, nuance, or the “why” behind how people feel and what they need.
                </p>
              </div>
            </div>

            {/* 2 — Interviews and filming don’t scale */}
            <div className="flex items-start gap-4">
              <div
                className="
                  flex-none shrink-0
                  w-8 h-8
                  rounded-full
                  bg-[#2AB8B0]/50
                  flex items-center justify-center
                  text-white
                  transition-colors duration-200
                  hover:bg-realvo-blue
                "
              >
                <Video size={16} strokeWidth={2} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white mb-1">
                  Interviews and filming don’t scale.
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Scheduling, crews, and cameras are resource-heavy — and often feel staged or intimidating for participants, limiting who you actually hear from.
                </p>
              </div>
            </div>

            {/* 3 — People need a safe way to share */}
            <div className="flex items-start gap-4">
              <div
                className="
                  flex-none shrink-0
                  w-8 h-8
                  rounded-full
                  bg-[#2AB8B0]/50
                  flex items-center justify-center
                  text-white
                  transition-colors duration-200
                  hover:bg-realvo-blue
                "
              >
                <Shield size={16} strokeWidth={2} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white mb-1">
                  People need a safe way to share.
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Many will open up when the experience feels guided, private, and on their own terms — not like a performance or a formal evaluation.
                </p>
              </div>
            </div>

            {/* 4 — Leaders need real perspectives */}
            <div className="flex items-start gap-4">
              <div
                className="
                  flex-none shrink-0
                  w-8 h-8
                  rounded-full
                  bg-[#2AB8B0]/50
                  flex items-center justify-center
                  text-white
                  transition-colors duration-200
                  hover:bg-realvo-blue
                "
              >
                <Users size={16} strokeWidth={2} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-realvo-charcoal dark:text-white mb-1">
                  Leaders need real perspectives to act on.
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                  Decisions about culture, student or community experience, and communication are stronger when they’re shaped by real voices — not just dashboards and reports.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Section>
  );
};

export default WhyRealVoExists;
