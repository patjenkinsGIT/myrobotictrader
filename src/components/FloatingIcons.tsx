import * as React from "react";
import {
  Bitcoin,
  TrendingUp,
  Zap,
  Shield,
  Bot,
  DollarSign,
  BarChart3,
  Clock,
} from "lucide-react";

const floatingIcons = [
  {
    Icon: Bitcoin,
    position: "top-10 left-10",
    delay: "0s",
    color: "text-orange-400",
  },
  {
    Icon: TrendingUp,
    position: "top-20 right-16",
    delay: "0.5s",
    color: "text-green-400",
  },
  {
    Icon: Zap,
    position: "top-1/3 left-8",
    delay: "1s",
    color: "text-yellow-400",
  },
  {
    Icon: Shield,
    position: "top-1/2 right-12",
    delay: "1.5s",
    color: "text-blue-400",
  },
  {
    Icon: Bot,
    position: "bottom-1/3 left-12",
    delay: "2s",
    color: "text-purple-400",
  },
  {
    Icon: DollarSign,
    position: "bottom-20 right-8",
    delay: "2.5s",
    color: "text-emerald-400",
  },
  {
    Icon: BarChart3,
    position: "bottom-32 left-16",
    delay: "3s",
    color: "text-indigo-400",
  },
  {
    Icon: Clock,
    position: "top-2/3 right-20",
    delay: "3.5s",
    color: "text-pink-400",
  },
];

export const FloatingIcons: React.FC = function () {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {floatingIcons.map((item, index) => {
        const { Icon, position, delay, color } = item;
        return (
          <div
            key={index}
            className={`absolute ${position} opacity-15 animate-float-subtle`}
            style={{
              animationDelay: delay,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
        );
      })}

      {/* Additional scattered small icons */}
      <div
        className="absolute top-16 left-1/4 opacity-8 animate-float-subtle"
        style={{ animationDelay: "1.2s" }}
      >
        <Bitcoin className="w-4 h-4 text-orange-300" />
      </div>
      <div
        className="absolute top-3/4 right-1/4 opacity-8 animate-float-subtle"
        style={{ animationDelay: "2.8s" }}
      >
        <TrendingUp className="w-4 h-4 text-green-300" />
      </div>
      <div
        className="absolute bottom-16 left-1/3 opacity-8 animate-float-subtle"
        style={{ animationDelay: "4.1s" }}
      >
        <Zap className="w-4 h-4 text-yellow-300" />
      </div>
      <div
        className="absolute top-1/4 right-1/3 opacity-8 animate-float-subtle"
        style={{ animationDelay: "0.7s" }}
      >
        <Shield className="w-4 h-4 text-blue-300" />
      </div>
    </div>
  );
};
