import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  pageType?: "home" | "resources" | "privacy" | "card" | "blog";
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",
  description = "Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system. Start your automated trading journey today.",
  keywords = "robotic trading, crypto trading, automated trading, passive income, cryptocurrency, trading bot, AI trading, revenue streams",
  ogTitle = "MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",
  ogDescription = "Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",
  ogImage = "https://5defe27d.myrobotictrader.pages.dev/og-image.png",
  twitterTitle = "MyRoboticTrader - Set It and Forget It Crypto Trading | Build New Revenue Streams",
  twitterDescription = "Discover how I built multiple revenue streams with AI-Enhanced autonomous robotic crypto trading. Real results, proven system.",
  twitterImage = "https://myrobotictrader.com/robot-twitter.png",
  canonicalUrl = "https://myrobotictrader.com/",
  pageType = "home",
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Function to update or create meta tag
    const updateMetaTag = (
      name: string,
      content: string,
      property?: boolean
    ) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector) as HTMLMetaElement;

      if (!metaTag) {
        metaTag = document.createElement("meta");
        if (property) {
          metaTag.setAttribute("property", name);
        } else {
          metaTag.setAttribute("name", name);
        }
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
    };

    // Update or create link tag
    const updateLinkTag = (rel: string, href: string) => {
      let linkTag = document.querySelector(
        `link[rel="${rel}"]`
      ) as HTMLLinkElement;

      if (!linkTag) {
        linkTag = document.createElement("link");
        linkTag.setAttribute("rel", rel);
        document.head.appendChild(linkTag);
      }
      linkTag.setAttribute("href", href);
    };

    // Primary Meta Tags
    updateMetaTag("title", title);
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Open Graph / Facebook
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:url", canonicalUrl, true);
    updateMetaTag("og:title", ogTitle, true);
    updateMetaTag("og:description", ogDescription, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:site_name", "MyRoboticTrader", true);

    // Twitter
    updateMetaTag("twitter:card", "summary_large_image", true);
    updateMetaTag("twitter:url", canonicalUrl, true);
    updateMetaTag("twitter:title", twitterTitle, true);
    updateMetaTag("twitter:description", twitterDescription, true);
    updateMetaTag("twitter:image", twitterImage, true);

    // Canonical URL
    updateLinkTag("canonical", canonicalUrl);

    // Remove existing structured data
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach((script) => {
      if (script.id?.startsWith("structured-data-")) {
        script.remove();
      }
    });

    const addStructuredData = (schemaData: any, id: string) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `structured-data-${id}`;
      script.textContent = JSON.stringify(schemaData, null, 2);
      document.head.appendChild(script);
    };

    // Base website schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "MyRoboticTrader",
      alternateName: "My Robotic Trader",
      url: canonicalUrl,
      description: description,
      author: {
        "@type": "Person",
        name: "Patrick Jenkins",
        jobTitle: "Automated Trading Specialist",
        knowsAbout: [
          "Cryptocurrency Trading",
          "Automated Trading Systems",
          "AI Trading",
          "Passive Income",
        ],
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${canonicalUrl}search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    };

    // Organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "MyRoboticTrader",
      url: canonicalUrl,
      logo: {
        "@type": "ImageObject",
        url: "https://myrobotictrader.com/favicon-32x32.png",
        width: 32,
        height: 32,
      },
      description:
        "Leading platform for AI-enhanced autonomous cryptocurrency trading",
      foundingDate: "2025",
      founder: {
        "@type": "Person",
        name: "Patrick Jenkins",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "support@myrobotictrader.com",
      },
      areaServed: "Worldwide",
      serviceType: "Automated Trading Platform",
    };

    // Person schema for Patrick
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Patrick Jenkins",
      jobTitle: "Automated Trading Specialist & Founder",
      worksFor: {
        "@type": "Organization",
        name: "MyRoboticTrader",
      },
      knowsAbout: [
        "Cryptocurrency Trading",
        "Automated Trading Systems",
        "AI Trading Algorithms",
        "Passive Income Generation",
        "Risk Management",
        "Financial Technology",
      ],
      description:
        "Expert in AI-enhanced autonomous cryptocurrency trading with proven track record of building sustainable revenue streams",
      url: canonicalUrl,
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does automated crypto trading work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our AI-enhanced robotic trading system analyzes market conditions 24/7 and executes trades based on proven algorithms. The system runs autonomously, requiring no manual intervention while building sustainable revenue streams.",
          },
        },
        {
          "@type": "Question",
          name: "Is automated trading safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, when done properly with robust risk management. Our system includes built-in safety features like stop losses, position sizing, and maximum drawdown limits to protect your capital.",
          },
        },
        {
          "@type": "Question",
          name: "How much money do I need to start?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can start with as little as $1,000, though we recommend at least $5,000 for better diversification and risk management. The system scales with your account size.",
          },
        },
      ],
    };

    // Page-specific schemas
    if (pageType === "home") {
      // Article schema for trading results
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "AI-Enhanced Autonomous Robotic Crypto Trading Results",
        description: description,
        author: {
          "@type": "Person",
          name: "Patrick Jenkins",
        },
        publisher: {
          "@type": "Organization",
          name: "MyRoboticTrader",
          logo: {
            "@type": "ImageObject",
            url: ogImage,
          },
        },
        datePublished: "2025-01-08",
        dateModified: new Date().toISOString().split("T")[0],
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        image: {
          "@type": "ImageObject",
          url: ogImage,
          width: 1200,
          height: 630,
        },
        articleSection: "Trading Results",
        keywords: keywords,
      };

      addStructuredData(articleSchema, "article");
    }

    if (pageType === "resources") {
      // Course schema for educational content
      const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "AI-Enhanced Autonomous Crypto Trading with GoBabyTrade",
        description:
          "Comprehensive resources and tools for automated cryptocurrency trading with GoBabyTrade",
        provider: {
          "@type": "Organization",
          name: "MyRoboticTrader",
        },
        instructor: {
          "@type": "Person",
          name: "Patrick Jenkins",
        },
        courseMode: "online",
        educationalLevel: "Beginner to Advanced",
        about: "Automated Trading, Cryptocurrency, AI Trading Systems, GoBabyTrade",
      };

      addStructuredData(courseSchema, "course");
    }

    // Add all base schemas
    addStructuredData(websiteSchema, "website");
    addStructuredData(organizationSchema, "organization");
    addStructuredData(personSchema, "person");
    addStructuredData(faqSchema, "faq");
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonicalUrl,
    pageType,
  ]);

  return null;
};
