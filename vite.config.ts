import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Build optimizations
  build: {
    // Enable source maps for debugging
    sourcemap: false, // Disable in production for smaller bundle

    // Optimize chunks for better caching
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor libraries (rarely change)
          vendor: ["react", "react-dom"],

          // Router (separate chunk)
          router: ["react-router-dom"],

          // Charts/visualization if you use them
          // charts: ['recharts'], // Uncomment if you use recharts
        },

        // Consistent chunk naming for better caching
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },

    // Target modern browsers for smaller bundle
    target: "es2015",

    // Minimize bundle size
    minify: "esbuild",

    // Optimize CSS
    cssMinify: true,

    // Chunk size warning limit (500kb)
    chunkSizeWarningLimit: 500,
  },

  // Development server configuration
  server: {
    port: 3000,
    host: true, // Allows access from network
    open: true, // Auto-open browser
  },

  // Preview server configuration (for npm run preview)
  preview: {
    port: 4173,
    host: true,
  },

  // Define global constants
  define: {
    // Useful for conditional code
    __DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
  },

  // Optimize dependencies
  optimizeDeps: {
    // Pre-bundle these dependencies
    include: ["react", "react-dom", "react-router-dom"],

    // Exclude from pre-bundling (if any)
    exclude: [],
  },

  // CSS processing
  css: {
    // Enable CSS modules if needed
    modules: {
      localsConvention: "camelCase",
    },

    // PostCSS configuration (Tailwind is likely configured separately)
    postcss: {},

    // CSS dev sourcemaps
    devSourcemap: true,
  },

  // Asset handling
  assetsInclude: [
    // Add custom asset types if needed
    "**/*.md", // Include markdown files as assets
  ],

  // Environment variable prefix (Vite default is VITE_)
  envPrefix: "VITE_",

  // Base public path
  base: "/",

  // Enable/disable clearing screen on rebuild
  clearScreen: false,

  // Esbuild options
  esbuild: {
    // Remove console.log in production
    drop: process.env.NODE_ENV === "production" ? ["console", "debugger"] : [],

    // Enable JSX automatic runtime
    jsxInject: `import React from 'react'`,
  },
});
