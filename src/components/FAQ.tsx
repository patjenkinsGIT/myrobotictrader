import * as React from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Shield,
  Bot,
  TrendingUp,
  DollarSign,
} from "lucide-react";

const faqData = [
  {
    category: "Getting Started",
    icon: HelpCircle,
    color: "from-blue-500 to-purple-500",
    questions: [
      {
        question: "What is robotic crypto trading?",
        answer:
          "A robotic trader is an automated trading platform that executes buy and sell decisions based on market conditions and your settings. The system monitors markets 24/7 and executes trades in milliseconds without human intervention. While AI enhancement helps optimize timing for potentially better profits or entry prices, the core trading platform operates on proven algorithms and market analysis that adapt to changing market conditions.",
      },
      {
        question: "Do I need trading experience?",
        answer:
          "No experience required! The AI handles all analysis and decisions. You set your preferences and investment amount - the platform does the rest. We provide support and resources to help you understand the process.",
      },
      {
        question: "How much money do I need to start?",
        answer:
          "Start with as little as $100. We recommend starting small to get familiar with the platform before scaling up your investment.",
      },
      {
        question: "Can I use this outside the USA?",
        answer:
          "Yes! Available worldwide as long as you can trade on Coinbase or Kraken. Simply verify you can create and fund an account with either exchange in your region.",
      },
      {
        question: "How do I learn more?",
        answer: (
          <>
            Join our free masterclass where we demonstrate the system live and
            answer questions. Register at:{" "}
            <a
              href="https://dailyprofits.link/class"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200 underline transition-colors duration-200"
            >
              https://dailyprofits.link/class
            </a>
          </>
        ),
      },
    ],
  },
  {
    category: "Safety & Security",
    icon: Shield,
    color: "from-green-500 to-blue-500",
    questions: [
      {
        question: "Is my money safe?",
        answer:
          "Yes! Your funds stay in your own Kraken/Coinbase accounts. We only connect via API with trading permissions - we can never withdraw or transfer your funds.",
      },
      {
        question: "What if the system makes losing trades?",
        answer:
          "Our protection system never executes losing trades. It waits for profitable opportunities or doesn't trade at all, safeguarding your capital.",
      },
      {
        question: "Can I pause or stop the automated trading anytime?",
        answer:
          "Yes! You have complete control over the automation. You can pause or stop the robotic trader anytime directly in the trader interface. When paused, the system stops making new trades but your existing positions remain untouched.",
      },
    ],
  },
  {
    category: "Performance & Profits",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
    questions: [
      {
        question: "What returns can I expect?",
        answer:
          "While past performance doesn't guarantee future results, our platform achieves consistent profits by only trading when conditions are favorable. Results vary based on market conditions and your settings.",
      },
      {
        question: "How often does it trade?",
        answer:
          "The system operates 24/7 and only trades when profitable opportunities arise. May trade multiple times daily during favorable conditions, or wait patiently when conditions aren't optimal.",
      },
      {
        question: "What about ROI?",
        answer:
          "ROI calculations can be misleading since most successful traders grow capital over time. Focus on overall portfolio growth and consistent profitable trades rather than ROI percentages.",
      },
      {
        question: "Does it ever sell at a loss?",
        answer:
          "Positions are only sold when profitable, unless you manually choose otherwise. The system waits patiently for opportunities to sell for gains, avoiding locked-in losses.",
      },
      {
        question: "Do you guarantee profits?",
        answer:
          "No legitimate system can guarantee profits. However, our approach of never trading at a loss significantly improves your probability of success.",
      },
    ],
  },
  {
    category: "Money Management",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-500",
    questions: [
      {
        question: "Why doesn't the trader use all my available capital?",
        answer:
          "The system is designed to be conservative and patient. It waits for optimal opportunities rather than rushing to deploy all capital at once. This approach protects you from market volatility and ensures funds are available for better entry points.",
      },
      {
        question: "How does profit management work?",
        answer:
          "The system automatically manages profits, and you control whether to reinvest them or keep them separate. You can choose to compound your gains for faster growth or withdraw profits while keeping your original capital working.",
      },
      {
        question: "Does the system support dollar cost averaging?",
        answer:
          "Yes! There are advanced options where the trader will only buy positions and never sell, effectively creating a dollar cost averaging strategy. This is perfect for long-term accumulation without worrying about exit timing.",
      },
      {
        question:
          "Why does the trader buy many positions but not sell during market dips?",
        answer:
          "Down markets are actually good - this is where you build inventory! The trader takes advantage of lower prices to accumulate positions, creating a well-seasoned portfolio. When markets recover, you'll have multiple profitable positions ready to sell. This patient approach is what produces successful long-term results.",
      },
      {
        question: "Which cryptocurrencies work best for different strategies?",
        answer:
          "For active trading, faster-moving currencies often provide more opportunities. However, established coins like BTC and ETH may be better suited for long-term dollar cost averaging strategies due to their stability and growth potential over time. These are examples only - we provide technical support, not investment advice.",
      },
    ],
  },
  {
    category: "Technical & Support",
    icon: Bot,
    color: "from-orange-500 to-red-500",
    questions: [
      {
        question: "What exchanges do you support?",
        answer:
          "Coinbase and Kraken exclusively. Seamless integration through secure API connections while keeping your funds safe in your own accounts.",
      },
      {
        question: "Do I need to keep my computer running?",
        answer:
          "No! The system runs on cloud servers 24/7 even when your computer is off. Monitor trades and adjust settings from any device through our web platform.",
      },
      {
        question: "What support do you provide?",
        answer:
          "Comprehensive technical support for setup, configuration, and platform questions.  The provided support is for technical and educational support only - no financial advice.",
      },
    ],
  },
];

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white/8 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:border-white/30 transition-all duration-300 shadow-lg shadow-purple-500/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-white pr-4">
          {question}
        </span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-purple-300 transition-transform duration-200" />
          ) : (
            <ChevronDown className="w-5 h-5 text-purple-300 transition-transform duration-200" />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 border-t border-white/20">
          <div className="text-gray-200 leading-relaxed pt-4">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = function () {
  return (
    <section className="py-10 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 mt-4 shadow-lg shadow-purple-500/20">
            <HelpCircle className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 font-medium">FAQ</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Know
            <span className="block text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
              About Robotic Trading
            </span>
          </h2>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Common questions about automated cryptocurrency trading answered.
          </p>
        </div>

        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} p-2.5 shadow-lg`}
                    style={{
                      boxShadow: `0 4px 20px rgba(${
                        category.color.includes("blue")
                          ? "59, 130, 246"
                          : category.color.includes("green")
                          ? "34, 197, 94"
                          : category.color.includes("purple")
                          ? "168, 85, 247"
                          : category.color.includes("emerald")
                          ? "16, 185, 129"
                          : "249, 115, 22"
                      }, 0.3)`,
                    }}
                  >
                    <CategoryIcon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => (
                    <FAQItem
                      key={questionIndex}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-lg shadow-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Our support team is ready to help you get started with automated
              crypto trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://dailyprofits.link/class"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
              >
                Get Free Training
                <HelpCircle className="w-4 h-4" />
              </a>
              <a
                href="https://dailyprofits.link/gbt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white/60 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/15 shadow-lg shadow-white/10"
              >
                Start Trading
                <Bot className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* General Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            * All cryptocurrency examples and strategies mentioned are for
            educational purposes only. We provide technical and platform support
            - not financial or investment advice. Always do your own research
            and consult with qualified financial advisors.
          </p>
        </div>
      </div>
    </section>
  );
};
