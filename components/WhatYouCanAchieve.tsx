import React, { useEffect, useRef } from 'react';
import { BarChart3, ShieldCheck, MessageSquare, Megaphone } from 'lucide-react';
import Section from './Section';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Capture Lived Experiences",
    description:
      "What people share comes through as it’s expressed — with tone, emotion, and perspective intact, revealing meaning that structured inputs and summaries often miss.",
    icon: BarChart3,
  },
  {
    // ✅ singular to match your desired display: “Make Voice / Matter”
    title: "Make Voice Matter",
    description:
      "Give people a way to speak up knowing their input is being heard, considered, and taken seriously — with the confidence that participation can lead to real change.",
    icon: ShieldCheck,
  },
  {
    title: "Connect Voices to Meaning",
    description:
      "Bring individual perspectives together around shared values, culture, and purpose — helping leaders, teams, and communities understand what truly matters most.",
    icon: MessageSquare,
  },
  {
    title: "Create Content That Amplifies Meaning",
    description:
      "Use real voices to inspire advocacy, build awareness, and share perspectives with authenticity and credibility — extending impact beyond the moment.",
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
          <span ref={achieveRef} className="text-realvo-teal animate-pulse-once">
            What Changes
          </span>{' '}
          When People Are Heard
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

            {/* Title */}
            <h3 className="mt-6 text-lg font-bold text-realvo-charcoal dark:text-white leading-tight">
              {feature.title === 'Make Voice Matter' ? (
                <>
                  Make Voice <span className="block">Matter</span>
                </>
              ) : (
                feature.title
              )}
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

