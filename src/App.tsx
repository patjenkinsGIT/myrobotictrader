// App.tsx - CLEAN VERSION - No Duplicates
import React, { useEffect } from "react";
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

// Main Components - Clean imports
import { Hero } from "./components/Hero";
import { MyStory } from "./components/MyStory";
import { TradingResults } from "./components/TradingResults";
import { BitcoinComparison } from "./components/BitcoinComparison";
import { Features } from "./components/Features";
import { CallToAction } from "./components/CallToAction";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

// Page components
import { ResourcesPage } from "./pages/ResourcesPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { BusinessCardLanding } from "./components/BusinessCardLanding";

// SEO configurations
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
      "crypto trading guides, AI trading resources, automated trading education, robotic trading tutorials, passive income strategies",
    ogTitle: "Free Trading Resources & AI-Enhanced Crypto Guides",
    ogDescription:
      "Free AI-enhanced crypto trading resources, guides, and masterclasses. Learn automated trading strategies.",
    ogImage:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/og-resources.png",
    twitterTitle: "Free Trading Resources & AI-Enhanced Crypto Guides",
    twitterDescription:
      "Free AI-enhanced crypto trading resources, guides, and masterclasses.",
    twitterImage:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/twitter-resources.png",
    canonicalUrl:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/resources",
    pageType: "resources" as const,
  },
  privacy: {
    title: "Privacy Policy - MyRoboticTrader.com",
    description:
      "Privacy policy for MyRoboticTrader.com automated crypto trading platform.",
    keywords: "privacy policy, data protection, MyRoboticTrader privacy",
    ogTitle: "Privacy Policy - MyRoboticTrader.com",
    ogDescription:
      "Privacy policy for MyRoboticTrader.com automated crypto trading platform.",
    ogImage:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/og-privacy.png",
    twitterTitle: "Privacy Policy - MyRoboticTrader.com",
    twitterDescription:
      "Privacy policy for MyRoboticTrader.com automated crypto trading platform.",
    twitterImage:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/twitter-privacy.png",
    canonicalUrl:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/privacy",
    pageType: "privacy" as const,
  },
  card: {
    title: "Patrick's Trading Card - Live Results | Building Revenue Streams",
    description:
      "See live AI-enhanced robotic trading results. Real revenue streams being built automatically from Patrick's trading system!",
    keywords:
      "live trading results, Patrick trading card, robotic trading, automated revenue streams",
    ogTitle: "Patrick's Trading Card - Live Results | Building Revenue Streams",
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

// HomePage Component - Clean Structure
const HomePage = () => {
  const { tradingStats } = useGoogleSheetsData();

  return (
    <>
      <Hero />
      <MyStory tradingStats={tradingStats} />
      <TradingResults tradingStats={tradingStats} />
      <BitcoinComparison tradingStats={tradingStats} />
      <Features />
      <CallToAction />
      <FAQ />
    </>
  );
};

// Main App Component - Single default export
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
