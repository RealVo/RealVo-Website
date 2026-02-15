import React, { useEffect, useRef } from 'react';
import Section from './Section';
import { Target, LayoutTemplate, Rocket, LifeBuoy } from 'lucide-react';

type Step = {
  phase: string;
  title: string;
  bullets: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const steps: Step[] = [
  {
    phase: 'Assess',
    title: 'Align on objectives',
    bullets: [
      'Define goals and measures of success',
      'Identify audience, context, and ideal capture approach',
      'Confirm timeline and deployment plan',
    ],
    icon: Target,
  },
  {
    phase: 'Design & Prepare',
    title: 'Build the branded experience',
    bullets: [
      'Assemble required design templates and visual assets',
      'Finalize creative elements and secure stakeholder approval',
      'Program, configure, and test all components for launch',
    ],
    icon: LayoutTemplate,
  },
  {
    phase: 'Deploy',
    title: 'Launch and activate',
    bullets: [
      'Coordinate delivery, setup, and on-site testing',
      'Verify connectivity, lighting, and recording quality',
      'Demonstrate the experience and train on-site representatives',
    ],
    icon: Rocket,
  },
  {
    phase: 'Support',
    title: 'Sustain and improve',
    bullets: [
      'Provide technical support throughout activation',
      'Monitor platform performance and content flow in VideoBooth.tv',
      'Conduct post-event review and recommend future optimizations',
    ],
    icon: LifeBuoy,
  },
];

const ImplementationProcess: React.FC = () => {
  const headlineSpanRef = useRef<HTMLSpanElement | null>(null);

  // Re-trigger the pulse on "Successful Program" when section comes into view
  useEffect(() => {
    const node = headlineSpanRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && node) {
            node.classList.remove('animate-pulse-once');
            void node.offsetWidth; // force reflow
            node.classList.add('animate-pulse-once');
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="process-platform"
      background="white"
      padding="lg"
      className="border-t border-gray-100"
    >
      <div className="rounded-3xl bg-realvo-teal/10 px-5 py-8 md:px-10 md:py-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-realvo-charcoal dark:text-white mb-4">
            A{' '}
            <span
              ref={headlineSpanRef}
              className="text-realvo-teal animate-pulse-once"
            >
              Guided Path
            </span>{' '}
            to Program Success
          </h2>

          <p className="text-lg text-gray-700">
            We partner with you from initial planning through activation and ongoing support — ensuring your program launches smoothly and continues delivering measurable value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.phase}
                className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm
                           hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Icon + phase */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl bg-realvo-light text-realvo-blue
                                 flex items-center justify-center
                                 transition-colors duration-300
                                 group-hover:bg-realvo-blue group-hover:text-white"
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.6} />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.16em] uppercase text-realvo-slate">
                      {step.phase}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-realvo-charcoal mb-3">
                    {step.title}
                  </h3>

                  {/* Bullets – matched to CaptureOptions teal bullets */}
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-realvo-teal shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ImplementationProcess;


