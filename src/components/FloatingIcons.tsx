import React from "react";
import { Bot, TrendingUp, Shield, Clock, Zap, DollarSign } from "lucide-react";

export const FloatingIcons: React.FC = () => {
  const icons = [
    { Icon: Bot, delay: "0s", position: "top-20 left-20" },
    { Icon: TrendingUp, delay: "2s", position: "top-32 right-32" },
    { Icon: Shield, delay: "4s", position: "bottom-40 left-16" },
    { Icon: Clock, delay: "1s", position: "bottom-32 right-20" },
    { Icon: Zap, delay: "3s", position: "top-1/2 left-8" },
    { Icon: DollarSign, delay: "5s", position: "top-1/3 right-8" },
  ];

  return (
    <>
      {icons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-20 pointer-events-none hidden lg:block animate-float-subtle`}
          style={{
            animationDelay: delay,
          }}
        >
          <div className="w-8 h-8 text-purple-300">
            <Icon className="w-full h-full" />
          </div>
        </div>
      ))}
    </>
  );
};
