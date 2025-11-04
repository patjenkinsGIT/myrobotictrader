import * as React from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Shield,
  Bot,
  TrendingUp,
  DollarSign,
  User,
} from "lucide-react";

const faqData = [
  {
    category: "My Personal Experience",
    icon: User,
    color: "from-emerald-500 to-teal-500",
    questions: [
      {
        question: "Is this really hands-off, or do you watch it all day?",
        answer:
          "Honestly? In the beginning, I checked it constantly. Now, a few months in, I glance at it maybe once a day, sometimes less. The system trades 24/7 whether I'm working, sleeping, or with my dog Moses. That's the whole point—it works while you live your life.",
      },
      {
        question: "Why are your profits so modest? Shouldn't you be making more?",
        answer:
          "I get this a lot. Here's the truth: Those '$50K in a month!' claims? Usually huge capital, massive risk, or cherry-picked best months. My results are real, transparent, and conservative. I'm building sustainable income, not gambling. If you want 'turn $100 into $10K overnight' promises, this isn't it. If you want realistic profits you can actually count on, keep reading.",
      },
      {
        question: "What happens during slow weeks when there are fewer trades?",
        answer:
          "Some weeks are quiet with few trades. Used to make me nervous. Now I understand: the system is being smart, waiting for the right opportunities instead of forcing trades. Don't panic. Don't tweak settings. Let it do its job. Patience pays off.",
      },
      {
        question: "Would you recommend this to a complete beginner?",
        answer:
          "Yes, but with realistic expectations. This isn't a 'get rich quick' scheme. It requires patience and trust in the process. If you can let the system work without constantly interfering, this works. If you need instant results or want to tinker constantly, you'll struggle.",
      },
      {
        question: "How do I learn more?",
        answer: (
          <>
            Watch the free training. They show exactly how it works, do live
            demonstrations, and answer all your questions:{" "}
            <a
              href="https://dailyprofits.link/class"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-emerald-200 underline transition-colors duration-200"
            >
              Register for the free masterclass
            </a>
          </>
        ),
      },
    ],
  },
  {
    category: "Proof & Transparency",
    icon: TrendingUp,
    color: "from-cyan-500 to-blue-500",
    questions: [
      {
        question: "How do I know this isn't fake?",
        answer:
          "Every trade comes from my live Google Sheets, updated from real Coinbase transactions. Not screenshots. Not cherry-picked wins. Live data with timestamps, coins, buy/sell prices, everything. If I were faking it, why would I show the boring weeks? You can even download the CSV and verify yourself.",
      },
      {
        question: "Why show every single trade publicly?",
        answer:
          "Because I'm tired of fake crypto sites with photoshopped screenshots. If I'm recommending this, you deserve proof—real, verifiable, unfiltered. That's why I built this site. You see good weeks, slow weeks, everything. Complete transparency or nothing.",
      },
      {
        question: "Why are profits per trade so small?",
        answer:
          "Because I've been profitable every single month since I started. Every. Single. Month. The system focuses on consistency, not home runs. Small, consistent profits compound. I'd rather make $4 per trade with 100% winning months than chase $100 per trade and have losing months.",
      },
      {
        question: "What happens when markets drop?",
        answer:
          "The system accumulates inventory at lower prices—buying strategically during dips. Looks quiet because there are fewer sells, but it's preparing for recovery. When prices bounce back, you have multiple positions ready to sell for profit. Buy low, wait patiently, sell high.",
      },
    ],
  },
  {
    category: "Getting Started",
    icon: HelpCircle,
    color: "from-blue-500 to-cyan-500",
    questions: [
      {
        question: "What is automated crypto trading?",
        answer:
          "A computer program that trades for you 24/7. It monitors markets, buys when conditions are right, sells when you're in profit. You don't watch charts. You don't time the market. You set it up once and let it work.",
      },
      {
        question: "Do I need trading experience?",
        answer:
          "Nope. The system handles all analysis and decisions. You set your investment amount and preferences—it does the rest. Support and training included.",
      },
      {
        question: "How much money do I need to start?",
        answer:
          "Start with as little as $100. I recommend starting small to get comfortable, then scale up as you see results.",
      },
      {
        question: "Can I use this outside the USA?",
        answer:
          "Yes! Works worldwide if you can use Coinbase or Kraken. Just verify you can create an account in your region.",
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
          "Your funds never leave your Coinbase or Kraken account. The system connects via API with trading-only permissions—it can trade, but it can never withdraw your money. You're in complete control.",
      },
      {
        question: "Does it ever sell at a loss?",
        answer:
          "No. The system only sells when you're in profit. If a trade goes underwater, it waits—sometimes days, sometimes weeks—until it can sell for a gain. No panic-selling. No losses locked in.",
      },
      {
        question: "Can I stop it anytime?",
        answer:
          "Yes. Pause or stop anytime in the trader interface. When paused, it stops making new trades but your existing positions stay untouched. You have full control.",
      },
    ],
  },
  {
    category: "Common Questions",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-500",
    questions: [
      {
        question: "What returns can I expect?",
        answer:
          "I can't guarantee anything. My results are on this page—updated live. What you see is what I'm getting. Some months are better, some slower. But every month has been profitable so far. Your results will vary based on your capital, settings, and market conditions.",
      },
      {
        question: "Do I need to keep my computer running?",
        answer:
          "No. The system runs on cloud servers 24/7. Your computer can be off. Monitor from any device through the web platform.",
      },
      {
        question: "Which exchanges work with this?",
        answer:
          "Coinbase and Kraken only. The system was built specifically for these two exchanges with secure API integration. They're also two of the most reliable exchanges out there.",
      },
      {
        question: "Why doesn't it use all my capital at once?",
        answer:
          "The system is conservative by design. It waits for optimal opportunities instead of rushing to deploy everything. Protects you from volatility and keeps funds available for better entry points.",
      },
      {
        question: "How do I handle taxes?",
        answer: (
          <>
            Crypto taxes get messy with hundreds of trades. I use CoinTracker—it
            auto-tracks everything, connects to Coinbase/Kraken, and generates
            the tax forms you need.{" "}
            <a
              href="https://dailyprofits.link/cointracker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-emerald-200 underline transition-colors duration-200"
            >
              Get CoinTracker
            </a>
          </>
        ),
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
    <div className="bg-white/8 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:border-white/30 transition-all duration-300 shadow-lg shadow-emerald-500/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-white pr-4">
          {question}
        </span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-emerald-300 transition-transform duration-200" />
          ) : (
            <ChevronDown className="w-5 h-5 text-emerald-300 transition-transform duration-200" />
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

interface FAQCategoryProps {
  category: string;
  icon: React.ElementType;
  color: string;
  questions: Array<{ question: string; answer: string | React.ReactNode }>;
}

const FAQCategory: React.FC<FAQCategoryProps> = ({
  category,
  icon: Icon,
  color,
  questions,
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg bg-gradient-to-br ${color} shadow-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">{category}</h3>
      </div>
      <div className="space-y-3">
        {questions.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 -z-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Questions You're Probably Asking
          </h2>
          <p className="text-xl text-gray-300">
            Real answers from real experience—no fluff, no sales pitch
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {faqData.map((category, index) => (
            <FAQCategory
              key={index}
              category={category.category}
              icon={category.icon}
              color={category.color}
              questions={category.questions}
            />
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 text-center bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-200 mb-6">
            Get all your questions answered in the free training. See live
            demonstrations, ask questions directly, and learn exactly how the
            system works.
          </p>
          <a
            href="https://dailyprofits.link/class"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-4 px-8 rounded-xl hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-emerald-500/50"
          >
            Register for Free Masterclass →
          </a>
        </div>
      </div>
    </section>
  );
};
