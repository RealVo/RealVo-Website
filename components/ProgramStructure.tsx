import React, { useEffect, useRef } from 'react';
import Section from './Section';
import Button from './Button';
import { Calendar, Layers, CheckCircle2 } from 'lucide-react';

const ProgramStructure: React.FC = () => {
  const accentRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = accentRef.current;
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

  return (
    <Section id="program-structure" background="light">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-realvo-charcoal dark:text-white mb-4">
          Program{' '}
          <span ref={accentRef} className="text-realvo-teal animate-pulse-once">
            Structure
          </span>
        </h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
          A structured engagement model — designed around your goals, capture environment, and support needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* 1) Event Programs */}
        <div className="group relative rounded-2xl p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
          {/* Badge (Most-Common style) */}
          <div
  className="
    absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-realvo-blue text-white
    px-5 py-1
    rounded-full
    text-xs font-bold uppercase tracking-wide
    shadow-md
    whitespace-nowrap
    w-max
  "
>
  Extended &amp; Multi-Site Programs
</div>

            Event Programs
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div
              className="
                w-10 h-10 rounded-xl bg-realvo-light text-realvo-blue
                flex items-center justify-center
                transition-colors duration-200
                group-hover:bg-realvo-blue group-hover:text-white
              "
            >
              <Calendar size={18} />
            </div>

            <div>
              <p className="text-xl font-semibold text-realvo-charcoal dark:text-white">
                Launch at an Event
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Short-term deployments for conferences, campuses, community events, and national meetings.
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            Designed for defined dates and structured environments — with configured UX, support, and post-event review workflows built in.
          </p>

          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-8 flex-1">
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Short-term activations
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              On-site or remote support (as scoped)
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Branded experience configuration
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Secure portal access for review and export
            </li>
          </ul>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => (window.location.href = '/#contact')}
          >
            Plan an event program
          </Button>
        </div>

        {/* 2) Extended & Multi-Site Programs */}
        <div className="group relative rounded-2xl p-8 bg-white dark:bg-realvo-charcoal shadow-xl border-2 border-realvo-blue flex flex-col">
          {/* Badge (Most-Common style) */}
          <div
  className="
    absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-realvo-blue text-white
    px-5 py-1
    rounded-full
    text-xs font-bold uppercase tracking-wide
    shadow-md
    whitespace-nowrap
    w-max
  "
>
  Extended &amp; Multi-Site Programs
</div>

            Extended &amp; Multi-Site Programs
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div
              className="
                w-10 h-10 rounded-xl bg-realvo-light text-realvo-blue
                flex items-center justify-center
                transition-colors duration-200
                group-hover:bg-realvo-blue group-hover:text-white
              "
            >
              <Layers size={18} />
            </div>

            <div>
              <p className="text-xl font-semibold text-realvo-charcoal dark:text-white">
                Scale Across Locations
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Deploy across multiple locations, offices, or phases of a campaign.
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            Ideal for touring activations, national initiatives, and multi-month programs.
          </p>

          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-8 flex-1">
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Consistent experience across locations
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Governance and permission controls
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Ongoing portal access and reporting
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Often begins with one or two initial activations
            </li>
          </ul>

          <Button
            variant="primary"
            className="w-full"
            onClick={() => (window.location.href = '/#contact')}
          >
            Discuss an extended program
          </Button>
        </div>

        {/* 3) Owned Installations */}
        <div className="group relative rounded-2xl p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
          {/* Badge (Most-Common style) */}
          <div
  className="
    absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-realvo-blue text-white
    px-5 py-1
    rounded-full
    text-xs font-bold uppercase tracking-wide
    shadow-md
    whitespace-nowrap
    w-max
  "
>
  Extended &amp; Multi-Site Programs
</div>

            Owned Installations
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div
              className="
                w-10 h-10 rounded-xl bg-realvo-light text-realvo-blue
                flex items-center justify-center
                transition-colors duration-200
                group-hover:bg-realvo-blue group-hover:text-white
              "
            >
              <CheckCircle2 size={18} />
            </div>

            <div>
              <p className="text-xl font-semibold text-realvo-charcoal dark:text-white">
                Build Long-Term Infrastructure
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Installed systems for organizations building ongoing storytelling and insight capture into their environment.
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            Used across campuses, corporate headquarters, hospitals, and civic spaces.
          </p>

          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-8 flex-1">
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Hardware ownership
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Configured UX and governance structure
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Long-term portal access
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Designed for repeat or continuous use
            </li>
          </ul>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => (window.location.href = '/#contact')}
          >
            Explore ownership options
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ProgramStructure;

