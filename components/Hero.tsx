import React, { useEffect, useRef, useState } from 'react';
import { PlayCircle } from 'lucide-react';
import Button from './Button';
import Section from './Section';

const Hero: React.FC = () => {
  const [inView, setInView] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // animate only once
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const yOffset = -80;
    const targetY = window.scrollY + rect.top + yOffset;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <Section className="pt-16 pb-8 md:pt-28 md:pb-16 relative overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 dark:opacity-5">
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="200" r="200" fill="#2A4D69" />
          <circle cx="100" cy="500" r="150" fill="#2AB8B0" />
        </svg>
      </div>

      <div
        ref={heroRef}
        className={`
          grid grid-cols-1 lg:grid-cols-12 gap-12 items-center
          transform transition-all duration-700 ease-out
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center space-x-2 bg-realvo-light dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-realvo-blue dark:text-realvo-teal mb-2 sm:mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-realvo-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-realvo-teal"></span>
            </span>
            <span>Enterprise Video Capture Platform</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-realvo-charcoal dark:text-white">
            Authentic Voices.
            <br />
            <span className="text-realvo-blue dark:text-realvo-slate">
              Real Impact.
            </span>
          </h1>

          {/* Supporting copy */}
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Capture the voices and experiences that move your programs forward — from insights and feedback to stories and testimonials — on video, in person or online.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Button
              size="lg"
              variant="primary"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => scrollToSection('how-it-works')}
            >
              <PlayCircle size={20} />
              How RealVo Works
            </Button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700 aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-gray-100 dark:bg-gray-800 group">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop"
              alt="Person recording a story"
              className="object-cover w-full h-full mix-blend-overlay opacity-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-realvo-charcoal/80 to-transparent flex items-end p-8">
              <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/20 w-full transform transition-all duration-500 translate-y-1 group-hover:translate-y-0">
                <div className="flex items-center gap-2 mb-2 sm:gap-3 sm:mb-3">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                    Recording in progress
                  </span>
                </div>
                <p className="text-white text-sm sm:text-lg italic font-medium">
                  "This program really changed how I view leadership..."
                </p>
              </div>
            </div>
          </div>

          {/* Floating UI Element */}
          <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 sm:gap-4 max-w-xs">
            <div className="bg-green-100 dark:bg-green-900/30 p-1.5 sm:p-2 rounded-full text-green-600 dark:text-green-400">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-xs sm:text-sm dark:text-white">
                Insight Captured
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500">
                Ready for analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;

