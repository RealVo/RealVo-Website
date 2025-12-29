import React, { useEffect, useRef } from 'react';
import { BarChart3, ShieldCheck, MessageSquare, Megaphone } from 'lucide-react';
import Section from './Section';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Understand people’s experiences",
    description:
      "Hear tone, emotion, and nuance — the human context that forms and dashboards can’t capture.",
    icon: BarChart3,
  },
  {
    title: "Build trust by giving people a voice",
    description:
      "Create a safe, professional space for honest stories, perspectives, and reflection.",
    icon: ShieldCheck,
  },
  {
    title: "Strengthen your communication",
    description:
      "Turn authentic experiences into clearer messages — for leaders, teams, and the people you serve.",
    icon: MessageSquare,
  },
  {
    title: "Create content that carries meaning",
    description:
      "Use real voices to inspire advocacy, build awareness, and support storytelling with credibility.",
    icon: Megaphone,
  },
];

const WhatYouCanAchieve: React.FC = () => {
  const achieveRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = achieveRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
    <Section id="why-realvo" background="teal">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-realvo-charcoal dark:text-white">
          What Changes When{' '}
          <span ref={achieveRef} className="text-realvo-teal animate-pulse-once">
            People Are Heard
          </span>
        </h2>

        {/* Optional subline (kept neutral, no “RealVo”) */}
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Capture authentic voices — then turn those experiences into insight, trust, and action.
        </p>
      </div>

      {/* Cards (same plane) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="
              group
              bg-white dark:bg-gray-900
              p-8 rounded-2xl
              border border-gray-200 dark:border-gray-800
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl
              hover:border-realvo-blue/30 dark:hover:border-realvo-teal/30
            "
          >
            {/* Icon */}
            <div
              className="
                w-14 h-14
                rounded-2xl
                bg-realvo-light dark:bg-gray-800
                flex items-center justify-center
                text-realvo-blue dark:text-realvo-teal
                transition-transform duration-300
                group-hover:-translate-y-0.5 group-hover:scale-105
              "
            >
              <feature.icon size={26} strokeWidth={1.6} />
            </div>

            <h3 className="mt-6 text-lg font-bold text-realvo-charcoal dark:text-white">
              {feature.title}
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhatYouCanAchieve;
