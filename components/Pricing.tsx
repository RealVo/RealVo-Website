import React, { useEffect, useRef } from 'react';
import Section from './Section';
import Button from './Button';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'Tier 1',
    description: 'Single Day Activation',
    priceLabel: 'Event Focus',
    features: [
      '1 Day On-site Support',
      'VB.tv Access (1 Month)',
      'Standard Branding',
      'Raw File Export',
    ],
    highlight: false,
  },
  {
    name: 'Tier 2',
    description: 'Multi-Day Activation',
    priceLabel: 'Conference Pro',
    features: [
      '3 Days On-site Support',
      'VB.tv Access (3 Months)',
      'Custom Branding Wrap',
      'Transcriptions included',
      'Priority Support',
    ],
    highlight: true,
  },
  {
    name: 'Tier 3',
    description: 'Monthly Subscription',
    priceLabel: 'Enterprise',
    features: [
      'Permanent Install',
      'Annual VB.tv Access',
      'Single Sign-On (SSO)',
      'Advanced Analytics',
      'API Access',
    ],
    highlight: false,
  },
];

const Pricing: React.FC = () => {
  const pricingRef = useRef<HTMLSpanElement | null>(null);

  // Re-trigger pulse animation when "Pricing" scrolls into view
  useEffect(() => {
    const node = pricingRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            node.classList.remove('animate-pulse-once');
            void node.offsetWidth; // force reflow
            node.classList.add('animate-pulse-once');
          }
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="pricing" background="light">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-realvo-charcoal dark:text-white mb-4">
          Clear, Flexible{' '}
          <span ref={pricingRef} className="text-realvo-teal animate-pulse-once">
            Pricing
          </span>
        </h2>

        <p className="text-gray-600 dark:text-gray-300">
          Solutions for organizations of any size. Contact us for a custom quote.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl p-8 flex flex-col ${
              tier.highlight
                ? 'bg-white dark:bg-realvo-charcoal shadow-xl border-2 border-realvo-blue transform md:-translate-y-4 z-10'
                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm'
            }`}
          >
            {tier.highlight && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-realvo-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                Most Popular
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                {tier.name}
              </h3>
              <p className="text-2xl font-bold text-realvo-charcoal dark:text-white mt-2">
                {tier.description}
              </p>
              <p className="text-realvo-blue dark:text-realvo-teal font-medium mt-1">
                {tier.priceLabel}
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button variant={tier.highlight ? 'primary' : 'outline'} className="w-full">
              Request Quote
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Pricing;
