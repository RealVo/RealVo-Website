import React, { useEffect, useRef } from 'react';
import Section from './Section';
import Button from './Button';
import { Building2, GraduationCap, HeartPulse, Users2 } from 'lucide-react';
import { Industry } from '../types';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  useEffect(() => {
    const node = serveRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && node) {
            node.classList.remove('animate-pulse-once-light');
            void node.offsetWidth;
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
    <Section id="industries" className="relative overflow-hidden bg-[#2a4d69]">
      {/* Base Background Color */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#2a4d69]" />

      {/* Pattern Background (TEMP: opacity removed for diagnosis) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/patterns/industries-pattern.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '1920px 1080px',
          backgroundPosition: 'top left',
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white mb-4">
          Experience Across
          <span className="hidden md:inline">{' '}</span>
          <br className="block md:hidden" />
          <span ref={serveRef} className="animate-pulse-once-light">
            Key Industries
          </span>
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Specializing in real-world organizational environments,
          <br className="hidden sm:block" />
          shaped by 20 years of experience.
        </p>
      </div>

      {/* Icon-anchored layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {industries.map((industry, idx) => (
          <div key={idx} className="flex items-start gap-6 group">
            {/* Icon Anchor */}
            <div
              className="
                w-[60px] h-[60px] md:w-[64px] md:h-[64px]
                rounded-2xl
                flex items-center justify-center
                bg-white text-realvo-blue
                transition-colors duration-200
                transition-transform duration-200
                group-hover:bg-gray-100
                group-hover:text-realvo-teal
                group-hover:scale-[1.06]
                flex-shrink-0
              "
            >
              <industry.icon size={40} strokeWidth={1.8} />
            </div>

            {/* Text */}
            <div>
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

      {/* Use Cases CTA */}
      <div className="relative z-10 mt-12 flex justify-center">
        <Button
          size="lg"
          variant="secondary"
          pressedStyle="insetWhite"
          onClick={() => navigate('/use-cases')}
        >
          <span className="text-center leading-snug">
            <span className="block sm:hidden text-base">
              Explore how voices are used
            </span>
            <span className="block sm:hidden text-base">
              across real-world use cases
            </span>

            <span className="hidden sm:block text-base">
              Explore how voices are used across real-world use cases
            </span>
          </span>
        </Button>
      </div>
    </Section>
  );
};

export default Industries;



