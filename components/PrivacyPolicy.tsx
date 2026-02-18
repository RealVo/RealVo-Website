import React from 'react';
import Section from '../components/Section';

const PrivacyPolicy: React.FC = () => {
  return (
    <Section padding="lg" background="white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-realvo-charcoal mb-8">
          Privacy Policy
        </h1>

        {/* Replace everything below with your actual policy copy */}

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            This Privacy Policy describes how RealVo collects, uses, and
            protects your information.
          </p>

          <h2 className="text-lg font-semibold text-realvo-charcoal">
            1. Information We Collect
          </h2>
          <p>
            Placeholder text. Replace with your actual content.
          </p>

          <h2 className="text-lg font-semibold text-realvo-charcoal">
            2. How We Use Information
          </h2>
          <p>
            Placeholder text. Replace with your actual content.
          </p>

          <h2 className="text-lg font-semibold text-realvo-charcoal">
            3. Contact Information
          </h2>
          <p>
            If you have questions about this policy, contact us at hello@realvo.com.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default PrivacyPolicy;
