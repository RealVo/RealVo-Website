import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left"
    >
      {/* Netlify form name */}
      <input type="hidden" name="form-name" value="contact" />

      {/* Full Name */}
      <div className="md:col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          required
          className="w-full h-11 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-realvo-blue focus:border-realvo-blue"
          placeholder="Jane Doe"
        />
      </div>

      {/* Email */}
      <div className="md:col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full h-11 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-realvo-blue focus:border-realvo-blue"
          placeholder="you@company.com"
        />
      </div>

      {/* Country */}
      <div className="md:col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Country<span className="text-red-500">*</span>
        </label>
        <select
          name="country"
          required
          className="w-full h-11 rounded-md border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-realvo-blue focus:border-realvo-blue"
          defaultValue=""
        >
          <option value="" disabled>
            Select your country
          </option>
          <option value="Canada">Canada</option>
          <option value="United States">United States</option>

          {/* A compact but useful remainder list */}
          <option value="United Kingdom">United Kingdom</option>
          <option value="Australia">Australia</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Ireland">Ireland</option>
          <option value="Sweden">Sweden</option>
          <option value="Norway">Norway</option>
          <option value="Denmark">Denmark</option>
          <option value="Spain">Spain</option>
          <option value="Italy">Italy</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Belgium">Belgium</option>
          <option value="Singapore">Singapore</option>
          <option value="Hong Kong">Hong Kong</option>
          <option value="India">India</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="South Africa">South Africa</option>
          <option value="Brazil">Brazil</option>
          <option value="Mexico">Mexico</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Phone Number */}
      <div className="md:col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full h-11 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-realvo-blue focus:border-realvo-blue"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      {/* Organization */}
      <div className="md:col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Organization<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="organization"
          required
          className="w-full h-11 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-realvo-blue focus:border-realvo-blue"
          placeholder="Company / University / Hospital / Community / Non-profit"
        />
      </div>

      {/* Role / Title */}
      <div className="md:col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Role / Title
        </label>
        <input
          type="text"
          name="role"
          className="w-full h-11 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-realvo-blue focus:border-realvo-blue"
          placeholder="e.g. Director of Employee Experience"
        />
      </div>

      {/* Nature of Inquiry */}
      <div className="md:col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nature of Inquiry<span className="text-red-500">*</span>
        </label>
        <select
          name="nature"
          required
          className="w-full h-11 rounded-md border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-realvo-blue focus:border-realvo-blue"
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="Purchase">Purchase</option>
          <option value="Rental - 1 week or less">Rental (1-week or less)</option>
          <option value="Rental - 1 month or less">Rental (1-month or less)</option>
          <option value="Rental - more than 1 month">Rental (More than 1-month)</option>
        </select>
      </div>

      {/* Budget Range */}
      <div className="md:col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Budget Range<span className="text-red-500">*</span>
        </label>
        <select
          name="budget"
          required
          className="w-full h-11 rounded-md border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-realvo-blue focus:border-realvo-blue"
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

      {/* Activation Details */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tell us about your activation or program<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          rows={3}
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-realvo-blue focus:border-realvo-blue"
          placeholder="Share timing, location(s), audience, key goals, and how you’ll measure success."
        />
      </div>

      {/* Schedule a Demo interest */}
      <div className="md:col-span-2">
        <label className="inline-flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            name="schedule_demo"
            value="yes"
            className="rounded border-gray-300 text-realvo-blue focus:ring-realvo-blue"
          />
          <span>I’d like to schedule a live demo and planning call.</span>
        </label>
      </div>

      {/* Required note + Submit + Confirmation */}
      <div className="md:col-span-2 flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-gray-500">
            Required fields are marked with <span className="text-red-500">*</span>
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-realvo-blue px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-realvo-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-realvo-blue"
          >
            Submit
          </button>
        </div>

        <p className="text-xs text-gray-500">
          Once submitted, a member of our team will follow up with you, typically within one business day.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
