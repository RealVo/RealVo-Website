// src/components/WhyRealVoExists.tsx
import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';
import { BarChart3, Video, ShieldCheck, Users } from 'lucide-react';

type Bullet = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const bullets: Bullet[] = [
  {
    title: 'Surveys miss the story.',
    description:
      'They’re good at tracking metrics, but not at capturing emotion, nuance, or the “why” behind how people feel and what they need.',
    icon: BarChart3,
  },
  {
    title: 'Interviews and filming don’t scale.',
    description:
      'Scheduling, crews, and cameras are resource-heavy — and often feel staged or intimidating for participants, limiting who you actually hear from.',
    icon: Video,
  },
  {
    title: 'People need a safe way to share.',
    description:
      'Many will open up when the experience feels guided, private, and on their own terms — not like a performance or a formal evaluation.',
    icon: ShieldCheck,
  },
  {
    title: 'Leaders need real perspectives to act on.',
    description:
      'Decisions about culture, student or community experience, and communication are stronger when they’re shaped by real voices — not just dashboards and reports.',
    icon: Users,
  },
];

const WhyRealVoExists: React.FC = () => {
  const whyRef = useRef<HTMLSpanElement | null>(null);

  // Fade-up animation for the section
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [sectionInView, setSectionInView] = useState(false);

  // Re-trigger pulse animation on "whole story."
  useEffect(() => {
    const node = whyRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && node) {
            node.classList.remove('animate-pulse-once');
            void node.offsetWidth;
            node.classList.add('animate-pulse-once');
          }
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Fade-up on scroll
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setSectionInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="why-realvo-exists"
      background="teal"
      className="overflow-hidden border-t border-gray-100"
    >
      <div
        ref={sectionRef}
        className={`
          max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center
          transform transition-all duration-700 ease-out
          ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        {/* VISUAL – LEFT COLUMN */}
        <div className="lg:col-span-6 order-1">
          <div className="relative">
            {/* Portrait image card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700 bg-gray-900 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Team reviewing video insights on laptops"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            </div>

            {/* Floating pill */}
            <div className="absolute -bottom-6 -left-2 sm:-left-4 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 sm:gap-4 max-w-xs">
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
                <p className="font-semibold text-xs sm:text-sm text-realvo-charcoal dark:text-white">
                  Why RealVo Exists
                </p>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300 leading-snug">
                  Transforming lived experiences into insight leaders can see, hear,
                  and act on.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TEXT – RIGHT COLUMN */}
        <div className="lg:col-span-6 order-2">
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal dark:text-white leading-tight mb-4">
            Because numbers alone don’t tell the{' '}
            <span
              ref={whyRef}
              className="text-realvo-blue animate-pulse-once"
            >
              whole story.
            </span>
          </h2>

          {/* Intro paragraph */}
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-6">
            Traditional tools capture metrics and surface comments. RealVo exists to
            help organizations truly understand lived experiences, so decisions about
            programs, culture, and communication are grounded in real human stories.
          </p>

          {/* Bullets */}
          <div className="space-y-5 text-sm md:text-base">
            {bullets.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-3 md:gap-4">
                  {/* ICON – forced circle, teal background, white icon */}
                  <div
                    className="mt-1 flex-none shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#2AB8B0' }}
                  >
                    <Icon size={18} strokeWidth={2} className="text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-realvo-charcoal dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyRealVoExists;
