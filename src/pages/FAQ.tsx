import React from 'react';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can you get started?",
      answer: "We typically begin onboarding within 48 hours of signing. Full integration and optimization usually takes 7-14 days depending on the complexity of your current setup."
    },
    {
      question: "What if I need to upgrade or downgrade my package?",
      answer: "We offer flexible month-to-month agreements. You can upgrade or downgrade at any time with 30 days notice. We'll help you choose the right package as your agency grows."
    },
    {
      question: "Do you work with specific industries only?",
      answer: "While we specialize in home builders, legal, dental, roofers, and franchise marketing, we work with agencies in many other verticals. Contact us to discuss your specific industry needs."
    },
    {
      question: "How do you ensure data security and client confidentiality?",
      answer: "We maintain strict security protocols including signed NDAs, secure access management, and industry-standard data protection practices. All client data remains confidential and secure."
    },
    {
      question: "What reporting and communication can I expect?",
      answer: "All packages include regular reporting and communication. Growth Ops includes weekly calls, Full Ops includes bi-weekly audits, and Scale Partner includes priority access with multiple touch points per week."
    },
    {
      question: "Can you help train my existing team?",
      answer: "Yes! The Scale Partner package includes comprehensive team training and SOP creation. We can also provide training as an add-on service for other packages."
    },
    {
      question: "What's the typical onboarding timeline?",
      answer: "Most clients are fully onboarded within 7-14 days. We start with a comprehensive audit, then implement tracking and optimization systems, and finally begin active campaign management."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No, we work on month-to-month agreements. We believe in earning your business each month through results, not locking you into long-term contracts."
    },
    {
      question: "How do you handle client communication?",
      answer: "We integrate seamlessly with your existing client communication processes. We can work behind the scenes or participate in client calls as needed, depending on your preference."
    },
    {
      question: "What tools and platforms do you work with?",
      answer: "We work with all major platforms including Google Ads, Meta Ads, GA4, GTM, Looker Studio, and integrate with popular project management tools like Slack, ClickUp, and Asana."
    },
    {
      question: "How do you ensure data security?",
      answer: "We maintain strict security protocols including signed NDAs, secure access management, and industry-standard data protection practices. All client data remains confidential."
    },
    {
      question: "What if our agency has unique requirements?",
      answer: "We specialize in customizing our approach to fit each agency's unique needs. During our initial consultation, we'll discuss your specific requirements and create a tailored solution."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Contact
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Get answers to common questions about our services and partnership process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                  <MessageCircle className="h-5 w-5 text-blue-900 mt-0.5 mr-2 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tidycal.com/kaizenstrategy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-800 transition-colors inline-block"
            >
              Schedule Free Consultation
            </a>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-900 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;