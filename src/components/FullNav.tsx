import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";

export const FullNav: React.FC = () => {
  const handleWatchWebinar = () => {
    trackCTAClick("get_free_training", "full_nav");
    trackOutboundLink("https://dailyprofits.link/class", "Watch Webinar Nav");
  };
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: "Resources", path: "/resources" },
    { label: "Privacy", path: "/privacy" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/8 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden shadow-md shadow-purple-500/30 bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 group-hover:shadow-lg group-hover:shadow-purple-500/40 transition-all duration-300">
              <div className="w-full h-full rounded-md overflow-hidden bg-white/10 backdrop-blur-sm">
                <img
                  src="/robot-logo.png"
                  alt="MyRoboticTrader Robot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-lg font-bold hidden sm:block">
              <span className="text-white">My</span>
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
                Robotic
              </span>
              <span className="text-white">Trader</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-purple-300"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA Button */}
            <a
              href="https://dailyprofits.link/class"
              onClick={handleWatchWebinar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              Watch Free Webinar
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-purple-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
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
                href="https://dailyprofits.link/class"
                onClick={() => {
                  handleWatchWebinar();
                  setMobileMenuOpen(false);
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-purple-500/30"
              >
                Watch Free Webinar
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
