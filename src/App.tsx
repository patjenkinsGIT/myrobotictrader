import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import { PrivacyPage } from "./pages/PrivacyPage"; // ← ADD THIS
import { BusinessCardLanding } from "./components/BusinessCardLanding";

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
  return (
    <div className="App min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} /> {/* ← ADD THIS */}
          <Route path="/card" element={<BusinessCardLanding />} />
          {/* Future routes */}
          {/* <Route path="/coinbase" element={<CoinbasePage />} /> */}
          {/* <Route path="/cointracker" element={<CoinTrackerPage />} /> */}
        </Routes>
        {/* Footer appears on ALL pages */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
