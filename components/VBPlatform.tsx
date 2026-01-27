import React, { useEffect, useRef, useState, useCallback } from 'react';
import Section from './Section';
import Button from './Button';
import { Play, Lock, Search, Download, BarChart2, FileText } from 'lucide-react';

const features = [
  { icon: Lock, label: 'Permissions Control' },
  { icon: Search, label: 'Search & Filter Results' },
  { icon: FileText, label: 'Add Notes & Tags' },
  { icon: Play, label: 'AI Transcription' },
  { icon: Download, label: 'CRM-ready Data Exports' },
  { icon: BarChart2, label: 'Engagement Analytics' },
];

const platformScreens = [
  { src: '/vbplatform/vbtv_screens_1.png', alt: 'VideoBooth.tv dashboard screenshot 1' },
  { src: '/vbplatform/vbtv_screens_2.png', alt: 'VideoBooth.tv dashboard screenshot 2' },
  { src: '/vbplatform/vbtv_screens_3.png', alt: 'VideoBooth.tv dashboard screenshot 3' },
];

const SLIDE_MS = 2000;

const VBPlatform: React.FC = () => {
  const vbRef = useRef<HTMLSpanElement | null>(null);
  const rotatorViewRef = useRef<HTMLDivElement | null>(null);

  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Pulse animation
  useEffect(() => {
    const node = vbRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
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

  // Reset slideshow on re-enter
  useEffect(() => {
    const el = rotatorViewRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setIsPaused(false);
            setActiveIndex(0);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Slideshow timer
  useEffect(() => {
    if (!isInView || isPaused) return;

    const id = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1) % platformScreens.length);
    }, SLIDE_MS);

    return () => window.clearInterval(id);
  }, [isInView, isPaused]);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);
  const handleTouchStart = useCallback(() => setIsPaused(p => !p), []);

  return (
    <Section id="vbtv" padding="md" className="overflow-hidden -mb-16 md:-mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* CONTENT */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 bg-realvo-blue/10 px-3 py-1 rounded-full text-sm font-medium text-realvo-blue mb-4">
            <Lock size={14} className="text-realvo-teal animate-pulse" />
            <span>Enterprise Secure</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
            <span ref={vbRef} className="text-realvo-teal animate-pulse-once">
              VideoBooth.tv
            </span>{' '}
            Online Portal
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            A private content management dashboard for reviewing, managing, and sharing content.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((feat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-realvo-light flex items-center justify-center text-realvo-blue">
                  <feat.icon size={16} />
                </div>
                <span className="text-sm font-medium">{feat.label}</span>
              </div>
            ))}
          </div>

          <Button
            variant="secondary"
            className="text-xs px-3 py-1.5 shadow-none hover:shadow-none hover:-translate-y-0"
          >
            EXPLORE PLATFORM FEATURES
          </Button>
        </div>

        {/* VISUAL */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <div
            ref={rotatorViewRef}
            className="
              relative
              bg-white
              p-2
              rounded-xl
              shadow-2xl
              select-none

              w-full
              px-3
              sm:px-4
              max-w-none

              lg:px-0
              lg:max-w-[720px]
              lg:scale-[0.75]
              lg:origin-top-right
            "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
          >
            <div className="relative overflow-hidden rounded-[inherit]">
              {platformScreens.map((img, idx) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className={[
                    'w-full h-auto transition-opacity duration-700',
                    idx === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0',
                  ].join(' ')}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              ))}
            </div>

            <div className="hidden lg:block absolute bottom-3 right-3 text-[11px] bg-white/70 px-2 py-1 rounded-md">
              {isPaused ? 'Paused' : 'Hover to pause'}
            </div>

            <div className="lg:hidden absolute bottom-3 right-3 text-[11px] bg-white/70 px-2 py-1 rounded-md">
              Tap to {isPaused ? 'play' : 'pause'}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VBPlatform;

