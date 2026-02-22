import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';

  const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [phone, setPhone] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Minimal header — logo only */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <a href="/" aria-label="Back to RealVo home">
              <img src="/logo-header.png" alt="RealVo" className="h-7 w-auto" />
            </a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-realvo-teal uppercase tracking-widest mb-3">
                  Get in Touch
                </p>
                <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] leading-tight text-realvo-charcoal">
                  Ready to{' '}
                  <span className="text-realvo-blue">capture real voices?</span>
                </h1>
              </div>
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
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2026 RealVo. RealVo is powered by VideoBooth Inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="/" className="hover:text-realvo-blue transition">Home</a>
              <span>·</span>
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-realvo-blue transition">Privacy Policy</a>
              <span>·</span>
              <a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-realvo-blue transition">Terms of Use</a>
              <span>·</span>
              <a href="/security-and-data-protection" target="_blank" rel="noopener noreferrer" className="hover:text-realvo-blue transition">Security & Data Protection</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
