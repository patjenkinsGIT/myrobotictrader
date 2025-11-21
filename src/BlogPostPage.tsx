import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Lightbulb, TrendingUp, Target, AlertCircle, CheckCircle, Info } from "lucide-react";
import postsData from "./data/posts.json";
import { FullNav } from "./components/FullNav";

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  content: string;
  category: string;
  metaDescription: string;
}

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const foundPost = postsData.find((p: BlogPost) => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      // Scroll to top when post loads
      window.scrollTo(0, 0);
    } else {
      // Post not found, redirect to blog list
      navigate("/blog");
    }
  }, [slug, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Icon rotation for H2 headers
  const headerIcons = [Lightbulb, TrendingUp, Target, AlertCircle, CheckCircle, Info];
  let iconIndex = 0;

  // Simple markdown-to-JSX renderer
  const renderMarkdown = (markdown: string) => {
    const lines = markdown.split("\n");
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ");

        // Check if this is a callout/highlight paragraph
        const isCallout = text.match(/^\*\*(Key Point|Important|Note|Remember|Tip):\*\*/i);

        if (isCallout) {
          // Render as callout box
          elements.push(
            <div
              key={`callout-${elements.length}`}
              className="mb-8 bg-blue-500/10 border-l-4 border-blue-400 rounded-lg p-6"
            >
              <p className="text-gray-100 leading-relaxed text-base md:text-lg">
                {renderInlineMarkdown(text)}
              </p>
            </div>
          );
        } else {
          // Regular paragraph
          elements.push(
            <p
              key={`p-${elements.length}`}
              className="mb-8 text-gray-200 leading-relaxed text-base md:text-lg"
            >
              {renderInlineMarkdown(text)}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul
            key={`ul-${elements.length}`}
            className="mb-8 space-y-4 text-gray-200 text-base md:text-lg ml-6 list-none"
          >
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-purple-400 mt-1.5 flex-shrink-0">•</span>
                <span>{renderInlineMarkdown(item)}</span>
              </li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      // H1
      if (line.startsWith("# ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h1
            key={`h1-${index}`}
            className="text-3xl md:text-4xl font-bold mb-8 mt-12 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text"
          >
            {line.substring(2)}
          </h1>
        );
      }
      // H2 - with icon
      else if (line.startsWith("## ")) {
        flushParagraph();
        flushList();
        const HeaderIcon = headerIcons[iconIndex % headerIcons.length];
        iconIndex++;
        elements.push(
          <div key={`h2-wrapper-${index}`} className="mt-12 mb-6">
            <div className="flex items-center gap-3">
              <HeaderIcon className="w-6 h-6 text-purple-400 flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
                {line.substring(3)}
              </h2>
            </div>
          </div>
        );
      }
      // H3
      else if (line.startsWith("### ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h3
            key={`h3-${index}`}
            className="text-xl md:text-2xl font-bold mb-4 mt-10 text-purple-200"
          >
            {line.substring(4)}
          </h3>
        );
      }
      // Horizontal rule
      else if (line.trim() === "---") {
        flushParagraph();
        flushList();
        elements.push(
          <div key={`hr-${index}`} className="my-16 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-white/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-xs font-semibold text-white shadow-lg">
                ✦
              </span>
            </div>
          </div>
        );
      }
      // List items
      else if (line.trim().startsWith("- ")) {
        flushParagraph();
        inList = true;
        listItems.push(line.trim().substring(2));
      }
      // Empty line
      else if (line.trim() === "") {
        flushParagraph();
        if (!inList) flushList();
      }
      // Regular paragraph text
      else {
        if (inList) {
          flushList();
        }
        currentParagraph.push(line);
      }
    });

    flushParagraph();
    flushList();

    return elements;
  };

  // Render inline markdown (bold, italic, links)
  const renderInlineMarkdown = (text: string): JSX.Element[] => {
    const parts: JSX.Element[] = [];
    let currentText = text;
    let key = 0;

    while (currentText.length > 0) {
      // Bold text **text**
      const boldMatch = currentText.match(/\*\*([^*]+)\*\*/);
      if (boldMatch) {
        const before = currentText.substring(0, boldMatch.index);
        if (before) parts.push(<span key={key++}>{before}</span>);
        parts.push(
          <strong key={key++} className="font-bold text-white">
            {boldMatch[1]}
          </strong>
        );
        currentText = currentText.substring(
          boldMatch.index! + boldMatch[0].length
        );
        continue;
      }

      // Italic text *text*
      const italicMatch = currentText.match(/\*([^*]+)\*/);
      if (italicMatch) {
        const before = currentText.substring(0, italicMatch.index);
        if (before) parts.push(<span key={key++}>{before}</span>);
        parts.push(
          <em key={key++} className="italic text-gray-200">
            {italicMatch[1]}
          </em>
        );
        currentText = currentText.substring(
          italicMatch.index! + italicMatch[0].length
        );
        continue;
      }

      // Links [text](url)
      const linkMatch = currentText.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const before = currentText.substring(0, linkMatch.index);
        if (before) parts.push(<span key={key++}>{before}</span>);
        parts.push(
          <a
            key={key++}
            href={linkMatch[2]}
            className="text-purple-400 hover:text-purple-300 underline decoration-purple-400/30 hover:decoration-purple-300 transition-colors font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkMatch[1]}
          </a>
        );
        currentText = currentText.substring(
          linkMatch.index! + linkMatch[0].length
        );
        continue;
      }

      // No more special formatting
      parts.push(<span key={key++}>{currentText}</span>);
      break;
    }

    return parts;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <FullNav />
      {/* Back to Blog Link */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/blog"
          className="inline-flex items-center px-4 py-2 rounded-full border border-purple-400/40 hover:border-purple-400/60 text-purple-300 hover:text-purple-200 transition-all duration-300 font-medium hover:scale-105"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">{post.title}</span>
          </h1>

          <div className="flex items-center text-gray-400 text-sm">
            <time dateTime={post.date} className="font-medium">
              {formatDate(post.date)}
            </time>
            <span className="mx-3 text-purple-400">•</span>
            <span className="font-medium">Patrick Jenkins</span>
          </div>
        </header>

        {/* Article Content - Simplified like Privacy */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="relative bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl p-8 md:p-12 border border-white/10">
            {renderMarkdown(post.content)}
          </div>
        </div>

        {/* CTA at the end - Simplified like Privacy */}
        <div className="relative mt-16 bg-gray-900/50 rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl shadow-purple-500/10">
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Ready to See </span>
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
                Real Trading Results?
              </span>
            </h3>
            <p className="text-gray-200 mb-6 text-lg">
              Everything you just read is based on real trading data. Check out my
              live dashboard with complete transparency - every trade, every
              profit, updated multiple times daily.
            </p>
            <Link
              to="/"
              className="group inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full font-semibold text-white text-base transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-2xl whitespace-nowrap"
            >
              <span>View Live Results</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Share Section - Enhanced */}
        <div className="relative mt-12 pt-8 border-t border-white/20">
          <p className="text-gray-300 text-sm">
            Questions or want to discuss this post? Find me on{" "}
            <a
              href="https://twitter.com/myrobotictrader"
              className="text-purple-400 hover:text-purple-300 font-semibold transition-colors underline decoration-purple-400/30 hover:decoration-purple-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter/X
            </a>
          </p>
        </div>
      </article>
    </div>
  );
};
