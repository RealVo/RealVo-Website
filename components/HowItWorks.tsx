import React from 'react';
import Section from './Section';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Welcome & Context',
    description: 'Set the stage with a custom welcome message.',
  },
  {
    number: '02',
    title: 'Disclaimer & Privacy',
    description: 'Clear, transparent permissions.',
  },
  {
    number: '03',
    title: 'Profile Questions',
    description: 'Understand who is speaking (name, email, role, etc.).',
  },
  {
    number: '04',
    title: 'Reflection',
    description: 'Guided prompts to elicit deep thought.',
  },
  {
    number: '05',
    title: 'Record',
    description:
      'Capture messages in a calm, distraction-free recording interface.',
  },
  {
    number: '06',
    title: 'Review or Retry',
    description: 'Participants can refine what they said before submitting.',
  },
  {
    number: '07',
    title: 'Submit & Upload',
    description: 'Secure transfer to your VB.tv dashboard.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <Section
      id="how-it-works"
      background="light"
      padding="lg"
      className="relative"
    >
      <div className="grid gap-12 lg:grid-cols-2 items-start">
        {/* Left: Steps */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal dark:text-white mb-4">
            How <span className="text-realvo-blue">RealVo</span> Works
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
            A simple, human-centered workflow for capturing meaningful messages
            — in person or online. We&apos;ve removed the friction so you can
            focus on the insight.
          </p>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-start gap-4">
                {/* Timeline / number column */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full border border-gray-300 bg-white dark:bg-gray-800 flex items-center justify-center text-xs font-semibold text-gray-600 dark:text-gray-200">
                    {step.number}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 dark:bg-gray-700 mt-1" />
                  )}
                </div>

                {/* Text column */}
                <div>
                  <h3 className="text-base font-semibold text-realvo-charcoal dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Recorder mock / visual */}
        <div className="relative">
          <div className="absolute -top-6 -right-6 w-64 h-64 bg-realvo-blue/5 rounded-3xl blur-2xl pointer-events-none hidden md:block" />
          <div className="relative bg-realvo-charcoal rounded-3xl shadow-2xl overflow-hidden border border-gray-900">
            {/* Fake window header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-gray-400">RealVo Recorder</span>
            </div>

            {/* Main recording area */}
            <div className="px-8 py-10 flex flex-col items-center text-center space-y-6 bg-[#060814]">
              <p className="text-lg sm:text-xl font-semibold text-white max-w-md">
                &quot;How has this event impacted your perspective?&quot;
              </p>

              <button
                type="button"
                className="w-16 h-16 rounded-full border-4 border-red-500 flex items-center justify-center"
              >
                <span className="w-7 h-7 rounded-md bg-red-500" />
              </button>

              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-xs font-medium text-white tracking-wide">
                00:42 / 02:00
              </div>

              <div className="w-full mt-4 space-y-2">
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-2/3 bg-realvo-teal" />
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-1/3 bg-realvo-blue/70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
