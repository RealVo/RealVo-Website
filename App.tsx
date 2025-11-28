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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

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
    } catch (err) {
      console.error('Form submission error', err);
      // If you want, we can add an error message state later
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

        {/* Contact / Final CTA */}
        <Section
          id="contact"
          background="white"
          padding="lg"
          className="border-t border-gray-100"
        >
          <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-start">
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal tracking-tight">
                Ready to hear real voices?
              </h2>
              <p className="text-lg text-gray-600">
                Tell us a little about your program — goals, timing, and where you’ll
                be capturing voices.
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
                    Don’t fill this out if you’re human: <input name="bot-field" />
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

                      {/* Rest of world */}
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Brazil">Brazil</option>
                      <option value="China">China</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Egypt">Egypt</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                      <option value="Greece">Greece</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="India">India</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Italy">Italy</option>
                      <option value="Japan">Japan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Singapore">Singapore</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Korea">South Korea</option>
                      <option value="Spain">Spain</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Vietnam">Vietnam</option>
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
                      className="w-full h-11 rounded-lg border border-gray-300 text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
                      placeholder="+1 (555) 000-0000"
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
                      Thank you — your details have been submitted. We’ll be in touch
                      shortly.
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

export default App;
