import React, { useEffect, useRef } from 'react';
import { BarChart3, ShieldCheck, MessageSquare, Megaphone } from 'lucide-react';
import Section from './Section';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Understand people’s experiences",
    description:
      "Hear tone, emotion, and nuance — the parts of expression that matter most.",
    icon: BarChart3,
  },
  {
    title: "Build trust by giving people a voice",
    description:
      "Create a safe, professional space for honest stories, perspectives, and input.",
    icon: ShieldCheck,
  },
  {
    title: "Strengthen your communication",
    description:
      "Turn authentic experiences into clearer messaging that resonates beyond text.",
    icon: MessageSquare,
  },
  {
    title: "Create content that carries meaning",
    description:
      "Use real voices to inspire advocacy, build awareness, and support storytelling.",
    icon: Megaphone,
  },
];

const WhatYouCanAchieve: React.FC = () => {
  const achieveRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = achieveRef.current;
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
    <Section id="what-you-can-achieve" background="light">
      <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-realvo-charcoal dark:text-white mb-4">
          What Changes When{' '}
          <span ref={achieveRef} className="text-realvo-teal animate-pulse-once">
            People Are Heard
          </span>
        </h2>

        {/* Optional subline (no “RealVo”) — delete if you don’t want it */}
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Capture authentic voices — then turn those experiences into insight, trust, and action.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          // subtle stagger on desktop only (keeps it structured)
          const stagger =
            index % 2 === 0 ? 'xl:translate-y-0' : 'xl:translate-y-4';

          return (
            <div
              key={index}
              className={`
                group relative overflow-hidden
                bg-white/90 dark:bg-gray-900/70
                rounded-2xl
                border border-gray-200/80 dark:border-gray-800/80
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                ${stagger}
              `}
            >
              {/* soft highlight wash */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-realvo-light/80 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-7">
                {/* icon + title row */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="
                      w-14 h-14 rounded-2xl
                      bg-realvo-light dark:bg-gray-800
                      border border-gray-200 dark:border-gray-700
                      flex items-center justify-center
                      text-realvo-teal
                      shadow-sm
                      transition-colors duration-300
                      group-hover:bg-realvo-blue group-hover:text-white
                    "
                  >
                    <Icon size={26} strokeWidth={1.6} />
                  </div>

                  <div className="pt-1">
                    <h3 className="text-lg font-bold tracking-tight text-realvo-charcoal dark:text-white leading-snug">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* bottom accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-realvo-teal/40 via-realvo-blue/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default WhatYouCanAchieve;


