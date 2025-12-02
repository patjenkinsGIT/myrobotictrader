/**
 * Shared Blog Styles
 *
 * These styles match the landing page aesthetic for consistency across the site.
 * Extracted from: TradingResults.tsx, Features.tsx, ResourcesPage.tsx, BlogPostPage.tsx
 *
 * Usage: import { blogStyles } from '../styles/blogStyles';
 */

export const blogStyles = {
  // ============================================
  // SLIDE CONTAINERS
  // ============================================

  // Main slide container - matches ResourcesPage card style with generous spacing
  slideContainer: "my-12 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900/80 to-purple-900/40 p-8 md:p-10 border border-white/10 backdrop-blur-sm",

  // ============================================
  // CARDS
  // ============================================

  // Primary card - matches TradingResults & Features cards
  card: "bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20",

  // Card with hover effects (for interactive elements)
  cardHover: "bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300",

  // Smaller card variant
  cardSm: "bg-white/8 backdrop-blur-sm rounded-xl p-4 border border-white/20",

  // Inner comparison box (nested inside cards)
  cardInner: "bg-gray-900/50 rounded-xl p-4 border border-white/10",

  // ============================================
  // CALLOUT BOXES
  // ============================================

  // Highlight/callout box - matches the "Live Data Connected" style
  callout: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30",

  // Warning/negative callout
  calloutWarning: "bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-4 border border-red-400/30",

  // Success/positive callout
  calloutSuccess: "bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-4 border border-green-400/30",

  // ============================================
  // TABLES (from BlogPostPage.tsx)
  // ============================================

  table: "w-full text-left border-collapse",
  tableHeader: "border-b border-purple-400/30",
  tableHeaderCell: "py-3 px-4 text-purple-300 font-semibold text-sm",
  tableRow: "border-b border-slate-700/50 hover:bg-slate-800/30",
  tableCell: "py-3 px-4 text-slate-300 text-sm",

  // ============================================
  // TYPOGRAPHY
  // ============================================

  // Slide title - large, white, bold
  slideTitle: "text-2xl md:text-3xl font-bold text-white mb-2",

  // Slide subtitle - gray, smaller
  slideSubtitle: "text-gray-300 text-base",

  // Source citation
  source: "text-center text-gray-500 text-xs italic mt-6",

  // Section headers within slides
  sectionTitle: "text-xl font-bold text-white mb-4",

  // ============================================
  // VALUE COLORS (matching landing page charts)
  // ============================================

  // Positive values - bright green (matches TradingResults green)
  positive: "text-green-400",        // #4ade80
  positiveBold: "text-green-300 font-bold",

  // Negative values - red
  negative: "text-red-400",          // #f87171
  negativeBold: "text-red-400 font-bold",

  // Gold/yellow values
  gold: "text-yellow-400",           // #facc15
  goldBold: "text-yellow-400 font-bold",

  // Neutral/blue values
  blue: "text-blue-400",             // #60a5fa
  blueBold: "text-blue-400 font-bold",

  // Orange values (used for trades, secondary metrics)
  orange: "text-orange-400",         // #fb923c
  orangeBold: "text-orange-300 font-bold",

  // Purple accent
  purple: "text-purple-400",         // #c084fc
  purpleBold: "text-purple-300 font-bold",

  // Gray text
  muted: "text-gray-400",
  mutedLight: "text-gray-300",

  // ============================================
  // BAR CHART GRADIENTS
  // ============================================

  // Blue bar (S&P 500, stocks)
  barBlue: "linear-gradient(to top, #2563eb, #60a5fa)",

  // Green bar (positive returns after inflation)
  barGreen: "linear-gradient(to top, #16a34a, #4ade80)",

  // Gold/yellow bar (gold-related)
  barGold: "linear-gradient(to top, #ca8a04, #facc15)",

  // Red bar (negative/warning)
  barRed: "linear-gradient(to top, #b91c1c, #ef4444)",

  // ============================================
  // IMAGE STYLING
  // ============================================

  // Circular avatar with gold border (for celebrity photos, etc.)
  avatarGold: "w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-yellow-400",

  // Standard rounded image
  imageRounded: "rounded-xl object-cover",

  // ============================================
  // DIVIDERS & SEPARATORS
  // ============================================

  divider: "border-b border-slate-700/50 pb-2 mb-2",
  dividerLight: "border-b border-white/10 pb-2 mb-2",

  // ============================================
  // SPACING (for slides and text flow)
  // ============================================

  // Wrapper for slides - adds breathing room around each slide
  slideWrapper: "my-10",

  // Space between slide and following paragraph
  textAfterSlide: "mt-8",

  // Space between paragraph and following slide
  textBeforeSlide: "mb-6",
};

// Convenience type for TypeScript autocomplete
export type BlogStyleKey = keyof typeof blogStyles;
