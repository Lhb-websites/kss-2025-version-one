import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Building, 
  Scale, 
  Gavel, 
  Home as HomeIcon,
  Building2
} from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We Power the Backend of Niche Marketing Agencies with 50+ Clients
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Fractional Paid Media Execution, Attribution Setup, and Strategy — So You Can Scale Without Burnout.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://tidycal.com/kaizenstrategy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-teal-600 transition-colors"
              >
                Schedule a Consultation
              </a>
              <Link
                to="/packages"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We become your embedded paid media operations partner, handling everything from execution to optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Google Ads & PPC Execution",
                description: "Full campaign management and daily optimization across all your client accounts."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Conversion Tracking & Attribution",
                description: "GA4, GTM setup and advanced attribution modeling for accurate performance measurement."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Weekly Optimization & Dashboards",
                description: "Continuous performance improvements with detailed reporting and insights."
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Team Coordination",
                description: "Seamless integration with your existing tools - Slack, ClickUp, Asana."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-900 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in working with marketing agencies in high-growth verticals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <HomeIcon className="h-12 w-12" />, name: "Home Builders" },
              { icon: <Building className="h-12 w-12" />, name: "Medspas" },
              { icon: <Gavel className="h-12 w-12" />, name: "Legal" },
              { icon: <Building2 className="h-12 w-12" />, name: "Dental" },
              { icon: <Scale className="h-12 w-12" />, name: "Roofers" }
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 rounded-full p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center text-blue-900 hover:bg-blue-100 transition-colors">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Packages Built for Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership level that fits your agency's growth stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Growth Ops",
                price: "$5,000",
                description: "25-50 monthly ad accounts",
                features: [
                  "Full Google & Meta Ads execution",
                  "Daily monitoring & optimization",
                  "Weekly insights & recommendations",
                  "GA4 + GTM tracking setup",
                  "Looker Studio dashboard"
                ]
              },
              {
                name: "Full Ops",
                price: "$10,000",
                description: "50-100 monthly ad accounts",
                features: [
                  "Everything in Growth Ops",
                  "Advanced campaign strategy",
                  "Lead pacing & budget forecasting",
                  "Advanced attribution setup",
                  "White-label client reports"
                ],
                popular: true
              },
              {
                name: "Scale Partner",
                price: "$15,000",
                description: "100+ monthly ad accounts",
                features: [
                  "Everything in Full Ops",
                  "Team training & SOP creation",
                  "Priority strategy sessions",
                  "Custom dashboard & workflows",
                  "Revenue-based reporting"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-lg ${plan.popular ? 'ring-2 ring-blue-900' : ''} hover:shadow-xl transition-shadow`}>
                {plan.popular && (
                  <div className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-900 mb-2">{plan.price}<span className="text-lg text-gray-600">/month</span></div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://tidycal.com/kaizenstrategy/no-obligation-call-just-chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors text-center block"
                >
                  Let's Talk
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/packages#home"
              className="bg-teal-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-teal-600 transition-colors"
            >
              View Full Pricing Details
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Results That Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real outcomes from agencies we've partnered with.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-900 mb-4">46%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CPA Reduction</h3>
              <p className="text-gray-600">
                "Scaled 80 ad accounts while reducing cost per acquisition by 46%, enabling our agency to take on more clients without increasing overhead."
              </p>
            </div>
            <div className="bg-teal-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-teal-600 mb-4">50</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">New Clients in 60 Days</h3>
              <p className="text-gray-600">
                "Enabled agency to onboard 50 new clients in 60 days by handling all backend execution, letting them focus on sales and client relationships."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, proven methodology to get you scaling fast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Deep Audit",
                description: "Comprehensive analysis of your current paid media operations, identifying bottlenecks and opportunities."
              },
              {
                step: "02",
                title: "Execution Buildout",
                description: "Seamless integration with your existing workflows and rapid deployment of optimized campaigns."
              },
              {
                step: "03",
                title: "Ongoing Optimization",
                description: "Continuous performance improvements with weekly reporting and strategic recommendations."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Without Growing Headcount?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how KaizenStrategy can become your embedded paid media operations partner.
          </p>
          <a
            href="https://tidycal.com/kaizenstrategy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-teal-600 transition-colors inline-block"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;