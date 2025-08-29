import * as React from "react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

const App: React.FC = function () {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
