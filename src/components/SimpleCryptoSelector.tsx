import React from "react";

interface SimpleCryptoSelectorProps {
  selectedCrypto: string;
  onSelect: (symbol: string) => void;
}

const top25Cryptos = [
  { symbol: "BTC", name: "Bitcoin", icon: "₿" },
  { symbol: "ETH", name: "Ethereum", icon: "Ξ" },
  { symbol: "USDT", name: "Tether", icon: "₮" },
  { symbol: "XRP", name: "XRP", icon: "✕" },
  { symbol: "BNB", name: "BNB", icon: "⬡" },
  { symbol: "SOL", name: "Solana", icon: "◎" },
  { symbol: "USDC", name: "USDC", icon: "$" },
  { symbol: "ADA", name: "Cardano", icon: "₳" },
  { symbol: "DOGE", name: "Dogecoin", icon: "Ð" },
  { symbol: "TRX", name: "TRON", icon: "⚡" },
  { symbol: "AVAX", name: "Avalanche", icon: "▲" },
  { symbol: "LINK", name: "Chainlink", icon: "⬢" },
  { symbol: "SHIB", name: "Shiba Inu", icon: "🐕" },
  { symbol: "DOT", name: "Polkadot", icon: "●" },
  { symbol: "MATIC", name: "Polygon", icon: "⬣" },
  { symbol: "LTC", name: "Litecoin", icon: "Ł" },
  { symbol: "BCH", name: "Bitcoin Cash", icon: "฿" },
  { symbol: "UNI", name: "Uniswap", icon: "🦄" },
  { symbol: "ICP", name: "Internet Computer", icon: "∞" },
  { symbol: "NEAR", name: "NEAR Protocol", icon: "N" },
  { symbol: "DAI", name: "Dai", icon: "◈" },
  { symbol: "APT", name: "Aptos", icon: "A" },
  { symbol: "LEO", name: "LEO Token", icon: "L" },
  { symbol: "XLM", name: "Stellar", icon: "✦" },
  { symbol: "OKB", name: "OKB", icon: "O" },
];

export const SimpleCryptoSelector: React.FC<SimpleCryptoSelectorProps> = ({
  selectedCrypto,
  onSelect,
}) => {
  return (
    <div className="max-w-6xl mx-auto mb-8">
      <h3 className="text-white text-lg font-semibold mb-4 text-center">
        Select a cryptocurrency to compare
      </h3>

      {/* Grid of buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {top25Cryptos.map((crypto) => (
          <button
            key={crypto.symbol}
            onClick={() => onSelect(crypto.symbol.toLowerCase())}
            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
              selectedCrypto === crypto.symbol.toLowerCase()
                ? "bg-purple-500/20 border-purple-500 shadow-lg shadow-purple-500/30"
                : "bg-white/5 border-white/20 hover:border-purple-500/50 hover:bg-white/10"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-1">{crypto.icon}</div>
              <div className="text-white font-bold text-sm">
                {crypto.symbol}
              </div>
              <div className="text-gray-400 text-xs truncate">
                {crypto.name}
              </div>
            </div>
          </button>
        ))}
      </div>

      <p className="text-gray-400 text-sm text-center mt-4">
        Top 25 cryptocurrencies with verified January 8, 2025 historical prices
      </p>
    </div>
  );
};

export default SimpleCryptoSelector;
