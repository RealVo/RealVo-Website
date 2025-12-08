import React from 'react';
import Section from './Section';

const steps = [
  {
    number: '1',
    label: 'Assess',
    title: 'Align on objectives',
    points: [
      'Clarify business goals and success metrics',
      'Map audiences, locations, and environments',
      'Match RealVo use cases to your programs',
    ],
  },
  {
    number: '2',
    label: 'Design',
    title: 'Shape the experience',
    points: [
      'Select capture options and booth configuration',
      'Design branded interface, prompts, and flows',
      'Plan review, approval, and publishing paths',
    ],
  },
  {
    number: '3',
    label: 'Deploy',
    title: 'Launch on site',
    points: [
      'Coordinate delivery, setup, and on-site testing',
      'Verify connectivity, lighting, and audio quality',
      'Train RealVo staff or your team as needed',
    ],
  },
  {
    number: '4',
    label: 'Support',
    title: 'Sustain and improve',
    points: [
      'Provide live technical support during activations',
      'Manage content in VideoBooth.tv after events',
      'Review results and recommend next-step improvements',
    ],
  },
];

const ImplementationProcess: React.FC = () => {
  return (
    <Section
      id="process-platform"
      background="light"
      className="border-t border-gray-100"
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal mb-4">
          How We Deliver a Successful RealVo Program
        </h2>
        <p className="text-lg text-gray-600">
          We partner with you from first idea to ongoing support, so your
          capture experience launches smoothly and keeps delivering value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-6 pt-8 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            {/* Big ghosted number */}
            <div className="pointer-events-none absolute inset-0 flex items-start justify-start">
              <span className="text-7xl font-black text-realvo-blue/5 leading-none pl-3 pt-1">
                {step.number}
              </span>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue mb-1">
                {step.label}
              </p>
              <h3 className="text-lg font-semibold text-realvo-charcoal mb-3">
                {step.title}
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {step.points.map((point) => (
                  <li key={point} className="leading-snug">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ImplementationProcess;
