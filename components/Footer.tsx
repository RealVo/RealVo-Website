import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-realvo-charcoal text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/">
              <img src="/logo_white.png" alt="RealVo Company Logo" style={{ height: '50px' }} />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              A storytelling &amp; insights platform for human understanding. Trusted by leading organizations worldwide.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/capture/private-enclosed-booth" className="hover:text-white transition-colors">
                  Private Enclosed Booth
                </Link>
              </li>
              <li>
                <Link to="/capture/free-standing-kiosk" className="hover:text-white transition-colors">
                  Free-standing Kiosk
                </Link>
              </li>
              <li>
                <Link to="/capture/desktop-tablet-kiosk" className="hover:text-white transition-colors">
                  Desktop Tablet Kiosk
                </Link>
              </li>
              <li>
                <Link to="/capture/virtual-video-booth" className="hover:text-white transition-colors">
                  Online Video Booth
                </Link>
              </li>
              <li>
                <Link to="/vbplatform-more" className="hover:text-white transition-colors">
                  VB.tv Platform
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/toronto-video-booth" className="hover:text-white transition-colors">
                  Toronto Video Booth
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries (anchors on home page) */}
          <div>
            <h4 className="font-bold text-lg mb-6">Industries</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="/#industries" className="hover:text-white transition-colors">
                  Corporate
                </a>
              </li>
              <li>
                <a href="/#industries" className="hover:text-white transition-colors">
                  Universities &amp; Colleges
                </a>
              </li>
              <li>
                <a href="/#industries" className="hover:text-white transition-colors">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="/#industries" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="/#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>

              <li className="text-gray-500">Privacy Policy (coming soon)</li>
              <li className="text-gray-500">Terms of Service (coming soon)</li>

              <li className="pt-4">
                <a
                  href="mailto:hello@realvo.com"
                  className="text-realvo-teal hover:text-white transition-colors"
                >
                  hello@realvo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} RealVo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

