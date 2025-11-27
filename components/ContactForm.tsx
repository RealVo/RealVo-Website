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
          name="name"
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-realvo-blue focus:border-realvo-blue"
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
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-realvo-blue focus:border-realvo-blue"
          placeholder="you@company.com"
        />
      </div>

      {/* Organization */}
      <div className="md:col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Organization
        </label>
        <input
          type="text"
          name="organization"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-realvo-blue focus:border-realvo-blue"
          placeholder="Your company, university, or hospital"
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
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-realvo-blue focus:border-realvo-blue"
          placeholder="e.g. Director of Employee Experience"
        />
      </div>

      {/* What are you interested in? */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          How can we help?<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-realvo-blue focus:border-realvo-blue"
          placeholder="Tell us about your event, program, or objectives..."
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
          <span>I’d like to schedule a live demo of RealVo.</span>
        </label>
      </div>

      {/* Submit */}
      <div className="md:col-span-2 flex justify-start">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-realvo-blue px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-realvo-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-realvo-blue"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

