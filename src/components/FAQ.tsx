import * as React from "react";
import { ChevronDown, ChevronUp, HelpCircle, Shield, DollarSign, Clock, Bot, TrendingUp } from "lucide-react";

const faqData = [
  {
    category: "Getting Started",
    icon: HelpCircle,
    color: "from-blue-500 to-purple-500",
    questions: [
      {
        question: "What is robotic crypto trading and how does it work?",
        answer: "Robotic crypto trading uses advanced AI algorithms to automatically buy and sell cryptocurrencies based on market analysis, technical indicators, and predefined strategies. Our bots monitor the market 24/7, execute trades in milliseconds, and adapt to changing market conditions without human intervention."
      },
      {
        question: "Do I need trading experience to use your platform?",
        answer: "No trading experience is required! Our AI-powered system handles all the complex analysis and decision-making. You simply set your risk preferences and investment amount, and our bots do the rest. We also provide educational resources and 24/7 support to help you understand the process."
      },
      {
        question: "How much money do I need to start?",
        answer: "You can start with as little as $100. We recommend starting small to familiarize yourself with the platform before scaling up your investment. Our flexible system allows you to increase your trading capital as you become more comfortable with automated trading."
      }
    ]
  },
  {
    category: "Safety & Security",
    icon: Shield,
    color: "from-green-500 to-blue-500",
    questions: [
      {
        question: "Is my money safe with robotic trading?",
        answer: "Yes, your funds are protected through multiple security layers. We use bank-level encryption, cold storage for cryptocurrencies, and never store your exchange API keys with withdrawal permissions. Additionally, our risk management protocols include stop-losses and position sizing to protect your capital."
      },
      {
        question: "What happens if the bot makes losing trades?",
        answer: "Losing trades are part of any trading strategy. Our bots are designed with sophisticated risk management that limits losses through stop-losses, position sizing, and diversification. The goal is to ensure that winning trades significantly outweigh losing ones over time, maintaining overall profitability."
      },
      {
        question: "Can I stop the bot or withdraw my money anytime?",
        answer: "Absolutely! You have complete control over your account. You can pause or stop the trading bot at any time, and withdraw your funds instantly. There are no lock-up periods or withdrawal restrictions. Your money remains in your exchange account under your control."
      }
    ]
  },
  {
    category: "Performance & Profits",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
    questions: [
      {
        question: "What kind of returns can I expect?",
        answer: "While past performance doesn't guarantee future results, our bots have historically achieved 15-35% monthly returns. Results vary based on market conditions, risk settings, and investment amount. We provide transparent performance reporting so you can track your progress in real-time."
      },
      {
        question: "How often do the bots trade?",
        answer: "Our bots operate 24/7 and can execute multiple trades per day depending on market opportunities. The frequency varies based on market volatility and the specific strategy being used. During high-volatility periods, bots may trade more frequently to capitalize on price movements."
      },
      {
        question: "Do you guarantee profits?",
        answer: "No legitimate trading system can guarantee profits, and we don't make such claims. Cryptocurrency trading involves risk, and losses are possible. However, our advanced AI and risk management systems are designed to maximize the probability of profitable outcomes while minimizing potential losses."
      }
    ]
  },
  {
    category: "Technical & Support",
    icon: Bot,
    color: "from-orange-500 to-red-500",
    questions: [
      {
        question: "What exchanges do you support?",
        answer: "We support all major cryptocurrency exchanges including Binance, Coinbase Pro, Kraken, and many others. Our platform integrates seamlessly with these exchanges through secure API connections, allowing the bots to trade on your behalf while keeping your funds safe."
      },
      {
        question: "Do I need to keep my computer running?",
        answer: "No! Our bots run on cloud servers, so they operate 24/7 even when your computer is off. You can monitor your trades and adjust settings from any device through our web platform or mobile app. The bots never sleep, ensuring you never miss profitable opportunities."
      },
      {
        question: "What kind of support do you provide?",
        answer: "We offer comprehensive 24/7 customer support through live chat, email, and phone. Our team includes trading experts and technical specialists who can help with setup, strategy optimization, and any questions you may have. We also provide educational resources and regular market updates."
      }
    ]
  },
  {
    category: "Pricing & Fees",
    icon: DollarSign,
    color: "from-yellow-500 to-orange-500",
    questions: [
      {
        question: "What are your fees and pricing?",
        answer: "We offer transparent, performance-based pricing. You only pay when the bots are profitable, typically 20-25% of profits generated. There are no upfront fees, monthly subscriptions, or hidden charges. This aligns our interests with yours - we only succeed when you succeed."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No hidden costs whatsoever. Our fee structure is completely transparent. The only costs are our performance fee (charged only on profits) and standard exchange trading fees (which you'd pay with any trading activity). We believe in honest, straightforward pricing."
      },
      {
        question: "Do you offer a money-back guarantee?",
        answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with the performance or service within the first 30 days, we'll refund any fees paid. This risk-free trial allows you to test our platform with confidence."
      }
    ]
  }
];

export const FAQ: React.FC = function () {
  const [openItems, setOpenItems] = React.useStateReact.useState<Record<string, boolean>>({});
  const [visibleSections, setVisibleSections] = React.useState<boolean[]>(new Array(faqData.length).fill(false));

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-section-index') || '0');
            setVisibleSections(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionElements = document.querySelectorAll('[data-section-index]');
    sectionElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20 mb-6">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-medium">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Know About
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Robotic Trading
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to the most common questions about automated cryptocurrency trading and our platform
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={categoryIndex}
                data-section-index={categoryIndex}
                className={`transition-all duration-700 ${
                  visibleSections[categoryIndex] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} p-2.5`}>
                    <CategoryIcon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openItems[key];
                    
                    return (
                      <div
                        key={questionIndex}
                        className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                      >
                        {/* Question */}
                        <button
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                        >
                          <span className="text-lg font-semibold text-white pr-4">
                            {item.question}
                          </span>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-purple-400 transition-transform duration-200" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-purple-400 transition-transform duration-200" />
                            )}
                          </div>
                        </button>

                        {/* Answer */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                                                                  <div className="px-6 pb-4 border-t border-white/10">
                            <p className="text-gray-300 leading-relaxed pt-4">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our expert support team is available 24/7 to help you get started with automated crypto trading
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://crypto.gobabytrade.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial
                <Clock className="w-4 h-4" />
              </a>
              <a
                href="https://financialintelligence4u.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10"
              >
                Contact Support
                <HelpCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
