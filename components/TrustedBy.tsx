import React from 'react';
import Section from './Section';

const TrustedBy: React.FC = () => {
  return (
    <Section
      id="trustedby"
      background="light"
      padding="lg"
      className="text-center"
    >
      {/* New heading */}
      <h2 className="text-xl sm:text-2xl font-semibold text-realvo-charcoal dark:text-white mb-10">
        Built on over 15 years of enterprise video capture experience.
      </h2>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-10 items-center justify-center opacity-80">
        {/* Example logos — keep or update */}
        <img
          src="/logos/purdue.svg"
          alt="Purdue University"
          className="h-10 sm:h-12 object-contain mx-auto"
        />
        <img
          src="/logos/mastercard.svg"
          alt="Mastercard"
          className="h-10 sm:h-12 object-contain mx-auto"
        />
        <img
          src="/logos/bannerhealth.svg"
          alt="Banner Health"
          className="h-10 sm:h-12 object-contain mx-auto"
        />
        <img
          src="/logos/canadian-pacific.svg"
          alt="Canadian Pacific"
          className="h-10 sm:h-12 object-contain mx-auto"
        />
        <img
          src="/logos/kelloggs.svg"
          alt="Kellogg’s"
          className="h-10 sm:h-12 object-contain mx-auto"
        />
      </div>
    </Section>
  );
};

export default TrustedBy;
