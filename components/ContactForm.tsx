import React from 'react';
import Button from './Button';

type ContactFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitted: boolean;
  phone: string;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  submitted,
  phone,
  onPhoneChange,
}) => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-5"
      onSubmit={onSubmit}
    >
      {/* Required by Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      {/* Keep capturing Role in Netlify payload (even though field is removed from UI) */}
      <input type="hidden" name="role" value="" />

      {/* Honeypot */}
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
            <option value="" disabled>Select your country</option>
            <option value="Canada">Canada</option>
            <option value="United States">United States</option>
            <option value="Australia">Australia</option>
            <option value="Belgium">Belgium</option>
            <option value="Brazil">Brazil</option>
            <option value="Denmark">Denmark</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="India">India</option>
            <option value="Ireland">Ireland</option>
            <option value="Italy">Italy</option>
            <option value="Mexico">Mexico</option>
            <option value="Netherlands">Netherlands</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Norway">Norway</option>
            <option value="Singapore">Singapore</option>
            <option value="South Africa">South Africa</option>
            <option value="Spain">Spain</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            value={phone}
            onChange={onPhoneChange}
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

      {/* Program Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Program Type<span className="text-red-500">*</span>
        </label>
        <select
          name="programType"
          required
          className="w-full h-11 rounded-lg border border-gray-300 bg-white text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
          defaultValue=""
        >
          <option value="" disabled>
            Select a Program Type
          </option>
          
          <option value="Event Rental (1–5 days)">
            Event Rental (1–5 days)
          </option>

        <option value="Extended Rental (6+ days)">
          Extended Rental (6+ days)
        </option>

        <option value="Tour / Multi-Location Program">
          Tour / Multi-Location Program
        </option>

        <option value="Owned Installation (purchase / permanent placement)">
          Owned Installation (purchase / permanent placement)
        </option>

        <option value="Not sure yet / Need guidance">
          Not sure yet / Need guidance
        </option>
        </select>
      </div>

      {/* Primary Goal (optional but recommended) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Primary Goal <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <select
          name="primaryGoal"
          className="w-full h-11 rounded-lg border border-gray-300 bg-white text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
          defaultValue=""
        >
          <option value="" disabled>
            Select a goal (optional)
          </option>
          <option value="Testimonials">Testimonials</option>
          <option value="Customer Insights / Feedback">Customer Insights / Feedback</option>
          <option value="Employee Stories">Employee Stories</option>
          <option value="Brand / Awareness Content">Brand / Awareness Content</option>
          <option value="Community Stories">Community Stories</option>
          <option value="Other / Not sure yet">Other / Not sure yet</option>
        </select>
        <p className="mt-1 text-xs text-gray-400">Helps us prepare for your conversation.</p>
      </div>

      {/* Capture Format (optional) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Capture Format
        </label>
        <select
          name="captureSolution"
          className="w-full h-11 rounded-lg border border-gray-300 bg-white text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
          defaultValue=""
        >
          <option value="">Select a format (optional)</option>
          <option value="Private Enclosed Booth">Private Enclosed Booth</option>
          <option value="Free-standing Kiosk">Free-standing Kiosk</option>
          <option value="Desktop Tablet Kiosk">Desktop Tablet Kiosk</option>
          <option value="Virtual Video Booth">Virtual Video Booth</option>
          <option value="Not sure yet / Exploring options">Not sure yet / Exploring options</option>
        </select>
      </div>

      {/* When is your event or program? (required) */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    When is your event or program?<span className="text-red-500">*</span>
  </label>
  <select
    name="timeline"
    required
    className="w-full h-11 rounded-lg border border-gray-300 bg-white text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
    defaultValue=""
  >
    <option value="" disabled>Select timing</option>
    <option value="Within 4–6 weeks">Within 4–6 weeks</option>
    <option value="1–3 months">1–3 months</option>
    <option value="3–6 months">3–6 months</option>
    <option value="6+ months">6+ months</option>
    <option value="Exploring for next year">Exploring for next year</option>
    <option value="Just exploring / no date yet">Just exploring / no date yet</option>
  </select>
</div>

      {/* Estimated Investment Range (optional) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Estimated Investment Range <span className="text-gray-400">(optional)</span>
        </label>
        <select
          name="budget"
          className="w-full h-11 rounded-lg border border-gray-300 bg-white text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
          defaultValue=""
        >
          <option value="">Select a range (optional)</option>
          <option value="< 5000">Under $5k</option>
          <option value="5000-10000">$5k – $10k</option>
          <option value="10000-20000">$10k – $20k</option>
          <option value="20000-50000">$20k – $50k</option>
          <option value="50000+">$50k+</option>
          <option value="unsure">Not sure yet</option>
        </select>

        <p className="mt-1 text-xs text-gray-400">
          If you’re unsure, choose “Not sure yet” — we’ll help scope it.
        </p>
      </div>

      {/* Activation Details */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tell us about your program<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          rows={3}
          required
          className="w-full rounded-lg border border-gray-300 text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
          placeholder="Share dates, location(s), audience, and what you’re hoping to capture"
        />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <Button type="submit" size="lg" variant="primary" className="w-full sm:w-auto">
          Submit
        </Button>

        <p className="mt-2 text-xs text-gray-400">
          <span className="text-red-500">*</span> Required fields
        </p>

        {submitted && (
          <div className="mt-4 rounded-xl bg-realvo-teal/10 border border-realvo-teal px-5 py-4">
            <p className="text-realvo-teal font-semibold text-base">
              Thank you — we'll be in touch within 24 hours.
            </p>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
