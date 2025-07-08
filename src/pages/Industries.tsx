import React from 'react';
import { Home, Building, Gavel, Building2, Hammer, Heart } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Home className="h-12 w-12" />,
      title: "Home Builder Marketing Agencies",
      description: "Specialized paid media execution for home builders with complex sales cycles and high-value conversions.",
      challenges: [
        "Long sales cycles requiring nurture sequences",
        "High-value conversions with complex attribution",
        "Seasonal demand fluctuations",
        "Local market targeting complexities"
      ],
      solutions: [
        "Advanced attribution modeling for long sales cycles",
        "Seasonal budget optimization strategies",
        "Local market penetration campaigns",
        "Lead quality scoring and nurturing systems"
      ]
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Medspa/Dental Agencies",
      description: "Performance-driven campaigns for medical and dental practices with strict compliance requirements.",
      challenges: [
        "Healthcare advertising compliance",
        "Local competition and market saturation",
        "Seasonal service demand patterns",
        "High customer lifetime value optimization"
      ],
      solutions: [
        "Compliance-first campaign structures",
        "Local market dominance strategies",
        "Lifetime value optimization campaigns",
        "Patient acquisition funnel optimization"
      ]
    },
    {
      icon: <Gavel className="h-12 w-12" />,
      title: "Legal Firms",
      description: "Strategic paid media for law firms requiring immediate response and high-quality lead generation.",
      challenges: [
        "Immediate response requirements",
        "High cost-per-click competition",
        "Case type seasonality",
        "Local market dominance needs"
      ],
      solutions: [
        "Rapid response campaign optimization",
        "Competition analysis and positioning",
        "Practice area specific strategies",
        "Local search dominance campaigns"
      ]
    },
    {
      icon: <Hammer className="h-12 w-12" />,
      title: "Roofers Marketing",
      description: "Specialized paid media campaigns for roofing contractors and home improvement companies.",
      challenges: [
        "Seasonal demand fluctuations",
        "Emergency vs. planned service targeting",
        "Local competition and market saturation",
        "High-value project optimization"
      ],
      solutions: [
        "Weather-based campaign optimization",
        "Emergency response ad scheduling",
        "Local market dominance strategies",
        "Project value optimization campaigns"
      ]
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Addiction Treatment Centers",
      description: "Compliant and compassionate paid media strategies for addiction treatment and recovery centers.",
      challenges: [
        "Strict advertising compliance requirements",
        "Sensitive audience targeting",
        "Insurance and payment complexities",
        "Crisis intervention timing"
      ],
      solutions: [
        "Compliance-first campaign structures",
        "Compassionate messaging frameworks",
        "Insurance-based targeting optimization",
        "Crisis response campaign management"
      ]
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Franchise & Multi-location Marketing",
      description: "Scalable paid media systems for franchise networks and multi-location businesses.",
      challenges: [
        "Multi-location campaign coordination",
        "Brand consistency across markets",
        "Local market customization",
        "Franchise owner reporting needs"
      ],
      solutions: [
        "Centralized campaign management systems",
        "Brand-compliant local customization",
        "Territory-specific optimization",
        "Comprehensive multi-location reporting"
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
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Specialized expertise in high-growth verticals with unique marketing challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-900 text-white rounded-full p-4 mr-4">
                      {industry.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {industry.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">
                    {industry.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Challenges</h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span className="text-gray-600">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solutions</h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-600">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <div className="bg-blue-900 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                      {industry.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Scale Your {industry.title.split(' ')[0]} Agency?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Let's discuss how our specialized expertise can help you overcome these challenges and scale rapidly.
                    </p>
                    <a
                      href="https://tidycal.com/kaizenstrategy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                    >
                      Schedule Consultation
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Results across all the industries we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: "500+", label: "Campaigns Managed" },
              { metric: "38%", label: "Average CPA Reduction" },
              { metric: "2.3x", label: "Average Revenue Growth" },
              { metric: "95%", label: "Client Retention Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.metric}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always expanding into new verticals. Let's discuss your specific needs.
          </p>
          <a
            href="https://tidycal.com/kaizenstrategy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-teal-600 transition-colors inline-block"
          >
            Discuss Your Industry
          </a>
        </div>
      </section>
    </div>
  );
};

export default Industries;