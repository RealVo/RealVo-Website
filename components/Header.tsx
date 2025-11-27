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
        <nav className="hidden md:flex items-center space-x-10">
          <a
            href="#why-realvo"
            className="text-sm md:text-base font-medium text-gray-600 transition-transform duration-200 hover:scale-110 hover:text-realvo-blue"
          >
            Why RealVo
          </a>

          <a
            href="#how-it-works"
            className="text-sm md:text-base font-medium text-gray-600 transition-transform duration-200 hover:scale-110 hover:text-realvo-blue"
          >
            How It Works
          </a>

          <a
            href="#solutions"
            className="text-sm md:text-base font-medium text-gray-600 transition-transform duration-200 hover:scale-110 hover:text-realvo-blue"
          >
            Solutions
          </a>

          <a
            href="#pricing"
            className="text-sm md:text-base font-medium text-gray-600 transition-transform duration-200 hover:scale-110 hover:text-realvo-blue"
          >
            Pricing
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button size="sm" variant="primary">
            Contact Us
          </Button>
        </div>

      </div>
    </header>
  );
};

export default Header;
