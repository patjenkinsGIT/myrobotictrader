import * as React from "react";
import { ArrowRight, Star, CheckCircle, Rocket } from "lucide-react";
import { trackConversion, trackEvent } from "./Analytics";
import { SectionTracker } from "./TrackingWrapper";
import { ANALYTICS_CONFIG } from "../config/analytics";

export const CallToAction: React.FC = function () {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleStartTradingClick = () => {
    trackConversion('click_affiliate_link', 200);
    trackEvent('cta_click', {
      button_location: 'final_cta',
      button_text: 'Start Trading Now',
      destination: 'crypto.gobabytrade.com',
      section: 'call_to_action'
    });
  };

  const handleLearnMoreClick = () => {
    trackEvent('cta_click', {
      button_location: 'final_cta',
      button_text: 'Learn More About Our Company',
      destination: 'financialintelligence4u.com',
      section: 'call_to_action'
    });
  };

  const benefits = [
    "No trading experience required",
    "Start with as little as $100",
    "24/7 customer support",
    "Risk-free 30-day trial",
    "Transparent fee structure",
    "Instant withdrawals"
  ];

  return (
    <SectionTracker sectionName="call_to_action">
      <section id="cta-section" className="py-20 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/10 to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Main CTA Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20 mb-6">
                <Rocket className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 font-medium">Limited Time Offer</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Start Your Journey to
                <span className="block text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text">
                  Financial Freedom
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't let another profitable opportunity slip away. Join the revolution of automated crypto trading today.
              </p>

              {/* Testimonial highlight */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8 max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-300 italic mb-4">
                  "I went from losing money on manual trades to making consistent profits with MyRoboticTrader. 
                  The AI does all the work while I focus on my day job. Best investment decision I've ever made!"
                </blockquote>
                <cite className="text-purple-400 font-semibold">- Sarah M., Professional Trader</cite>
              </div>
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left column - Benefits */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  What You Get When You Join:
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                                                                    <div 
                      key={index}
                      className="flex items-center gap-3 group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl border border-green-500/20">
                  <div className="text-green-400 font-semibold mb-2">🎯 Special Launch Offer</div>
                  <div className="text-white text-lg">
                    Get 50% off your first month + Free premium strategy guide
                  </div>
                </div>
              </div>

              {/* Right column - CTA Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-400">
                    Choose your path to automated trading success
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Primary CTA */}
                  <a
                    href={ANALYTICS_CONFIG.AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleStartTradingClick}
                    className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
                  >
                    Start Trading Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Secondary CTA */}
                                                                        <a
                    href={ANALYTICS_CONFIG.COMPANY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLearnMoreClick}
                    className="group w-full border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10 flex items-center justify-center gap-2"
                  >
                    Learn More About Our Company
                  </a>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm mb-2">
                    Trusted by 10,000+ traders worldwide
                  </p>
                  <div className="flex justify-center items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-gray-400 text-sm ml-2">4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom guarantee */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-green-500/30">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-medium">
                  30-Day Money-Back Guarantee - No Questions Asked
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionTracker>
  );
};
