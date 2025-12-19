import * as React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

// Top 5 questions that address key objections - NO blog links, conversion-focused
const previewQuestions = [
  {
    question: "Is my money safe?",
    answer:
      "Yes! Your funds stay in your own Kraken/Coinbase accounts. The system only connects via API with trading permissions - it can never withdraw or transfer your funds.",
  },
  {
    question: "Do I need trading experience?",
    answer:
      "No experience required! The AI handles all analysis and decisions. You set your preferences and investment amount - the platform does the rest.",
  },
  {
    question: "How much money do I need to start?",
    answer:
      "Start with as little as $100. It's recommended to start small to get familiar with the platform before scaling up your investment.",
  },
  {
    question: "What if the system makes losing trades?",
    answer:
      "The GoBabyTrade protection system never executes losing trades. It waits for profitable opportunities or doesn't trade at all, safeguarding your capital.",
  },
  {
    question: "Can I pause or stop the automated trading anytime?",
    answer:
      "Yes! You have complete control. Pause or stop anytime directly in the interface. When paused, the system stops making new trades but your existing positions remain untouched.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
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

export const FAQPreview: React.FC = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-gray-300">
            Quick answers to help you get started
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

        <div className="space-y-3 mb-8">
          {previewQuestions.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>

        {/* Link to full FAQ */}
        <div className="text-center mb-12">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors duration-200"
          >
            <HelpCircle className="w-5 h-5" />
            <span className="text-lg">View all 30+ questions →</span>
          </Link>
        </div>

        {/* CTA at bottom */}
        <div className="mt-8 text-center bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl p-8 border border-white/10 shadow-lg shadow-purple-500/10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Trading?
          </h3>
          <p className="text-gray-200 mb-6">
            Get started with GoBabyTrade – the same AI-enhanced autonomous trading
            system I use. Try paper trading first, risk-free.
          </p>
          <a
            href="https://gobabytrade.com/432706BE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/50"
          >
            Start Trading – Save $1,000 →
          </a>
        </div>
      </div>
    </section>
  );
};
