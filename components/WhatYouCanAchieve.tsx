import React from 'react';
import { Ear, ShieldCheck, MessageSquare, BarChart3 } from 'lucide-react';
import Section from './Section';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Hear Missing Voices",
    description: "Stories that data alone can't surface. Capture the nuance and emotion behind the numbers.",
    icon: Ear,
  },
  {
    title: "Build Trust Through Transparency",
    description: "Make people feel valued and heard by giving them a safe, professional platform to speak.",
    icon: ShieldCheck,
  },
  {
    title: "Strengthen Communication",
    description: "Support culture and leadership with authentic storytelling assets that resonate deeper than text.",
    icon: MessageSquare,
  },
  {
    title: "Inform Better Decisions",
    description: "Real human experiences reveal key patterns that inform strategy, policy, and program improvements.",
    icon: BarChart3,
  },
];

const WhatYouCanAchieve: React.FC = () => {
  return (
    <Section id="why-realvo">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal dark:text-white mb-6">
          What You Can Achieve with RealVo
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Gather authentic perspectives to drive insights, enhance communication, and support marketing efforts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-8 rounded-brand border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
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