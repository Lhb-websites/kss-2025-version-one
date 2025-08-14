import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Effective date: August 10, 2025</p>

          <div className="prose prose-blue max-w-none">
            <p>
              These Terms of Service ("Terms") govern your access to and use of the KaizenStrategy Solutions LLC ("KaizenStrategy", "we", "us", or "our") website and services. By accessing or using our website, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Use of Services</h2>
            <p>
              You agree to use our website and services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use complies with all applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Intellectual Property</h2>
            <p>
              All content, trademarks, and materials on this site are the property of KaizenStrategy or our licensors and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Disclaimer</h2>
            <p>
              Our website and services are provided on an "as is" and "as available" basis without warranties of any kind, express or implied. We do not guarantee that the site will be error-free or uninterrupted.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, KaizenStrategy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless KaizenStrategy, its officers, employees, and agents from any claims, liabilities, damages, and expenses arising out of your use of the website or violation of these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Termination</h2>
            <p>
              We may suspend or terminate access to our website at any time, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Changes will be posted on this page with an updated effective date. Your continued use of the website after changes constitutes acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Wyoming, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Contact Us</h2>
            <p>
              If you have questions about these Terms, contact us at
              <a className="text-blue-900 underline ml-1" href="mailto:hello@kaizenstrategy.com">hello@kaizenstrategy.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
