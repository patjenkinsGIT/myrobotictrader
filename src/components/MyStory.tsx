// MyStory.tsx - SIMPLE VERSION: One container, two floated images, text flows naturally

import {
  User,
  TrendingUp,
  CheckCircle,
  Target,
  DollarSign,
  Lightbulb,
  Heart,
} from "lucide-react";
import { TradingStats } from "../hooks/useGoogleSheetsData";
import { calculateTimeSinceStart } from "../utils/tradingTime";

interface MyStoryProps {
  tradingStats: TradingStats | null;
}

export const MyStory: React.FC<MyStoryProps> = ({ tradingStats }) => {
  const timeSinceStart = calculateTimeSinceStart();
  const fallbackData = {
    totalProfit: 12450,
    totalTrades: 1247,
    isLiveData: false,
    dailyAvg: 89,
  };
  const currentData = tradingStats || fallbackData;
  const dailyAvg = tradingStats?.dailyAvg?.toFixed(0) || "89";
  const hasLiveData = tradingStats !== null;

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-400/40 mb-6 shadow-lg shadow-emerald-500/20">
            <User className="w-4 h-4 text-emerald-300" />
            <span className="text-emerald-100 font-medium">My Story</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            I'm Patrick
            <span className="block text-emerald-400">
              Here's Why I Built This Site
            </span>
          </h2>
        </div>

        {/* ONE BIG CONTAINER - Everything flows together */}
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-600/30 p-8 shadow-2xl shadow-emerald-500/20 mb-8 hover:border-emerald-500/40 transition-all duration-300">
          {/* PATRICK PHOTO - Float RIGHT - Desktop only */}
          <img
            src="/patrick-and-moses.jpeg"
            alt="Patrick Jenkins with Moses"
            className="hidden lg:block float-right ml-8 mb-6 w-80 h-80 rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"
          />

          {/* PATRICK PHOTO - Mobile only (centered, no float) */}
          <div className="lg:hidden flex justify-center mb-8">
            <img
              src="/patrick-and-moses.jpeg"
              alt="Patrick Jenkins with Moses"
              className="w-64 h-64 rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"
            />
          </div>

          {/* ALL TEXT CONTENT - Flows naturally around images */}
          <div className="text-lg text-gray-200 leading-relaxed">
            {/* Section 1 */}
            <h3 className="text-2xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-emerald-400" />
              I Was Tired of Average Returns
            </h3>
            <p className="mb-6">
              Been investing since 2014. Stocks took too much time. Mutual funds had high fees and mediocre returns. Index funds were... fine, but nothing special. Target date funds? Even worse.
            </p>

            {/* Section 2 */}
            <h3 className="text-2xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-emerald-400" />
              I Wasted Thousands on Side Hustles
            </h3>
            <p className="mb-5">
              <span className="text-emerald-200 font-semibold">
                Like you, I wanted extra income beyond my day job.
              </span>{" "}
              Spent tens of thousands on courses:
            </p>

            <ul className="list-disc list-inside mb-5 ml-4 text-gray-200 space-y-2">
              <li>Email marketing</li>
              <li>Affiliate marketing</li>
              <li>Amazon wholesale</li>
              <li>You name it</li>
            </ul>

            <p className="mb-5">
              Some didn't work. Some probably could have worked if I'd put in more effort.
            </p>

            <p className="mb-6 text-gray-100 font-medium">
              But who has time for that with a full-time job?
            </p>

            <p className="mb-8">
              I was sick of "breakthrough systems" that needed constant attention. Sick of missing opportunities because I was at work.
            </p>

            {/* Section 3 */}
            <h3 className="text-2xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-emerald-400" />
              Then I Found This
            </h3>
            <p className="mb-5">
              Found this automated trading system while researching.
            </p>

            <p className="mb-5 text-xl">
              First thought: {" "}
              <span className="italic text-yellow-200 font-semibold">
                "Another get-rich-quick scheme."
              </span>
            </p>

            <p className="mb-6">
              You're probably thinking that right now. Good. Stay skeptical.
            </p>

            <div className="bg-emerald-900/30 border-l-4 border-emerald-400 p-5 mb-6 rounded-r-lg">
              <p className="text-green-300 font-bold text-lg mb-3">
                But this one actually works while you sleep.
              </p>
              <p className="text-gray-200">
                Set it up once. Connected my Coinbase and Kraken accounts with trading-only permissions (can't withdraw my money). Started small to test it.
              </p>
            </div>

            <p className="mb-8">
              It trades while I'm working. While I'm sleeping. While I'm with my dog. I don't watch charts. I don't time markets. I just check the results.
            </p>

            {/* Section 4 */}
            <h3 className="text-2xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
              The Numbers Don't Lie
            </h3>

            <div className="bg-slate-700/30 border border-emerald-500/30 rounded-xl p-6 mb-6">
              <p className="text-green-400 font-bold text-2xl mb-3">
                ${currentData.totalProfit.toLocaleString()} profit in {timeSinceStart}
              </p>
              <p className="text-lg text-gray-200 mb-2">
                That's{" "}
                <span className="text-green-300 font-semibold text-xl">
                  ${dailyAvg} per day
                </span>{" "}
                on average
              </p>
              <p className="text-emerald-200">
                Real money. Withdrawn and spent.
              </p>
            </div>

            <p className="mb-8">
              Not paper gains. Not "what if" projections. Actual cash I use for bills, groceries, emergencies. Some I reinvest to grow the account.
            </p>

            {/* Section 5 - MOSES */}
            <h3 className="text-2xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-emerald-400" />
              The Best Part? Time with My Dog
            </h3>

            {/* MOSES PHOTO - Mobile only (centered, no float) */}
            <div className="lg:hidden flex justify-center mb-6">
              <img
                src="/moses-sprinkler.jpeg"
                alt="Moses enjoying the sprinkler"
                className="w-64 h-64 rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"
              />
            </div>

            {/* MOSES PHOTO - Desktop float with wrapper div */}
            <div
              className="hidden lg:block"
              style={{
                float: "left",
                marginRight: "2rem",
                marginBottom: "1.5rem",
                width: "320px",
                height: "320px",
              }}
            >
              <img
                src="/moses-sprinkler.jpeg"
                alt="Moses enjoying the sprinkler"
                className="w-full h-full rounded-2xl object-cover border-4 border-white/20 shadow-2xl shadow-purple-500/20"
              />
            </div>

            <p className="mb-5">
              <span className="text-pink-200 font-semibold text-lg">
                Got a dog named Moses recently.
              </span>
            </p>

            <p className="mb-5">
              This system gives me time to actually hang out with him. While it's trading 24/7, I'm at the park. Not watching charts. Not stressed about missing some pump.
            </p>

            <p className="mb-6 text-gray-100 font-medium text-lg">
              That's what "set it and forget it" actually means.
            </p>

            <p className="mb-5">
              The system works. I live my life.
            </p>

            <p className="mb-5">
              We hit the park almost every day. Morning walks. Sprinkler sessions. Just hanging in the yard.
            </p>

            <p className="mb-6">
              I'm present for it because I'm not glued to a screen.
            </p>

            <div className="bg-pink-900/20 border-l-4 border-pink-400 p-5 mb-8 rounded-r-lg">
              <p className="text-pink-200 font-medium text-lg">
                That's the freedom I wanted. Income without being chained to my laptop second-guessing every trade. System does the work. I enjoy the results.
              </p>
            </div>

            {/* Section 6 */}
            <h3 className="text-2xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              Why I'm Telling You This
            </h3>
            <p className="mb-6">
              I see people grinding. Working overtime to barely get by. Missing family time for an extra shift. Running out of money before the month ends.
            </p>

            <div className="bg-emerald-900/30 border-l-4 border-emerald-400 p-5 mb-6 rounded-r-lg">
              <p className="text-emerald-200 font-semibold text-lg">
                This could help. But most people don't know it exists.
              </p>
            </div>

            <p className="mb-6">
              That's why I built this site. My profits aren't huge—you can see the exact numbers below. But it's consistent. Reliable. Truly hands-off.
            </p>

            <p className="mb-8 text-gray-100 text-lg">
              I'm not a financial guru. Not a marketing expert. Just someone who found something that works and wants to share it.
            </p>
          </div>

          {/* Clear floats at the end */}
          <div className="clear-both"></div>
        </div>

        {/* Closing Note */}
        <div className="text-center bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-600/30 p-8 shadow-2xl shadow-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
          <p className="text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed">
            <span className="text-white font-semibold">The truth:</span>{" "}
            I'm not a financial advisor. I can't promise you'll get the same results. But I'll show you exactly what's working for me - real numbers updated{" "}
            {hasLiveData ? "live" : "regularly"} from my actual accounts below.
          </p>
          <p className="text-emerald-300 mt-4 font-medium">
            Want to see if this could work for you? Keep reading.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
