// App.tsx - CLEAN VERSION - All Components Working
import { useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { initGA } from "./utils/analytics";
import { useGoogleSheetsData } from "./hooks/useGoogleSheetsData";

// SEO Components
import { SEOHead } from "./components/SEOHead";
import { StaticSEO } from "./components/StaticSEO";
import { OGImageGenerator } from "./components/OGImageGenerator";

// Main Components
import { Hero } from "./components/Hero";
import MyStory from "./components/MyStory";
import { TradingResults } from "./components/TradingResults";
import { DynamicSmartMoneyComparison } from "./components/DynamicSmartMoneyComparison";
import { Features } from "./components/Features";
import { CallToAction } from "./components/CallToAction";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

// Page components
import { ResourcesPage } from "./pages/ResourcesPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { BusinessCardLanding } from "./components/BusinessCardLanding";

// SEO configurations
// SEO configurations - CORRECTED URLS
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
    ogImage: "https://myrobotictrader.com/og-image.png",
    twitterTitle:
      "MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",
    twitterDescription:
      "Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",
    twitterImage: "https://myrobotictrader.com/twitter-image.png",
    canonicalUrl: "https://myrobotictrader.com/",
    pageType: "home" as const,
  },
  resources: {
    title:
      "Trading Resources & AI-Enhanced Crypto Guides | Build Your Revenue Stream",
    description:
      "Free AI-enhanced crypto trading resources, guides, and masterclasses. Learn the automated trading strategies to build sustainable revenue streams.",
    keywords:
      "crypto trading guides, automated trading resources, trading education, cryptocurrency strategies, robotic trading tutorials",
    ogTitle: "Trading Resources & AI-Enhanced Crypto Guides",
    ogDescription:
      "Free AI-enhanced crypto trading resources and guides to build your automated revenue streams.",
    ogImage: "https://myrobotictrader.com/og-image.png",
    twitterTitle: "Trading Resources & AI-Enhanced Crypto Guides",
    twitterDescription:
      "Free AI-enhanced crypto trading resources and guides to build your automated revenue streams.",
    twitterImage: "https://myrobotictrader.com/twitter-image.png",
    canonicalUrl: "https://myrobotictrader.com/resources",
    pageType: "resources" as const,
  },
  privacy: {
    title: "Privacy Policy | MyRoboticTrader",
    description:
      "Privacy policy for MyRoboticTrader - protecting your data and privacy while you build revenue streams with automated crypto trading.",
    keywords: "privacy policy, data protection, MyRoboticTrader privacy",
    ogTitle: "Privacy Policy | MyRoboticTrader",
    ogDescription:
      "Privacy policy for MyRoboticTrader - protecting your data and privacy.",
    ogImage: "https://myrobotictrader.com/og-image.png",
    twitterTitle: "Privacy Policy | MyRoboticTrader",
    twitterDescription:
      "Privacy policy for MyRoboticTrader - protecting your data and privacy.",
    twitterImage: "https://myrobotictrader.com/twitter-image.png",
    canonicalUrl: "https://myrobotictrader.com/privacy",
    pageType: "privacy" as const,
  },
  card: {
    title: "Live Trading Results - Building Revenue Streams | MyRoboticTrader",
    description:
      "See live AI-enhanced robotic trading results building sustainable revenue streams automatically! Real revenue streams being built automatically from Patrick's trading system!",
    keywords:
      "live trading results, robotic trading performance, automated crypto trading, revenue streams",
    ogTitle: "Live Trading Results - Building Revenue Streams",
    ogDescription:
      "See live AI-enhanced robotic trading results building sustainable revenue streams automatically! Real revenue streams being built automatically from Patrick's trading system!",
    ogImage: "https://myrobotictrader.com/og-image.png",
    twitterTitle: "Live Trading Results - Building Revenue Streams",
    twitterDescription:
      "See live AI-enhanced robotic trading results building sustainable revenue streams automatically!",
    twitterImage: "https://myrobotictrader.com/twitter-image.png",
    canonicalUrl: "https://myrobotictrader.com/card",
    pageType: "card" as const,
  },
};
// SEO Wrapper Component
const SEOWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const getSEOConfig = () => {
    switch (location.pathname) {
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
  const safeRefreshStats = useCallback(() => {
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
      <DynamicSmartMoneyComparison />
      <Features />
      <CallToAction />
      <FAQ />
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
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/card" element={<BusinessCardLanding />} />
          </Routes>
          <Footer />
        </SEOWrapper>
      </Router>
    </div>
  );
}

export default App;
