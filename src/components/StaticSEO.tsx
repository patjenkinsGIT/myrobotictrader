import React, { useEffect } from "react";

// This component sets up static SEO meta tags immediately on app load
// to ensure social media crawlers can read them before React hydration
export const StaticSEO: React.FC = () => {
  useEffect(() => {
    console.log(
      "🚀 StaticSEO: Setting up immediate meta tags for social sharing..."
    );

    // Set up critical meta tags immediately for social media crawlers
    const setImmediateMeta = () => {
      const head = document.head;

      // Remove any existing dynamic meta tags first
      const existingMetas = head.querySelectorAll('meta[data-dynamic="true"]');
      existingMetas.forEach((meta) => meta.remove());

      // Create essential meta tags with data-dynamic attribute for tracking
      const metaTags = [
        // Primary Meta Tags
        {
          name: "title",
          content:
            "MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",
        },
        {
          name: "description",
          content:
            "Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system. Start your automated trading journey today.",
        },
        {
          name: "keywords",
          content:
            "robotic trading, crypto trading, automated trading, passive income, cryptocurrency, trading bot, AI trading, revenue streams",
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Patrick Jenkins" },
        { name: "theme-color", content: "#8B5CF6" },

        // Open Graph / Facebook - CRITICAL FOR LINK SHARING
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: "https://rd6xolh11t0gmjdo-default.preview.taskade.app/",
        },
        {
          property: "og:title",
          content:
            "MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",
        },
        {
          property: "og:description",
          content:
            "Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",
        },
        {
          property: "og:image",
          content: "https://5defe27d.myrobotictrader.pages.dev/og-image.png",
        },

        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:type", content: "image/png" },
        { property: "og:site_name", content: "MyRoboticTrader" },
        { property: "og:locale", content: "en_US" },

        // Twitter Card - CRITICAL FOR TWITTER SHARING
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:site", content: "@myrobotictrader" },
        { property: "twitter:creator", content: "@myrobotictrader" },
        {
          property: "twitter:url",
          content: "https://rd6xolh11t0gmjdo-default.preview.taskade.app/",
        },
        {
          property: "twitter:title",
          content:
            "MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",
        },
        {
          property: "twitter:description",
          content:
            "Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",
        },
        {
          property: "twitter:image",
          content:
            "https://rd6xolh11t0gmjdo-default.preview.taskade.app/twitter-image.png",
        },
        {
          property: "twitter:image:alt",
          content: "MyRoboticTrader - Automated Crypto Trading Results",
        },

        // LinkedIn Specific
        { property: "linkedin:owner", content: "Patrick Jenkins" },

        // WhatsApp/Telegram Specific
        {
          property: "og:image:secure_url",
          content:
            "https://rd6xolh11t0gmjdo-default.preview.taskade.app/og-image.png",
        },
      ];

      metaTags.forEach(({ name, property, content }) => {
        const meta = document.createElement("meta");
        meta.setAttribute("data-dynamic", "true");

        if (name) {
          meta.setAttribute("name", name);
        } else if (property) {
          meta.setAttribute("property", property);
        }

        meta.setAttribute("content", content);
        head.appendChild(meta);
      });

      // Set document title immediately
      document.title =
        "MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams";

      // Add canonical link
      let canonical = head.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("data-dynamic", "true");
        head.appendChild(canonical);
      }
      canonical.setAttribute(
        "href",
        "https://rd6xolh11t0gmjdo-default.preview.taskade.app/"
      );

      console.log(
        "✅ StaticSEO: Immediate meta tags set for social media crawlers"
      );
    };

    // Set meta tags immediately
    setImmediateMeta();

    // Also set them after a small delay to ensure they persist
    setTimeout(setImmediateMeta, 100);

    // Add structured data for rich snippets
    const addStructuredData = () => {
      // Remove existing structured data
      const existingScripts = document.querySelectorAll(
        'script[type="application/ld+json"][data-static="true"]'
      );
      existingScripts.forEach((script) => script.remove());

      const schemas = [
        {
          id: "website-static",
          data: {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "MyRoboticTrader",
            alternateName: "My Robotic Trader",
            url: "https://rd6xolh11t0gmjdo-default.preview.taskade.app/",
            description:
              "Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",
            author: {
              "@type": "Person",
              name: "Patrick Jenkins",
              jobTitle: "Automated Trading Specialist",
            },
          },
        },
        {
          id: "organization-static",
          data: {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MyRoboticTrader",
            url: "https://rd6xolh11t0gmjdo-default.preview.taskade.app/",
            logo: {
              "@type": "ImageObject",
              url: "https://rd6xolh11t0gmjdo-default.preview.taskade.app/og-image.png",
              width: 1200,
              height: 630,
            },
            description:
              "Leading platform for AI-enhanced autonomous cryptocurrency trading",
            founder: {
              "@type": "Person",
              name: "Patrick Jenkins",
            },
          },
        },
      ];

      schemas.forEach(({ id, data }) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-static", "true");
        script.id = id;
        script.textContent = JSON.stringify(data, null, 2);
        document.head.appendChild(script);
      });

      console.log("✅ StaticSEO: Structured data added for rich snippets");
    };

    addStructuredData();
  }, []); // Run only once on mount

  return null;
};
