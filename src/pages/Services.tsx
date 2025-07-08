import React from 'react';
import { Target, TrendingUp, BarChart3, Users, Settings, FileText, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Target className="h-12 w-12" />,
      title: "Google Ads & PPC Execution",
      description: "Complete campaign management from strategy to execution across all Google Ads platforms.",
      details: [
        "Search, Display, Shopping, and YouTube campaigns",
        "Daily bid management and budget optimization",
        "Keyword research and expansion",
        "Ad copy testing and optimization",
        "Landing page coordination"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Meta Ads Management",
      description: "Full Facebook and Instagram advertising management with advanced audience targeting.",
      details: [
        "Campaign setup and optimization",
        "Custom audience creation and lookalike modeling",
        "Creative testing and iteration",
        "Cross-platform performance tracking",
        "Budget scaling and optimization"
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Conversion Tracking & Attribution",
      description: "Advanced tracking setup to measure true performance across all touchpoints.",
      details: [
        "GA4 and GTM implementation",
        "Custom event tracking setup",
        "Attribution modeling",
        "Cross-channel journey mapping",
        "Revenue tracking and optimization"
      ]
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: "Performance Dashboards",
      description: "Custom reporting dashboards that provide actionable insights for your team and clients.",
      details: [
        "Looker Studio dashboard creation",
        "Real-time performance monitoring",
        "Client-ready white-label reports",
        "KPI tracking and alerting",
        "Custom metric development"
      ]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Team Coordination",
      description: "Seamless integration with your existing team and workflows.",
      details: [
        "Slack and project management integration",
        "Regular strategy calls and check-ins",
        "Team training and knowledge transfer",
        "SOP creation and documentation",
        "Workflow optimization"
      ]
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "Campaign Optimization",
      description: "Continuous improvement of campaign performance through data-driven optimization.",
      details: [
        "Daily performance monitoring",
        "Automated bid adjustments",
        "A/B testing frameworks",
        "Seasonal optimization strategies",
        "Competitive analysis and positioning"
      ]
    }
  ];

  const caseStudies = [
    {
      industry: "Home Builder Marketing",
      challenge: "Agency managing 45 home builder clients needed to scale campaign execution without hiring additional staff.",
      solution: "Implemented Full Ops package with advanced attribution tracking and lead quality scoring.",
      results: [
        "Reduced CPA by 42% across all clients",
        "Increased lead quality score by 38%",
        "Enabled agency to take on 15 additional clients",
        "Improved client retention by 25%"
      ]
    },
    {
      industry: "Legal Marketing",
      challenge: "Law firm marketing agency struggling with high-competition keywords and immediate response requirements.",
      solution: "Deployed Scale Partner package with rapid response optimization and competitive positioning.",
      results: [
        "Improved average response time by 60%",
        "Reduced cost per qualified lead by 35%",
        "Increased case conversion rate by 28%",
        "Expanded to 3 new practice areas"
      ]
    },
    {
      industry: "Dental & Medspa",
      challenge: "Multi-location dental marketing agency needed compliant campaigns with local optimization.",
      solution: "Implemented Growth Ops with compliance-first approach and local market strategies.",
      results: [
        "Achieved 100% compliance across all campaigns",
        "Increased local market share by 45%",
        "Reduced patient acquisition cost by 32%",
        "Scaled to 25 new locations"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Services & Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive paid media services with proven results across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end paid media operations that scale with your agency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-blue-900 mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose KaizenStrategy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another service provider - we're your strategic growth partner.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Rapid Implementation",
                description: "Full onboarding and optimization within 14 days"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Industry Expertise",
                description: "Deep knowledge in high-growth verticals"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Proven Results",
                description: "Average 38% CPA reduction across clients"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Seamless Integration",
                description: "Works with your existing team and tools"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-900 text-white rounded-full p-6 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from agencies we've helped scale.
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.industry}</h3>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Results</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
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
            Ready to See Similar Results?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help scale your agency with proven paid media strategies.
          </p>
          <a
            href="https://tidycal.com/kaizenstrategy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-teal-600 transition-colors inline-block"
          >
            Schedule Your Strategy Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;