import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import './styles.css';

import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import WhyRealVoExists from './components/WhyRealVoExists';
import WhatYouCanAchieve from './components/WhatYouCanAchieve';
import HowItWorks from './components/HowItWorks';
import CaptureOptions from './components/CaptureOptions';
import VBPlatform from './components/VBPlatform';
import Industries from './components/Industries';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Button from './components/Button';
import Section from './components/Section';
import PrivateEnclosedBooth from './pages/PrivateEnclosedBooth';
import ImplementationProcess from './components/ImplementationProcess';
import FreeStandingKiosk from './pages/FreeStandingKiosk';
import DesktopTabletKiosk from './pages/DesktopTabletKiosk';
import VirtualVideoBooth from './pages/VirtualVideoBooth';

// ------------------------
// Home / Landing page
// ------------------------
const HomePage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');

  // contact headline animation state
  const [contactInView, setContactInView] = useState(false);
  const contactHeadlineRef = useRef<HTMLHeadingElement | null>(null);

  // 👇 Watch the URL hash and scroll to the matching section when needed
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace('#', '');
    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // small timeout to ensure layout is ready
    setTimeout(scrollToTarget, 0);
  }, [location]);

  // Format as 555-123-4567 while typing
  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10); // max 10 digits
    const len = digits.length;

    if (len <= 3) return digits;
    if (len <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Ensure Netlify sees a phone value (formatted)
    if (!formData.get('phone')) {
      formData.set('phone', phone);
    }

    // Netlify requires form-name in the POST body
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
      setPhone('');
    } catch (err) {
      console.error('Form submission error', err);
    }
  };

  // Observe the contact headline so the pulse can re-trigger on scroll
  useEffect(() => {
    const node = contactHeadlineRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setContactInView(entry.isIntersecting);
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white transition-colors duration-300">
      <Header />

      <main className="flex-grow">
        {/* HERO + SOCIAL PROOF */}
        <Hero />
        <TrustedBy />

        {/* NEW: Why RealVo Exists section */}
        <WhyRealVoExists />

        <WhatYouCanAchieve />
        <Industries />
        <CaptureOptions />

        {/* Process & Platform overview */}
        <ImplementationProcess />

        {/* Participant workflow + platform */}
        <HowItWorks />
        <VBPlatform />
        <Pricing />

        {/* CONTACT SECTION – note id="contact" */}
        <Section
          id="contact"
          background="white"
          padding="lg"
          className="border-t border-gray-100"
        >
          <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              <h2
                ref={contactHeadlineRef}
                className="text-3xl md:text-4xl font-bold text-realvo-charcoal tracking-tight"
              >
                Ready to{' '}
                <span
                  className={
                    contactInView
                      ? 'text-realvo-blue animate-pulse-once'
                      : 'text-realvo-blue'
                  }
                >
                  hear real voices?
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Tell us a little about your program — goals, timing, and where
                you’ll be capturing voices.
              </p>
              <p className="text-sm text-gray-500">
                We typically respond within 1–2 business days.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-5"
                onSubmit={handleSubmit}
              >
                {/* Required by Netlify + honeypot field */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human:{' '}
                    <input name="bot-field" />
                  </label>
                </p>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    name="fullName"
                    required
                    className="w-full h-11 rounded-lg border border-gray-300 text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full h-11 rounded-lg border border-gray-300 text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Country + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="country"
                      required
                      className="w-full h-11 rounded-lg border border-gray-300 bg-white text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select your country
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="United States">United States</option>
                      {/* …rest of your country options… */}
                    </select>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      className="w-full h-11 rounded-lg border border-gray-300 text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
                      placeholder="555-123-4567"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organization<span className="text-red-500">*</span>
                  </label>
                  <input
                    name="organization"
                    required
                    className="w-full h-11 rounded-lg border border-gray-300 text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
                    placeholder="Company / University / Hospital / Community / Non-profit"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role / Title
                  </label>
                  <input
                    name="role"
                    className="w-full h-11 rounded-lg border border-gray-300 text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
                    placeholder="Director of Employee Experience"
                  />
                </div>

                {/* Inquiry + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nature */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nature of Inquiry<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="nature"
                      required
                      className="w-full h-11 rounded-lg border border-gray-300 bg-white text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option value="Purchase">Purchase</option>
                      <option value="Rental - 1 week or less">
                        Rental (1-week or less)
                      </option>
                      <option value="Rental - 1 month or less">
                        Rental (1-month or less)
                      </option>
                      <option value="Rental - more than 1 month">
                        Rental (more than 1-month)
                      </option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Budget Range<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="budget"
                      required
                      className="w-full h-11 rounded-lg border border-gray-300 bg-white text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select range
                      </option>
                      <option value="< 5000">Less than $5k</option>
                      <option value="5000-10000">$5k – $10k</option>
                      <option value="10000-15000">$10k – $15k</option>
                      <option value="15000-25000">$15k – $25k</option>
                      <option value="25000+">$25k+</option>
                    </select>
                  </div>
                </div>

                {/* Activation Details */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your activation<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    required
                    className="w-full rounded-lg border border-gray-300 text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
                    placeholder="Share timing, location, goals, outcomes"
                  />
                </div>

                {/* Submit + required note + success message */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    Submit
                  </Button>

                  <p className="mt-2 text-xs text-gray-400">
                    * Required fields
                  </p>

                  {submitted && (
                    <p className="mt-2 text-sm text-green-600">
                      Thank you — your details have been submitted. We’ll be in
                      touch shortly.
                    </p>
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

// ------------------------
// App routes
// ------------------------
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/capture/private-enclosed-booth"
          element={<PrivateEnclosedBooth />}
        />

        <Route
          path="/capture/free-standing-kiosk"
          element={<FreeStandingKiosk />}
        />

        <Route
          path="/capture/desktop-tablet-kiosk"
          element={<DesktopTabletKiosk />}
        />

        <Route
          path="/capture/virtual-video-booth"
          element={<VirtualVideoBooth />}
        />
      </Routes>
    </Router>
  );
};

export default App;
