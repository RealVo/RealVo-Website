import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import Section from './Section';

const Hero: React.FC = () => {
  const [inView, setInView] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  // ✅ Headline pulse ref (re-trigger on view)
  const headlineRef = useRef<HTMLSpanElement | null>(null);

  // HERO IMAGE ROTATION
  const HERO_IMAGES = [
    '/capture/hero/booth-user-3.webp',
    '/capture/hero/fsk-user-2.webp',
    '/capture/hero/vvb-user-4.webp',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const HOLD_MS = 4500;
  const FADE_MS = 900;

  // Fade-in hero once
  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // ✅ Re-trigger headline pulse when hero scrolls into view
  useEffect(() => {
    const node = headlineRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            node.classList.remove('animate-pulse-once');
            void node.offsetWidth; // force reflow
            node.classList.add('animate-pulse-once');
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Preload images
  useEffect(() => {
    HERO_IMAGES.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Rotate images
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, HOLD_MS);

    return () => window.clearInterval(interval);
  }, [HERO_IMAGES.length]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <Section className="pt-20 pb-12 md:pt-28 md:pb-20 relative overflow-hidden">
      <div
        ref={heroRef}
        className={`
          grid grid-cols-1 lg:grid-cols-12 gap-12 items-center
          transition-all duration-700 ease-out
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        {/* LEFT COLUMN */}
<div className="lg:col-span-7 space-y-6">
  {/* Eyebrow / Pill */}
  <div className="inline-flex items-center gap-2 bg-realvo-light px-3 py-1.5 rounded-full text-sm font-medium text-realvo-blue">
    <span className="h-2 w-2 rounded-full bg-realvo-teal animate-pulse" />
    Built for Expression
  </div>

  {/* Headline */}
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-realvo-charcoal">
    <span className="block">
      Capture{' '}
      <span
        ref={headlineRef}
        className="text-realvo-teal animate-pulse-once"
      >
        Authentic Voices
      </span>
    </span>
  </h1>

  {/* Subline — Desktop */}
<p className="hidden sm:block mt-6 text-lg text-gray-600 max-w-3xl">
  A fully managed, enterprise-ready solution for capturing stories, testimonials, and insights through video, voice, and text — in person and online.
</p>

{/* Subline — Mobile (adds modality clarity) */}
<p className="block sm:hidden mt-5 text-base text-gray-600">
  A fully managed, enterprise-ready solution for capturing stories, testimonials, and insights through video, voice, and text — in person and online.
</p>

  {/* Supporting line */}
  <p className="text-sm text-gray-500 italic max-w-xl">
    Designed for moments that matter — from listening and learning to
    trust-building and change.
  </p>

  {/* CTA */}
  <div className="pt-4">
    <Button
      size="lg"
      variant="primary"
      onClick={() => scrollToSection('contact')}
    >
      Start a Conversation
    </Button>
  </div>
</div>

        {/* RIGHT COLUMN — IMAGE ROTATION */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-100 aspect-video">
            {HERO_IMAGES.map((src, idx) => (
              <img
  key={src}
  src={idx === activeIndex ? src : undefined}
  alt="RealVo video capture example"
  width={1440}
  height={900}
  loading="eager"
  fetchPriority="high"
  style={{ backgroundColor: "#f2f4f7" }}
  className={`
    absolute inset-0 w-full h-full object-cover
    transition-opacity ease-in-out
    duration-[${FADE_MS}ms]
    ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}
  `}
/>
            ))}
          </div>

          {/* Insight Card */}
          <div className="absolute -bottom-5 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
            <div className="bg-realvo-teal/15 p-2 rounded-full text-realvo-teal flex items-center justify-center w-9 h-9">
              ✓
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-sm text-realvo-charcoal">
                Uploaded
              </p>
              <p className="text-xs text-gray-500">Queued for review</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
