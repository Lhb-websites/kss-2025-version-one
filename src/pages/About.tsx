import React, { useState } from 'react';
import { User, Target, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const [imageError, setImageError] = useState(false);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About KaizenStrategy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              We're the growth partner behind fast-scaling niche marketing agencies.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At KaizenStrategy, we believe that brilliant marketing agencies shouldn't be held back by operational bottlenecks. Our mission is to empower niche marketing agencies to scale rapidly by providing world-class paid media execution and strategy.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in becoming the invisible backbone of your agency - handling the complex, time-consuming paid media operations so you can focus on what you do best: growing your business and serving your clients.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-blue-900 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Precision Focus</h3>
                    <p className="text-gray-600">Specialized expertise in high-growth verticals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-blue-900 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Proven Results</h3>
                    <p className="text-gray-600">Track record of scaling agencies 3x-5x</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To be the go-to operations partner for every niche marketing agency ready to break through their scaling ceiling.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-2">•</span>
                  <span>Transparency in everything we do</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-2">•</span>
                  <span>Continuous improvement (Kaizen philosophy)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-2">•</span>
                  <span>Partnership over vendor relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-2">•</span>
                  <span>Results-driven execution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the team behind your agency's growth.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-blue-900">
                  {!imageError ? (
                    <img
                      src="/hanslacida-strategist-researcher.png"
                      alt="Hans Dexter Lacida - Strategist & Researcher"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="96"
                      height="96"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="bg-blue-900 w-full h-full flex items-center justify-center">
                      <User className="h-12 w-12 text-white" />
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dexter Lacida</h3>
                <p className="text-lg text-blue-900 font-medium">Founder & Lead Strategist</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">10+</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">$10M+</div>
                  <p className="text-gray-600">Ad Spend Managed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
                  <p className="text-gray-600">Agencies Partnered</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-center mb-6">
                With over a decade of experience in digital marketing and paid media, Hanzel has built and scaled multiple agencies before founding KaizenStrategy. His deep understanding of the operational challenges agencies face, combined with his expertise in high-growth verticals, makes him uniquely positioned to help agencies break through their scaling barriers.
              </p>
              
              <div className="text-center">
                <a
                  href="https://tidycal.com/kaizenstrategy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                >
                  Connect with Hanzel
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we seamlessly integrate with your agency and deliver results.
            </p>
          </div>
          
          <div className="space-y-12">
            {[ 
              { step: "01", title: "Discovery & Audit", description: "We start with a comprehensive audit of your current paid media operations, identifying bottlenecks, opportunities, and areas for immediate improvement.", details: ["Account structure analysis", "Performance benchmarking", "Tool and workflow assessment", "Team capabilities evaluation"] },
              { step: "02", title: "Strategy & Planning", description: "Based on our audit findings, we develop a customized strategy that aligns with your agency's goals and growth trajectory.", details: ["Custom growth roadmap", "Integration planning", "Team coordination setup", "Success metrics definition"] },
              { step: "03", title: "Implementation & Integration", description: "We seamlessly integrate with your existing workflows and begin executing optimized campaigns across all client accounts.", details: ["Account migration and setup", "Tracking and attribution implementation", "Team training and onboarding", "Workflow optimization"] },
              { step: "04", title: "Optimization & Scaling", description: "Continuous monitoring, optimization, and strategic guidance to ensure sustained growth and performance improvements.", details: ["Daily performance monitoring", "Weekly optimization cycles", "Monthly strategic reviews", "Quarterly scaling assessments"] }
            ].map((process, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                    {process.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 mb-6">{process.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {process.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <Award className="h-5 w-5 text-teal-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help scale your agency without the operational headaches.
          </p>
          <a
            href="https://tidycal.com/kaizenstrategy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-teal-600 transition-colors inline-block"
          >
            Schedule a Strategy Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
