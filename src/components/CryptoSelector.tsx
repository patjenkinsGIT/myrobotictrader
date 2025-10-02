import React from "react";

interface CryptoSelectorProps {
  selectedCrypto: string;
  onSelect: (crypto: string) => void;
  cryptoData: {
    name: string;
    symbol: string;
    price: number;
  } | null;
}

const popularCryptos = [
  { id: "btc", symbol: "BTC", name: "Bitcoin" },
  { id: "eth", symbol: "ETH", name: "Ethereum" },
  { id: "sol", symbol: "SOL", name: "Solana" },
  { id: "ada", symbol: "ADA", name: "Cardano" },
  { id: "doge", symbol: "DOGE", name: "Dogecoin" },
];

export const CryptoSelector: React.FC<CryptoSelectorProps> = ({
  selectedCrypto,
  onSelect,
  cryptoData,
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
      <h3 className="text-xl font-bold text-white mb-4 text-center">
        Select Cryptocurrency
      </h3>

      {/* Popular Cryptos */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {popularCryptos.map((crypto) => (
          <button
            key={crypto.id}
            onClick={() => onSelect(crypto.id)}
            className={`px-4 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 border-2 ${
              selectedCrypto === crypto.id
                ? "border-purple-500/50 bg-purple-500/10"
                : "border-white/20 hover:border-white/30"
            }`}
          >
            <div className="font-bold text-white">{crypto.symbol}</div>
            <div className="text-sm text-gray-300">{crypto.name}</div>
          </button>
        ))}
      </div>

      {/* Current Selection Info */}
      {cryptoData && (
        <div className="text-center text-gray-300 text-sm mt-4">
          Currently viewing:{" "}
          <span className="text-purple-400 font-semibold">
            {cryptoData.name}
          </span>
        </div>
      )}
    </div>
  );
};

export default CryptoSelector;
