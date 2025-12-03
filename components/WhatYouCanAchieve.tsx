import React, { useEffect, useRef } from 'react';
import Section from './Section';

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
    <Section id="why-realvo">
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
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Transform engagement by capturing authentic stories, insights, and feedback — anytime, anywhere.
        </p>
      </div>

      {/* The rest of your existing content below stays exactly the same */}
      {/* Assuming achievement cards, icons, etc. follow here */}
    </Section>
  );
};

export default WhatYouCanAchieve;
