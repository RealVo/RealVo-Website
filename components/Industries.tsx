import React, { useEffect, useRef } from 'react';
import Section from './Section';
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Users2,
} from 'lucide-react';
import { Industry } from '../types';

const industries: Industry[] = [
  {
    name: 'Corporate',
    description:
      'Capture employee and customer voices that inspire trust, clarity, and connection. Use for DEI, HR, and major events.',
    icon: Building2,
  },
  {
    name: 'Universities & Colleges',
    description:
      'Hear the real experiences of students, alumni, faculty, and staff. Support recruitment and belonging initiatives.',
    icon: GraduationCap,
  },
  {
    name: 'Healthcare',
    description:
      'Capture meaningful experiences from patients, families, clinicians, and staff to improve care and culture.',
    icon: HeartPulse,
  },
  {
    name: 'Community Organizations',
    description:
      'Give communities an accessible way to share their voices, needs, and stories for advocacy and impact.',
    icon: Users2,
  },
];

const Industries: React.FC = () => {
  const serveRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = serveRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && node) {
            node.classList.remove('animate-pulse-once-light');
            void node.offsetWidth; // force reflow
            node.classList.add('animate-pulse-once-light');
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="industries"
      background="dark"
      className="relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-realvo-teal blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 rounded-full bg-realvo-slate blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white mb-4">
  Experience Across{' '}
  <span ref={serveRef} className="animate-pulse-once-light">
    Key Industries
  </span>
</h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Specializing in real-world organizational environments, shaped by 20 years of experience.
        </p>
      </div>

      {/* Icon-anchored layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {industries.map((industry, idx) => (
          <div key={idx} className="flex items-start gap-6 group">
            {/* Icon Anchor — square, large, same style as WhatYouCanAchieve */}
            <div
  className="
    w-20 h-20 md:w-24 md:h-24
    rounded-2xl
    flex items-center justify-center
    bg-white text-realvo-blue
    transition-colors duration-200
    hover:bg-gray-100
    hover:outline hover:outline-2 hover:outline-gray-300
    flex-shrink-0
  "
>
  <industry.icon size={48} strokeWidth={1.8} />
</div>

            {/* Text */}
            <div className="pt-2">
              <h3 className="text-xl font-semibold text-white leading-tight mb-2">
                {industry.name}
              </h3>
              <p className="text-white/70 leading-relaxed max-w-md">
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Industries;


