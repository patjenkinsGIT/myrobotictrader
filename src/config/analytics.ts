// Analytics Configuration
// Replace these with your actual tracking IDs

export const ANALYTICS_CONFIG = {
  // Google Analytics 4 Measurement ID
  // Get this from: https://analytics.google.com/
  // Format: G-XXXXXXXXXX
  GOOGLE_ANALYTICS_ID: process.env.REACT_APP_GA_ID || "GA_MEASUREMENT_ID",
  
  // Facebook Pixel ID
  // Get this from: https://business.facebook.com/
  // Format: numeric ID
  FACEBOOK_PIXEL_ID: process.env.REACT_APP_FB_PIXEL_ID || "FB_PIXEL_ID",
  
  // Site Configuration
  SITE_NAME: "MyRoboticTrader.com",
  SITE_DESCRIPTION: "AI-Powered Crypto Trading Automation",
  SITE_URL: "https://myrobotictrader.com",
  
  // Affiliate Links
  AFFILIATE_LINK: "https://crypto.gobabytrade.com",
  COMPANY_LINK: "https://financialintelligence4u.com"
};

// Environment check
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';
