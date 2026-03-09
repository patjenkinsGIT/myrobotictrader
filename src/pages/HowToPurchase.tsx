import * as React from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  Bitcoin,
  CalendarClock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Award,
  Eye,
  Heart,
  Lock,
  Key,
  Mail,
  TestTube2,
} from "lucide-react";
import { FullNav } from "../components/FullNav";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";

const AFFILIATE_URL =
  "https://crypto.gobabytrade.com/signup.aspx?RID=432706BE";

const handleCTAClick = (location: string) => {
  trackCTAClick("how_to_purchase_cta", location);
  trackOutboundLink(AFFILIATE_URL, `How To Purchase CTA - ${location}`);
};

const CTAButton: React.FC<{ label: string; location: string }> = ({
  label,
  location,
}) => (
  <a
    href={AFFILIATE_URL}
    onClick={() => handleCTAClick(location)}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/50"
  >
    {label}
    <ArrowRight className="w-5 h-5" />
  </a>
);

const HowToPurchase: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <FullNav />

      {/* Hero */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 shadow-lg shadow-purple-500/20">
              <ShieldCheck className="w-4 h-4 text-purple-300" />
              <span className="text-purple-200 font-medium text-sm">
                Step-by-Step Purchase Guide
              </span>
            </div>
          </div>

          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Get Started? Here's Exactly What to Expect
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              No surprises at checkout. Here's the complete purchase walkthrough
              for GoBabyTrade™ — including three flexible ways to pay.
            </p>
          </div>

          {/* Affiliate Disclosure */}
          <div className="bg-gray-900/50 rounded-xl border border-white/10 p-4 mt-8 max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm italic text-center">
              Affiliate Disclosure: I'm an affiliate for GoBabyTrade™ and earn a
              commission if you purchase through my link. I use this system
              myself and only recommend tools I actively use.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The Plan */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">
              The Three-Year License
            </h2>
          </div>

          {/* Pricing Card */}
          <div className="bg-gray-900/50 rounded-2xl border-2 border-purple-400/40 p-8 shadow-lg shadow-purple-500/10 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-white">$3,499</span>
                  <span className="text-lg text-gray-500 line-through">
                    $4,499
                  </span>
                </div>
                <p className="text-green-400 font-semibold">
                  You save $1,000 with my affiliate link
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-block bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 font-semibold px-4 py-2 rounded-full border border-purple-400/40 text-sm">
                  3-Year License
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Duration", value: "3 Years" },
                { label: "Max Account Value", value: "$2,000,000" },
                { label: "Max Currencies", value: "100" },
                { label: "Live Trading", included: true },
                { label: "Paper Trading", included: true },
                { label: "Edit Strategy Settings", included: true },
                { label: "View Position Details", included: true },
              ].map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">
                    {feature.label}
                    {feature.value && (
                      <span className="text-white font-semibold ml-1">
                        — {feature.value}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-6">
              <p className="text-gray-300 leading-relaxed">
                The three-year license is the only plan I personally recommend.
                It gives you enough runway to let the system work through full
                market cycles, and the per-year cost works out to under
                $100/month — less than most streaming subscriptions combined.
              </p>
            </div>

            <div className="text-center">
              <CTAButton
                label="Get Started with My Affiliate Link"
                location="pricing_card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Signup Flow */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent -z-10" />

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 shadow-lg">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">
              The Signup Flow — Step by Step
            </h2>
          </div>
          <p className="text-gray-300 mb-8 text-lg">
            Here's every screen you'll see when you sign up. I've documented the
            full process so you're not guessing.
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-gray-900/50 rounded-2xl border border-white/10 p-6 shadow-lg shadow-purple-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">
                  Choose Your Subscription
                </h3>
              </div>
              <ul className="text-gray-300 space-y-2 ml-14">
                <li>
                  You'll land on the{" "}
                  <span className="text-white font-medium">
                    Subscription Choices
                  </span>{" "}
                  page
                </li>
                <li>
                  Select{" "}
                  <span className="text-purple-300 font-semibold">
                    THREE YEARS
                  </span>{" "}
                  ($3,499)
                </li>
                <li>
                  Click{" "}
                  <span className="text-white font-medium">SIGN UP NOW</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-900/50 rounded-2xl border border-white/10 p-6 shadow-lg shadow-purple-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">
                  Create a Password
                </h3>
              </div>
              <ul className="text-gray-300 space-y-2 ml-14">
                <li>Enter and confirm your password</li>
                <li>Site is protected with SSL encryption</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-900/50 rounded-2xl border border-white/10 p-6 shadow-lg shadow-purple-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">
                  Enter Your Address
                </h3>
              </div>
              <ul className="text-gray-300 space-y-2 ml-14">
                <li>Standard billing address form</li>
                <li>Required for account creation</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-900/50 rounded-2xl border border-white/10 p-6 shadow-lg shadow-purple-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  4
                </div>
                <h3 className="text-xl font-bold text-white">
                  Review Terms & Conditions
                </h3>
              </div>
              <ul className="text-gray-300 space-y-2 ml-14">
                <li>
                  Read the{" "}
                  <span className="text-white font-medium">
                    Terms & Conditions and General Risk Disclosure
                  </span>
                </li>
                <li>Check the box confirming you've read and agreed</li>
                <li>
                  Click{" "}
                  <span className="text-white font-medium">Next</span>
                </li>
              </ul>

              {/* Risk Note */}
              <div className="mt-4 ml-14 bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm">
                    <span className="text-yellow-300 font-semibold">
                      Risk Note:
                    </span>{" "}
                    GoBabyTrade™ is clear that crypto is high risk. The system is
                    designed to minimize losses through its "never sell at a
                    loss" philosophy — but you should never invest money you
                    can't afford to have tied up in open positions.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-gray-900/50 rounded-2xl border border-white/10 p-6 shadow-lg shadow-purple-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  5
                </div>
                <h3 className="text-xl font-bold text-white">
                  Review and Confirm
                </h3>
              </div>
              <ul className="text-gray-300 space-y-2 ml-14">
                <li>
                  Review your order:{" "}
                  <span className="text-white font-semibold">
                    Three Years — $3,499.00
                  </span>
                </li>
                <li>Choose your payment method (see below)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Payment Options */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              3 Ways to Pay — Pick What Works for You
            </h2>
          </div>

          <div className="space-y-8">
            {/* Option 1: Credit/Debit */}
            <div className="bg-gray-900/50 rounded-2xl border border-white/10 p-8 shadow-lg shadow-purple-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Option 1: Credit or Debit Card
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Button at checkout: "Click to Pay with Credit or Debit Card"
                  </p>
                </div>
              </div>
              <p className="text-gray-300 ml-16">
                Standard card payment. Fastest option if you're ready to go now.
                Visa, Mastercard, and major cards accepted.
              </p>
            </div>

            {/* Option 2: Crypto */}
            <div className="bg-gray-900/50 rounded-2xl border border-white/10 p-8 shadow-lg shadow-purple-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 shadow-lg">
                  <Bitcoin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Option 2: Pay with Crypto
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Button at checkout: "Click to Pay with Crypto"
                  </p>
                </div>
              </div>
              <p className="text-gray-300 ml-16">
                Prefer to pay with crypto? GoBabyTrade™ accepts crypto payments
                directly at checkout. Appropriate for buyers who already have
                crypto holdings and want to use them.
              </p>
            </div>

            {/* Option 3: Affirm */}
            <div className="bg-gray-900/50 rounded-2xl border-2 border-green-400/40 p-8 shadow-lg shadow-green-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
                  <CalendarClock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Option 3: Affirm — Buy Now, Pay Over Time
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Button at checkout: "Click to Make Payments with Affirm"
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 ml-16">
                This is the option I want to highlight for anyone who's on the
                fence about the upfront cost.
              </p>

              <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-6">
                <p className="text-gray-300">
                  GoBabyTrade™ has partnered directly with Affirm. Checking your
                  eligibility{" "}
                  <span className="text-green-400 font-semibold">
                    does not affect your credit score.
                  </span>
                </p>
              </div>

              {/* Affirm Plans Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">
                        Plan
                      </th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">
                        Monthly Payment
                      </th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">
                        Term
                      </th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">
                        Interest
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Best Value Row - Highlighted */}
                    <tr className="border-b border-green-400/30 bg-green-500/10">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-green-500 text-white font-bold px-2 py-0.5 rounded-full">
                            BEST VALUE
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-white font-bold text-lg">
                        $583.17/mo
                      </td>
                      <td className="py-4 px-4 text-gray-200">6 months</td>
                      <td className="py-4 px-4">
                        <span className="text-green-400 font-bold">
                          $0 (0% APR)
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 px-4 text-gray-300">
                        Middle Ground
                      </td>
                      <td className="py-4 px-4 text-white font-semibold">
                        $168.12/mo
                      </td>
                      <td className="py-4 px-4 text-gray-200">24 months</td>
                      <td className="py-4 px-4 text-gray-300">$535.81</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-gray-300">
                        Lowest Monthly
                      </td>
                      <td className="py-4 px-4 text-white font-semibold">
                        $119.70/mo
                      </td>
                      <td className="py-4 px-4 text-gray-200">36 months</td>
                      <td className="py-4 px-4 text-gray-300">$810.35</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Affirm framing copy */}
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <p className="text-gray-300 leading-relaxed">
                    The 6-month plan at 0% APR is the clear winner if you can
                    swing ~$583/month. You pay exactly $3,499 — zero interest —
                    and you're done in 6 months. The system's profit targets are
                    5% per trade, so even modest trading activity can offset the
                    monthly payment while you're paying it off.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <p className="text-gray-300 leading-relaxed">
                    The 36-month plan at ~$120/month is the most accessible entry
                    point if you're just getting started and need to keep monthly
                    overhead low.
                  </p>
                </div>
              </div>

              <p className="text-gray-500 text-sm mt-4 ml-1">
                Plans are subject to Affirm's eligibility and approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Transparency */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent -z-10" />

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 rounded-2xl border border-white/10 p-8 md:p-10 shadow-lg shadow-purple-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                One More Thing — My Special Affiliate Offer
              </h2>
            </div>

            <div className="text-gray-300 leading-relaxed space-y-4 mb-8">
              <p>
                When you purchase through my affiliate link, two things happen:
              </p>
              <div className="space-y-3 ml-4">
                <div className="flex items-start gap-3">
                  <span className="text-purple-300 font-bold text-lg mt-0.5">
                    1.
                  </span>
                  <p>
                    <span className="text-white font-semibold">
                      I earn a $1,000 commission
                    </span>{" "}
                    — that's how I keep this site running
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-300 font-bold text-lg mt-0.5">
                    2.
                  </span>
                  <p>
                    <span className="text-white font-semibold">
                      You save $1,000
                    </span>{" "}
                    — Ed Barsano (the creator) offers a $1,000 discount to
                    buyers who come through my link
                  </p>
                </div>
              </div>
              <p>
                That discount is already built into the $3,499 price you see.
                Without an affiliate link, the listed price is higher.
              </p>
              <p className="text-white font-medium">
                No games. No hidden upsells. Just transparency.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-8">
              <p className="text-gray-300">
                Ready to get started? Use my affiliate link below — you'll get
                the discounted price automatically.
              </p>
            </div>

            <div className="text-center">
              <CTAButton
                label="Start Your GoBabyTrade™ Account"
                location="transparency_section"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Post-Sign-Up Tips */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">
              You're In — Now Let's Set You Up Safely
            </h2>
          </div>
          <p className="text-gray-300 mb-8 text-lg">
            Before you connect anything, take 30 minutes to lock down your
            accounts properly. This is the step most people skip — don't be most
            people.
          </p>

          <div className="space-y-6">
            {/* Step 1: Secure Exchange */}
            <div className="bg-gray-900/50 rounded-2xl border border-white/10 p-6 shadow-lg shadow-purple-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">
                  Secure Your Exchange Account (Coinbase or Kraken)
                </h3>
              </div>
              <p className="text-gray-300 mb-4 ml-14">
                Make sure your Coinbase or Kraken account has the strongest
                security settings enabled:
              </p>
              <div className="space-y-4 ml-14">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold">
                        Two-Factor Authentication (2FA)
                      </p>
                      <p className="text-gray-400 text-sm">
                        Enable it if you haven't already
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-green-400/30">
                  <div className="flex items-start gap-3">
                    <Key className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold">
                        YubiKey{" "}
                        <span className="text-green-400 text-sm font-medium">
                          (Strongly Recommended)
                        </span>
                      </p>
                      <p className="text-gray-400 text-sm">
                        A physical security key is the gold standard for
                        protecting a crypto account. If you don't have one, get
                        one. A $50 YubiKey protects a potentially six-figure
                        account — it's the best investment you'll make before
                        your first trade
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold">
                        Withdrawal Whitelisting
                      </p>
                      <p className="text-gray-400 text-sm">
                        Enable address whitelisting on your exchange. This means
                        funds can only be sent to pre-approved wallet addresses
                        — even if someone gets into your account, they can't
                        move your money anywhere new without your approval
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: API Setup */}
            <div className="bg-gray-900/50 rounded-2xl border border-white/10 p-6 shadow-lg shadow-purple-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">
                  Set Up Your API — Read This Carefully
                </h3>
              </div>
              <p className="text-gray-300 mb-4 ml-14">
                When you create the API connection between GoBabyTrade™ and your
                exchange, you'll be setting permissions. This is critical:
              </p>
              <div className="space-y-3 ml-14">
                <div className="flex items-center gap-3 bg-green-500/10 rounded-lg px-4 py-3 border border-green-400/30">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">
                    <span className="text-green-400 font-semibold">
                      Enable:
                    </span>{" "}
                    Trade permissions (buy/sell)
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-red-500/10 rounded-lg px-4 py-3 border border-red-400/30">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-gray-200">
                    <span className="text-red-400 font-semibold">
                      Never Enable:
                    </span>{" "}
                    Transfer or withdrawal permissions
                  </span>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10 mt-4 ml-14">
                <p className="text-gray-300 text-sm leading-relaxed">
                  The system only needs permission to trade — not to move funds.
                  Disabling transfers means the AI-Enhanced Autonomous Trader
                  can execute trades on your behalf, but no one (not the system,
                  not a bad actor) can transfer funds out of your account through
                  the API. This is a non-negotiable safety setting.
                </p>
              </div>
            </div>

            {/* Step 3: Paper Trading */}
            <div className="bg-gray-900/50 rounded-2xl border border-white/10 p-6 shadow-lg shadow-purple-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">
                  Test Before You Go All In
                </h3>
              </div>
              <div className="ml-14">
                <div className="flex items-start gap-3">
                  <TestTube2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">
                    If you want to get comfortable before trading with real
                    money, GoBabyTrade™ includes{" "}
                    <span className="text-white font-semibold">
                      Paper Trading
                    </span>{" "}
                    on the Three-Year plan. Use it. Run the system in paper mode
                    for a week or two to see how it behaves before committing
                    your full trading capital.
                  </p>
                </div>
              </div>
            </div>

            {/* Support callout */}
            <div className="bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl p-6 border border-white/10 shadow-lg shadow-purple-500/10">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-purple-300" />
                <h3 className="text-xl font-bold text-white">
                  Need Help Getting Set Up?
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                The GoBabyTrade™ support team is responsive and genuinely
                helpful. If you run into anything during setup — API issues,
                exchange connectivity, strategy settings — reach out directly:
              </p>
              <a
                href="mailto:support@gobabytrade.com"
                className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@gobabytrade.com
              </a>
              <p className="text-gray-400 text-sm mt-3">
                Don't struggle through setup alone. The support team has seen
                every configuration scenario — they'll get you sorted fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Questions */}
      <section className="py-16 px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions Before You Buy?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/"
              className="bg-gray-900/50 rounded-xl border border-white/10 p-6 hover:border-purple-400/40 transition-all duration-300 group"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                See My Live Trading Results
              </h3>
              <p className="text-gray-400 text-sm">
                Real results updated daily — every trade, every profit.
              </p>
              <span className="text-purple-400 text-sm mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                View Results <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/blog/what-is-crypto-trading-really"
              className="bg-gray-900/50 rounded-xl border border-white/10 p-6 hover:border-purple-400/40 transition-all duration-300 group"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                What Is Autonomous Trading?
              </h3>
              <p className="text-gray-400 text-sm">
                Understand how the system works before you buy.
              </p>
              <span className="text-purple-400 text-sm mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/faq"
              className="bg-gray-900/50 rounded-xl border border-white/10 p-6 hover:border-purple-400/40 transition-all duration-300 group"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                FAQ
              </h3>
              <p className="text-gray-400 text-sm">
                Answers to 30+ questions from real experience.
              </p>
              <span className="text-purple-400 text-sm mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read FAQ <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToPurchase;