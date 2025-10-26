import * as React from "react";
import { ArrowLeft, Shield, Eye, Link, Mail } from "lucide-react";

export const PrivacyPage: React.FC = function () {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Logo at top - CLICKABLE */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-purple-500/40 bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm">
              <img
                src="/robot-logo.png"
                alt="MyRoboticTrader Robot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-2xl font-bold group-hover:scale-105 transition-transform">
            <span className="text-white">My</span>
            <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
              Robotic
            </span>
            <span className="text-white">Trader</span>
            <span className="text-purple-300 text-sm ml-1">.com</span>
          </div>
        </a>
      </div>

      {/* Header with Back Button */}
      <section className="py-8 px-4 border-b border-white/10 pt-24">
        <div className="max-w-4xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/40 mb-6 shadow-lg shadow-blue-500/20">
              <Shield className="w-4 h-4 text-blue-300" />
              <span className="text-blue-200 font-medium">Privacy Policy</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Last updated: September 7, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-8">
            {/* Information We Collect */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-blue-300" />
                <h2 className="text-2xl font-bold text-white">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Analytics Data:</strong> We use
                  Google Analytics to understand how visitors interact with our
                  website. This includes:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Pages visited and time spent on site</li>
                  <li>Device type, browser, and operating system</li>
                  <li>General geographic location (country/city level)</li>
                  <li>Referral sources (how you found our site)</li>
                </ul>
                <p>
                  <strong className="text-white">Cookies:</strong> We use
                  cookies to improve your browsing experience and analyze site
                  traffic. You can disable cookies in your browser settings.
                </p>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-300" />
                <h2 className="text-2xl font-bold text-white">
                  How We Use Your Information
                </h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Improve our website content and user experience</li>
                  <li>Understand which pages and features are most valuable</li>
                  <li>
                    Analyze traffic patterns and optimize site performance
                  </li>
                  <li>Ensure our content is relevant and helpful</li>
                </ul>
                <p>
                  <strong className="text-white">We do not:</strong> Sell, rent,
                  or share your personal information with third parties for
                  marketing purposes.
                </p>
              </div>
            </div>

            {/* Affiliate Links */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Link className="w-6 h-6 text-purple-300" />
                <h2 className="text-2xl font-bold text-white">
                  Affiliate Links & Disclosures
                </h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">
                    Affiliate Relationships:
                  </strong>{" "}
                  This website contains affiliate links to products and services
                  we recommend. This means:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    We may earn a commission if you make a purchase through our
                    links
                  </li>
                  <li>This does not affect the price you pay</li>
                  <li>
                    We only recommend tools and services we personally use and
                    believe in
                  </li>
                  <li>
                    Our recommendations are based on genuine experience and
                    results
                  </li>
                </ul>
                <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4 mt-4">
                  <p className="text-blue-200">
                    <strong>Transparency Promise:</strong> All trading results
                    shown are real and from Patrick's personal trading account.
                    We believe in complete transparency about both our results
                    and our affiliate relationships.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Third-Party Services
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Our website uses the following third-party services:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">
                      Google Analytics
                    </h3>
                    <p className="text-sm">
                      Website traffic analysis and user behavior tracking.
                    </p>
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 text-sm"
                    >
                      Google Privacy Policy â†’
                    </a>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2">
                      Cloudflare Pages
                    </h3>
                    <p className="text-sm">
                      Website hosting and content delivery network.
                    </p>
                    <a
                      href="https://www.cloudflare.com/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 text-sm"
                    >
                      Cloudflare Privacy Policy â†’
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Your Rights & Choices
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Opt out of Google Analytics tracking by using browser
                    settings or extensions
                  </li>
                  <li>
                    Disable cookies in your browser (may affect site
                    functionality)
                  </li>
                  <li>Request information about data we may have collected</li>
                  <li>
                    Contact us with any privacy-related questions or concerns
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-yellow-300" />
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p>
                    <strong className="text-white">Website:</strong>{" "}
                    MyRoboticTrader.com
                  </p>
                  <p>
                    <strong className="text-white">Twitter:</strong>{" "}
                    @myrobotictrader
                  </p>
                  <p>
                    <strong className="text-white">Email:</strong> Available
                    through our social media channels
                  </p>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Policy Updates
              </h2>
              <div className="text-gray-300">
                <p>
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated "Last
                  modified" date. We encourage you to review this policy
                  periodically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-8 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to MyRoboticTrader
          </a>
        </div>
      </section>
    </div>
  );
};
