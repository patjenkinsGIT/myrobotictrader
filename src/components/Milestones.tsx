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
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Milestones
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real achievements from real systematic trading. Every number verified, every trade published.
          </p>
        </div>

        {/* Milestones Timeline */}
        <div className="space-y-8">
          {milestones.map((milestone) => {
            const IconComponent = iconMap[milestone.icon];
            return (
              <div
                key={milestone.id}
                className={`relative ${
                  milestone.featured
                    ? "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-400/30"
                    : "bg-white/5 border-white/10"
                } backdrop-blur-sm rounded-2xl border p-6 md:p-8 transition-all hover:border-yellow-400/50`}
              >
                {/* Featured Badge */}
                {milestone.featured && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    🎉 LATEST ACHIEVEMENT
                  </div>
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-xl ${
                        milestone.featured
                          ? "bg-gradient-to-br from-yellow-400 to-orange-500"
                          : "bg-gradient-to-br from-purple-500 to-blue-500"
                      } p-4 shadow-lg`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-sm text-gray-400 font-medium">
                        {milestone.date}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{milestone.description}</p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {milestone.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="bg-black/20 rounded-lg p-3 text-center"
                        >
                          <div
                            className={`text-lg font-bold ${
                              milestone.featured
                                ? "text-yellow-300"
                                : "text-green-300"
                            }`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-400">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Link to blog post */}
                {milestone.blogSlug && (
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <a
                      href={`/blog/${milestone.blogSlug}`}
                      className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
                    >
                      Read the full story →
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 mb-4">
            Want to see every trade that led to these milestones?
          </p>
          <a
            href="/transparency"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg shadow-green-500/25"
          >
            <TrendingUp className="w-5 h-5" />
            View Live Results
          </a>
        </div>
      </div>
    </section>
  );
};
