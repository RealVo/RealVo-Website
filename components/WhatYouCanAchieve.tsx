import React from 'react';
import Section from './Section';
import { BarChart2, Users, MessageSquare, Megaphone } from 'lucide-react';

interface Outcome {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const outcomes: Outcome[] = [
  {
    title: 'Hear the real voices behind your data',
    description:
      'Understand what people actually feel — not just what they select in a survey.',
    icon: <BarChart2 className="h-5 w-5 text-realvo-blue" />,
  },
  {
    title: 'Build trust by giving people a voice',
    description:
      'Create a safe, professional space for honest stories, feedback, and perspectives.',
    icon: <Users className="h-5 w-5 text-realvo-blue" />,
  },
  {
    title: 'Strengthen communication with real stories',
    description:
      'Turn authentic experiences into compelling messages that resonate more than text.',
    icon: <MessageSquare className="h-5 w-5 text-realvo-blue" />,
  },
  {
    title: 'Create content that amplifies your mission',
    description:
      'Use real voices to fuel brand storytelling, inspire advocacy, and expand awareness.',
    icon: <Megaphone className="h-5 w-5 text-realvo-blue" />,
  },
];

const WhatYouCanAchieve: React.FC = () => {
  return (
    <Section
      id="what-you-can-achieve"
      background="white"
      padding="lg"
      className="text-center"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-realvo-charcoal mb-3">
        What You Can Achieve with RealVo
      </h2>

      <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600">
        Capture real voices on video that improve understanding, strengthen
        communication, and power the stories that move people to act.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-left">
        {outcomes.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-100 bg-white shadow-sm px-5 py-6 sm:px-6 sm:py-7 flex flex-col h-full"
          >
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-realvo-light mb-4">
              {item.icon}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-realvo-charcoal mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhatYouCanAchieve;
