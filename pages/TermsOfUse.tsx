import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';

const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <Section padding="md">
          <div className="max-w-4xl mx-auto space-y-8 text-sm text-gray-700 leading-relaxed">
            <h1 className="text-3xl font-bold text-realvo-charcoal mb-2">
              Terms of Use
            </h1>

            <p className="text-gray-500">
              Effective Date: February 17, 2026
            </p>

            <p>
              These Terms of Use (“Terms”) govern your access to and use of the
              websites owned and operated by VideoBooth Inc. (“we,” “us,” or
              “our”), including realvo.io, videobooth.ca, related domains, and
              any associated software platforms, dashboards, or booth
              interfaces (collectively, the “Services”).
            </p>

            <p>
              By accessing or using the Services, you agree to these Terms. If
              you do not agree, you should not use the Services.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                Your use of the Services constitutes acceptance of these Terms
                and our Privacy Policy.
              </p>
              <p className="mt-2">
                We may update these Terms periodically. Updates will be posted
                with a revised effective date. Continued use of the Services
                after changes become effective constitutes acceptance of the
                revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                2. Description of Services
              </h2>
              <p>
                VideoBooth Inc. provides video capture hardware, software
                platforms, and related services under the RealVo and
                VideoBooth brands.
              </p>
              <p className="mt-2">
                Services may include:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Website access</li>
                <li>Booth-based video capture interfaces</li>
                <li>Cloud-hosted dashboards and content management tools</li>
                <li>Event rental and extended program deployments</li>
              </ul>
              <p className="mt-2">
                Specific services may also be governed by separate agreements
                with clients. In the event of a conflict, the written client
                agreement controls.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                3. Permitted Use
              </h2>
              <p>
                You agree to use the Services only for lawful purposes and in
                accordance with these Terms.
              </p>
              <p className="mt-2">You agree not to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Violate applicable laws or regulations</li>
                <li>Attempt unauthorized access to systems or data</li>
                <li>Interfere with or disrupt servers or infrastructure</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Use automated tools (bots, scrapers) without permission</li>
                <li>
                  Copy, reproduce, or distribute materials beyond permitted use
                </li>
              </ul>
              <p className="mt-2">
                We reserve the right to suspend or restrict access where misuse
                is identified.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                4. Intellectual Property
              </h2>
              <p>
                All content, software, interfaces, designs, trademarks, logos,
                and materials within the Services are owned by VideoBooth Inc.
                or its licensors and are protected by intellectual property
                laws.
              </p>
              <p className="mt-2">
                Clients retain ownership of video and media content recorded
                through authorized programs, subject to their agreements with
                participants.
              </p>
              <p className="mt-2">
                Nothing in these Terms transfers ownership of platform
                technology or software to users or clients.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                5. Third-Party Services
              </h2>
              <p>
                The Services may integrate with or link to third-party
                providers, including hosting providers and technology partners.
              </p>
              <p className="mt-2">
                We are not responsible for third-party websites or services and
                do not control their content or privacy practices.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                6. Disclaimers
              </h2>
              <p>
                The Services are provided on an “as available” basis. While we
                apply reasonable operational safeguards, we do not guarantee
                uninterrupted or error-free access.
              </p>
              <p className="mt-2">
                To the fullest extent permitted by law, we disclaim implied
                warranties of merchantability, fitness for a particular purpose,
                and non-infringement.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                7. Limitation of Liability
              </h2>
              <p>
                To the extent permitted by law, VideoBooth Inc. shall not be
                liable for indirect, incidental, consequential, special, or
                punitive damages arising from use of the Services.
              </p>
              <p className="mt-2">
                Our aggregate liability relating to website access shall not
                exceed CAD $1,000.
              </p>
              <p className="mt-2">
                For clients operating under written service agreements,
                liability limitations are governed by those agreements.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                8. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless VideoBooth Inc., its
                affiliates, officers, employees, and agents from claims arising
                from your misuse of the Services, violation of these Terms, or
                violation of applicable laws.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                9. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of the Province of Ontario
                and the federal laws of Canada applicable therein. Any disputes
                shall be resolved exclusively in the courts located in Toronto,
                Ontario.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                10. Severability
              </h2>
              <p>
                If any provision of these Terms is found unenforceable, the
                remaining provisions remain in effect.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-realvo-charcoal mb-2">
                11. Contact
              </h2>
              <p>
                Questions regarding these Terms may be directed to{' '}
                <a
                  href="mailto:hello@realvo.io"
                  className="text-realvo-teal hover:underline"
                >
                  hello@realvo.io
                </a>
                .
              </p>
            </div>

            <p className="pt-4 text-gray-500">
              © 2026 VideoBooth Inc. All rights reserved.
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;

