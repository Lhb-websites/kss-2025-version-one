import React from 'react';
import { BookOpen, Download, FileText, Calendar, ArrowRight } from 'lucide-react';

const Resources = () => {
  const blogPosts = [
    {
      title: "5 Signs Your Agency is Ready to Scale Paid Media Operations",
      excerpt: "Learn the key indicators that show your agency is ready to partner with a paid media operations specialist.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Strategy"
    },
    {
      title: "The Complete Guide to Attribution Modeling for Agencies",
      excerpt: "Everything you need to know about setting up proper attribution for your agency's clients.",
      date: "March 8, 2024",
      readTime: "12 min read",
      category: "Technical"
    },
    {
      title: "How to Maintain Client Relationships While Scaling Operations",
      excerpt: "Strategies for keeping strong client relationships as you scale your agency's backend operations.",
      date: "March 1, 2024",
      readTime: "10 min read",
      category: "Growth"
    },
    {
      title: "ROI Calculator: When to Hire vs. Partner for Paid Media",
      excerpt: "Use our framework to determine whether hiring in-house or partnering makes more financial sense.",
      date: "February 22, 2024",
      readTime: "6 min read",
      category: "Finance"
    },
    {
      title: "Case Study: Scaling a Home Builder Agency from 50 to 150 Clients",
      excerpt: "A detailed look at how we helped a home builder marketing agency triple their client base.",
      date: "February 15, 2024",
      readTime: "15 min read",
      category: "Case Study"
    },
    {
      title: "The Ultimate Paid Media Audit Checklist for Agencies",
      excerpt: "A comprehensive checklist to audit your agency's paid media operations and identify improvement areas.",
      date: "February 8, 2024",
      readTime: "5 min read",
      category: "Tools"
    }
  ];

  const ebooks = [
    {
      title: "The Agency Owner's Guide to Scaling Paid Media Operations",
      description: "A comprehensive guide covering everything from identifying scaling bottlenecks to choosing the right operational partner.",
      pages: "47 pages",
      format: "PDF",
      topics: [
        "Scaling assessment framework",
        "Cost-benefit analysis of hiring vs. partnering",
        "Operational handoff best practices",
        "Performance monitoring strategies"
      ]
    },
    {
      title: "Attribution Mastery for Marketing Agencies",
      description: "Deep dive into advanced attribution modeling, tracking setup, and performance measurement for agency environments.",
      pages: "62 pages",
      format: "PDF",
      topics: [
        "Multi-touch attribution setup",
        "Cross-channel journey mapping",
        "Client reporting frameworks",
        "Technical implementation guides"
      ]
    },
    {
      title: "The Complete Agency Growth Playbook",
      description: "Strategic framework for scaling marketing agencies from 6 to 8 figures through operational excellence.",
      pages: "89 pages",
      format: "PDF",
      topics: [
        "Revenue scaling strategies",
        "Team structure optimization",
        "Client acquisition systems",
        "Operational efficiency frameworks"
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Strategy: 'bg-blue-100 text-blue-800',
      Technical: 'bg-purple-100 text-purple-800',
      Growth: 'bg-green-100 text-green-800',
      Finance: 'bg-yellow-100 text-yellow-800',
      'Case Study': 'bg-teal-100 text-teal-800',
      Tools: 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || colors.Strategy;
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resources for Agency Growth
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Actionable insights, guides, and tools to help you scale your marketing agency effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights on scaling agency operations and paid media management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-blue-900 hover:text-blue-800 font-medium text-sm flex items-center">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* eBooks Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free eBooks & Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides to help you make informed decisions about scaling your agency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ebooks.map((ebook, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-blue-900 mr-3" />
                  <div>
                    <span className="text-sm text-gray-500">{ebook.pages}</span>
                    <span className="text-sm text-gray-500 mx-2">•</span>
                    <span className="text-sm text-gray-500">{ebook.format}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{ebook.title}</h3>
                <p className="text-gray-600 mb-6">{ebook.description}</p>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">What's Inside:</h4>
                <ul className="space-y-2 mb-6">
                  {ebook.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're working on even more resources to help you scale your agency.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg p-8 md:p-12 text-center">
              <FileText className="h-16 w-16 mx-auto mb-6 text-blue-300" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                "The Agency Owner's Operations Bible"
              </h3>
              <p className="text-xl mb-6 text-blue-100">
                A comprehensive book covering everything from hiring decisions to operational scaling strategies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <h4 className="font-semibold mb-2">What You'll Learn:</h4>
                  <ul className="space-y-1 text-blue-100">
                    <li>• When to hire vs. partner for growth</li>
                    <li>• Operational scaling frameworks</li>
                    <li>• Client retention strategies</li>
                    <li>• Revenue optimization tactics</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold mb-2">Plus Bonuses:</h4>
                  <ul className="space-y-1 text-blue-100">
                    <li>• ROI calculators and templates</li>
                    <li>• SOP frameworks</li>
                    <li>• Client communication scripts</li>
                    <li>• Growth assessment tools</li>
                  </ul>
                </div>
              </div>
              <button className="bg-teal-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-600 transition-colors">
                Notify Me When Available
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest insights on agency scaling, paid media trends, and operational best practices delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Put These Strategies into Action?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how KaizenStrategy can help implement these growth strategies in your agency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://tidycal.com/kaizenstrategy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-teal-600 transition-colors inline-flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Strategy Call
            </a>
            <a
              href="mailto:hello@kaizenstrategy.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;