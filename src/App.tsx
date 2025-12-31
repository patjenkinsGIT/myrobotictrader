import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { initGA } from "./utils/analytics";
import { useGoogleSheetsData } from "./hooks/useGoogleSheetsData";

// SEO Components - CRITICAL FOR LINK SHARING
import { SEOHead } from "./components/SEOHead";
import { StaticSEO } from "./components/StaticSEO";
import { OGImageGenerator } from "./components/OGImageGenerator";

// Your existing components
import { Hero } from "./components/Hero";
import MyStory from "./components/MyStory";
import { TradingResults } from "./components/TradingResults";
import { Features } from "./components/Features";
import { CallToAction } from "./components/CallToAction";
import { FAQPreview } from "./components/FAQPreview";
import { LatestPosts } from "./components/LatestPosts";
import FAQPage from "./pages/FAQPage";
import { Footer } from "./components/Footer";

// Your page components
import { ResourcesPage } from "./pages/ResourcesPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { BusinessCardLanding } from "./components/BusinessCardLanding";
import { BlogListPage } from "./BlogListPage";
import { BlogPostPage } from "./BlogPostPage";
import BlogSchedulePage from "./pages/BlogSchedulePage";
import { FullNav } from "./components/FullNav";

// SEO configurations for different pages with structured data
const seoConfigs = {
  home: {
    title:
      "MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",
    description:
      "Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system. Start your automated trading journey today.",
    keywords:
      "robotic trading, crypto trading, automated trading, passive income, cryptocurrency, trading bot, AI trading, revenue streams, financial freedom",
    ogTitle:
      "MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",
    ogDescription:
      "Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",
    ogImage:
      "https://myrobotictrader.com/api/og-image",
    twitterTitle:
      "MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",
    twitterDescription:
      "Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",
    twitterImage:
      "https://myrobotictrader.com/api/og-image",
    canonicalUrl: "https://myrobotictrader.com/",
    pageType: "home" as const,
  },
  resources: {
    title:
      "Trading Resources & AI-Enhanced Crypto Guides | Build Your Revenue Stream",
    description:
      "Free AI-enhanced crypto trading resources and guides. Learn the automated trading strategies to build sustainable revenue streams with GoBabyTrade.",
    keywords:
      "trading guides, crypto resources, trading education, automated trading strategies, financial education",
    ogTitle: "Free Trading Resources & Guides | MyRoboticTrader",
    ogDescription:
      "Access free crypto trading resources, guides, and educational content to build your revenue stream.",
    ogImage:
      "https://myrobotictrader.com/api/og-image",
    twitterTitle: "Trading Resources & Guides",
    twitterDescription:
      "Free crypto trading resources and educational content for building sustainable revenue streams.",
    twitterImage:
      "https://myrobotictrader.com/api/og-image",
    canonicalUrl:
      "https://myrobotictrader.com/resources",
    pageType: "resources" as const,
  },
  privacy: {
    title: "Privacy Policy | MyRoboticTrader",
    description:
      "Privacy policy and data handling practices for MyRoboticTrader.com",
    keywords: "privacy policy, data protection, terms of service",
    ogTitle: "Privacy Policy | MyRoboticTrader",
    ogDescription: "Privacy policy and data handling practices.",
    ogImage:
      "https://myrobotictrader.com/api/og-image",
    twitterTitle: "Privacy Policy",
    twitterDescription: "Privacy policy and data handling practices.",
    twitterImage:
      "https://myrobotictrader.com/api/og-image",
    canonicalUrl:
      "https://myrobotictrader.com/privacy",
    pageType: "privacy" as const,
  },
  card: {
    title: "Live Trading Results - Building Revenue Streams | MyRoboticTrader",
    description:
      "See live AI-enhanced robotic trading results. Real revenue streams being built automatically from Patrick's trading system!",
    keywords:
      "live trading results, crypto performance, trading dashboard, automated trading results",
    ogTitle: "Live Trading Results - Building Revenue Streams",
    ogDescription:
      "See live AI-enhanced robotic trading results. Real revenue streams being built automatically from Patrick's trading system!",
    ogImage:
      "https://myrobotictrader.com/api/og-image",
    twitterTitle: "Live Trading Results - Building Revenue Streams",
    twitterDescription:
      "See live AI-enhanced robotic trading results building sustainable revenue streams automatically!",
    twitterImage:
      "https://myrobotictrader.com/api/og-image",
    canonicalUrl: "https://myrobotictrader.com/card",
    pageType: "card" as const,
  },
  blog: {
    title:
      "Trading Education Blog | Real Insights from Autonomous Crypto Trading",
    description:
      "Learn systematic crypto trading strategies from real results. No hype, just transparent insights from building an AI-enhanced autonomous trading system.",
    keywords:
      "crypto trading blog, automated trading education, systematic trading, AI trading insights, crypto trading strategies, trading transparency",
    ogTitle: "Trading Education Blog - Real Insights, Real Results",
    ogDescription:
      "Learn from real trading results and transparent insights about autonomous crypto trading systems.",
    ogImage:
      "https://myrobotictrader.com/api/og-image",
    twitterTitle: "Trading Education Blog - MyRoboticTrader",
    twitterDescription:
      "Real insights from building transparent, systematic crypto trading systems.",
    twitterImage:
      "https://myrobotictrader.com/api/og-image",
    canonicalUrl: "https://myrobotictrader.com/blog",
    pageType: "blog" as const,
  },
  faq: {
    title: "FAQ - Frequently Asked Questions | MyRoboticTrader",
    description:
      "Get answers to common questions about automated crypto trading, AI-enhanced systems, safety, profits, and how to get started with GoBabyTrade.",
    keywords:
      "crypto trading FAQ, automated trading questions, trading bot FAQ, GoBabyTrade FAQ, robotic trading help",
    ogTitle: "Frequently Asked Questions | MyRoboticTrader",
    ogDescription:
      "Answers to 30+ questions about automated crypto trading, safety, profits, and getting started.",
    ogImage:
      "https://myrobotictrader.com/api/og-image",
    twitterTitle: "FAQ - MyRoboticTrader",
    twitterDescription:
      "Get answers to common questions about automated crypto trading and AI-enhanced systems.",
    twitterImage:
      "https://myrobotictrader.com/api/og-image",
    canonicalUrl: "https://myrobotictrader.com/faq",
    pageType: "faq" as const,
  },
};

