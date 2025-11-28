import React, { useState } from 'react';
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
  const [submitted, setSubmitted] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    const len = digits.length;

    if (len < 4) return digits;
    if (len < 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhoneValue(formatted);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!formData.get('phone')) {
      formData.set('phone', phoneValue);
    }
    if (!formData.get('form-name')) {
      formData.append('form-name', 'contact');
    }

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      setSubmitted(true);
      form.reset();
      setPhoneValue("");
    } catch (err) {
      console.error('Form submission error', err);
    }
  };

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

        <Section id="contact" background="white" padding="lg" className="border-t border-gray-100">
          <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal tracking-tight">
                Ready to hear real voices?
              </h2>
              <p className="text-lg text-gray-600">
                Tell us about your program — goals, timing, and where you’ll be capturing voices.
              </p>
              <p className="text-sm text-gray-500">We typically respond within 1–2 business days.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-5"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="phone" value={phoneValue} />
                <p className="hidden">
                  <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                </p>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input name="fullName" required className="w-full h-11 rounded-lg border border-gray-300 text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue" placeholder="Jane Doe" />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input name="email" type="email" required className="w-full h-11 rounded-lg border border-gray-300 text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue" placeholder="you@company.com" />
                </div>

                {/* Country + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Country unchanged... */}

                  {/* 📱 Phone - updated */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      inputMode="tel"
                      name="phone_input"
                      value={phoneValue}
                      onChange={handlePhoneChange}
                      className="w-full h-11 rounded-lg border border-gray-300 text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
                      placeholder="555-123-4567"
                    />
                  </div>
                </div>

                {/* (Rest of your form unchanged here)… */}

                {/* Submit */}
                <div className="pt-2">
                  <Button type="submit" size="lg" variant="primary" className="w-full sm:w-auto">Submit</Button>
                  <p className="mt-2 text-xs text-gray-400">* Required fields</p>
                  {submitted && (
                    <p className="mt-2 text-sm text-green-600">Thank you — your details have been submitted. We’ll be in touch shortly.</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
