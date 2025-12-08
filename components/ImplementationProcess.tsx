import React from 'react';
import Section from './Section';

type Step = {
  phase: string;
  title: string;
  points: string[];
};

const steps: Step[] = [
  {
    phase: 'Assess',
    title: 'Align on objectives',
    points: [
      'Clarify business goals and success measures.',
      'Map audiences, locations, and timelines.',
      'Match capture options to your use cases.',
    ],
  },
  {
    phase: 'Design',
    title: 'Shape the experience',
    points: [
      'Select capture options and booth configurations.',
      'Design branded interface, prompts, and visuals.',
      'Plan review, approval, and publishing paths.',
    ],
  },
  {
    phase: 'Deploy',
    title: 'Launch on site',
    points: [
      'Coordinate delivery, setup, and on-site testing.',
      'Verify connectivity, lighting, and audio quality.',
      'Train RealVo staff or your team as needed.',
    ],
  },
  {
    phase: 'Support',
    title: 'Sustain and improve',
    points: [
      'Provide live technical support during activations.',
      'Manage content in VideoBooth.tv after events.',
      'Review results and recommend next-step improvements.',
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
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal mb-3">
          How We Deliver a Successful RealVo Program
        </h2>
        <p className="text-lg text-gray-600">
          We partner with you from first idea to ongoing support, so your capture
          experience launches smoothly and keeps delivering value.
        </p>
      </div>

      {/* Steps grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={step.phase}
            className="relative bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-6 flex flex-col text-left overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            {/* Large soft number in the background */}
            <div className="absolute -top-3 -right-1 text-6xl font-black text-gray-100 select-none pointer-events-none">
              {index + 1}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-realvo-slate mb-1">
                {step.phase}
              </p>
              <h3 className="text-lg font-semibold text-realvo-charcoal mb-2">
                {step.title}
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {step.points.map(point => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-realvo-teal" />
                    <span>{point}</span>
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

