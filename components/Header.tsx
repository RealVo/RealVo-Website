import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="RealVo"
            className="h-8 w-auto"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-realvo-charcoal">
          <a href="#why-realvo" className="hover:text-realvo-blue transition-colors">
            Why RealVo
          </a>
          <a href="#how-it-works" className="hover:text-realvo-blue transition-colors">
            How It Works
          </a>
          <a href="#solutions" className="hover:text-realvo-blue transition-colors">
            Solutions
          </a>
          <a href="#pricing" className="hover:text-realvo-blue transition-colors">
            Pricing
          </a>
        </nav>

        {/* CTA */}
        <Button size="sm" variant="primary">
          Contact Us
        </Button>

      </div>
    </header>
  );
};

export default Header;
