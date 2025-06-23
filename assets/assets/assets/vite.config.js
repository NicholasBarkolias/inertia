import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],

  // Development server configuration
  server: {
    port: 5173,
    host: true,
    hmr: {
      port: 5173,
    },
  },

  // Build configuration
  build: {
    target: "es2020",
    outDir: "../priv/static/assets",
    emptyOutDir: true,
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      input: {
        app: resolve(__dirname, "js/app.jsx"),
      },
      output: {
        entryFileNames: "js/[name]-[hash].js",
        chunkFileNames: "js/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "images/[name]-[hash][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "css/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },

  // Asset handling
  assetsInclude: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif"],

  // CSS configuration
  css: {
    postcss: "./postcss.config.js",
  },

  // Resolve configuration
  resolve: {
    alias: {
      "@": resolve(__dirname, "js"),
      "~": resolve(__dirname, "."),
    },
  },
});
