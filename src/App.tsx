import { Hero } from "./components/Hero";
import { TradingResults } from "./components/TradingResults";
import { BitcoinComparison } from "./components/BitcoinComparison";
import { Features } from "./components/Features";
import { CallToAction } from "./components/CallToAction";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { SEOHead } from "./components/SEOHead";
import { MyStory } from "./components/MyStory";
import { LiveTransactionLog } from "./components/LiveTransactionLog";
import { useGoogleSheetsData } from "./hooks/useGoogleSheetsData";

function App() {
  const { tradingStats, isLoading, error } = useGoogleSheetsData();

  // Debug logging
  console.log("App debug:", { tradingStats, isLoading, error });

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Temporary debug display */}
      <div
        style={{
          color: "white",
          padding: "20px",
          backgroundColor: "red",
          margin: "10px",
        }}
      >
        <h3>DEBUG INFO:</h3>
        <div>Loading: {isLoading ? "Yes" : "No"}</div>
        <div>Error: {error || "None"}</div>
        <div>Data Available: {tradingStats ? "Yes" : "No"}</div>
        {tradingStats && (
          <div>
            <div>Total Profit: {tradingStats.totalProfit}</div>
            <div>
              Monthly Data Length: {tradingStats.monthlyData?.length || 0}
            </div>
            <div>
              Capital Efficiency Data:{" "}
              {tradingStats.capitalEfficiencyData?.length || 0} items
            </div>
          </div>
        )}
      </div>

      <SEOHead />
      <Hero />
      <MyStory tradingStats={tradingStats} />
      <TradingResults tradingStats={tradingStats} />
      <LiveTransactionLog />
      <BitcoinComparison />
      <Features />
      <CallToAction />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
