import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // static export for GitHub Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
