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

// Images live in: public/vbplatform/
const platformScreens = [
  { src: '/vbplatform/vbtv_screens_1.png', alt: 'VideoBooth.tv dashboard screenshot 1' },
  { src: '/vbplatform/vbtv_screens_2.png', alt: 'VideoBooth.tv dashboard screenshot 2' },
  { src: '/vbplatform/vbtv_screens_3.png', alt: 'VideoBooth.tv dashboard screenshot 3' },
];

// ✅ Adjustable timing (start at 2s)
const SLIDE_MS = 2000;

// ✅ Scale control (0.75 = 25% smaller). Desktop only.
const PLATFORM_SCALE = 0.75;

const VBPlatform: React.FC = () => {
  const vbRef = useRef<HTMLSpanElement | null>(null);

  // ✅ detect when the image rotator enters/leaves view
  const rotatorViewRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Rotator state
  const [activeIndex, setActiveIndex] = useState(0);

  // Pause / resume control
  const [isPaused, setIsPaused] = useState(false);

  // Pulse animated headline text
  useEffect(() => {
    const node = vbRef.current;
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

  // Preload platform images
  useEffect(() => {
    platformScreens.forEach(s => {
      const img = new Image();
      img.src = s.src;
    });
  }, []);

  // ✅ reset to first image each time it re-enters view (matches HowItWorks behavior)
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

  // Auto-advance slides (stops when paused OR not in view)
  useEffect(() => {
    if (!isInView) return;
    if (isPaused) return;

    const id = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1) % platformScreens.length);
    }, SLIDE_MS);

    return () => window.clearInterval(id);
  }, [isInView, isPaused]);

  // Desktop: pause on hover, resume on leave
  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  // Mobile: tap to toggle pause/resume
  const handleTouchStart = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  return (
    <Section id="vbtv" padding="md" className="overflow-hidden -mb-16 md:-mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Content Side (mobile first) */}
        <div className="lg:col-span-5 order-1 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-realvo-blue/10 dark:bg-realvo-blue/20 px-3 py-1 rounded-full text-sm font-medium text-realvo-blue dark:text-blue-300 mb-4">
            <Lock size={14} className="text-realvo-teal animate-pulse" aria-hidden="true" />
            <span>Enterprise Secure</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-realvo-charcoal dark:text-white mb-6">
            <span ref={vbRef} className="text-realvo-teal animate-pulse-once">
              VideoBooth.tv
            </span>{' '}
            Online Portal
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            A private content management dashboard for reviewing, managing, and sharing content.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((feat, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-realvo-light dark:bg-gray-700 flex items-center justify-center text-realvo-blue dark:text-realvo-teal">
                  <feat.icon size={16} />
                </div>
                <span className="font-medium text-sm">{feat.label}</span>
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

        {/* Visual Side (mobile second) */}
        <div className="lg:col-span-7 order-2 lg:order-2 relative flex justify-center lg:justify-end">
          {/* ✅ Desktop-only scale wrapper (mobile stays 1:1 and respects Section padding) */}
          <div
            className="w-full flex justify-center lg:justify-end"
            style={{
              transform: `scale(1)`,
            }}
          >
            <div
              ref={rotatorViewRef}
              className="relative shadow-2xl bg-white dark:bg-gray-900 p-2 rounded-xl select-none w-full lg:w-auto lg:max-w-[720px]"
              style={{
                // ✅ Apply scale ONLY on desktop by switching at runtime via media query-like check is messy.
                // So: keep transform on this element but neutralize it on mobile with scale(1) in CSS below:
                transform: `scale(1)`,
                transformOrigin: 'top center',
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              role="button"
              aria-label={
                isPaused ? 'Platform preview paused. Tap to resume.' : 'Platform preview playing. Tap to pause.'
              }
              tabIndex={0}
            >
              {/* ✅ Desktop transform applied via Tailwind “lg:” so mobile is untouched */}
              <div
                className="w-full lg:w-auto lg:scale-[1]"
                style={{
                  // this wrapper is just here so we can apply the desktop scale cleanly:
                  transform: undefined,
                }}
              />

              {/* ✅ ACTUAL IMAGE ROTATOR CARD */}
              <div
                className="relative"
                style={{
                  // Desktop scaling only:
                  transform: window?.matchMedia?.('(min-width: 1024px)')?.matches
                    ? `scale(${PLATFORM_SCALE})`
                    : 'scale(1)',
                  transformOrigin: window?.matchMedia?.('(min-width: 1024px)')?.matches ? 'top right' : 'top center',
                }}
              >
                <div className="relative overflow-hidden rounded-[inherit]">
                  <div className="relative w-full">
                    {platformScreens.map((img, idx) => (
                      <img
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        className={[
                          'w-full h-auto block',
                          'transition-opacity duration-700 ease-in-out',
                          idx === activeIndex ? 'opacity-100 relative' : 'opacity-0 absolute inset-0',
                        ].join(' ')}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        draggable={false}
                      />
                    ))}
                  </div>
                </div>

                {/* Desktop pill */}
                <div className="hidden lg:block pointer-events-none absolute bottom-3 right-3 text-[11px] text-gray-500 dark:text-gray-400 bg-white/70 dark:bg-gray-900/60 backdrop-blur px-2 py-1 rounded-md">
                  {isPaused ? 'Paused' : 'Hover to pause'}
                </div>

                {/* Mobile pill */}
                <div className="lg:hidden pointer-events-none absolute bottom-3 right-3 text-[11px] text-gray-500 dark:text-gray-400 bg-white/70 dark:bg-gray-900/60 backdrop-blur px-2 py-1 rounded-md">
                  Tap to {isPaused ? 'play' : 'pause'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VBPlatform;
