// src/components/WhyWhatBridge.tsx
import React, { useEffect, useRef } from 'react';
import WhyRealVoExists from './WhyRealVoExists';
import WhatYouCanAchieve from './WhatYouCanAchieve';

const WhyWhatBridge: React.FC = () => {
  const deliversRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = deliversRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.remove('animate-pulse-once');
            void node.offsetWidth; // force reflow
            node.classList.add('animate-pulse-once');
          }
        });
      },
      { threshold: 0.55 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-mt-24">
      {/* WHY (white) + seam overlap */}
      <div className="relative pb-14 sm:pb-16 md:pb-14 lg:pb-12">
        <WhyRealVoExists showInsightCard={false} />

        {/* Seam Insight Card overlaps down into the next section */}
        <div className="absolute inset-x-0 top-full -translate-y-1/2 z-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl">
              <SeamInsightCard deliversRef={deliversRef} />
            </div>
          </div>
        </div>
      </div>

      {/* WHAT (teal background) */}
      <WhatYouCanAchieve topPad />
    </div>
  );
};

type SeamInsightCardProps = {
  deliversRef: React.RefObject<HTMLSpanElement | null>;
};

function SeamInsightCard({ deliversRef }: SeamInsightCardProps) {
  return (
    <div
      className="
        relative
        bg-realvo-teal
        border border-realvo-teal
        rounded-2xl
        px-10 py-8
        shadow-lg
        w-full
        text-center
      "
    >
      {/* Badge */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
        <div
          className="
            bg-white
            p-4
            rounded-full
            shadow-md
            border border-gray-200
            flex items-center justify-center
          "
        >
          <svg
            className="w-7 h-7 text-realvo-teal"
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

      {/* Headline */}
      <h3 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight leading-tight">
        <span className="text-realvo-charcoal">What RealVo </span>
        <span ref={deliversRef} className="inline-block animate-pulse-once">
  <span className="text-white">Delivers</span>
</span>
      </h3>
    </div>
  );
}

export default WhyWhatBridge;


