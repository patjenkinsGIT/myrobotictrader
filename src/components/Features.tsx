import * as React from "react";
import {
  Bot,
  TrendingUp,
  Shield,
  Clock,
  Zap,
  DollarSign,
  BarChart3,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Autonomous Robotic Trading",
    description:
      "Advanced robotic traders analyze market patterns and execute trades with precision, adapting to changing market conditions in real-time without human intervention.  Never worry about when to buy or sell",
    color: "from-purple-500 to-pink-500",
    stats: "100% Accurate",
  },
  {
    icon: TrendingUp,
    title: "Takes What the Market Gives",
    description:
      "Our robotic traders capitalize on market opportunities as they arise, taking profits when conditions are favorable and waiting patiently when they're not.  Charts are a thing of the past.",
    color: "from-green-500 to-blue-500",
    stats: "Market-Driven Results",
  },
  {
    icon: Shield,
    title: "Never Trades at a Loss",
    description:
      "Revolutionary protection system ensures our robotic traders never execute losing trades. They wait for profitable opportunities or don't trade at all, safeguarding your capital. Stop Loss is a thing of the past.",
    color: "from-blue-500 to-cyan-500",
    stats: "0% Loss Trades",
  },
  {
    icon: Clock,
    title: "Set It & Forget It",
    description:
      "Never miss a profitable opportunity. Our autonomous robotic traders monitor global markets around the clock, executing trades even while you sleep.  The days of staring at charts are over.",
    color: "from-orange-500 to-red-500",
    stats: "Always Active",
  },
  {
    icon: Zap,
    title: "Lightning Fast Execution",
    description:
      "Execute trades in milliseconds, capitalizing on market movements before human traders can react. Speed is crucial in cryptocurrency trading.",
    color: "from-yellow-500 to-orange-500",
    stats: "<100ms Execution",
  },
  {
    icon: DollarSign,
    title: "Your Funds Stay Safe",
    description:
      "Your cryptocurrencies remain safely in your own Coinbase or Kraken accounts. We never hold your funds - only execute trades on your behalf through secure API connections.",
    color: "from-emerald-500 to-teal-500",
    stats: "Your Keys, Your Crypto",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Position and simple profit reporting give you visibility into your robotic trader performance and how much you profit you save across Coinbase and Kraken.",
    color: "from-indigo-500 to-purple-500",
    stats: "Live Tracking",
  },
  {
    icon: Users,
    title: "Start with Paper Trading",
    description:
      "Test the robotic traders risk-free with paper trading before going live. See how they perform and build confidence in the autonomous trading system.",
    color: "from-pink-500 to-rose-500",
    stats: "Risk-Free Testing",
  },
];

export const Features: React.FC = function () {
  const [visibleCards, setVisibleCards] = React.useState<boolean[]>(
    new Array(features.length).fill(false)
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-card-index") || "0"
            );
            setVisibleCards((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardElements = document.querySelectorAll("[data-card-index]");
    cardElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-10 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6 mt-4">
            {" "}
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-medium">
              Powerful Features
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Our
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Autonomous Trading Platform
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of cryptocurrency trading with cutting-edge
            autonomous technology, comprehensive risk management, and
            unparalleled performance on trusted exchanges.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <div
                key={index}
                data-card-index={index}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  visibleCards[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <FeatureIcon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Stats Badge */}
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.color} text-white`}
                  >
                    {feature.stats}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Autonomous Trading?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of successful traders who have already discovered
              the power of set-it-and-forget-it cryptocurrency trading.
            </p>
            <a
              href="https://financialintelligence4u.com/masterclass?am_id=patrick1567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Join Free Masterclass
              <TrendingUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
