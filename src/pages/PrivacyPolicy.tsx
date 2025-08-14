import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Effective date: August 10, 2025</p>

          <div className="prose prose-blue max-w-none">
            <p>
              KaizenStrategy Solutions LLC ("KaizenStrategy", "we", "us", or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Information We Collect</h2>
            <p>
              We may collect information that you voluntarily provide to us, including your name, email address, company information, and any other details you share when contacting us or scheduling a call. We may also collect usage data such as IP address, browser type, and pages visited for analytics and site performance.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To provide, maintain, and improve our services</li>
              <li>To communicate with you, including responding to inquiries</li>
              <li>To analyze usage and enhance site performance and security</li>
              <li>To comply with legal obligations and enforce agreements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Cookies and Tracking</h2>
            <p>
              We may use cookies, pixels, and similar tracking technologies to understand site usage, improve the user experience, and support marketing analytics. You can adjust cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share information with trusted service providers who assist in operating our website and delivering services, subject to confidentiality obligations. We may also disclose information if required by law or to protect our rights.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Data Retention</h2>
            <p>
              We retain information only as long as necessary for the purposes described in this policy, to comply with legal obligations, or to resolve disputes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Your Rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, or delete your personal information. To exercise these rights, contact us using the details below.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Security</h2>
            <p>
              We implement reasonable safeguards to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Contact Us</h2>
            <p>
              For questions about this Privacy Policy, contact us at
              <a className="text-blue-900 underline ml-1" href="mailto:hello@kaizenstrategy.com">hello@kaizenstrategy.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
