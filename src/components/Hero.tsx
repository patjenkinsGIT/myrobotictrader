import * as React from "react";
import { ArrowRight, Bot, Shield, Clock, Users } from "lucide-react";
import { FloatingIcons } from "./FloatingIcons";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";

// A/B Test Configuration
const HEADLINE_VARIANTS = [
  {
    id: "control",
    mainText: "Set It and Forget It",
    gradientText: "Crypto Trading",
    description:
      "AI-Enhanced autonomous robotic trader works 24/7 on Coinbase and Kraken. No experience needed - completely hands-free profit generation.",
  },
  {
    id: "curiosity",
    mainText: "How I Generate",
    gradientText: "Crypto Profits While I Sleep",
    description:
      "The AI-enhanced system that generated $4,000+ in 8 months... without charts, analysis, or sleepless nights.",
  },
  {
    id: "mystery",
    mainText: "The $4,000+ Secret Most",
    gradientText: "Crypto Traders Never Discover",
    description:
      "How I automated my way to financial freedom using AI-enhanced technology most people don't know exists.",
  },
];

export const Hero: React.FC = () => {
  // Select random variant on first render (persists for session)
  const [variant] = React.useState(() => {
    // Check if variant already stored in sessionStorage
    const stored = sessionStorage.getItem("headline_variant");
    if (stored) {
      return (
        HEADLINE_VARIANTS.find((v) => v.id === stored) || HEADLINE_VARIANTS[0]
      );
    }

    // Select random variant
    const randomVariant =
      HEADLINE_VARIANTS[Math.floor(Math.random() * HEADLINE_VARIANTS.length)];
    sessionStorage.setItem("headline_variant", randomVariant.id);

    // Track which variant user sees (for your manual analysis)
    console.log(`A/B Test: Showing variant "${randomVariant.id}"`);

    return randomVariant;
  });

  const handleGetFreeTraining = () => {
    // Track conversion
    trackCTAClick("get_free_training", "hero");
    trackOutboundLink("https://dailyprofits.link/class", "Get Free Training");

    // Log conversion with variant info for manual tracking
    console.log(`Conversion: variant "${variant.id}" → Free Training clicked`);
  };

  const handleStartTrading = () => {
    // Track conversion
    trackCTAClick("start_trading", "hero");
    trackOutboundLink("https://dailyprofits.link/gbt", "Start Trading");

    // Log conversion with variant info for manual tracking
    console.log(`Conversion: variant "${variant.id}" → Start Trading clicked`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pb-10 pt-10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/15 to-transparent"></div>

      {/* Floating Icons */}
      <FloatingIcons />

      {/* Logo at top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-purple-500/40 bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
            <div className="w-full h-full rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm">
              <img
                src="/robot-logo.png"
                alt="MyRoboticTrader Robot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-2xl font-bold">
            <span className="text-white">My</span>
            <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
              Robotic
            </span>
            <span className="text-white">Trader</span>
            <span className="text-purple-300 text-sm ml-1">.com</span>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10 mt-16">
        <div className="mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 mt-4 shadow-lg shadow-purple-500/20">
            <Bot className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 font-medium">
              AI-Enhanced Autonomous Trading
            </span>
          </div>

          {/* A/B TESTED HEADLINE */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {variant.mainText}
            <span className="block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text">
              {variant.gradientText}
            </span>
          </h1>

          {/* A/B TESTED DESCRIPTION */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            {variant.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={handleGetFreeTraining}
              className="group relative bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-green-400/30"
            >
              <span className="flex items-center gap-2">
                Get Free Training
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={handleStartTrading}
              className="group relative bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Start Trading
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* $4,000+ Proven Results */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40">
              <Users className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                $4,000+
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Proven Results
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* 100% Hands-Free */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40">
              <Shield className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-4xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300">
                100%
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Hands-Free
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* 24/7 AI-Enhanced */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/40">
              <Clock className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                24/7
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                AI-Enhanced
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
