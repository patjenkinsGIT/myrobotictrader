import * as React from "react";
import { Link } from "react-router-dom";
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
import { FullNav } from "../components/FullNav";

// Helper component for internal blog links
const BlogLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link
    to={to}
    className="text-purple-300 hover:text-purple-200 underline transition-colors duration-200"
  >
    {children}
  </Link>
);

const faqData = [
  {
    category: "My Personal Experience",
    icon: User,
    color: "from-purple-500 to-pink-500",
    questions: [
      {
        question: "Why did you start automated trading in January 2025?",
        answer: (
          <>
            I was tired of watching charts and trying to time the market perfectly. I wanted a systematic approach that could work while I lived my life. The idea of a system that only trades when conditions are favorable—and sits patiently when they're not—made sense to me. I started tracking every single trade publicly on this site to prove it works. <BlogLink to="/blog/trading-disorders-ai-solution">Learn why I let an AI make every trade →</BlogLink>
          </>
        ),
      },
      {
        question: "What surprised you most in your first months of trading?",
        answer: (
          <>
            Two things: First, how truly hands-off it is. I genuinely don't watch it constantly. Second, how patience is everything. Some weeks are quiet with few trades, and that used to make me nervous. Now I understand that's the system being smart—waiting for the right opportunities instead of forcing trades. <BlogLink to="/blog/trading-disorders-ai-solution">Read more about overcoming trading emotions →</BlogLink>
          </>
        ),
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
        question: "Your profits seem modest. Shouldn't you be making way more money?",
        answer: (
          <>
            I get this question a lot, and I appreciate the honesty. Here's my perspective: I'm not trying to get rich quick—I'm building sustainable, consistent income. Those '$50K in a month!' claims you see everywhere? Usually from huge capital, massive risk, or cherry-picked best months. My results are real, transparent, and conservative. I'm focused on steady growth without gambling. <BlogLink to="/blog/percent-gain-vs-roi">Why I show % gain instead of ROI →</BlogLink>
          </>
        ),
      },
      {
        question: "Why not scale up and make bigger profits faster?",
        answer:
          "Fair question. I could throw more money at it, but I'm being strategic. I'm adding capital gradually as I get more comfortable and as the system proves itself month after month. I'd rather grow methodically and sleep well at night than rush to scale and take on more risk than I'm comfortable with.",
      },
      {
        question: "Would you recommend this to a complete beginner?",
        answer: (
          <>
            Yes, but with realistic expectations. This isn't a 'get rich quick' scheme. It's systematic investing that requires patience and trust in the process. If you're willing to let the system do its job without constantly interfering, this works. <BlogLink to="/blog/how-to-make-passive-income-crypto">Read the complete beginner's guide →</BlogLink>
          </>
        ),
      },
      {
        question: "How do I get started with this system?",
        answer: (
          <>
            The system I use is called GoBabyTrade. You can start with paper trading to test it risk-free before going live. Use my referral link to save $1,000:{" "}
            <a
              href="https://dailyprofits.link/gbt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200 underline transition-colors duration-200"
            >
              Get GoBabyTrade – Save $1,000
            </a>
          </>
        ),
      },
    ],
  },
  {
    category: "About My Trade Log",
    icon: TrendingUp,
    color: "from-cyan-500 to-blue-500",
    questions: [
      {
        question: "Why do you publicly show every single trade?",
        answer:
          "Because I'm tired of fake affiliate sites with cherry-picked results and photoshopped screenshots. If I'm going to recommend this system, I need to prove it works with real, verifiable data. Every trade you see is real—pulled directly from my live Google Sheets that I update almost daily.",
      },
      {
        question: "How do I know your trade log is real and not faked?",
        answer:
          "The data comes directly from my live Google Sheets, which I manually update from my robotic trader's transaction log—and everything traces back to my actual Coinbase transaction history. Plus, I show the flat weeks and quiet periods too, not just the wins. If I were faking it, why would I show the boring weeks?",
      },
      {
        question: "What do all the numbers in the trade log mean?",
        answer:
          "Each row shows a completed trade: the cryptocurrency, when I bought it, when I sold it, the quantity, the profit (or if it was a break-even trade), and the strategy used. The 'Trading Results' section summarizes everything—total profits, win rate, average profit per trade, etc.",
      },
      {
        question: "Why are some weeks busier with trades than others?",
        answer:
          "The system only trades when market conditions are favorable. During high volatility, you'll see lots of trading activity. During flat periods, the system waits patiently. Some weeks have 20+ trades, other weeks might have 2-3. That's normal and expected.",
      },
      {
        question: "What happens during down markets? Shouldn't the system stop trading?",
        answer: (
          <>
            Actually, down markets are where the system shines! When prices drop, the trader accumulates inventory at lower prices—building up positions strategically. When prices turn around, you'll have a portfolio of positions ready to sell for profit. <BlogLink to="/blog/why-start-automated-trading-in-down-markets">Why down markets are the best time to start →</BlogLink>
          </>
        ),
      },
      {
        question: "Your average profit per trade seems small. Why only a few dollars per trade?",
        answer: (
          <>
            Here's what matters more than average profit per trade: I've been profitable every single month since I started. Every. Single. Month. The system isn't trying to hit home runs—it's focused on consistency and never selling at a loss. Small, consistent profits compound over time. <BlogLink to="/blog/percent-gain-vs-roi">Understanding % gain vs "how much should I invest" →</BlogLink>
          </>
        ),
      },
      {
        question: "Do you ever hide losing trades?",
        answer: (
          <>
            No. Every single trade is shown. However, the system is designed to only sell positions when they're profitable. If a position goes underwater, the system holds it until it can sell for a profit. That's the whole point—patience over panic. <BlogLink to="/blog/never-sell-at-loss-crypto-trading">Why the system never sells at a loss →</BlogLink>
          </>
        ),
      },
      {
        question: "Can I see trades from specific cryptocurrencies?",
        answer:
          "Yes! The trade log shows which coins are being traded—BONK, DOGE, SHIB, and others. You can see which coins generate the most trades, which ones are most profitable, and how the system handles different market conditions for each coin.",
      },
      {
        question: "Why is this level of transparency important?",
        answer:
          "Because 99% of crypto affiliate sites are full of hype and promises with no proof. I wanted to build something different—a site where you can see the actual performance, not marketing spin. This trade log is my proof and my accountability.",
      },
      {
        question: "Why have results dropped from the July highs?",
        answer:
          "August and September 2025 saw a market-wide correction after July's peak. During these down markets, the trader accumulates more inventory at better prices—when markets recover, those accumulated positions generate significantly larger profits. Every month remains profitable despite lower activity.",
      },
      {
        question: "Can I download the trading data?",
        answer:
          "Yes! You can download the complete trade log as a CSV file for your own analysis. Click the download button to export all transactions with timestamps, cryptocurrencies, buy/sell prices, and profit amounts.",
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
        answer: (
          <>
            A robotic trader is an automated trading platform that executes buy and sell decisions based on market conditions and your settings. The system monitors markets 24/7 and executes trades in milliseconds without human intervention. <BlogLink to="/blog/bucket-and-well-automated-trading-analogy">Read the simple analogy that explains how it works →</BlogLink>
          </>
        ),
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
        question: "Should I get Coinbase One?",
        answer: (
          <>
            Absolutely! Coinbase One saves me hundreds monthly with $0 trading fees. When you're making multiple trades daily, those fees add up fast.{" "}
            <a
              href="https://dailyprofits.link/cba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200 underline transition-colors duration-200"
            >
              Get Coinbase One here
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
        answer: (
          <>
            Our protection system never executes losing trades. It waits for profitable opportunities or doesn't trade at all, safeguarding your capital. <BlogLink to="/blog/never-sell-at-loss-crypto-trading">Learn how the never-sell-at-loss strategy works →</BlogLink>
          </>
        ),
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
        answer: (
          <>
            ROI calculations can be misleading since most successful traders grow capital over time. Focus on overall portfolio growth and consistent profitable trades rather than ROI percentages. <BlogLink to="/blog/percent-gain-vs-roi">Why I show % gain instead of "how much should I invest" →</BlogLink>
          </>
        ),
      },
      {
        question: "Does it ever sell at a loss?",
        answer: (
          <>
            Positions are only sold when profitable, unless you manually choose otherwise. The system waits patiently for opportunities to sell for gains, avoiding locked-in losses. <BlogLink to="/blog/never-sell-at-loss-crypto-trading">Deep dive: Why never selling at a loss is actually possible →</BlogLink>
          </>
        ),
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
          "The system is designed to be conservative and patient. It waits for optimal opportunities rather than rushing to deploy all capital at once. This approach protects you from market volatility.",
      },
      {
        question: "How does profit management work?",
        answer:
          "The system automatically manages profits, and you control whether to reinvest them or keep them separate. You can choose to compound your gains for faster growth or withdraw profits.",
      },
      {
        question: "Does the system support dollar cost averaging?",
        answer:
          "Yes! There are advanced options where the trader will only buy positions and never sell, effectively creating a dollar cost averaging strategy. Perfect for long-term accumulation.",
      },
      {
        question: "Why does the trader buy many positions but not sell during market dips?",
        answer: (
          <>
            Down markets are actually good - this is where you build inventory! The trader takes advantage of lower prices to accumulate positions. When markets recover, you'll have multiple profitable positions ready to sell. <BlogLink to="/blog/why-start-automated-trading-in-down-markets">Why down markets are the best time to start (with real numbers) →</BlogLink>
          </>
        ),
      },
      {
        question: "Which cryptocurrencies work best for different strategies?",
        answer:
          "For active trading, faster-moving currencies often provide more opportunities. However, established coins like BTC and ETH may be better suited for long-term dollar cost averaging strategies. These are examples only - we provide technical support, not investment advice.",
      },
      {
        question: "How do I handle taxes on my trading profits?",
        answer: (
          <>
            Crypto taxes can be complex with hundreds of trades. I personally use CoinTracker to automatically track all my trades and generate tax reports.{" "}
            <a
              href="https://dailyprofits.link/cointracker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200 underline transition-colors duration-200"
            >
              Get CoinTracker here
            </a>
          </>
        ),
      },
    ],
  },
  {
    category: "Technical & Support",
    icon: Bot,
    color: "from-orange-500 to-red-500",
    questions: [
      {
        question: "Why Coinbase and Kraken instead of other exchanges?",
        answer:
          "The robotic trading platform was developed specifically for Coinbase and Kraken. These are the only exchanges with approved API integrations from the developer. They also happen to be two of the most reliable and secure exchanges available.",
      },
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
    <div className="bg-gray-900/50 rounded-xl border border-white/10 overflow-hidden hover:border-purple-400/40 transition-all duration-300 shadow-lg shadow-purple-500/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-white pr-4">{question}</span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-purple-300" />
          ) : (
            <ChevronDown className="w-5 h-5 text-purple-300" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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

const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <FullNav />
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300">
              Real answers from real experience - no fluff, just transparency
            </p>
          </div>

          {/* 3 Steps Infographic */}
          <div className="max-w-2xl mx-auto mb-12">
            <img
              src="/graphics/homepage-faq-01.webp"
              alt="3 Steps to Passive Income - Connect, Configure, Collect"
              className="w-full rounded-2xl shadow-xl shadow-purple-500/10 border border-white/10"
            />
          </div>

          <div className="space-y-8 mb-20">
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
          <div className="mt-16 text-center bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl p-8 border border-white/10 shadow-lg shadow-purple-500/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Trading?
            </h3>
            <p className="text-gray-200 mb-6">
              Get started with GoBabyTrade – the same AI-enhanced autonomous trading
              system I use. Try paper trading first, risk-free.
            </p>
            <a
              href="https://dailyprofits.link/gbt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/50"
            >
              Start Trading – Save $1,000 →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
