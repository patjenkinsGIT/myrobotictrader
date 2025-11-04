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
import { trackEvent } from "../utils/analytics";

const features = [
  {
    icon: Clock,
    title: "Trades While You Sleep",
    description:
      "You can't watch charts 24/7. The system does it for you—monitoring markets and executing trades automatically. Wake up to profits.",
    color: "from-orange-500 to-amber-500",
    stats: "Always Active",
  },
  {
    icon: Shield,
    title: "Zero Losing Trades",
    description:
      "Tired of panic-selling? The system only sells when you're in profit. Market dips? It waits. No losses locked in. Period.",
    color: "from-blue-500 to-cyan-500",
    stats: "0% Loss Trades",
  },
  {
    icon: Bot,
    title: "Fully Automated",
    description:
      "Bad at timing the market? Let the system handle it. Trades when conditions are right, sits idle when they're not. No guessing.",
    color: "from-slate-500 to-slate-600",
    stats: "Hands-Free",
  },
  {
    icon: DollarSign,
    title: "Your Money Stays Safe",
    description:
      "Your funds never leave Coinbase or Kraken. Trading-only API access means we can trade but never withdraw. You stay in control.",
    color: "from-emerald-500 to-teal-500",
    stats: "Your Keys, Your Crypto",
  },
  {
    icon: TrendingUp,
    title: "Patient, Not Greedy",
    description:
      "Chasing pumps never works. The system takes profits when available, waits when the market's flat. No FOMO. No panic.",
    color: "from-emerald-500 to-green-500",
    stats: "Steady Growth",
  },
  {
    icon: Zap,
    title: "Faster Than You Can Click",
    description:
      "By the time you click buy, the opportunity's gone. The system executes in milliseconds. No hesitation. No missed trades.",
    color: "from-yellow-500 to-orange-500",
    stats: "Instant Trades",
  },
  {
    icon: BarChart3,
    title: "Complete Transparency",
    description:
      "See everything. Every buy, every sell, every dollar of profit. Real-time updates. No mystery, no black box.",
    color: "from-cyan-500 to-blue-500",
    stats: "Live Tracking",
  },
  {
    icon: Users,
    title: "Try It Risk-Free",
    description:
      "Not ready for real money? Test with paper trading first. See how it performs for a week or month. Then decide.",
    color: "from-slate-500 to-slate-700",
    stats: "Zero Risk",
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

            // Track feature card views
            trackEvent("view", "feature_card", features[index].title, 1);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardElements = document.querySelectorAll("[data-card-index]");
    cardElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleFeatureClick = (featureTitle: string, index: number) => {
    trackEvent("click", "feature_card", `${featureTitle}_card_${index + 1}`, 1);
  };

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-400/40 mb-6 mt-4 shadow-lg shadow-emerald-500/20">
            <Zap className="w-4 h-4 text-emerald-300" />
            <span className="text-emerald-100 font-medium">
              Powerful Features
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why This Works
            <span className="block text-emerald-400">
              When Manual Trading Doesn't
            </span>
          </h2>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stop watching charts and second-guessing yourself. Let the system handle the hard parts while you sleep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <div
                key={index}
                data-card-index={index}
                onClick={() => handleFeatureClick(feature.title, index)}
                className={`group relative bg-white/8 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg cursor-pointer ${
                  visibleCards[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: `0 8px 32px rgba(${
                    index % 2 === 0 ? "16, 185, 129" : "20, 184, 166"
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
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 text-base leading-relaxed mb-5 group-hover:text-gray-200 transition-colors duration-300">
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
      </div>
    </section>
  );
};
