import React, { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  RefreshCw,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

// Define proper types for meta tags
interface MetaTags {
  title: string | null;
  description: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  ogUrl: string | null;
  twitterCard: string | null;
  twitterTitle: string | null;
  twitterDescription: string | null;
  twitterImage: string | null;
  canonical: string | null;
}

interface TestUrl {
  name: string;
  url: string;
  description: string;
}

// Debug component to help test and verify SEO meta tags for link sharing
export const SEODebugger: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [metaTags, setMetaTags] = useState<MetaTags>({
    title: null,
    description: null,
    ogTitle: null,
    ogDescription: null,
    ogImage: null,
    ogUrl: null,
    twitterCard: null,
    twitterTitle: null,
    twitterDescription: null,
    twitterImage: null,
    canonical: null,
  });
  const [copied, setCopied] = useState<string | null>(null);
  const refreshMetaTags = (): void => {
    const tags: MetaTags = {
      title: document.title,
      description:
        document
          .querySelector('meta[name="description"]')
          ?.getAttribute("content") || null,
      ogTitle:
        document
          .querySelector('meta[property="og:title"]')
          ?.getAttribute("content") || null,
      ogDescription:
        document
          .querySelector('meta[property="og:description"]')
          ?.getAttribute("content") || null,
      ogImage:
        document
          .querySelector('meta[property="og:image"]')
          ?.getAttribute("content") || null,
      ogUrl:
        document
          .querySelector('meta[property="og:url"]')
          ?.getAttribute("content") || null,
      twitterCard:
        document
          .querySelector('meta[property="twitter:card"]')
          ?.getAttribute("content") || null,
      twitterTitle:
        document
          .querySelector('meta[property="twitter:title"]')
          ?.getAttribute("content") || null,
      twitterDescription:
        document
          .querySelector('meta[property="twitter:description"]')
          ?.getAttribute("content") || null,
      twitterImage:
        document
          .querySelector('meta[property="twitter:image"]')
          ?.getAttribute("content") || null,
      canonical:
        document.querySelector('link[rel="canonical"]')?.getAttribute("href") ||
        null,
    };

    setMetaTags(tags);
    console.log("🔍 Current meta tags:", tags);
  };

  useEffect(() => {
    refreshMetaTags();

    // Refresh every 2 seconds to catch dynamic updates
    const interval = setInterval(refreshMetaTags, 2000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = async (text: string, key: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const testUrls: TestUrl[] = [
    {
      name: "Facebook Debugger",
      url: `https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(
        window.location.href
      )}`,
      description: "Test how your link appears on Facebook",
    },
    {
      name: "Twitter Card Validator",
      url: `https://cards-dev.twitter.com/validator`,
      description: "Test how your link appears on Twitter",
    },
    {
      name: "LinkedIn Post Inspector",
      url: `https://www.linkedin.com/post-inspector/`,
      description: "Test how your link appears on LinkedIn",
    },
    {
      name: "WhatsApp Link Preview",
      url: `https://web.whatsapp.com/`,
      description: "Test by sending the link in WhatsApp Web",
    },
  ];

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2"
          title="Open SEO Debugger"
        >
          <Eye className="w-5 h-5" />
          <span className="text-sm font-medium">SEO Debug</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl max-w-md w-full max-h-96 overflow-y-auto">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold text-lg flex items-center gap-2">
            <Eye className="w-5 h-5 text-purple-400" />
            SEO Debugger
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={refreshMetaTags}
              className="text-gray-400 hover:text-white p-1 rounded transition-colors"
              title="Refresh meta tags"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white p-1 rounded transition-colors"
              title="Close debugger"
            >
              <EyeOff className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Current URL */}
        <div className="mb-4 p-3 bg-gray-800 rounded-lg">
          <div className="text-gray-300 text-sm mb-1">Current URL:</div>
          <div className="text-white text-xs font-mono break-all flex items-center gap-2">
            {window.location.href}
            <button
              onClick={() => copyToClipboard(window.location.href, "url")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {copied === "url" ? (
                <Check className="w-3 h-3" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </button>
          </div>
        </div>

        {/* Meta Tags Status */}
        <div className="space-y-3 mb-4">
          <div className="text-white font-semibold text-sm">
            Meta Tags Status:
          </div>

          {Object.entries(metaTags).map(([key, value]) => (
            <div key={key} className="flex items-start gap-2 text-xs">
              <div
                className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${
                  value ? "bg-green-400" : "bg-red-400"
                }`}
              ></div>
              <div className="flex-1">
                <div className="text-gray-300 font-medium">{key}:</div>
                <div className="text-gray-400 break-all">
                  {value || "Not set"}
                  {value && (
                    <button
                      onClick={() => copyToClipboard(value, key)}
                      className="ml-2 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {copied === key ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Test Links */}
        <div className="space-y-2">
          <div className="text-white font-semibold text-sm">
            Test Link Sharing:
          </div>
          {testUrls.map((test, index) => (
            <a
              key={index}
              href={test.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors"
            >
              <div className="flex items-center gap-2 text-sm">
                <ExternalLink className="w-4 h-4 text-purple-400" />
                <div>
                  <div className="text-white font-medium">{test.name}</div>
                  <div className="text-gray-400 text-xs">
                    {test.description}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
          <div className="text-blue-300 text-xs">
            <div className="font-semibold mb-1">How to test:</div>
            <ol className="list-decimal list-inside space-y-1">
              <li>Copy the current URL above</li>
              <li>Click on a test link to open the validator</li>
              <li>Paste your URL and test the preview</li>
              <li>Check if title, description, and image appear correctly</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
