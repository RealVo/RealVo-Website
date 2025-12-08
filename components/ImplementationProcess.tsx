import React from 'react';
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
      'Clarify business goals and success measures.',
      'Map audiences, locations, and timelines.',
      'Match capture options to your use cases.',
    ],
    icon: Target,
  },
  {
    phase: 'Design',
    title: 'Shape the experience',
    bullets: [
      'Select capture options and booth configurations.',
      'Design branded interface, prompts, and visuals.',
      'Plan review, approval, and publishing paths.',
    ],
    icon: LayoutTemplate,
  },
  {
    phase: 'Deploy',
    title: 'Launch on site',
    bullets: [
      'Coordinate delivery, setup, and on-site testing.',
      'Verify connectivity, lighting, and audio quality.',
      'Train RealVo staff or your team as needed.',
    ],
    icon: Rocket,
  },
  {
    phase: 'Support',
    title: 'Sustain and improve',
    bullets: [
      'Provide live technical support during activations.',
      'Manage content in VideoBooth.tv after events.',
      'Review results and recommend next-step improvements.',
    ],
    icon: LifeBuoy,
  },
];

const ImplementationProcess: React.FC = () => {
  return (
    <Section
      id="process-platform"
      background="white"
      padding="lg"
      className="border-t border-gray-100"
    >
      {/* Teal band wraps headline + cards */}
      <div className="rounded-3xl bg-realvo-teal/10 px-5 py-8 md:px-10 md:py-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal mb-4">
            Your Guided Path to a Successful Program
          </h2>
          <p className="text-lg text-gray-700">
            We partner with you from first idea to ongoing support, so your
            capture experience launches smoothly and keeps delivering value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.phase}
                className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm
                           hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
                           overflow-hidden"
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

