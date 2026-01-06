import React from "react";
import { Trophy, Calendar, TrendingUp, Target } from "lucide-react";

interface Milestone {
  id: string;
  date: string;
  title: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  icon: "trophy" | "calendar" | "trending" | "target";
  featured?: boolean;
  blogSlug?: string;
}

const milestones: Milestone[] = [
  {
    id: "1-year-5k",
    date: "January 2026",
    title: "$5,000 Profit Milestone",
    description: "One year of systematic trading. 1,002 trades executed autonomously with 100% success rate on closed positions.",
    stats: [
      { label: "Total Profit", value: "$5,005.96" },
      { label: "Closed Trades", value: "1,002" },
      { label: "Avg Per Trade", value: "$5.00" },
      { label: "Win Rate", value: "100%" },
    ],
    icon: "trophy",
    featured: true,
    blogSlug: "one-year-5k-milestone",
  },
  // Add future milestones here:
  // {
  //   id: "next-milestone",
  //   date: "Month Year",
  //   title: "Milestone Title",
  //   description: "Description of achievement",
  //   stats: [...],
  //   icon: "trending",
  // },
];

const iconMap = {
  trophy: Trophy,
  calendar: Calendar,
  trending: TrendingUp,
  target: Target,
};

export const Milestones: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header - Matching LatestPosts/FAQPreview style */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Milestones
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real achievements from systematic trading. Every number verified, every trade published.
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="space-y-6">
          {milestones.map((milestone) => {
            const IconComponent = iconMap[milestone.icon];
            return (
              <div
                key={milestone.id}
                className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:border-green-400/40 transition-all duration-300 shadow-lg"
              >
                {/* Title Row - Icon + Title + Date + Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-2.5 shadow-lg shadow-green-500/30 flex-shrink-0">
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {milestone.title}
                  </h3>
                  <span className="text-sm text-gray-400">
                    {milestone.date}
                  </span>
                  {milestone.featured && (
                    <span className="inline-flex items-center gap-1.5 bg-green-500/20 rounded-full px-2.5 py-0.5 border border-green-400/40">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-green-300 text-xs font-medium">New</span>
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6">
                  {milestone.description}
                </p>

                {/* Stats Grid - Colors match scoreboard */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {milestone.stats.map((stat, statIndex) => {
                    // Match scoreboard colors by label
                    const colorClass =
                      stat.label === "Total Profit" ? "text-green-300" :
                      stat.label === "Closed Trades" ? "text-orange-300" :
                      stat.label === "Avg Per Trade" ? "text-purple-300" :
                      stat.label === "Win Rate" ? "text-cyan-300" :
                      "text-green-300";

                    return (
                      <div
                        key={statIndex}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
                      >
                        <div className={`text-xl md:text-2xl font-bold ${colorClass}`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Link to blog post */}
                {milestone.blogSlug && (
                  <a
                    href={`/blog/${milestone.blogSlug}`}
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors mt-5"
                  >
                    Read the full story →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
