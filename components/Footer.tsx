import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-realvo-charcoal text-white py-10 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    {/* Logo */}
    <div className="mb-6">
      <a href="/">
        <img
          src="/logo_white.png"
          alt="RealVo Company Logo"
          className="mx-auto"
          style={{ height: '48px' }}
        />
      </a>
    </div>

    {/* Navigation Row */}
    <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-gray-400">
      <a href="/" className="hover:text-white transition-colors">Home</a>
      <span className="text-gray-600">|</span>

      <a href="/#solutions" className="hover:text-white transition-colors">Solutions</a>
      <span className="text-gray-600">|</span>

      <a href="/use-cases" className="hover:text-white transition-colors">Use Cases</a>
      <span className="text-gray-600">|</span>

      <a href="/#process-platform" className="hover:text-white transition-colors">Process & Platform</a>
      <span className="text-gray-600">|</span>

      <a href="/#contact" className="hover:text-white transition-colors">Contact Us</a>
      <span className="text-gray-600">|</span>

      <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
      <span className="text-gray-600">|</span>

      <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
      <span className="text-gray-600">|</span>

      <a href="/toronto-video-booth" className="hover:text-white transition-colors">
        Toronto Video Booth
      </a>
    </div>

    {/* Legal Line */}
    <div className="border-t border-gray-800 mt-8 pt-6 text-xs text-gray-500">
      © {new Date().getFullYear()} RealVo. RealVo is powered by VideoBooth Inc.
    </div>

  </div>
</footer>

  );
};

export default Footer;

