import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import postsData from "./data/posts.json";
import { FullNav } from "./components/FullNav";
import { RecentPosts } from "./components/RecentPosts";
import { GoldBlogSlide } from "./components/GoldBlogSlides";

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  content: string;
  category: string;
  metaDescription: string;
  heroImage: string;
  imageAlt: string;
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

  // Simple markdown-to-JSX renderer
  const renderMarkdown = (markdown: string) => {
    const lines = markdown.split("\n");
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let inList = false;
    let isOrderedList = false;
    let listItems: string[] = [];
    let inTable = false;
    let tableRows: string[] = [];

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        elements.push(
          <p
            key={`p-${elements.length}`}
            className="mb-6 text-slate-300 leading-relaxed text-lg"
          >
            {renderInlineMarkdown(currentParagraph.join(" "))}
          </p>
        );
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (listItems.length > 0) {
        const ListTag = isOrderedList ? 'ol' : 'ul';
        elements.push(
          <ListTag
            key={`${isOrderedList ? 'ol' : 'ul'}-${elements.length}`}
            className={`mb-6 space-y-2 text-slate-300 text-lg ${isOrderedList ? 'list-decimal' : 'list-disc'} list-inside ml-4`}
          >
            {listItems.map((item, idx) => (
              <li key={idx}>{renderInlineMarkdown(item)}</li>
            ))}
          </ListTag>
        );
        listItems = [];
        inList = false;
        isOrderedList = false;
      }
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        // Parse table: first row is header, second is separator, rest are data
        const headerRow = tableRows[0];
        const dataRows = tableRows.slice(2); // Skip header and separator

        const parseRow = (row: string) => {
          return row
            .split("|")
            .slice(1, -1) // Remove empty first/last from | splits
            .map((cell) => cell.trim());
        };

        const headers = parseRow(headerRow);
        const rows = dataRows.map(parseRow);

        elements.push(
          <div key={`table-${elements.length}`} className="mb-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-purple-400/30">
                  {headers.map((header, idx) => (
                    <th
                      key={idx}
                      className="py-3 px-4 text-purple-300 font-semibold text-sm"
                    >
                      {renderInlineMarkdown(header)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className="border-b border-slate-700/50 hover:bg-slate-800/30"
                  >
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="py-3 px-4 text-slate-300 text-sm"
                      >
                        {renderInlineMarkdown(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
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
            className="text-4xl md:text-5xl font-bold mb-6 mt-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          >
            {line.substring(2)}
          </h1>
        );
      }
      // H2
      else if (line.startsWith("## ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h2
            key={`h2-${index}`}
            className="text-3xl font-bold mb-4 mt-8 text-purple-300"
          >
            {line.substring(3)}
          </h2>
        );
      }
      // H3
      else if (line.startsWith("### ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h3
            key={`h3-${index}`}
            className="text-2xl font-bold mb-3 mt-6 text-purple-300"
          >
            {line.substring(4)}
          </h3>
        );
      }
      // Horizontal rule (skip rendering, just add spacing)
      else if (line.trim() === "---") {
        flushParagraph();
        flushList();
        // Skip rendering the divider - just treat as whitespace
      }
      // Image ![alt](url) or Slide component ![Slide: variant]
      else if (line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/) || line.trim().match(/^!\[Slide:\s*([^\]]+)\]$/)) {
        flushParagraph();
        flushList();

        // Check for slide component syntax: ![Slide: variant]
        const slideMatch = line.trim().match(/^!\[Slide:\s*([^\]]+)\]$/);
        if (slideMatch) {
          const variant = slideMatch[1].trim() as 'returns-1928' | 'reality-check' | 'lost-decades' | 'irs-tax' | 'tax-impact' | 'storage-fees' | 'free-gold-trap' | 'coins-vs-bars' | 'celebrity-machine' | 'gold-vs-trading';
          elements.push(
            <GoldBlogSlide key={`slide-${index}`} variant={variant} />
          );
        } else {
          // Regular image
          const match = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
          if (match) {
            // Check if next line is a caption (starts and ends with *)
            const nextLine = lines[index + 1];
            const isCaption = nextLine && nextLine.trim().match(/^\*(.+)\*$/);

            if (isCaption) {
              const captionMatch = nextLine.trim().match(/^\*(.+)\*$/);
              elements.push(
                <figure key={`fig-${index}`} className="my-8">
                  <img
                    src={match[2]}
                    alt={match[1]}
                    className="w-full rounded-xl border border-purple-400/30"
                  />
                  <figcaption className="text-center text-slate-400 text-sm italic mt-3">
                    {captionMatch ? captionMatch[1] : ''}
                  </figcaption>
                </figure>
              );
              // Skip the next line since we've consumed the caption
              lines[index + 1] = '';
            } else {
              elements.push(
                <img
                  key={`img-${index}`}
                  src={match[2]}
                  alt={match[1]}
                  className="w-full rounded-xl my-6 border border-purple-400/30"
                />
              );
            }
          }
        }
      }
      // Unordered list items (- item)
      else if (line.trim().startsWith("- ")) {
        flushParagraph();
        flushTable();
        if (inList && isOrderedList) flushList(); // Flush if switching list type
        inList = true;
        isOrderedList = false;
        listItems.push(line.trim().substring(2));
      }
      // Ordered list items (1. item, 2. item, etc.)
      else if (/^\d+\.\s/.test(line.trim())) {
        flushParagraph();
        flushTable();
        if (inList && !isOrderedList) flushList(); // Flush if switching list type
        inList = true;
        isOrderedList = true;
        listItems.push(line.trim().replace(/^\d+\.\s/, ''));
      }
      // Table rows (lines starting and ending with |)
      else if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
        flushParagraph();
        flushList();
        inTable = true;
        tableRows.push(line.trim());
      }
      // Empty line
      else if (line.trim() === "") {
        flushParagraph();
        if (!inList) flushList();
        if (inTable) flushTable();
      }
      // Regular paragraph text
      else {
        if (inList) {
          flushList();
        }
        if (inTable) {
          flushTable();
        }
        currentParagraph.push(line);
      }
    });

    flushParagraph();
    flushList();
    flushTable();

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
          <em key={key++} className="italic">
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
            className="text-purple-400 hover:text-purple-300 underline"
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

      {/* Blog Post Content */}
      <section className="relative py-16">
        {/* Article Container - Matches site width */}
        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          {/* Back to Blog Link - Modern pill button style */}
          <div className="mb-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-purple-400/30 hover:border-purple-400/50 text-purple-300 hover:text-purple-200 transition-all duration-300 group"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
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
              <span className="text-sm font-medium">Back to Blog</span>
            </Link>
          </div>

          <header className="mb-12">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-purple-600/30 text-purple-300 border border-purple-400/30">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center text-slate-400">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="mx-3">•</span>
              <span>Patrick Jenkins</span>
            </div>
          </header>

          {/* Hero Image Banner */}
          <div className="mb-8 rounded-2xl overflow-hidden h-48 md:h-56">
            <img
              src={post.heroImage}
              alt={post.imageAlt}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.85)' }}
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-slate-900/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8 border border-purple-400/30">
              {renderMarkdown(post.content)}
            </div>
          </div>

          {/* CTA at the end */}
          <div className="bg-slate-900/95 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to See Real Trading Results?
            </h3>
            <p className="text-slate-300 mb-6">
              Everything you just read is based on real trading data. Check out
              my live dashboard with complete transparency - every trade, every
              profit, updated multiple times daily.
            </p>
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              <span>View Live Results</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
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

          {/* Share Section - More personal */}
          <div className="mt-8 pt-8 border-t border-purple-400/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-slate-300 font-medium mb-1">
                  Found this helpful? Let's connect!
                </p>
                <p className="text-slate-400 text-sm">
                  I share daily insights about systematic trading and building
                  transparent systems.
                </p>
              </div>
              <a
                href="https://twitter.com/myrobotictrader"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600/20 hover:bg-purple-600/30 border border-purple-400/40 hover:border-purple-400/60 text-purple-300 hover:text-purple-200 transition-all duration-300 group whitespace-nowrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="font-medium">Follow on X</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </a>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mt-12">
            <RecentPosts currentSlug={post.slug} />
          </div>
        </article>
      </section>
    </div>
  );
};
