import React, { useEffect, useRef } from 'react';
import Section from './Section';
import { Building2, GraduationCap, HeartPulse, Users2, ArrowRight } from 'lucide-react';
import { Industry } from '../types';

const industries: Industry[] = [
  {
    name: "Corporate",
    description: "Capture employee and customer voices that inspire trust, clarity, and connection. Use for DEI, HR, and major events.",
    icon: Building2,
  },
  {
    name: "Universities & Colleges",
    description: "Hear the real experiences of students, alumni, faculty, and staff. Support recruitment and belonging initiatives.",
    icon: GraduationCap,
  },
  {
    name: "Healthcare",
    description: "Capture meaningful experiences from patients, families, clinicians, and staff to improve care and culture.",
    icon: HeartPulse,
  },
  {
    name: "Community Organizations",
    description: "Give communities an accessible way to share their voices, needs, and stories for advocacy and impact.",
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
            node.classList.remove('animate-pulse-once');
            // force reflow so animation restarts
            void node.offsetWidth;
            node.classList.add('animate-pulse-once');
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="industries" background="dark" className="relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-realvo-teal blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 rounded-full bg-realvo-slate blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Who We{' '}
          <span ref={serveRef} className="text-realvo-teal animate-pulse-once">
            Serve
          </span>
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          RealVo adapts to the unique needs of every sector we work with, providing specialized workflows for each environment.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {industries.map((industry, idx) => (
          <div 
            key={idx} 
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/15 transition-colors group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/10 rounded-lg text-realvo-teal">
                <industry.icon size={32} />
              </div>
              <ArrowRight className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
            <p className="text-white/70 leading-relaxed">{industry.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Industries;
