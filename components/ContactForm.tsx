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

      {/* Inquiry */}
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
          <option value="" disabled>Select one</option>
          <option value="Purchase">Purchase</option>
          <option value="Rental - 1 week or less">Rental (1-week or less)</option>
          <option value="Rental - 1 month or less">Rental (1-month or less)</option>
          <option value="Rental - more than 1 month">Rental (More than 1-month)</option>
          <option value="Custom / Bespoke">Custom / Bespoke</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Capture Solution */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          CAPTURE SOLUTION<span className="text-red-500">*</span>
        </label>
        <select
          name="captureSolution"
          required
          className="w-full h-11 rounded-lg border border-gray-300 bg-white text-sm px-3 py-2 focus:border-realvo-blue focus:ring-realvo-blue"
          defaultValue=""
        >
          <option value="" disabled>Select a solution</option>
          <option value="Private Enclosed Booth">Private Enclosed Booth</option>
          <option value="Free-standing Kiosk">Free-standing Kiosk</option>
          <option value="Desktop Tablet Kiosk">Desktop Tablet Kiosk</option>
          <option value="Virtual Video Booth">Virtual Video Booth</option>
          <option value="Not sure yet / Exploring options">Not sure yet / Exploring options</option>
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
          <option value="" disabled>Select range</option>
          <option value="< 5000">Less than $5k</option>
          <option value="5000-10000">$5k – $10k</option>
          <option value="10000-15000">$10k – $15k</option>
          <option value="15000-25000">$15k – $25k</option>
          <option value="25000+">$25k+</option>
          <option value="unsure">Not sure yet / Exploring options</option>
        </select>
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

      {/* Submit */}
      <div className="pt-2">
        <Button type="submit" size="lg" variant="primary" className="w-full sm:w-auto">
          Submit
        </Button>

        <p className="mt-2 text-xs text-gray-400">
          <span className="text-red-500">*</span> Required fields
        </p>

        {submitted && (
          <p className="mt-2 text-sm text-green-600">
            Thank you — your details have been submitted. We’ll be in touch shortly.
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;