// SEO Wrapper Component
const SEOWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const getSEOConfig = () => {
    if (location.pathname.startsWith("/blog/")) {
      return seoConfigs.blog; // Individual blog posts use blog SEO
    }
    switch (location.pathname) {
      case "/blog":
        return seoConfigs.blog;
      case "/faq":
        return seoConfigs.faq;
      case "/resources":
        return seoConfigs.resources;
      case "/privacy":
        return seoConfigs.privacy;
      case "/card":
        return seoConfigs.card;
      default:
        return seoConfigs.home;
    }
  };

  return (
    <>
      <SEOHead {...getSEOConfig()} />
      {children}
    </>
  );
};

const HomePage = () => {
  // Single data source from hook
  const { tradingStats, isLoading, error, refreshStats, cacheInfo } =
    useGoogleSheetsData();

  // Safe refresh function with error handling
  const safeRefreshStats = React.useCallback(() => {
    try {
      if (refreshStats && typeof refreshStats === "function") {
        refreshStats();
      }
    } catch (error) {
      console.error("Error in refresh function:", error);
    }
  }, [refreshStats]);

  return (
    <>
      <FullNav />
      <Hero />
      <MyStory tradingStats={tradingStats} />
      <TradingResults
        tradingStats={tradingStats}
        isLoading={isLoading}
        error={error}
        refreshStats={refreshStats || safeRefreshStats}
        cacheInfo={
          cacheInfo || {
            isFresh: false,
            isRateLimited: false,
            timeUntilNextRefresh: 0,
          }
        }
      />

      <Features />
      <CallToAction />
      <FAQPreview />
      <LatestPosts maxPosts={4} />

      {/* SEO Content Section - Static text for Google indexing */}
      <section className="bg-slate-900/50 py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            About MyRoboticTrader
          </h2>
          <div className="text-slate-400 text-base leading-relaxed space-y-4">
            <p>
              MyRoboticTrader showcases real, verified results from an AI-enhanced autonomous
              cryptocurrency trading system. Unlike manual trading or gambling on price predictions,
              this system executes trades 24/7 based on market volatility, taking small consistent
              profits without emotional decision-making. The approach is simple: buy low, sell for
              profit, repeat—all managed by intelligent automation.
            </p>
            <p>
              Every trade is published transparently with complete transaction history available
              for verification. With nearly 1,000 trades executed and a 100% success rate on
              closed positions, the results speak for themselves. The system never sells at a loss,
              holding positions until market conditions become favorable. This patience-based
              approach eliminates the fear and greed that destroy most traders.
            </p>
            <p>
              This isn't get-rich-quick speculation or crypto gambling. It's systematic wealth
              building through AI-enhanced technology that works while you sleep. Powered by
              GoBabyTrade, the system connects securely to exchanges like Coinbase and Kraken,
              keeping your funds in your own account at all times. Check out the live results
              dashboard above to see every trade, every profit, updated in real-time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

// Main App Component
function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <div className="App min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <StaticSEO />
      <OGImageGenerator />

      <Router>
        <SEOWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/card" element={<BusinessCardLanding />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/schedule" element={<BlogSchedulePage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
          <Footer />
        </SEOWrapper>
      </Router>
    </div>
  );
}

export default App;
