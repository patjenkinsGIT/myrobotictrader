import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";

export const MinimalNav: React.FC = () => {
  const location = useLocation();
  const handleWatchWebinar = () => {
    trackCTAClick("get_free_training", "minimal_nav");
    trackOutboundLink("https://dailyprofits.link/class", "Watch Webinar Nav");
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

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white/8 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Logo */}
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

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
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
          </div>

          {/* CTA Button */}
          <a
            href="https://dailyprofits.link/class"
            onClick={handleWatchWebinar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 flex-shrink-0"
          >
            <span className="hidden sm:inline">Watch Free Webinar</span>
            <span className="sm:hidden">Webinar</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};
