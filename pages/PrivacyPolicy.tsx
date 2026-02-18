import React from 'react';
import Section from '../components/Section';

const PrivacyPolicy: React.FC = () => {
  return (
    <Section padding="lg">
      <div className="max-w-4xl mx-auto space-y-8 text-sm text-gray-700 leading-relaxed">
        
        <h1 className="text-3xl font-bold text-realvo-charcoal mb-2">
          Privacy Policy
        </h1>

        <p className="text-gray-500">
          Effective Date: February 17, 2026
        </p>

        <p>
          VideoBooth Inc. (“we,” “us,” or “our”) respects your privacy and is committed to protecting personal information in accordance with Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable U.S. state privacy laws.
        </p>

        <p>
          This Privacy Policy explains how we collect, use, disclose, store, and protect personal information when you rent or purchase video booths, participate in booth sessions, or interact with our websites (realvo.io, videobooth.ca, and related sites).
        </p>

        {/* Section 1 */}
        <div>
          <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
            1. Who We Are
          </h2>
          <p>
            VideoBooth Inc. is a Toronto-based company providing video booth rental and sales services. We act as a data processor for participant data collected through booths — our clients (organizations renting or buying booths) are the data controllers who determine the purposes of collection.
          </p>
          <p className="mt-2">
            Contact: <a href="mailto:hello@realvo.io" className="text-realvo-teal hover:underline">hello@realvo.io</a> | Toronto, Ontario, Canada
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
            2. Personal Information We Collect
          </h2>

          <p className="font-medium">From booth participants:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>First and last name</li>
            <li>Email address</li>
            <li>Additional fields requested by the client (e.g., phone, postal code, country, role)</li>
            <li>Video/photo recordings (including voice and likeness)</li>
          </ul>

          <p className="font-medium mt-4">From clients and website users:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Name, email, phone, organization</li>
            <li>IP address and browser/device information</li>
          </ul>

          <p className="mt-3">
            We do not collect sensitive personal information unless explicitly requested by the client and supported by their legal release.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
            3. How We Collect Information
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Participants enter data via booth interface after accepting a client-provided legal release.</li>
            <li>Video is processed locally, encoded, and uploaded to secure third-party servers.</li>
            <li>Website data is collected via forms or system logs.</li>
          </ul>
          <p className="mt-2">
            If a participant declines the release, no data is stored and the session resets.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
            4. How We Use Personal Information
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Deliver booth programs and transfer content to client dashboards</li>
            <li>Provide setup and technical support</li>
            <li>Process rentals, sales, and payments</li>
            <li>Maintain service quality (aggregated analytics only)</li>
            <li>Respond to inquiries or legal requirements</li>
          </ul>
          <p className="mt-2">
            We do not use participant data for our own marketing unless explicitly opted in.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
            5. Sharing & Disclosure
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>With our clients (data controllers)</li>
            <li>With VideoBooth Systems Ltd. (UK partner) and ISO 27001-certified hosting providers</li>
            <li>With trusted service providers under contractual safeguards</li>
            <li>If required by law</li>
          </ul>
          <p className="mt-2">
            We do not sell personal information.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
            6. Storage & Security
          </h2>
          <p>
            Data is processed locally on booth hardware and uploaded to secure ISO 27001-certified infrastructure. We apply role-based access controls and internal IT safeguards.
          </p>
          <p className="mt-2">
            Participant data is retained as directed by the client or typically deleted 30 days after program completion unless otherwise agreed.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
            7. Your Rights
          </h2>
          <p>
            Under PIPEDA and applicable U.S. laws, you may request access, correction, deletion, or withdrawal of consent where applicable.
          </p>
          <p className="mt-2">
            To exercise these rights, contact: <a href="mailto:hello@realvo.io" className="text-realvo-teal hover:underline">hello@realvo.io</a>
          </p>
        </div>

        {/* Section 8 */}
        <div>
          <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
            8. Cookies & Tracking
          </h2>
          <p>
            Our websites use cookies for functionality and analytics. Booths do not use cookies.
          </p>
        </div>

        {/* Section 9 */}
        <div>
          <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
            9. International Transfers
          </h2>
          <p>
            Data may be processed in Canada, the U.S., and the UK with appropriate contractual safeguards.
          </p>
        </div>

        {/* Section 10 */}
        <div>
          <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
            10. Client-Supplied Legal Releases
          </h2>
          <p>
            Any legal release text displayed within the booth interface is provided by the client and their legal counsel. Clients are responsible for ensuring compliance with applicable laws.
          </p>
        </div>

        {/* Section 11 */}
        <div>
          <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
            11. Changes to This Policy
          </h2>
          <p>
            We may update this policy periodically. Updates will be posted with a revised effective date.
          </p>
        </div>

        {/* Section 12 */}
        <div>
          <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
            12. Contact Us
          </h2>
          <p>
            Questions or concerns may be directed to <a href="mailto:hello@realvo.io" className="text-realvo-teal hover:underline">hello@realvo.io</a>.
          </p>
        </div>

      </div>
    </Section>
  );
};

export default PrivacyPolicy;
