import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-realvo-charcoal text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <a href="/">
              <img
                src="/logo_white.png"
              alt="RealVo Company Logo" style={{ height: '50px' }}
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              A storytelling & insights platform for human understanding. Trusted by leading organizations worldwide.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Private Booth</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Free-standing Kiosk</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Desktop Station</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Virtual Booth</a></li>
              <li><a href="#" className="hover:text-white transition-colors">VB.tv Dashboard</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold text-lg mb-6">Industries</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Corporate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Universities & Colleges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Support Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li className="pt-4">
                 <a href="mailto:hello@realvo.com" className="text-realvo-teal hover:text-white transition-colors">hello@realvo.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} RealVo. RealVo is operated by VideoBooth Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
