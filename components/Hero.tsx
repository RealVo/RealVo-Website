import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import Section from './Section';

const Hero: React.FC = () => {
  const [inView, setInView] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  const impactRefDesktop = useRef<HTMLSpanElement | null>(null);
  const impactRefMobile = useRef<HTMLSpanElement | null>(null);

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

  // Pulse animated text when in view
  useEffect(() => {
    const nodes: HTMLSpanElement[] = [];
    if (impactRefDesktop.current) nodes.push(impactRefDesktop.current);
    if (impactRefMobile.current) nodes.push(impactRefMobile.current);

    if (!nodes.length) return;

    const applyPulse = (el: HTMLSpanElement) => {
      el.classList.remove('animate-pulse-once');
      void el.offsetWidth;
      el.classList.add('animate-pulse-once');
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            applyPulse(entry.target as HTMLSpanElement);
          }
        });
      },
      { threshold: 0.6 }
    );

    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top + window.scrollY + yOffset;
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
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-realvo-light px-3 py-1.5 rounded-full text-sm font-medium text-realvo-blue">
            <span className="h-2 w-2 rounded-full bg-realvo-teal animate-pulse" />
            Enterprise Video Capture Platform
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-realvo-charcoal">
            <span className="block md:hidden">
              <span>Understand what</span>
              <span
                ref={impactRefMobile}
                className="block animate-pulse-once"
              >
                people truly think
                <br />
                and feel.
              </span>
            </span>

            <span className="hidden md:block">
              <span>Understand what people</span>
              <span
                ref={impactRefDesktop}
                className="block animate-pulse-once text-realvo-teal"
              >
                truly think and feel.
              </span>
            </span>
          </h1>

          {/* Supporting copy */}
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            When people are given a natural, private way to speak in their own
            words, understanding, trust, and meaningful insight follow.
          </p>

          <p className="text-sm text-gray-500 italic max-w-xl">
            A fully managed video-capture program — from strategy and design
            to deployment, management, and insight.
          </p>

          {/* CTA */}
<div className="pt-4">
  <Button
    size="lg"
    variant="primary"
    onClick={() => scrollToSection('contact')}
  >
    Request Pricing &amp; Availability
  </Button>
</div>
</div>

{/* RIGHT COLUMN — LANDSCAPE IMAGE */}
<div className="lg:col-span-5 relative">
  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-100 aspect-video">
    <img
      src="/capture/hero/booth-user-3.png"
      alt="RealVo video capture participant"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Insight Card */}
          <div className="absolute -bottom-5 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full text-green-600 flex items-center justify-center w-9 h-9">
              ✓
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-sm text-realvo-charcoal">
                Uploaded
              </p>
              <p className="text-xs text-gray-500">
                Queued for review
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;




