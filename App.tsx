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
import Section from './components/Section';
import PrivateEnclosedBooth from './pages/PrivateEnclosedBooth';
import ImplementationProcess from './components/ImplementationProcess';
import FreeStandingKiosk from './pages/FreeStandingKiosk';
import DesktopTabletKiosk from './pages/DesktopTabletKiosk';
import VirtualVideoBooth from './pages/VirtualVideoBooth';
import ContactForm from './components/ContactForm';

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
          className="border-t border-gray-100 !pt-10 md:!pt-20"
        >
          <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              <h2
                ref={contactHeadlineRef}
                className="text-3xl md:text-4xl font-bold tracking-[-0.02em] leading-tight text-realvo-charcoal dark:text-white"
              >
                Ready to{' '}
                <span
                  className={
                    contactInView
                      ? 'text-realvo-blue animate-pulse-once'
                      : 'text-realvo-blue'
                  }
                >
                  capture real voices?
                </span>
              </h2>

              <p className="text-lg text-gray-600">
                Tell us about your program — your goals, timing, and where voices will be shared.
              </p>

              <p className="text-sm text-gray-500">
                A member of our team will be in touch within 24 hours.
              </p>

              {/* Contact image */}
<div className="pt-6 w-full">
  <img
  src="/capture/contact-form/contact-form-naco.png"
  alt="RealVo capture example"
  loading="lazy"
  decoding="async"
  width={1200}
  height={675}
  className="w-full rounded-2xl shadow-lg object-cover opacity-0 transition-opacity duration-500"
  onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
/>
</div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <ContactForm
                onSubmit={handleSubmit}
                submitted={submitted}
                phone={phone}
                onPhoneChange={handlePhoneChange}
              />
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
