import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-realvo-charcoal text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          {/* Left: Logo + Description */}
          <div className="max-w-sm">
            <a href="/">
              <img
                src="/logo_white.png"
                alt="RealVo Company Logo"
                style={{ height: '50px' }}
              />
            </a>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              A storytelling &amp; insights platform for human understanding.
              Trusted by leading organizations worldwide.
            </p>
          </div>

          {/* Right: Menu */}
          <div className="text-sm text-gray-400">
            {/* Mobile (stacked) */}
            <div className="flex flex-col items-start gap-2 lg:hidden">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/#solutions" className="hover:text-white transition-colors">Solutions</a>
              <a href="/use-cases" className="hover:text-white transition-colors">Use Cases</a>
              <a href="/#process-platform" className="hover:text-white transition-colors">Process &amp; Platform</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="/toronto-video-booth" className="hover:text-white transition-colors">Toronto Video Booth</a>
            </div>

            {/* Desktop (forced 2 rows) */}
            <div className="hidden lg:block">
              {/* Row 1 */}
              <div className="flex items-center justify-start lg:justify-end gap-x-4">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span className="text-gray-600">•</span>

                <a href="/#solutions" className="hover:text-white transition-colors">Solutions</a>
                <span className="text-gray-600">•</span>

                <a href="/use-cases" className="hover:text-white transition-colors">Use Cases</a>
                <span className="text-gray-600">•</span>

                <a href="/#process-platform" className="hover:text-white transition-colors">Process &amp; Platform</a>
              </div>

              {/* Row 2 */}
              <div className="mt-2 flex items-center justify-start lg:justify-end gap-x-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-realvo-teal text-white hover:bg-realvo-teal/90 transition whitespace-nowrap md:px-7 md:py-3.5"
                >
                  Contact Us
                </a>
                <span className="text-gray-600">•</span>

                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-gray-600">•</span>

                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Terms of Use
                </a>
                <span className="text-gray-600">•</span>

                <a
                  href="/security-and-data-protection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  Security &amp; Data Protection
                </a>
                <span className="text-gray-600">•</span>

                <a
                  href="/toronto-video-booth"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  Toronto Video Booth
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Line */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} RealVo. RealVo is powered by VideoBooth Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
