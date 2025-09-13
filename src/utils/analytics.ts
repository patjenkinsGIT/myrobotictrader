// Google Analytics 4 utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Your GA4 Measurement ID
export const GA_MEASUREMENT_ID = "G-RX3B8PVTHE";

// Initialize Google Analytics
export const initGA = () => {
  // Create script tag for gtag
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: any[]) {
    window.dataLayer.push(args);
  };

  // Configure GA
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for your app
export const trackCTAClick = (
  buttonName: string,
  location: string = "hero"
) => {
  trackEvent("click", "cta_button", `${buttonName}_${location}`, 1);
};

export const trackOutboundLink = (url: string, linkText: string) => {
  trackEvent("click", "outbound_link", `${linkText}_${url}`, 1);
};
