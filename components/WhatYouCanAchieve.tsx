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
      "Give people a way to speak up knowing their input is being heard, considered, and taken seriously — with confidence it can lead to real change.",
    icon: ShieldCheck,
  },
  {
    title: "Connect Voices to Meaning",
    description:
      "Bring individual perspectives together around shared values, culture, and purpose — so leaders, teams, and communities align on what matters most.",
    icon: MessageSquare,
  },
  {
    title: "Create Content That Amplifies Meaning",
    description:
      "Use real voices to inspire advocacy, build awareness, and share perspectives with credibility — extending impact well beyond the moment.",
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
      </div>

      {/* Cards (same plane) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {features.map((feature, index) => (
    <div
      key={index}
      className={`
        group
        bg-white dark:bg-gray-900
        p-8 rounded-2xl
        border border-gray-200 dark:border-gray-800
        shadow-sm
        antialiased
        transition-shadow transition-colors duration-200
        hover:shadow-lg
        hover:border-realvo-blue/30 dark:hover:border-realvo-teal/30
      `}
    >
      {/* Icon (REVERSED: static = light, hover = blue/white) */}
      <div
        className={`
          w-14 h-14
          rounded-2xl
          flex items-center justify-center
          bg-realvo-light text-realvo-blue
          dark:bg-gray-800 dark:text-realvo-teal
          transition-colors duration-200
          group-hover:bg-realvo-blue group-hover:text-white
        `}
      >
        <feature.icon size={26} strokeWidth={1.8} />
      </div>

      <h3 className="mt-6 text-lg font-bold text-realvo-charcoal dark:text-white leading-tight">
  {feature.title === 'Make Voices Matter' ? (
    <>
      Make Voices
      <span className="block">Matter</span>
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

