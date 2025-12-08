import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X, DollarSign, TrendingUp, Calendar } from "lucide-react";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";
import { useGoogleSheetsData } from "../hooks/useGoogleSheetsData";
import { useMediaQuery } from "../hooks/useMediaQuery";

export const FullNav: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { tradingStats, isLoading } = useGoogleSheetsData();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleStartTrading = () => {
    trackCTAClick("start_trading_save_1000", "full_nav");
    trackOutboundLink("https://dailyprofits.link/gbt", "Start Trading Save $1000 Nav");
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: "Resources", path: "/resources" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Calculate daily average
  const calculateDailyAvg = () => {
    if (!tradingStats?.totalProfit) return 0;
    const startDate = new Date("2025-01-08");
    const today = new Date();
    const daysSince = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return daysSince > 0 ? tradingStats.totalProfit / daysSince : 0;
  };

  const dailyAvg = calculateDailyAvg();

  return (
    <nav className="sticky top-0 z-50 bg-white/8 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-16">
          {/* Logo - Left Aligned */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-8 h-8 rounded-lg overflow-hidden shadow-md shadow-purple-500/30 bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 group-hover:shadow-lg group-hover:shadow-purple-500/40 transition-all duration-300">
              <div className="w-full h-full rounded-md overflow-hidden bg-white/10 backdrop-blur-sm">
                <img
                  src="/robot-logo.png"
                  alt="MyRoboticTrader Robot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-lg font-bold">
              <span className="text-white">My</span>
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
                Robotic
              </span>
              <span className="text-white">Trader</span>
            </div>
          </Link>

          {/* Desktop Trading Stats & Navigation - DESKTOP ONLY */}
          {isDesktop && (
            <>
              {/* Trading Stats - Center Aligned */}
              <div className="flex items-center gap-4 flex-1 justify-center max-w-4xl">
                {/* Total Profit */}
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/[0.12] transition-all duration-200 cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 p-1.5 flex-shrink-0 shadow-md">
                    <DollarSign className="w-full h-full text-white" strokeWidth={2.5} />
                  </div>
                  <div className="min-w-0">
                    {isLoading ? (
                      <div className="text-sm font-bold text-green-300 animate-pulse">Loading...</div>
                    ) : (
                      <>
                        <div className="text-sm font-bold text-green-300 truncate">
                          ${tradingStats?.totalProfit.toLocaleString("en-US", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}+
                        </div>
                        <div className="text-xs text-gray-400 font-medium">Total</div>
                      </>
                    )}
                  </div>
                </div>

                {/* Monthly Average */}
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/[0.12] transition-all duration-200 cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 p-1.5 flex-shrink-0 shadow-md">
                    <Calendar className="w-full h-full text-white" strokeWidth={2.5} />
                  </div>
                  <div className="min-w-0">
                    {isLoading ? (
                      <div className="text-sm font-bold text-blue-300 animate-pulse">Loading...</div>
                    ) : (
                      <>
                        <div className="text-sm font-bold text-blue-300 truncate">
                          ${tradingStats?.monthlyAverage?.toLocaleString("en-US", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }) || "0"}
                        </div>
                        <div className="text-xs text-gray-400 font-medium">Monthly</div>
                      </>
                    )}
                  </div>
                </div>

                {/* Daily Average */}
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/[0.12] transition-all duration-200 cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 p-1.5 flex-shrink-0 shadow-md">
                    <TrendingUp className="w-full h-full text-white" strokeWidth={2.5} />
                  </div>
                  <div className="min-w-0">
                    {isLoading ? (
                      <div className="text-sm font-bold text-purple-300 animate-pulse">Loading...</div>
                    ) : (
                      <>
                        <div className="text-sm font-bold text-purple-300 truncate">
                          ${dailyAvg.toLocaleString("en-US", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}
                        </div>
                        <div className="text-xs text-gray-400 font-medium">Daily</div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Navigation Links - Right Aligned */}
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-semibold transition-all duration-200 relative group ${
                      isActive(item.path)
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {/* Active indicator */}
                    {isActive(item.path) && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                    )}
                    {/* Hover indicator */}
                    {!isActive(item.path) && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-200" />
                    )}
                  </Link>
                ))}

                {/* CTA Button */}
                <a
                  href="https://dailyprofits.link/gbt"
                  onClick={handleStartTrading}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 hover:from-purple-600 hover:via-pink-500 hover:to-pink-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-xl shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 flex-shrink-0"
                >
                  Start Trading – Save $1,000
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </>
          )}

          {/* Mobile Menu Button - MOBILE ONLY */}
          {!isDesktop && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-auto text-white hover:text-purple-300 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Navigation Dropdown - MOBILE ONLY */}
        {!isDesktop && mobileMenuOpen && (
          <div className="py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(item.path)
                      ? "text-purple-300"
                      : "text-gray-200 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://dailyprofits.link/gbt"
                onClick={() => {
                  handleStartTrading();
                  setMobileMenuOpen(false);
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-purple-500/30"
              >
                Start Trading – Save $1,000
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
