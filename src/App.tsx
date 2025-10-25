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
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

// Your page components
import { ResourcesPage } from "./pages/ResourcesPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { BusinessCardLanding } from "./components/BusinessCardLanding";

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
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/og-image.png",
    twitterTitle:
      "MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",
    twitterDescription:
      "Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",
    twitterImage:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/twitter-image.png",
    canonicalUrl: "https://rd6xolh11t0gmjdo-default.preview.taskade.app/",
    pageType: "home" as const,
  },
  resources: {
    title:
      "Trading Resources & AI-Enhanced Crypto Guides | Build Your Revenue Stream",
    description:
      "Free AI-enhanced crypto trading resources, guides, and masterclasses. Learn the automated trading strategies to build sustainable revenue streams.",
    keywords:
      "trading guides, crypto resources, trading education, automated trading strategies, financial education",
    ogTitle: "Free Trading Resources & Guides | MyRoboticTrader",
    ogDescription:
      "Access free crypto trading resources, guides, and educational content to build your revenue stream.",
    ogImage:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/og-image.png",
    twitterTitle: "Trading Resources & Guides",
    twitterDescription:
      "Free crypto trading resources and educational content for building sustainable revenue streams.",
    twitterImage:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/twitter-image.png",
    canonicalUrl:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/resources",
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
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/og-image.png",
    twitterTitle: "Privacy Policy",
    twitterDescription: "Privacy policy and data handling practices.",
    twitterImage:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/twitter-image.png",
    canonicalUrl:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/privacy",
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
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/og-image.png",
    twitterTitle: "Live Trading Results - Building Revenue Streams",
    twitterDescription:
      "See live AI-enhanced robotic trading results building sustainable revenue streams automatically!",
    twitterImage:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/twitter-image.png",
    canonicalUrl: "https://rd6xolh11t0gmjdo-default.preview.taskade.app/card",
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

      {/* 🔇 REMOVED FOR SIMPLICITY: Complex sections moved to webinar
          
          These components added friction and complexity to the landing page.
          The goal is simple: Get visitors to sign up for the webinar.
          Detailed explanations of profit management and market comparisons 
          are better suited for the webinar where you have time to explain.
          
          To restore either component, uncomment the appropriate line below:
      */}

      {/* <ProfitManagement tradingStats={tradingStats} /> */}
      {/* <DynamicSmartMoneyComparison /> */}

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
