import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { initGA } from "./utils/analytics";

// SEO Component
import { SEOHead } from "./components/SEOHead";

// Your existing components
import { Hero } from "./components/Hero";
import { MyStory } from "./components/MyStory";
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
    ogImage: "https://myrobotictrader.com/robot-og.png",
    twitterTitle:
      "MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",
    twitterDescription:
      "Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",
    twitterImage: "https://myrobotictrader.com/robot-twitter.png",
    canonicalUrl: "https://myrobotictrader.com/",
    pageType: "home" as const,
  },
  resources: {
    title:
      "Trading Resources & AI-Enhanced Crypto Guides | Build Your Revenue Stream",
    description:
      "Free AI-enhanced crypto trading resources, guides, and masterclasses. Learn the automated trading strategies to build sustainable revenue streams.",
    keywords:
      "AI trading resources, crypto trading guides, automated trading course, robotic trading masterclass, AI trading strategies, passive income education",
    ogTitle: "Free AI-Enhanced Trading Resources & Masterclass",
    ogDescription:
      "Access free AI trading guides, video courses, and resources to master automated cryptocurrency trading and build revenue streams.",
    ogImage: "https://myrobotictrader.com/robot-og.png",
    twitterTitle: "Free Trading Resources - Build Your Revenue Stream",
    twitterDescription:
      "Access free AI trading guides and resources to master automated cryptocurrency trading.",
    twitterImage: "https://myrobotictrader.com/robot-twitter.png",
    canonicalUrl: "https://myrobotictrader.com/resources",
    pageType: "resources" as const,
  },
  privacy: {
    title: "Privacy Policy | MyRoboticTrader - Secure AI Trading Platform",
    description:
      "Privacy policy for MyRoboticTrader. Learn how we protect your AI trading data and cryptocurrency information with enterprise-grade security.",
    keywords:
      "privacy policy, AI trading security, crypto data protection, automated trading privacy, secure trading platform",
    ogTitle: "Privacy Policy - MyRoboticTrader AI Trading Platform",
    ogDescription:
      "Our commitment to protecting your privacy and AI trading data with enterprise-grade security measures.",
    ogImage: "https://myrobotictrader.com/robot-og.png",
    twitterTitle: "Privacy Policy - Secure AI Trading Platform",
    twitterDescription:
      "Our commitment to protecting your privacy and trading data with enterprise-grade security.",
    twitterImage: "https://myrobotictrader.com/robot-twitter.png",
    canonicalUrl: "https://myrobotictrader.com/privacy",
    pageType: "privacy" as const,
  },
  card: {
    title:
      "Thanks for Tapping My Card! | Live AI Trading Results - Building Revenue Streams",
    description:
      "Live AI-enhanced robotic trading results from Patrick's automated system. See how I'm building sustainable revenue streams with real data, updated automatically. Get free access now!",
    keywords:
      "NFC business card, live AI trading results, automated trading demo, crypto trading success, AI trading bot results, revenue streams",
    ogTitle:
      "Live AI Trading Results - Thanks for Tapping! Building Revenue Streams",
    ogDescription:
      "See live AI-enhanced robotic trading results. Real revenue streams being built automatically from Patrick's trading system!",
    ogImage: "https://myrobotictrader.com/robot-og.png",
    twitterTitle: "Live Trading Results - Building Revenue Streams",
    twitterDescription:
      "See live AI-enhanced robotic trading results building sustainable revenue streams automatically!",
    twitterImage: "https://myrobotictrader.com/robot-twitter.png",
    canonicalUrl: "https://myrobotictrader.com/card",
    pageType: "card" as const,
  },
};

// Component to handle SEO for each route - THIS IS THE FIXED VERSION
const SEOWrapper: React.FCReact.FCReact.FCReact.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
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

// Create a HomePage component from your existing layout
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <MyStory />
      <TradingResults />
      <Features />
      <CallToAction />
      <FAQ />
      {/* Footer moved outside - will be added globally */}
    </>
  );
};

function App() {
  // Add this useEffect inside your App component:
  useEffect(() => {
    // Initialize Google Analytics when the app loads
    initGA();
  }, []);

  return (
    <div className="App min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Router>
        <SEOWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/card" element={<BusinessCardLanding />} />
            {/* Future routes */}
            {/* <Route path="/coinbase" element={<CoinbasePage />} /> */}
            {/* <Route path="/cointracker" element={<CoinTrackerPage />} /> */}
          </Routes>
          {/* Footer appears on ALL pages */}
          <Footer />
        </SEOWrapper>
      </Router>
    </div>
  );
}

export default App;
