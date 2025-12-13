import React, { useEffect, useRef } from 'react';
import { BarChart3, ShieldCheck, MessageSquare, Megaphone } from 'lucide-react';
import Section from './Section';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Understand people’s experiences",
    description: "Hear tone, emotion, and nuance — the parts of expression that matter most.",
    icon: BarChart3,
  },
  {
    title: "Build trust by giving people a voice",
    description: "Create a safe, professional space for honest stories, feedback, and perspectives.",
    icon: ShieldCheck,
  },
  {
    title: "Strengthen your communication",
    description: "Turn authentic experiences into compelling messages that resonate more than text.",
    icon: MessageSquare,
  },
  {
    title: "Create content that amplifies your mission",
    description: "Use real voices to fuel brand storytelling, inspire advocacy, and expand awareness.",
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
            // restart the pulse animation each time it scrolls into view
            node.classList.remove('animate-pulse-once');
            // force reflow so the browser treats it as a fresh animation
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
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal dark:text-white mb-6">
          What You Can{' '}
          <span
            ref={achieveRef}
            className="text-realvo-blue animate-pulse-once"
          >
            Achieve
          </span>{' '}
          with RealVo
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
          Capture real voices to deepen insights, improve communication, and drive engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="w-14 h-14 bg-realvo-light dark:bg-gray-700 rounded-full flex items-center justify-center text-realvo-blue dark:text-realvo-teal mb-6 group-hover:bg-realvo-blue group-hover:text-white transition-colors duration-300">
              <feature.icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-realvo-charcoal dark:text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhatYouCanAchieve;
