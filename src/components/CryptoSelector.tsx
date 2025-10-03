import React, { useState, useEffect, useRef } from "react";
import { Search, ChevronDown, X } from "lucide-react";

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  jan8Price: number;
  category: string;
  marketCapRank: number;
}

interface CryptoSelectorProps {
  selectedCrypto: string;
  onSelect: (cryptoId: string) => void;
}

export const CryptoSelector: React.FC<CryptoSelectorProps> = ({
  selectedCrypto,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptoList, setCryptoList] = useState<CryptoData[]>([]);
  const [filteredCryptos, setFilteredCryptos] = useState<CryptoData[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load crypto data from JSON file
  useEffect(() => {
    fetch("/data/cryptoJan8Data.json")
      .then((res) => res.json())
      .then((data) => {
        setCryptoList(data.cryptos);
        setFilteredCryptos(data.cryptos);
      })
      .catch((err) => console.error("Error loading crypto data:", err));
  }, []);

  // Filter cryptos based on search
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredCryptos(cryptoList);
    } else {
      const filtered = cryptoList.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
          crypto.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCryptos(filtered);
    }
  }, [searchTerm, cryptoList]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (crypto: CryptoData) => {
    onSelect(crypto.symbol.toLowerCase());
    setIsOpen(false);
    setSearchTerm("");
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      "Layer 1": "🏗️",
      "Layer 2": "⚡",
      "Layer 0": "🌐",
      DeFi: "💰",
      Payment: "💳",
      Exchange: "🔄",
      Stablecoin: "🔒",
      Meme: "🐕",
      Gaming: "🎮",
      Metaverse: "🌍",
      NFT: "🎨",
      Oracle: "🔮",
      Storage: "💾",
      Privacy: "🔐",
      AI: "🤖",
    };
    return icons[category] || "🪙";
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    if (rank <= 10) return "🏆";
    return null;
  };

  const selectedCryptoData = cryptoList.find((c) => c.id === selectedCrypto);
  const popularCryptos = cryptoList.slice(0, 6);

  return (
    <div
      ref={dropdownRef}
      className="relative w-full max-w-2xl mx-auto mb-8 z-50"
    >
      {/* Selected Display Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl p-4 flex items-center justify-between hover:border-purple-500/50 transition-all"
      >
        <div className="flex items-center gap-3">
          {selectedCryptoData && (
            <>
              <span className="text-2xl">
                {getCategoryIcon(selectedCryptoData.category)}
              </span>
              <div className="text-left">
                <div className="text-white font-bold text-lg">
                  {selectedCryptoData.name} ({selectedCryptoData.symbol})
                </div>
                <div className="text-gray-400 text-sm">
                  #{selectedCryptoData.marketCapRank} •{" "}
                  {selectedCryptoData.category}
                </div>
              </div>
            </>
          )}
          {!selectedCryptoData && (
            <div className="text-gray-400">Select a cryptocurrency...</div>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="fixed top-[200px] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-gray-900 border-2 border-purple-500/30 rounded-xl shadow-2xl z-[9999] max-h-[400px] overflow-hidden">
          {/* Search Bar */}
          <div className="p-4 border-b border-white/10 sticky top-0 bg-gray-900 z-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, symbol, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-lg pl-10 pr-10 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50"
                autoFocus
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-gray-400 hover:text-white" />
                </button>
              )}
            </div>
            <div className="text-gray-400 text-xs mt-2">
              {filteredCryptos.length}{" "}
              {filteredCryptos.length === 1 ? "result" : "results"}
            </div>
          </div>

          {/* Popular Section (only show when not searching) */}
          {!searchTerm && (
            <div className="p-4 border-b border-white/10">
              <div className="text-gray-400 text-xs font-semibold mb-2">
                POPULAR
              </div>
              <div className="grid grid-cols-3 gap-2">
                {popularCryptos.map((crypto) => (
                  <button
                    key={crypto.id}
                    onClick={() => handleSelect(crypto)}
                    className="bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-lg p-2 transition-all"
                  >
                    <div className="text-white font-bold text-sm">
                      {crypto.symbol}
                    </div>
                    <div className="text-gray-400 text-xs truncate">
                      {crypto.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Crypto List */}
          <div className="overflow-y-auto max-h-[250px] overscroll-contain">
            {filteredCryptos.length > 0 ? (
              filteredCryptos.map((crypto) => (
                <button
                  key={crypto.id}
                  onClick={() => handleSelect(crypto)}
                  className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-purple-500/10 transition-colors border-b border-white/5 ${
                    selectedCrypto === crypto.symbol.toLowerCase()
                      ? "bg-purple-500/20"
                      : ""
                  }`}
                >
                  <span className="text-xl">
                    {getCategoryIcon(crypto.category)}
                  </span>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">
                        {crypto.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        ({crypto.symbol})
                      </span>
                      {getRankBadge(crypto.marketCapRank)}
                    </div>
                    <div className="text-gray-400 text-xs">
                      #{crypto.marketCapRank} • {crypto.category}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs text-gray-400">Jan 8</div>
                    <div className="text-sm text-blue-300 font-mono">
                      ${crypto.jan8Price.toLocaleString()}
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="p-8 text-center text-gray-400">
                No cryptocurrencies found for "{searchTerm}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoSelector;
