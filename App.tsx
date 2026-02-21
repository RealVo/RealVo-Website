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
import WhyWhatBridge from './components/WhyWhatBridge';
import HowItWorks from './components/HowItWorks';
import CaptureOptions from './components/CaptureOptions';
import VBPlatform from './components/VBPlatform';
import Industries from './components/Industries';
import UseCases from './pages/UseCases';
import ProgramStructure from './components/ProgramStructure';
import Footer from './components/Footer';
import Section from './components/Section';
import PrivateEnclosedBooth from './pages/PrivateEnclosedBooth';
import ImplementationProcess from './components/ImplementationProcess';
import FreeStandingKiosk from './pages/FreeStandingKiosk';
import DesktopTabletKiosk from './pages/DesktopTabletKiosk';
import VirtualVideoBooth from './pages/VirtualVideoBooth';
import ContactForm from './components/ContactForm';
import VBPlatform_More from './pages/VBPlatform_More';
import TorontoVideoBooth from './pages/TorontoVideoBooth';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import SecurityAndDataProtection from './pages/SecurityAndDataProtection';

// ------------------------
// ONE scroll system (the only one)
// Scrolls so the first H1/H2 inside the section sits right under the sticky header
// (eliminates the "gap" caused by section padding)
// ------------------------
const HashScroller: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;

    const id = hash.slice(1);

    let tries = 0;
    const maxTries = 120; // ~2s at 60fps

    const tryScroll = () => {
      const sectionEl = document.getElementById(id);
      if (!sectionEl) {
        tries += 1;
        if (tries < maxTries) requestAnimationFrame(tryScroll);
        return;
      }

      const header = document.querySelector('header');
      const headerH = header ? Math.round(header.getBoundingClientRect().height) : 65;

      // small, consistent spacing under header
      const breathing = 8;

      // Find first heading inside the section
      const heading = sectionEl.querySelector('h1, h2') as HTMLElement | null;

      // Measure how far the heading sits from the section top (padding/margins/etc)
      const sectionTop = sectionEl.getBoundingClientRect().top + window.scrollY;

      let extraInsideSection = 0;
      if (heading) {
        const headingTop = heading.getBoundingClientRect().top + window.scrollY;
        extraInsideSection = Math.max(0, headingTop - sectionTop);
      }

      // Scroll to sectionTop + extraInsideSection, then offset for sticky header
      const y = sectionTop + extraInsideSection - (headerH + breathing);

      window.scrollTo({ top: Math.max(0, y), left: 0, behavior: 'auto' });
    };

    requestAnimationFrame(tryScroll);
  }, [location.pathname, location.hash]);

  return null;
};

// ------------------------
// Home / Landing page
// ------------------------
const HomePage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');

  const [contactInView, setContactInView] = useState(false);
  const contactHeadlineRef = useRef<HTMLHeadingElement | null>(null);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    const len = digits.length;

    if (len <= 3) return digits;
    if (len <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!formData.get('phone')) formData.set('phone', phone);
    if (!formData.get('form-name')) formData.append('form-name', 'contact');

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

  useEffect(() => {
    const node = contactHeadlineRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => setContactInView(entry.isIntersecting));
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
        <Hero />
        <TrustedBy />

                {/* WHY + WHAT chapter */}
        <section id="why-realvo-exists" style={{ scrollMarginTop: '72px' }}>
  <WhyWhatBridge />
</section>

<section id="industries" style={{ scrollMarginTop: '72px' }}>
  <Industries />
</section>

<section id="solutions" style={{ scrollMarginTop: '72px' }}>
  <CaptureOptions />
</section>

<section id="implementation-process" style={{ scrollMarginTop: '72px' }}>
  <ImplementationProcess />
</section>

<section id="how-it-works" style={{ scrollMarginTop: '72px' }}>
  <HowItWorks />
</section>

<section id="process-platform" style={{ scrollMarginTop: '72px' }}>
  <VBPlatform />
</section>

<section id="program-structure" style={{ scrollMarginTop: '72px' }}>
  <ProgramStructure />
</section>

        <Section
          id="contact"
          background="white"
          padding="lg"
          className="border-t border-gray-100 !pt-10 md:!pt-20"
        >
          <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-start">
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

              <div className="pt-4">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-100 aspect-video">
                  <img
                    src="/capture/contact-form/contact-form-naco.png"
                    alt="RealVo participant sharing their story"
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={675}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

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
      <HashScroller />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/capture/private-enclosed-booth" element={<PrivateEnclosedBooth />} />
        <Route path="/capture/free-standing-kiosk" element={<FreeStandingKiosk />} />
        <Route path="/capture/desktop-tablet-kiosk" element={<DesktopTabletKiosk />} />
        <Route path="/capture/virtual-video-booth" element={<VirtualVideoBooth />} />
        <Route path="/vbplatform-more" element={<VBPlatform_More />} />
        <Route path="/toronto-video-booth" element={<TorontoVideoBooth />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/security-and-data-protection" element={<SecurityAndDataProtection />} />
      </Routes>
    </Router>
  );
};

export default App;
