import * as React from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Shield,
  Bot,
  TrendingUp,
} from "lucide-react";

const faqData = [
  {
    category: "Getting Started",
    icon: HelpCircle,
    color: "from-blue-500 to-purple-500",
    questions: [
      {
        question: "What is robotic crypto trading and how does it work?",
        answer:
          "Robotic crypto trading uses advanced AI algorithms to automatically buy and sell cryptocurrencies based on market analysis, technical indicators, and predefined strategies. Our Robotic Trader monitors the market 24/7, executes trades in milliseconds, and adapts to changing market conditions without human intervention.",
      },
      {
        question: "Do I need trading experience to use your platform?",
        answer:
          "No trading experience is required! Our AI-powered system handles all the complex analysis and decision-making. You simply set your risk preferences and investment amount, and our Robotic Trader does the rest. We also provide educational resources and 24/7 support to help you understand the process.",
      },
      {
        question: "How much money do I need to start?",
        answer:
          "You can start with as little as $100. We recommend starting small to familiarize yourself with the platform before scaling up your investment. Our flexible system allows you to increase your trading capital as you become more comfortable with automated trading.",
      },
      {
        question: "Can I use this platform if I live outside the USA?",
        answer:
          "Yes! Our Robotic Trading platform is available to users worldwide, as long as you are eligible to trade on Coinbase or Kraken. These exchanges support users from many countries globally. Simply verify that you can create and fund an account with either Coinbase or Kraken in your region, and you'll be able to use our automated trading system.",
      },
      {
        question: "How do I find out more information?",
        answer:
          "The best way to learn more about our Robotic Trader Platform is to join our free masterclass where we demonstrate the system live and answer all your questions. You can register at: https://financialintelligence4u.com/masterclass?am_id=patrick1567",
      },
    ],
  },
  {
    category: "Safety & Security",
    icon: Shield,
    color: "from-green-500 to-blue-500",
    questions: [
      {
        question: "Is my money safe with robotic trading?",
        answer:
          "Yes, your funds remain secure in your own exchange accounts (Kraken or Coinbase). Our robotic trader only connects via API with trading permissions - we never have access to withdraw or transfer your funds. All asset protection is handled directly by your chosen exchange (Kraken/Coinbase).",
      },

      {
        question: "What happens if the Robotic Trader makes losing trades?",
        answer:
          "Our revolutionary protection system ensures our Robotic Trader never executes losing trades. It waits for profitable opportunities or doesn't trade at all, safeguarding your capital. This is what sets us apart from traditional trading systems.",
      },
      {
        question: "Can I stop the Robotic Trader or withdraw my money anytime?",
        answer:
          "Absolutely! You have complete control over your account. You can pause or stop the Robotic Trader at any time, and withdraw your funds instantly. There are no lock-up periods or withdrawal restrictions. Your money remains in your exchange account under your control.",
      },
    ],
  },
  {
    category: "Performance & Profits",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
    questions: [
      {
        question: "What kind of returns can I expect?",
        answer:
          "While past performance doesn't guarantee future results, our Robotic Trader Platform has historically achieved consistent profitable results by only taking trades when market conditions are favorable. Results vary based on market conditions, risk settings, and investment amount.",
      },
      {
        question: "How often does the Robotic Trader trade?",
        answer:
          "Our Robotic Trader operates 24/7 and only executes trades when profitable opportunities arise. The frequency varies based on market conditions - it may trade multiple times per day during favorable conditions, or wait patiently when conditions aren't optimal.",
      },
      {
        question: "What about ROI (Return on Investment)?",
        answer:
          "ROI calculations can be misleading in automated trading because they typically assume a single, fixed investment. Most successful traders grow their capital over time by adding funds and reinvesting profits. Our platform's performance is completely market-driven and depends on your individual investment choices, allocation amounts, and how you manage your capital growth. Rather than focusing on ROI percentages, we recommend tracking your overall portfolio growth and the consistency of profitable trades.",
      },
      {
        question: "Does the robotic trader ever sell my position(s) at a loss?",
        answer:
          "Our platform is designed so that positions are only sold when they become profitable, unless you manually choose otherwise. Even if you have open (unrealized) losses during market dips, the robotic trader patiently waits for opportunities to sell for a gain. Losses are only realized if you instruct our platform to close positions before they return to profit. This approach allows you to avoid locking in losses and gives your trades the best chance to succeed over time.",
      },
      {
        question: "Do you guarantee profits?",
        answer:
          "While we cannot guarantee profits (no legitimate trading system can), our unique approach of never trading at a loss significantly improves your probability of success. Our Robotic Trader is designed to be patient and only take high-probability trades.",
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
          "We support Coinbase and Kraken exclusively. Our Robotic Trader Platform integrates seamlessly with these two trusted exchanges through secure API connections, allowing the Robotic Trader to trade on your behalf while keeping your funds safe in your own accounts.",
      },
      {
        question: "Do I need to keep my computer running?",
        answer:
          "No! Our Robotic Trader runs on cloud servers, so it operates 24/7 even when your computer is off. You can monitor your trades and adjust settings from any device through our web platform. The Robotic Trader never sleeps, ensuring you never miss profitable opportunities.",
      },
      {
        question: "What kind of support do you provide?",
        answer:
          "We offer comprehensive technical support to help you get started and configure the platform. Our team can assist with setup, platform configuration, and technical questions. Please note that we provide technical and educational support only - we do not offer financial advice or investment recommendations.",
      },
    ],
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-white pr-4">
          {question}
        </span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-purple-400 transition-transform duration-200" />
          ) : (
            <ChevronDown className="w-5 h-5 text-purple-400 transition-transform duration-200" />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 border-t border-white/10">
          <p className="text-gray-300 leading-relaxed pt-4">{answer}</p>
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6 mt-4">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-medium">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Know About
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Robotic Trading
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to the most common questions about automated
            cryptocurrency trading and our platform
          </p>
        </div>

        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} p-2.5`}
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
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our expert support team is available to help you get started with
              automated crypto trading
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://financialintelligence4u.com/masterclass?am_id=patrick1567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Join Free Masterclass
                <HelpCircle className="w-4 h-4" />
              </a>
              <a
                href="https://gobabytrade.com/fi4u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10"
              >
                Start Trading Now
                <Bot className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
