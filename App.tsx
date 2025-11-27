import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import WhatYouCanAchieve from './components/WhatYouCanAchieve';
import HowItWorks from './components/HowItWorks';
import CaptureOptions from './components/CaptureOptions';
import VBPlatform from './components/VBPlatform';
import Industries from './components/Industries';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Section from './components/Section';
import Button from './components/Button';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white transition-colors duration-300">
      <Header />

      <main className="flex-grow">
        <Hero />
        <TrustedBy />
        <WhatYouCanAchieve />
        <HowItWorks />
        <CaptureOptions />
        <VBPlatform />
        <Industries />
        <Pricing />

        {/* Final CTA + Inline Contact Form */}
        <Section
          id="contact"
          className="border-t border-gray-100"
          background="white"
        >
          <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Text + Demo CTA */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal tracking-tight">
                Ready to hear real voices?
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Tell us a bit about your organization and we’ll follow up to
                explore the best way to bring RealVo to your events or programs.
              </p>

              <div className="space-y-3">
                <p className="text-sm text-gray-500">
                  Prefer to see it in action?
                </p>
                <Button size="md" variant="outline">
                  Schedule a Demo
                </Button>
                <p className="text-xs text-gray-400">
                  We typically respond within 1–2 business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
