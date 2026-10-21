
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,

  // Reduce memory usage during production builds by avoiding
  // parallel worker processes where supported by this Next.js version.
  experimental: {
    workerThreads: false,
    cpus: 2,
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
