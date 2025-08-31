import React from "react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { CallToAction } from "./components/CallToAction";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import {
  GoogleAnalytics,
  FacebookPixel,
  useScrollTracking,
  useTimeTracking,
} from "./components/Analytics";

function App() {
  // Enable analytics tracking hooks
  useScrollTracking();
  useTimeTracking();

  return (
    <div className="App min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Analytics Components */}
      <GoogleAnalytics measurementId="GA_MEASUREMENT_ID" />
      <FacebookPixel pixelId="FACEBOOK_PIXEL_ID" />

      {/* Main Content */}
      <Hero />
      <Features />
      <CallToAction />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
