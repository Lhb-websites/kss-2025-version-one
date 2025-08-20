import React from 'react';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://i.ibb.co/ZzsQVC7x/ksslogo.png" alt="KaizenStrategy logo" className="h-8 w-8" />
              <span className="text-xl font-bold">KaizenStrategy</span>
            </div>
            <p className="text-blue-100 mb-4">
              Embedded paid media operations for niche marketing agencies managing 50+ clients. We handle execution, attribution, and reporting so your team can scale without growing headcount.
            </p>
            <div className="space-y-2 text-blue-100">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-teal-400" />
                <a href="tel:+19342215466" className="hover:text-white transition-colors" title="Call KaizenStrategy">
                  Call Us: +1 (934) 221-5466
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-teal-400" />
                <a href="mailto:hello@kaizenstrategy.com" className="hover:text-white transition-colors" title="Email KaizenStrategy">
                  hello@kaizenstrategy.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5" />
                <span>
                  Casper, Wyoming, USA
                </span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="mailto:hello@kaizenstrategy.com"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Email KaizenStrategy"
                title="Email KaizenStrategy"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/kaizenstrategy-solutions-llc"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="KaizenStrategy on LinkedIn"
                title="KaizenStrategy on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-100">
              <li>Google Ads Execution</li>
              <li>Meta Ads Management</li>
              <li>Conversion Tracking</li>
              <li>Attribution Setup</li>
              <li>Performance Dashboards</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-blue-100">
              <li>Home Builder Marketing</li>
              <li>Legal Firms</li>
              <li>Dental & Medspa</li>
              <li>Roofers</li>
              <li>Addiction Treatment</li>
              <li>Franchise Marketing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Research</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a
                  href="https://research.kaizenstrategy.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  title="Visit KaizenStrategy Research"
                >
                  Research Portal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            © 2025 KaizenStrategy Solutions LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-blue-100 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-blue-100 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;