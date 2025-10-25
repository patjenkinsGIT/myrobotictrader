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
    color: "from-purple-500 to-pink-500",
    questions: [
      {
        question: "Why did you start automated trading in January 2025?",
        answer:
          "I was tired of watching charts and trying to time the market perfectly. I wanted a systematic approach that could work while I lived my life. The idea of a system that only trades when conditions are favorable—and sits patiently when they're not—made sense to me. I started tracking every single trade publicly on this site to prove it works.",
      },
      {
        question: "What surprised you most in your first months of trading?",
        answer:
          "Two things: First, how truly hands-off it is. I genuinely don't watch it constantly. Second, how patience is everything. Some weeks are quiet with few trades, and that used to make me nervous. Now I understand that's the system being smart—waiting for the right opportunities instead of forcing trades.",
      },
      {
        question: "What happens during flat or low volatility weeks?",
        answer:
          "The system thrives on volatility, so when the market is flat, there are fewer trading opportunities. Some weeks I see very few trades. The key lesson I've learned: Don't panic and don't start tweaking settings. Patience is paramount. The system knows what it's doing—it's waiting for better conditions.",
      },
      {
        question: "Do you still check it constantly or worry about trades?",
        answer:
          "Honestly? In the beginning, yes—I checked it all the time. Now, a few months in, I glance at it maybe once a day, sometimes less. The transparency on this site is actually for YOU to see how it works, not because I'm obsessing over every trade. The system handles it.",
      },
      {
        question:
          "Your profits seem modest. Shouldn't you be making way more money?",
        answer:
          "I get this question a lot, and I appreciate the honesty. Here's my perspective: I'm not trying to get rich quick—I'm building sustainable, consistent income. Those '$50K in a month!' claims you see everywhere? Usually from huge capital, massive risk, or cherry-picked best months. My results are real, transparent, and conservative. I'm focused on steady growth without gambling. If you're looking for 'turn $100 into $10K overnight' promises, this isn't it. If you want realistic, sustainable profits you can actually count on, that's what I'm showing.",
      },
      {
        question: "Why not scale up and make bigger profits faster?",
        answer:
          "Fair question. I could throw more money at it, but I'm being strategic. I'm adding capital gradually as I get more comfortable and as the system proves itself month after month. I'd rather grow methodically and sleep well at night than rush to scale and take on more risk than I'm comfortable with. Plus, I have other investments and income streams—this is one piece of my overall strategy, not my entire financial life. Everyone's situation is different, and I'm showing you MY approach, which prioritizes consistency over speed.",
      },
      {
        question: "Would you recommend this to a complete beginner?",
        answer:
          "Yes, but with realistic expectations. This isn't a 'get rich quick' scheme. It's systematic investing that requires patience and trust in the process. If you're willing to let the system do its job without constantly interfering, this works. If you need immediate results or want to tinker constantly, you'll struggle with the patience required.",
      },
      {
        question: "How do I learn more about this system?",
        answer: (
          <>
            The best way is to attend the free training where they walk through
            exactly how the system works, show live demonstrations, and answer
            all your questions. That's where you'll get the full picture:{" "}
            <a
              href="https://dailyprofits.link/class"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200 underline transition-colors duration-200"
            >
              Register for the free masterclass here
            </a>
          </>
        ),
      },
    ],
  },
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
          "No experience required! The AI handles all analysis and decisions. You set your preferences and investment amount - the platform does the rest. Support and resources are provided to help you understand the process.",
      },
      {
        question: "How much money do I need to start?",
        answer:
          "You can start with as little as $100, though starting small to get familiar with the platform before scaling up is recommended. I personally started with a few thousand and added more capital gradually as I got comfortable with how the system works.",
      },
      {
        question: "Can I use this outside the USA?",
        answer:
          "Yes! Available worldwide as long as you can trade on Coinbase or Kraken. Simply verify you can create and fund an account with either exchange in your region.",
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
          "Yes! Your funds stay in your own Kraken/Coinbase accounts. The system only connects via API with trading permissions - it can never withdraw or transfer your funds. Your money never leaves your exchange account.",
      },
      {
        question: "What if the system makes losing trades?",
        answer:
          "The protection system never executes losing trades. It waits for profitable opportunities or doesn't trade at all, safeguarding your capital. This is why you'll see periods where there are very few trades—the system is being patient.",
      },
      {
        question: "Can I pause or stop the automated trading anytime?",
        answer:
          "Yes! You have complete control. You can pause or stop the robotic trader anytime directly in the trader interface. When paused, the system stops making new trades but your existing positions remain untouched.",
      },
    ],
  },
  {
    category: "Performance & Profits",
    icon: TrendingUp,
    color: "from-emerald-500 to-blue-500",
    questions: [
      {
        question: "What returns can I expect?",
        answer:
          "While past performance doesn't guarantee future results, the platform achieves consistent profits by only trading when conditions are favorable. Results vary based on market conditions and your settings. You can see my complete, transparent trading history on this site—every single trade since January 2025.",
      },
      {
        question: "How often does it trade?",
        answer:
          "The system operates 24/7 and only trades when profitable opportunities arise. It may trade multiple times daily during favorable conditions, or wait patiently when conditions aren't optimal. Some weeks you'll see lots of activity, other weeks very little—that's by design.",
      },
      {
        question: "Does it ever sell at a loss?",
        answer:
          "Positions are only sold when profitable, unless you manually choose otherwise. The system waits patiently for opportunities to sell for gains, avoiding locked-in losses. This is a core principle of how the system protects your capital.",
      },
      {
        question: "Do you guarantee profits?",
        answer:
          "No legitimate system can guarantee profits. However, the approach of never trading at a loss significantly improves your probability of success. My results speak for themselves, but your results will depend on your capital, settings, and market conditions.",
      },
    ],
  },
  {
    category: "Money Management",
    icon: DollarSign,
    color: "from-amber-500 to-orange-500",
    questions: [
      {
        question: "Why doesn't the trader use all my available capital?",
        answer:
          "The system is designed to be conservative and patient. It waits for optimal opportunities rather than rushing to deploy all capital at once. This approach protects you from market volatility and ensures funds are available for better entry points. It's frustrating at first, but you learn to trust the patience.",
      },
      {
        question: "How do you decide which cryptocurrencies to trade?",
        answer:
          "I focus on coins with good volatility and liquidity. The free training walks through cryptocurrency selection strategies in detail. The key is finding coins that have enough movement to create trading opportunities but aren't so risky that they're unstable.",
      },
      {
        question: "What's your strategy when you withdraw profits?",
        answer:
          "I follow a 50/50 rule: 50% of profits stay in the account to compound and reinvest, and 50% I can save or enjoy. This way I'm building wealth while also enjoying the fruits of the system. You can see my complete profit management approach in my trading results above.",
      },
      {
        question: "How does profit management work?",
        answer:
          "The system automatically manages profits, and you control whether to reinvest them or keep them separate. You can choose to compound your gains for faster growth or withdraw profits while keeping your original capital working.",
      },
      {
        question:
          "Why does the trader buy many positions but not sell during market dips?",
        answer:
          "Down markets are actually opportunities—this is where you build inventory! The trader takes advantage of lower prices to accumulate positions, creating a well-seasoned portfolio. When markets recover, you'll have multiple profitable positions ready to sell. This patient approach is what produces successful long-term results.",
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
          "No! The system runs on cloud servers 24/7 even when your computer is off. Monitor trades and adjust settings from any device through the web platform.",
      },
      {
        question: "What support do you provide?",
        answer:
          "Comprehensive technical support for setup, configuration, and platform questions. The provided support is for technical and educational support only - no financial advice.",
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
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Real answers from real experience - no fluff, just transparency
          </p>
        </div>

        <div className="space-y-8">
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
        <div className="mt-12 text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
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
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/50"
          >
            Register for Free Masterclass →
          </a>
        </div>
      </div>
    </section>
  );
};
