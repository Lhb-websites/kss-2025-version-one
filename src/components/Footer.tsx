import React from 'react';
import { Target, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Target className="h-8 w-8 text-teal-400" />
              <span className="text-xl font-bold">KaizenStrategy</span>
            </div>
            <p className="text-blue-100 mb-4">
              We Build Ad Engines for Agencies Ready to Scale.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@kaizenstrategy.com"
                className="text-blue-100 hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-white transition-colors"
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
              <li>Real Estate</li>
              <li>Franchise Marketing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            © 2024 KaizenStrategy Solutions LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-100 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-100 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;