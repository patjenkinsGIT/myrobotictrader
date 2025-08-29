import * as React from "react";
import { ArrowRight, Bot, TrendingUp, Shield, Zap } from "lucide-react";
import { trackConversion, trackEvent } from "./Analytics";
import { SectionTracker } from "./TrackingWrapper";
import { ANALYTICS_CONFIG } from "../config/analytics";

export const Hero: React.FC = function () {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleStartTradingClick = () => {
    trackConversion('click_affiliate_link', 100);
    trackEvent('cta_click', {
      button_location: 'hero',
      button_text: 'Start Trading Now',
      destination: 'crypto.gobabytrade.com'
    });
  };

  const handleLearnMoreClick = () => {
    trackEvent('cta_click', {
      button_location: 'hero',
      button_text: 'Learn More',
      destination: 'financialintelligence4u.com'
    });
  };

  return (
    <SectionTracker sectionName="hero">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Geometric pattern using CSS */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/10 to-transparent animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <Bot className="w-8 h-8 text-purple-400 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-2000">
          <TrendingUp className="w-6 h-6 text-green-400 opacity-60" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-3000">
          <Shield className="w-7 h-7 text-blue-400 opacity-60" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-500">
          <Zap className="w-5 h-5 text-yellow-400 opacity-60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                MyRoboticTrader.com
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            {/* Main headline */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Revolutionize Your Crypto Trading with
              <span className="block text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">
                AI-Powered Automation
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join thousands of successful traders using cutting-edge robotic trading technology. 
              Maximize profits while minimizing risk with our advanced AI algorithms.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Automated Trading</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">$10M+</div>
                <div className="text-gray-300">Trades Executed</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href={ANALYTICS_CONFIG.AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleStartTradingClick}
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
              >
                Start Trading Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={ANALYTICS_CONFIG.COMPANY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLearnMoreClick}
                className="group border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10"
              >
                Learn More
              </a>
            </div>

            {/* Trust indicators */}
            <div className="text-gray-400 text-sm">
              <p className="mb-2">Powered by Financial Intelligence 4U</p>
              <p>Trusted by professional traders worldwide</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </SectionTracker>
  );
};
