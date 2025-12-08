import React from 'react';
import Section from './Section';
import type { LucideIcon } from 'lucide-react';
import { Target, PenTool, Rocket, LifeBuoy } from 'lucide-react';

type Step = {
  phase: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    phase: 'Assess',
    title: 'Align on objectives',
    description:
      'Clarify business goals, audiences, locations, and timelines so we know exactly what RealVo needs to deliver.',
    icon: Target,
  },
  {
    phase: 'Design',
    title: 'Shape the experience',
    description:
      'Select capture options, booth configuration, prompts, and branding to match your program and culture.',
    icon: PenTool,
  },
  {
    phase: 'Deploy',
    title: 'Launch on site',
    description:
      'Coordinate delivery, setup, testing, and training so recording day runs smoothly from first voice to last.',
    icon: Rocket,
  },
  {
    phase: 'Support',
    title: 'Sustain and improve',
    description:
      'Provide live support, manage content in VideoBooth.tv, and review results to recommend next-step improvements.',
    icon: LifeBuoy,
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

      {/* Process row – infographic style */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.phase}
              className="flex flex-col items-center text-center"
            >
              {/* Icon circle + step number */}
              <div className="relative mb-5">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-realvo-blue to-realvo-teal flex items-center justify-center text-white shadow-xl">
                  <Icon className="w-9 h-9" strokeWidth={1.7} />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white border border-realvo-blue/30 flex items-center justify-center text-xs font-semibold text-realvo-blue shadow-sm">
                  {index + 1}
                </div>
              </div>

              {/* Labels + text */}
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-realvo-slate mb-1">
                {step.phase}
              </p>
              <h3 className="text-base md:text-lg font-semibold text-realvo-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default ImplementationProcess;
