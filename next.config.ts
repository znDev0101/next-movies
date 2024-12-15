import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
    ],
    unoptimized: false,
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;
