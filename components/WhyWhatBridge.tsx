// src/components/WhyWhatBridge.tsx
import React from 'react';
import WhyRealVoExists from './WhyRealVoExists';
import WhatYouCanAchieve from './WhatYouCanAchieve';

const WhyWhatBridge: React.FC = () => {
  return (
    <div className="scroll-mt-24">
      {/* WHY (white) + seam overlap */}
      <div className="relative pb-20 sm:pb-20 md:pb-24">
  <WhyRealVoExists showInsightCard={false} />

        {/* Seam Insight Card overlaps down into the next section */}
        <div className="absolute inset-x-0 top-full -translate-y-1/2 z-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl">
              <SeamInsightCard />
            </div>
          </div>
        </div>
      </div>

      {/* WHAT (teal background) with extra top padding so the overlap has space */}
      <WhatYouCanAchieve topPad />
    </div>
  );
};

function SeamInsightCard() {
  return (
    <div
      className="
        relative
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-800
        rounded-2xl
        px-10 py-8
        shadow-md
        w-full
        text-center
      "
    >
      {/* Icon badge */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <div
          className="
            bg-realvo-light dark:bg-gray-800
            p-4
            rounded-full
            shadow-md
            border border-gray-200 dark:border-gray-700
            flex items-center justify-center
          "
        >
          <svg
            className="
              w-7 h-7
              text-realvo-teal
              drop-shadow-[0_3px_8px_rgba(80,180,170,0.45)]
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </div>

      <p className="mt-4 text-2xl md:text-3xl font-semibold leading-snug tracking-tight">
        <span className="block text-gray-500 dark:text-gray-400">
          When people feel safe to speak,
          <span className="hidden md:inline">,</span>
        </span>

        <span className="block md:hidden" />

        <span className="block mt-1 text-realvo-charcoal dark:text-white font-bold">
          their voices carry meaning — not just words.
        </span>
      </p>
    </div>
  );
}

export default WhyWhatBridge;
