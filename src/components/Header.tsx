import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Target, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Industries', href: '/industries' },
    { name: 'Services', href: '/services' },
    { name: 'Packages', href: '/packages' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-blue-900" />
              <span className="text-xl font-bold text-blue-900">KaizenStrategy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-900 ${
                  isActive(item.href)
                    ? 'text-blue-900 border-b-2 border-blue-900'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Contact Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                className={`flex items-center text-sm font-medium transition-colors hover:text-blue-900 ${
                  isActive('/contact') || isActive('/faq')
                    ? 'text-blue-900 border-b-2 border-blue-900'
                    : 'text-gray-700'
                }`}
              >
                Contact
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isContactDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isContactDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    to="/contact"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                    onClick={() => setIsContactDropdownOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/faq"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                    onClick={() => setIsContactDropdownOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://tidycal.com/kaizenstrategy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Schedule Call
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/contact')
                    ? 'text-blue-900 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/faq"
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/faq')
                    ? 'text-blue-900 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <a
                href="https://tidycal.com/kaizenstrategy"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors mt-4"
              >
                Schedule Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;