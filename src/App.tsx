import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { initGA } from "./utils/analytics";

import { SEOHead } from "./components/SEOHead";
import { StaticSEO } from "./components/StaticSEO";
import { OGImageGenerator } from "./components/OGImageGenerator";
import { SEODebugger } from "./components/SEODebugger";

import { Hero } from "./components/Hero";
import { MyStory } from "./components/MyStory";
import { TradingResults } from "./components/TradingResults";
import { Features } from "./components/Features";
import { CallToAction } from "./components/CallToAction";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

import { ResourcesPage } from "./pages/ResourcesPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { BusinessCardLanding } from "./components/BusinessCardLanding";

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
      "AI trading resources, crypto trading guides, automated trading course, robotic trading masterclass, AI trading strategies, passive income education",
    ogTitle: "Free AI-Enhanced Trading Resources & Masterclass",
    ogDescription:
      "Access free AI trading guides, video courses, and resources to master automated cryptocurrency trading and build revenue streams.",
    ogImage:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/og-image.png",
    twitterTitle: "Free Trading Resources - Build Your Revenue Stream",
    twitterDescription:
      "Access free AI trading guides and resources to master automated cryptocurrency trading.",
    twitterImage:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/twitter-image.png",
    canonicalUrl:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/resources",
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
    ogImage:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/og-image.png",
    twitterTitle: "Privacy Policy - Secure AI Trading Platform",
    twitterDescription:
      "Our commitment to protecting your privacy and trading data with enterprise-grade security.",
    twitterImage:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/twitter-image.png",
    canonicalUrl:
      "https://rd6xolh11t0gmjdo-default.preview.taskade.app/privacy",
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

interface SEOWrapperProps {
  children: React.ReactNode;
}

function SEOWrapper({ children }: SEOWrapperProps) {
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
}

function HomePage() {
  return (
    <>
      <Hero />
      <MyStory />
      <TradingResults />
      <Features />
      <CallToAction />
      <FAQ />
    </>
  );
}

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
      <SEODebugger />
    </div>
  );
}

export default App;
