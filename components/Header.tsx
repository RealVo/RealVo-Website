import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronRight } from 'lucide-react';
import Button from './Button';
import { NavItem } from '../types';

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const navItems: NavItem[] = [
  { label: 'Why RealVo', href: '#why-realvo' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
];

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/90 dark:bg-realvo-charcoal/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
              <a href="/">
                <img
                    src="/logo.png"
                    alt="RealVo Company Logo" className="h-10 w-auto"
                />
              </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-medium text-realvo-charcoal/80 dark:text-gray-300 hover:text-realvo-blue dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Button variant="primary" size="sm" className="group">
              Contact Us
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 dark:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-realvo-charcoal border-t dark:border-gray-800 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-4 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full justify-center">Contact Us</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
