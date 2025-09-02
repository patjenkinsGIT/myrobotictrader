import * as React from "react";
import { ArrowRight, Bot, Shield, Clock, Users } from "lucide-react";
import { FloatingIcons } from "./FloatingIcons";

export const Hero: React.FC = function () {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pb-10 pt-10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/10 to-transparent"></div>

      {/* Floating Icons - only in hero section */}
      <FloatingIcons />

      {/* Logo at top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-2.5">
            <Bot className="w-full h-full text-white" />
          </div>
          <div className="text-2xl font-bold">
            <span className="text-white">My</span>
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Robotic
            </span>
            <span className="text-white">Trader</span>
            <span className="text-purple-400 text-sm ml-1">.com</span>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10 mt-16">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6 mt-4">
            <Bot className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-medium">
              AI-Enhanced Trading Revolution
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Turn Your Crypto Dreams Into
            <span className="block text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text">
              Autonomous Trading Success
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            This AI-enhanced robotic trader works 24/7 to maximize your
            cryptocurrency returns on Coinbase and Kraken. No experience needed
            - completely hands-free while your portfolio grows.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://financialintelligence4u.com/masterclass?am_id=patrick1567"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
          >
            Join Free Masterclass
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://gobabytrade.com/fi4u"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10 flex items-center justify-center gap-2"
          >
            Start Trading Now
          </a>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {/* 100% Hands-Free */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-4xl font-bold text-green-400 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                100%
              </div>
              <div className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                Hands-Free Trading
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* 24/7 AI-Enhanced */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                24/7
              </div>
              <div className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                AI-Enhanced Trading
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* 10K+ Satisfied */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Users className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                Thousands
              </div>
              <div className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                Satisfied Traders
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
