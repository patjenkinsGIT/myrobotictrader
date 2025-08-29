import * as React from "react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { GoogleAnalytics, FacebookPixel } from "./components/Analytics";
import { useGlobalTracking } from "./components/TrackingWrapper";
import { ANALYTICS_CONFIG } from "./config/analytics";

const App: React.FC = function () {
  useGlobalTracking();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <GoogleAnalytics measurementId={ANALYTICS_CONFIG.GOOGLE_ANALYTICS_ID} />
      <FacebookPixel pixelId={ANALYTICS_CONFIG.FACEBOOK_PIXEL_ID} />
      
      
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
