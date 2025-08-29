import * as React from "react";
import { Bot, TrendingUp, Shield, Zap, Clock, BarChart3, Users, Award } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Trading Bots",
    description: "Advanced machine learning algorithms that adapt to market conditions and execute trades with precision.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Smart Market Analysis",
    description: "Real-time market analysis with predictive insights to identify profitable trading opportunities.",
    color: "from-green-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Built-in risk management protocols to protect your investments and minimize potential losses.",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast Execution",
    description: "Execute trades in milliseconds to capitalize on market movements before they disappear.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Clock,
    title: "24/7 Automated Trading",
    description: "Never miss an opportunity with round-the-clock automated trading that works while you sleep.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive trading analytics and performance metrics to optimize your strategies.",
    color: "from-pink-500 to-red-500"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a thriving community of successful traders sharing strategies and insights.",
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of consistent profits with transparent performance reporting and testimonials.",
    color: "from-orange-500 to-yellow-500"
  }
];

export const Features: React.FC = function () {
  const [visibleFeatures, setVisibleFeatures] = React.useState<boolean[]>(new Array(features.length).fill(false));

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleFeatures(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = document.querySelectorAll('[data-index]');
    featureElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose 
            
            
            
            
            
            
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Robotic Trading?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of cryptocurrency trading with our cutting-edge automation platform
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  visibleFeatures[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative mb-4 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Trading?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of successful traders who have already discovered the power of automated crypto trading
            </p>
            <a
              href="https://crypto.gobabytrade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Get Started Today
              <TrendingUp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
