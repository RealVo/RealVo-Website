import React, { useEffect, useRef } from 'react';
import Section from './Section';
import Button from './Button';
import { CheckCircle2, Calendar, Layers, Shield } from 'lucide-react';

const ProgramStructure: React.FC = () => {
  const accentRef = useRef<HTMLSpanElement | null>(null);

  // Re-trigger pulse animation when section enters view
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

        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Programs are scoped to your goals, capture environment, and governance needs — with a structured path from
          planning through activation and ongoing oversight.
        </p>
      </div>

      {/* 3 engagement models (not "tiers") */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Pilot */}
        <div className="rounded-2xl p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-realvo-light flex items-center justify-center text-realvo-blue">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Pilot
              </p>
              <p className="text-xl font-semibold text-realvo-charcoal dark:text-white">Prove the workflow</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            A focused engagement to validate UX, permissions, and outcomes before scaling.
          </p>

          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-8 flex-1">
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Define the capture flow and success measures
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Configure profile fields, questions, and review rules
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Portal access for review, export, and reporting
            </li>
          </ul>

          <Button variant="outline" className="w-full" onClick={() => (window.location.href = '/#contact')}>
            Discuss a pilot
          </Button>
        </div>

        {/* Activation */}
        <div className="relative rounded-2xl p-8 bg-white dark:bg-realvo-charcoal shadow-xl border-2 border-realvo-blue flex flex-col">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-realvo-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
            Most Common
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-realvo-light flex items-center justify-center text-realvo-blue">
              <Calendar size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-300">
                Activation
              </p>
              <p className="text-xl font-semibold text-realvo-charcoal dark:text-white">Launch at an event</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            A guided deployment for conferences, campuses, hospitals, and campaigns — with reliable capture and support.
          </p>

          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-8 flex-1">
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Experience configuration and pre-launch testing
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              On-site or remote activation support (as scoped)
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Moderation, export workflows, and reporting
            </li>
          </ul>

          <Button variant="primary" className="w-full" onClick={() => (window.location.href = '/#contact')}>
            Request a program outline
          </Button>
        </div>

        {/* Ongoing */}
        <div className="rounded-2xl p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-realvo-light flex items-center justify-center text-realvo-blue">
              <Layers size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Ongoing
              </p>
              <p className="text-xl font-semibold text-realvo-charcoal dark:text-white">Sustain a program</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            A repeatable, governed workflow for ongoing storytelling and insight capture across teams and locations.
          </p>

          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 mb-8 flex-1">
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Campaign and team structures with permissions
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Ongoing portal access, exports, and governance
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-realvo-teal">•</span>
              Iteration and optimization based on outcomes
            </li>
          </ul>

          <Button variant="outline" className="w-full" onClick={() => (window.location.href = '/#contact')}>
            Plan an ongoing program
          </Button>
        </div>
      </div>

      {/* Procurement-safe reassurance row */}
      <div className="mt-10 md:mt-12 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-realvo-light flex items-center justify-center text-realvo-blue">
              <Shield size={18} />
            </div>
            <div>
              <p className="font-semibold text-realvo-charcoal dark:text-white">Scoped to your environment</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Capture formats, retention, moderation, and access controls are configured to match your program.
              </p>
            </div>
          </div>

          <div className="md:shrink-0">
            <Button variant="secondary" onClick={() => (window.location.href = '/#contact')}>
              Talk to us about your workflow
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProgramStructure;
