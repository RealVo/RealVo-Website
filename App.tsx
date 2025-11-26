import React, { useState, useEffect } from 'react';
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
import Button from './components/Button';
import Section from './components/Section';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

GitHub App.tsx

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
import Button from './components/Button';
import Section from './components/Section';

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
        
        {/* Final CTA */}
        <Section className="text-center py-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
             <h2 className="text-4xl md:text-5xl font-bold text-realvo-charcoal mb-8 tracking-tight">
              Ready to hear real voices?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Join the organizations that listen as closely as they lead.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="primary">Contact Us</Button>
              <Button size="lg" variant="outline">Schedule a Demo</Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
