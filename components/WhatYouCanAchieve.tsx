// src/components/WhatYouCanAchieve.tsx
import React, { useEffect, useRef } from 'react';
import { BarChart3, ShieldCheck, MessageSquare, Megaphone } from 'lucide-react';
import Section from './Section';
import { Feature } from '../types';

const features: Feature[] = [
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
    title: 'Connect Insight to Action',
    description:
      'Bring individual perspectives together around shared values, culture, and purpose — so leaders, teams, and communities align on what matters most.',
    icon: MessageSquare,
  },
  {
    title: 'Create Content That Amplifies',
    description:
      'Use real voices to inspire advocacy, build awareness, and share perspectives with credibility — extending impact well beyond the moment.',
    icon: Megaphone,
  },
];

type Props = {
  topPad?: boolean;
};

const WhatYouCanAchieve: React.FC<Props> = ({ topPad = false }) => {
  const achieveRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = achieveRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.remove('animate-pulse-once');
            void node.offsetWidth; // force reflow
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
    <Section
      id="why-realvo"
      background="teal"
      className={topPad ? 'pt-28 sm:pt-20 md:pt-24 lg:pt-32' : ''}
    >
      
      {/* Cards */}
      <div className="mx-auto max-w-6xl">
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
                antialiased
                transition-shadow transition-colors duration-200
                hover:shadow-lg
                hover:border-realvo-blue/30 dark:hover:border-realvo-teal/30
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  bg-realvo-light text-realvo-blue
                  dark:bg-gray-800 dark:text-realvo-teal
                  transition-colors duration-200
                  group-hover:bg-realvo-teal group-hover:text-white
                "
              >
                <feature.icon size={26} strokeWidth={1.8} />
              </div>

              <h3 className="mt-6 text-lg font-bold text-realvo-charcoal dark:text-white leading-tight">
                {index === 1 ? (
                  <>
                    {/* Mobile: single line */}
                    <span className="md:hidden whitespace-nowrap">Make Voices Matter</span>

                    {/* Desktop: two lines */}
                    <span className="hidden md:inline">
                      Make Voices
                      <span className="block">Matter</span>
                    </span>
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

        {/* Framed image below */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <div className="relative h-[340px] md:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white">
            <img
              src="/whyrealvo_peopleserved.jpg"
              alt="A participant recording a message in a private RealVo booth"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhatYouCanAchieve;
