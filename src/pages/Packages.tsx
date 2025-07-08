import React from 'react';
import { CheckCircle, X, Star, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Packages = () => {
  const packages = [
    {
      name: "Growth Ops",
      price: "$5,000",
      description: "Best for agencies with 25–50 monthly ad accounts across Google or Meta looking to offload execution, tracking, and optimization without hiring internally.",
      features: [
        "Full Google Ads + Meta Ads campaign execution",
        "Daily monitoring & optimization across 25–50 accounts",
        "Weekly account-level insights & recommendations",
        "GA4 + GTM standard tracking setup",
        "Looker Studio dashboard (1 unified template)",
        "1x Weekly strategy + reporting call",
        "Slack/email support during business hours"
      ],
      notIncluded: [
        "No team training or SOP creation"
      ],
      note: "Great for growing agencies who want hands-off execution but keep client communication in-house.",
      color: "yellow"
    },
    {
      name: "Full Ops",
      price: "$10,000",
      description: "Best for agencies with 50–100 ad accounts, juggling both execution and growth, needing a senior expert to fully run paid media operations.",
      features: [
        "All features from Growth Ops, plus:",
        "Advanced campaign strategy + quarterly scaling plans",
        "Lead pacing reports & media budget forecasting",
        "Advanced attribution setup (custom events, UTMs, funnel reporting)",
        "Up to 2 Looker Studio dashboards (cross-channel reports)",
        "Copy feedback & design coordination (your internal team)",
        "Slack & PM tool integration (ClickUp, Asana, etc.)",
        "Bi-weekly internal performance audit + tactical insights",
        "Includes white-label client report templates"
      ],
      notIncluded: [],
      note: "Ideal for 7-figure agencies that want their entire paid media department handled externally but seamlessly.",
      color: "green",
      popular: true
    },
    {
      name: "Scale Partner",
      price: "$15,000",
      description: "Best for agencies managing 100+ ad accounts who want a Fractional Head of Paid Media + internal system builder — ready to scale to 500+ clients.",
      features: [
        "All Full Ops features, plus:",
        "Media buyer onboarding & SOP creation",
        "Internal team training / enablement for your junior staff",
        "Priority strategy sessions (2x/week or as needed)",
        "Dedicated Slack channel & priority support",
        "1-on-1 founder calls for growth, hiring, and delegation",
        "Custom-built media ops dashboard & workflow system",
        "Revenue-based performance reporting & client churn risk alerts",
        "Optional add-ons: Recruiting assistance, bonus dashboards, audit reports"
      ],
      notIncluded: [],
      note: "Perfect for agencies ready to remove the bottleneck and scale predictably.",
      color: "red"
    }
  ];

  const getColorClasses = (color: string, isPrimary: boolean = false) => {
    const colors = {
      yellow: isPrimary ? 'bg-yellow-400 text-yellow-900' : 'bg-yellow-50 border-yellow-200',
      green: isPrimary ? 'bg-green-500 text-white' : 'bg-green-50 border-green-200',
      red: isPrimary ? 'bg-red-500 text-white' : 'bg-red-50 border-red-200'
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Flexible Packages Built for Agencies Managing 50+ Clients
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Whether you're just starting to scale or managing 100+ monthly accounts, KaizenStrategy becomes your embedded media operations partner — without the cost of building in-house.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-blue-900' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-900 text-white text-center py-2 text-sm font-medium">
                    <Star className="inline-block h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className={`${getColorClasses(pkg.color)} ${pkg.popular ? 'pt-12' : 'pt-8'} pb-8 px-8`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-900 mb-4">
                    {pkg.price}
                    <span className="text-lg font-normal text-gray-600">/month</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {pkg.notIncluded.length > 0 && (
                    <>
                      <ul className="space-y-3 mb-6">
                        {pkg.notIncluded.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <X className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> {pkg.note}
                    </p>
                  </div>
                  
                  <a
                    href="https://tidycal.com/kaizenstrategy/no-obligation-call-just-chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors text-center block"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Packages?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible, scalable solutions designed specifically for growing agencies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Long-Term Contracts</h3>
              <p className="text-gray-600">Month-to-month agreements that grow with your agency. No lock-ins, just results.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">Average 38% CPA reduction and 2.3x revenue growth across all client agencies.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Expertise</h3>
              <p className="text-gray-600">Specialized knowledge in high-growth verticals like home builders, legal, and medical.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Package Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right level of support for your agency's current needs.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Features</th>
                  <th className="px-6 py-4 text-center">Growth Ops</th>
                  <th className="px-6 py-4 text-center">Full Ops</th>
                  <th className="px-6 py-4 text-center">Scale Partner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Account Management</td>
                  <td className="px-6 py-4 text-center">25-50 accounts</td>
                  <td className="px-6 py-4 text-center">50-100 accounts</td>
                  <td className="px-6 py-4 text-center">100+ accounts</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Strategy Calls</td>
                  <td className="px-6 py-4 text-center">Weekly</td>
                  <td className="px-6 py-4 text-center">Bi-weekly</td>
                  <td className="px-6 py-4 text-center">2x/week</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Team Training</td>
                  <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Custom Dashboards</td>
                  <td className="px-6 py-4 text-center">1 template</td>
                  <td className="px-6 py-4 text-center">Up to 2</td>
                  <td className="px-6 py-4 text-center">Custom built</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">SOP Creation</td>
                  <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Let Go of Execution and Scale Smarter?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Click below to book a free strategy consultation or check our FAQ for common questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tidycal.com/kaizenstrategy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-teal-600 transition-colors inline-block"
            >
              Let's Get Started →
            </a>
            <Link
              to="/faq"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;