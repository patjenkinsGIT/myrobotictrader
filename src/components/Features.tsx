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
      "Analyzes market patterns and executes trades with AI precision, adapting to changing conditions in real-time. Never worry about charts or timing again.",
    color: "from-purple-500 to-pink-500",
    stats: "Unattended Trading",
  },
  {
    icon: TrendingUp,
    title: "Takes What the Market Gives",
    description:
      "Capitalizes on market opportunities as they arise, taking profits when favorable and waiting patiently when not. Smart, patient trading.",
    color: "from-emerald-500 to-green-500",
    stats: "Market-Driven Results",
  },
  {
    icon: Shield,
    title: "Never Trades at a Loss",
    description:
      "Only sells when your position is profitable—never at a loss unless you choose otherwise. Protects investments while capitalizing on market swings.",
    color: "from-blue-500 to-cyan-500",
    stats: "0% Loss Trades",
  },
  {
    icon: Clock,
    title: "Set It & Forget It",
    description:
      "Monitors global markets 24/7, executing trades even while you sleep. Never miss profitable opportunities or stare at charts again.",
    color: "from-orange-500 to-amber-500",
    stats: "Always Active",
  },
  {
    icon: Zap,
    title: "Lightning Fast Execution",
    description:
      "Executes trades in milliseconds, capitalizing on market movements before human traders can react. Speed gives you the competitive edge.",
    color: "from-yellow-500 to-orange-500",
    stats: "100ms Execution",
  },
  {
    icon: DollarSign,
    title: "Your Funds Stay Safe",
    description:
      "Funds remain secure in your Kraken/Coinbase accounts. Trading-only API access means we can never withdraw or transfer your money.",
    color: "from-emerald-500 to-teal-500",
    stats: "Your Keys, Your Crypto",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Simple position and profit reporting gives you clear visibility into performance and total profits across Coinbase and Kraken.",
    color: "from-indigo-500 to-purple-500",
    stats: "Live Tracking",
  },
  {
    icon: Users,
    title: "Start with Paper Trading",
    description:
      "Test the system risk-free with paper trading before going live. Build confidence and see performance without risking real money.",
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 mt-4 shadow-lg shadow-purple-500/20">
            <Zap className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 font-medium">
              Powerful Features
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose This
            <span className="block text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
              Autonomous Trading Platform
            </span>
          </h2>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Advanced autonomous technology with comprehensive risk management on
            trusted exchanges like Coinbase and Kraken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <div
                key={index}
                data-card-index={index}
                className={`group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg ${
                  visibleCards[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: `0 8px 32px rgba(${
                    index % 2 === 0 ? "168, 85, 247" : "236, 72, 153"
                  }, 0.15)`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300`}
                ></div>

                <div
                  className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  style={{
                    boxShadow: `0 4px 20px rgba(${
                      feature.color.includes("purple")
                        ? "168, 85, 247"
                        : feature.color.includes("emerald")
                        ? "16, 185, 129"
                        : feature.color.includes("blue")
                        ? "59, 130, 246"
                        : feature.color.includes("orange")
                        ? "249, 115, 22"
                        : feature.color.includes("yellow")
                        ? "245, 158, 11"
                        : feature.color.includes("teal")
                        ? "20, 184, 166"
                        : feature.color.includes("indigo")
                        ? "99, 102, 241"
                        : "236, 72, 153"
                    }, 0.4)`,
                  }}
                >
                  <FeatureIcon className="w-full h-full text-white" />
                </div>

                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.color} text-white shadow-md`}
                  >
                    {feature.stats}
                  </div>
                </div>

                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl`}
                ></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-lg shadow-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Autonomous Trading?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Join successful traders using set-it-and-forget-it cryptocurrency
              trading.
            </p>
            <a
              href="https://financialintelligence4u.com/masterclass?am_id=patrick1567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
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
