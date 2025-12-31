import React from 'react';
import Section from './Section';
import {
  BarChart3,
  ShieldCheck,
  MessageSquare,
  Megaphone,
} from 'lucide-react';

const features = [
  {
    title: 'Capture Lived Experiences',
    description:
      'What people share comes through as it’s expressed — with tone, emotion, and perspective intact, revealing meaning that structured inputs and summaries often miss.',
    icon: BarChart3,
  },
  {
    title: 'Make Voices Matter',
    description:
      'Give people a way to speak up knowing their input is being heard, considered, and taken seriously — with confidence it can lead to real change.',
    icon: ShieldCheck,
  },
  {
    title: 'Connect Voices to Meaning',
    description:
      'Bring individual perspectives together around shared values, culture, and purpose — so leaders, teams, and communities align on what matters most.',
    icon: MessageSquare,
  },
  {
    title: 'Create Content That Amplifies Meaning',
    description:
      'Use real voices to inspire advocacy, build awareness, and share perspectives with credibility — extending impact well beyond the moment.',
    icon: Megaphone,
  },
];

const WhatYouCanAchieve: React.FC = () => {
  return (
    <Section className="bg-realvo-light">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-realvo-charcoal">
          <span className="text-realvo-teal">What Changes</span>{' '}
          When People Are Heard
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            {/* Icon */}
            <div
              className="
                w-14 h-14
                rounded-2xl
                flex items-center justify-center
                bg-realvo-light
                text-realvo-blue
                transition-colors duration-200
                group-hover:bg-realvo-teal
                group-hover:text-white
              "
            >
              <feature.icon size={26} strokeWidth={1.8} />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-realvo-charcoal">
              {feature.title}
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhatYouCanAchieve;
