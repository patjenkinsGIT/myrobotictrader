import { Hero } from "./components/Hero";
import { TradingResults } from "./components/TradingResults";
import { BitcoinComparison } from "./components/BitcoinComparison";
import { Features } from "./components/Features";
import { CallToAction } from "./components/CallToAction";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { SEOHead } from "./components/SEOHead";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <SEOHead />
      <Hero />
      <TradingResults />
      <BitcoinComparison />
      <Features />
      <CallToAction />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
