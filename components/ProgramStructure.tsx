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
      (entries) => {
        entries.forEach((entry) => {
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
        <div className="group relative rounded-2xl p-8 pt-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
          {/* Floating pill */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-realvo-blue text-white px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.25em] shadow-md w-max whitespace-nowrap">
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

            <p className="text-xl font-semibold text-realvo-charcoal dark:text-white">
              Launch at an Event
            </p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Short-term deployments for conferences, campuses, community events, and national meetings.
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            Designed for defined dates and structured environments — with configured UX, support, and post-event review workflows built in.
          </p>

          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200 mb-8 flex-1">
  {[
    'Short-term activations',
    'On-site or remote support (as scoped)',
    'Branded experience configuration',
    'Secure portal access for review and export',
  ].map((b) => (
    <li key={b} className="flex gap-2.5">
      <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-realvo-teal shrink-0" />
      <span>{b}</span>
    </li>
  ))}
</ul>

          <Button
            variant="secondary"
            className="w-full text-xs uppercase tracking-wide shadow-none hover:shadow-none hover:-translate-y-0"
            onClick={() => (window.location.href = '/#contact')}
          >
            Plan an event program
          </Button>
        </div>

        {/* 2) Extended & Multi-Site Programs */}
        <div className="group relative rounded-2xl p-8 pt-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
          {/* Floating pill */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-realvo-blue text-white px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.25em] shadow-md w-max whitespace-nowrap">
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

            <p className="text-xl font-semibold text-realvo-charcoal dark:text-white">
              Scale Across Locations
            </p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Deploy across multiple locations, offices, or phases of a campaign.
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            Ideal for touring activations, national initiatives, and multi-month programs.
          </p>

          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200 mb-8 flex-1">
  {[
    'Consistent experience across locations',
    'Governance and permission controls',
    'Ongoing portal access and reporting',
    'Often begins with one or two initial activations',
  ].map((b) => (
    <li key={b} className="flex gap-2.5">
      <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-realvo-teal shrink-0" />
      <span>{b}</span>
    </li>
  ))}
</ul>

          <Button
            variant="secondary"
            className="w-full text-xs uppercase tracking-wide shadow-none hover:shadow-none hover:-translate-y-0"
            onClick={() => (window.location.href = '/#contact')}
          >
            Discuss an extended program
          </Button>
        </div>

        {/* 3) Owned Installations */}
        <div className="group relative rounded-2xl p-8 pt-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
          {/* Floating pill */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-realvo-blue text-white px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.25em] shadow-md w-max whitespace-nowrap">
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

            <p className="text-xl font-semibold text-realvo-charcoal dark:text-white">
              Build Long-Term Infrastructure
            </p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Installed systems for organizations building ongoing storytelling and insight capture into their environment.
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            Used across campuses, corporate headquarters, hospitals, and civic spaces.
          </p>

          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200 mb-8 flex-1">
  {[
    'Hardware ownership',
    'Configured UX and governance structure',
    'Long-term portal access',
    'Designed for repeat or continuous use',
  ].map((b) => (
    <li key={b} className="flex gap-2.5">
      <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-realvo-teal shrink-0" />
      <span>{b}</span>
    </li>
  ))}
</ul>

          <Button
            variant="secondary"
            className="w-full text-xs uppercase tracking-wide shadow-none hover:shadow-none hover:-translate-y-0"
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
