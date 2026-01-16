import React, { useEffect, useRef } from 'react';
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

const VBPlatform: React.FC = () => {
  const vbRef = useRef<HTMLSpanElement | null>(null);

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

  return (
    <Section id="vbtv" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Content Side (mobile first) */}
        <div className="lg:col-span-5 order-1 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-realvo-blue/10 dark:bg-realvo-blue/20 px-3 py-1 rounded-full text-sm font-medium text-realvo-blue dark:text-blue-300 mb-4">
  <Lock
    size={14}
    className="text-realvo-teal animate-pulse"
    aria-hidden="true"
  />
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
          <div className="relative rounded-xl bg-gray-900 p-2 shadow-2xl border border-gray-200 dark:border-gray-700 transform lg:rotate-1 lg:hover:rotate-0 transition-transform duration-500">
            {/* Browser Bar */}
            <div className="bg-gray-800 rounded-t-lg p-3 flex items-center gap-2 mb-[-1px]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <div className="bg-gray-900/50 text-gray-400 text-xs py-1 px-4 rounded-md inline-block">
                  app.videobooth.tv/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Mock */}
            <div className="bg-white dark:bg-gray-800 rounded-b-lg overflow-hidden min-h-[350px] p-6">
              <div className="flex justify-between items-center mb-8 border-b border-gray-100 dark:border-gray-700 pb-4">
                <div>
                  <h4 className="font-bold text-xl text-realvo-charcoal dark:text-white">
                    Campaign Overview
                  </h4>
                  <p className="text-xs text-gray-500">Annual Leadership Summit 2025</p>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-24 bg-realvo-blue rounded-md"></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-realvo-blue dark:text-realvo-teal mb-1">
                      {142 * i}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">
                      Total Views
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/30 rounded-lg transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-600"
                  >
                    <div className="w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded flex-shrink-0 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="h-2.5 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-1.5"></div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-1/2"></div>
                    </div>
                    <div className="text-xs text-gray-400">Just now</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white dark:bg-realvo-charcoal p-5 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-[200px] animate-fade-in-up">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600">
                <Search size={18} />
              </div>
              <span className="font-bold text-sm dark:text-white">AI Transcript</span>
            </div>
            <div className="space-y-2">
              <div className="h-1.5 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
              <div className="h-1.5 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
              <div className="h-1.5 bg-gray-200 dark:bg-gray-600 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VBPlatform;
