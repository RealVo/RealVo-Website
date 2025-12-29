// src/components/WhatYouCanAchieve.tsx
import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';
import {
  BarChart3,
  ShieldCheck,
  MessageSquareText,
  Megaphone,
  ChevronRight,
} from 'lucide-react';

type AchieveItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const WhatYouCanAchieve: React.FC = () => {
  const headlineRef = useRef<HTMLSpanElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  // Re-trigger pulse animation when section comes into view
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true);
            // re-trigger the pulse class on the span
            if (headlineRef.current) {
              headlineRef.current.classList.remove('animate-pulse-once');
              void headlineRef.current.offsetWidth;
              headlineRef.current.classList.add('animate-pulse-once');
            }
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const items: AchieveItem[] = [
    {
      title: 'Deepen understanding',
      description:
        'Hear tone, emotion, and nuance — the human context that surveys, dashboards, and forms can’t capture.',
      icon: <BarChart3 className="h-7 w-7" />,
    },
    {
      title: 'Build trust at scale',
      description:
        'Create space for honest expression without pressure, performance, or the friction of traditional interviews.',
      icon: <ShieldCheck className="h-7 w-7" />,
    },
    {
      title: 'Strengthen communication',
      description:
        'Turn authentic experiences into clearer messaging — for leaders, teams, stakeholders, and the people you serve.',
      icon: <MessageSquareText className="h-7 w-7" />,
    },
    {
      title: 'Create content that carries meaning',
      description:
        'Use real voices to inspire advocacy, build awareness, and support storytelling with credibility and depth.',
      icon: <Megaphone className="h-7 w-7" />,
    },
  ];

  return (
    <Section id="what-you-can-achieve" background="light">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-realvo-charcoal dark:text-white">
            What Changes When{' '}
            <span
              ref={headlineRef}
              className={inView ? 'text-realvo-blue animate-pulse-once' : 'text-realvo-blue'}
            >
              People Are Heard
            </span>
          </h2>

          {/* Subline (recommended) */}
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            RealVo helps organizations capture authentic voices — then turn those experiences into
            insight, trust, and action.
          </p>
        </div>

        {/* Staggered rows */}
        <div className="space-y-10 md:space-y-14">
          {items.map((item, idx) => {
            const isRight = idx % 2 === 1;

            return (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center ${
                  isRight ? '' : ''
                }`}
              >
                {/* Icon block */}
                <div
                  className={`md:col-span-5 ${
                    isRight ? 'md:order-2 md:col-start-8' : 'md:order-1'
                  }`}
                >
                  <div className="flex md:justify-center">
                    <div
                      className="
                        relative
                        w-full
                        max-w-md
                        rounded-3xl
                        border border-gray-200 dark:border-gray-800
                        bg-white/80 dark:bg-gray-900/70
                        shadow-sm
                        px-8 py-8
                      "
                    >
                      {/* soft halo */}
                      <div
                        className="
                          absolute -top-6 -left-6
                          h-24 w-24 rounded-full
                          bg-realvo-light dark:bg-gray-800
                          blur-xl
                          opacity-70
                        "
                      />

                      <div className="relative flex items-center gap-4">
                        <div
                          className="
                            shrink-0
                            rounded-2xl
                            bg-realvo-light dark:bg-gray-800
                            border border-gray-200 dark:border-gray-700
                            p-4
                            text-realvo-teal
                            shadow-sm
                          "
                          aria-hidden="true"
                        >
                          {item.icon}
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            Outcome {idx + 1}
                          </p>
                          <p className="mt-1 text-lg font-bold text-realvo-charcoal dark:text-white leading-snug">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Copy block */}
                <div
                  className={`md:col-span-7 ${
                    isRight ? 'md:order-1 md:col-start-1' : 'md:order-2'
                  }`}
                >
                  <div className="rounded-2xl md:rounded-3xl">
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-realvo-blue">
                      Learn more <ChevronRight className="h-4 w-4" />
                    </div>

                    <div className="mt-6 h-px w-full bg-gray-200/70 dark:bg-gray-800/70 md:hidden" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default WhatYouCanAchieve;

