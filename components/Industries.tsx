import React, { useEffect, useRef } from 'react';
import Section from './Section';
import Button from './Button';
import { Building2, GraduationCap, HeartPulse, Users2 } from 'lucide-react';
import { Industry } from '../types';
import { useNavigate } from 'react-router-dom';

const industries: Industry[] = [
  {
    name: 'Enterprises & Brands',
    description:
      'Give employees, customers, and partners a voice that builds trust and authenticity — inside organizations and across brand experiences.',
    icon: Building2,
  },
  {
    name: 'Universities & Colleges',
    description:
      'Empower students, faculty, alumni, and staff to share experiences that shape learning, culture, and campus life across the academic community.',
    icon: GraduationCap,
  },
  {
    name: 'Healthcare & Life Sciences',
    description:
      'Create a space for medical professionals, patients, families, and caregivers to share experiences that build empathy, trust, and understanding.',
    icon: HeartPulse,
  },
  {
    name: 'Community Organizations',
    description:
      'Enable residents, members, and advocates to share stories and perspectives that strengthen connection, transparency, and collective voice.',
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
    <Section id="industries" className="relative overflow-hidden bg-[#2a4d69] isolate">
      {/* Pattern Background (ON) */}
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
          Proven Across Industries
          <span className="hidden md:inline">{' '}</span>
          <br className="block md:hidden" />
          <span ref={serveRef} className="animate-pulse-once-light">
            Where Voices Truly Matter
          </span>
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
  Designed for real-world organizational contexts{' '}
  <br className="hidden sm:block" />
  where capturing perspective actually matters.
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
    className="shadow-none hover:shadow-none hover:-translate-y-0 tracking-wide"
  >
    EXPLORE REAL-WORLD USE CASES
  </Button>
</div>
    </Section>
  );
};

export default Industries;
