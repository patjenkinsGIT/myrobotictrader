import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import postsData from "../data/posts.json";
import { FullNav } from "../components/FullNav";
import { Footer } from "../components/Footer";
import { BlogPost, getPublishedPosts, getPostSortDate } from "../utils/blogUtils";

export const ArticleArchive: React.FC = () => {
  const posts: BlogPost[] = getPublishedPosts(postsData as BlogPost[]);

  const sortedPosts = [...posts].sort(
    (a, b) => getPostSortDate(b).getTime() - getPostSortDate(a).getTime()
  );

  const formatDate = (post: BlogPost) => {
    const date = post.publishDate || post.date;
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Helmet>
        <title>Article Archive | MyRoboticTrader</title>
        <meta
          name="description"
          content="Complete chronological index of all MyRoboticTrader blog posts — crypto trading education, real results, and market insights."
        />
        <link rel="canonical" href="https://myrobotictrader.com/archive" />
      </Helmet>
      <FullNav />

      <main className="max-w-3xl mx-auto px-4 py-16 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Article Archive</h1>
        <p className="text-gray-400 text-lg mb-12">
          The complete chronological index of every published post on MyRoboticTrader.
        </p>

        <ul className="space-y-4">
          {sortedPosts.map((post) => (
            <li key={post.slug} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-gray-500 text-sm whitespace-nowrap">
                {formatDate(post)}
              </span>
              <Link
                to={`/blog/${post.slug}`}
                className="text-purple-500 hover:text-purple-400 transition-colors"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
};
