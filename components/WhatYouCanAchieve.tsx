// src/components/WhatYouCanAchieve.tsx
import React, { useEffect, useRef } from 'react';
import { BarChart3, ShieldCheck, MessageSquare, Megaphone } from 'lucide-react';
import Section from './Section';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Capture Lived Experiences',
    description:
      'Capture stories as people tell them — in their own words, at their own pace — preserving context, nuance, and emotion that structured inputs often miss.',
    icon: BarChart3,
  },
  {
    title: 'Make Voices Matter',
    description:
      'Give people a private, low-pressure way to speak honestly, knowing their input is collected with intent and treated as meaningful — not performative.',
    icon: ShieldCheck,
  },
  {
    title: 'Connect Insight to Action',
    description:
      'Turn individual perspectives into clear, usable insight — reviewing and sharing voices so decisions are better informed and meaningful action follows.',
    icon: MessageSquare,
  },
  {
    title: 'Create Content That Amplifies',
    description:
      'Extend the impact of real voices through curated sharing — from internal learning and alignment to external storytelling and brand communication.',
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

    bg-realvo-teal text-white
    dark:bg-realvo-teal dark:text-white

    transition-colors duration-200
    group-hover:bg-realvo-blue group-hover:text-white
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
