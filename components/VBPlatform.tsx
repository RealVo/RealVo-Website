import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';
import Button from './Button';
import { Play, Lock, Search, Download, BarChart2, Users, FileText } from 'lucide-react';

const features = [
  { icon: Play, label: 'View Submissions' },
  { icon: FileText, label: 'Tag & Categorize' },
  { icon: Search, label: 'Transcriptions' },
  { icon: Download, label: 'Downloads & Exports' },
  { icon: Users, label: 'Permissions Control' },
  { icon: BarChart2, label: 'Engagement Analytics' },
];

// ✅ Images live in: public/vbplatform/
const platformScreens = [
  { src: '/vbplatform/vbtv_screens_1.png', alt: 'VideoBooth.tv dashboard screenshot 1' },
  { src: '/vbplatform/vbtv_screens_2.png', alt: 'VideoBooth.tv dashboard screenshot 2' },
  { src: '/vbplatform/vbtv_screens_3.png', alt: 'VideoBooth.tv dashboard screenshot 3' },
];

// ✅ Adjustable timing (start at 2s)
const SLIDE_MS = 3000;

const VBPlatform: React.FC = () => {
  const vbRef = useRef<HTMLSpanElement | null>(null);

  // Rotator state
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Auto-advance slides
  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1) % platformScreens.length);
    }, SLIDE_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <Section id="vbtv" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Content Side (mobile first) */}
        <div className="lg:col-span-5 order-1 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-realvo-blue/10 dark:bg-realvo-blue/20 px-3 py-1 rounded-full text-sm font-medium text-realvo-blue dark:text-blue-300 mb-4">
            <Lock size={14} className="text-realvo-teal animate-pulse" aria-hidden="true" />
            <span>Enterprise Secure</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-realvo-charcoal dark:text-white mb-6">
            Manage Your Stories with{' '}
            <span ref={vbRef} className="text-realvo-teal animate-pulse-once">
              VideoBooth.tv
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            VB.tv is your secure private dashboard for reviewing, organizing, and managing RealVo
            submissions. Turn raw video into actionable insights.
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

          <Button variant="outline">Explore Platform Features</Button>
        </div>

        {/* Visual Side (mobile second) */}
        <div className="lg:col-span-7 order-2 lg:order-2 relative">
          {/* Image Rotator Container */}
          <div
            <div className="relative shadow-2xl bg-white dark:bg-gray-900 p-2 rounded-xl">
          >
            {/* Keep inner corners aligned with container radius */}
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
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VBPlatform;

