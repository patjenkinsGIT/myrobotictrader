import * as React from "react";
import { Bot, Mail, ExternalLink, Shield, Award, Users } from "lucide-react";

export const Footer: React.FC = function () {
  return (
    <footer className="relative py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">MyRoboticTrader.com</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing cryptocurrency trading through advanced AI automation. 
              Join thousands of successful traders who trust our platform for consistent profits.
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">Secure Trading</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">Award Winning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">10K+ Users</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://crypto.gobabytrade.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                >
                  Start Trading
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://financialintelligence4u.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                >
                  About Our Company
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#help" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#docs" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partnership highlight */}
        <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-2">
              Powered by Financial Intelligence 4U
            </h4>
            <p className="text-gray-400 mb-4">
              Our affiliate program is managed by industry experts with years of experience in financial technology and crypto trading.
            </p>
            <a
              href="https://financialintelligence4u.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              Learn more about our partnership
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 MyRoboticTrader.com. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#disclaimer" className="text-gray-400 hover:text-white transition-colors">
                Risk Disclaimer
              </a>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 text-xs text-gray-500 text-center max-w-4xl mx-auto">
            <p>
              <strong>Risk Warning:</strong> Trading cryptocurrencies involves substantial risk and may not be suitable for all investors. 
              Past performance does not guarantee future results. Please consider your investment objectives and risk tolerance before trading. 
              This website is for informational purposes only and does not constitute investment advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
