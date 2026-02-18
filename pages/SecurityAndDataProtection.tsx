import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';

const SecurityAndDataProtection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <Section padding="md">
          <div className="max-w-4xl mx-auto space-y-8 text-sm text-gray-700 leading-relaxed">
            <h1 className="text-3xl font-bold text-realvo-charcoal mb-2">
              Security &amp; Data Protection
            </h1>

            <p className="text-gray-500">Effective Date: February 17, 2026</p>

            <p>
              RealVo programs are delivered as a fully managed service. This page provides a
              high-level overview of the security and data protection practices we apply to
              protect client content and participant information.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                1. Our Security Approach
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  We follow documented internal security practices intended to protect systems,
                  devices, and data from internal and external threats.
                </li>
                <li>
                  Data handling is managed in alignment with GDPR principles and related data
                  protection requirements referenced in our internal policy.
                </li>
                <li>
                  Access is granted based on role and legitimate need.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                2. Access Controls &amp; Permissions
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Role-based access and permissions are used to limit access to systems and data.</li>
                <li>Access provisioning, de-provisioning, and access reviews are part of operational controls.</li>
                <li>
                  Note: Single Sign-On (SSO) may be required by some organizations; if requested,
                  we can discuss available options for your specific program.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                3. Data Protection &amp; Encryption Practices
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  Our internal policy includes encryption requirements (e.g., AES-256) for certain
                  data handling scenarios such as personal data in email and encrypted backups.
                </li>
                <li>
                  We maintain processes intended to reduce unnecessary storage of personal data on
                  mobile devices and to support secure handling and transmission of personal data.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                4. Testing &amp; Third-Party Assessment
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  OWASP-based penetration testing has been performed for the VideoBooth.tv web application
                  and supporting infrastructure (re-test documented in 2021).
                </li>
                <li>
                  A CyberGRX Tier 2 cyber security risk assessment has been completed for VideoBooth Systems Ltd.
                  (June 2024). This is a maturity / controls assessment and is not an audit or certification.
                </li>
              </ul>
              <p className="mt-2 text-gray-600">
                Detailed documentation may be made available to enterprise clients upon request, subject to
                confidentiality restrictions.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                5. Incident Response
              </h2>
              <p>
                Suspected or confirmed security incidents are handled through an internal reporting and
                response process. Incidents involving personal data are escalated to the designated Data
                Protection Officer per internal policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                6. Security Questionnaires &amp; Documentation Requests
              </h2>
              <p>
                We routinely support enterprise procurement processes, including client-provided security
                questionnaires and reasonable documentation requests.
              </p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Standard questionnaires are typically completed as part of program support.</li>
                <li>
                  For particularly lengthy, multi-round, or highly customized questionnaires requiring
                  significant internal review, a modest fee may apply (quoted case-by-case based on scope).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                7. Contact
              </h2>
              <p>
                For security documentation requests or procurement support, contact{' '}
                <a
                  href="mailto:hello@realvo.io"
                  className="text-realvo-teal hover:underline"
                >
                  hello@realvo.io
                </a>
                .
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityAndDataProtection;
