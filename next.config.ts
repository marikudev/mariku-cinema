import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "image.tmdb.org",
      "upload.wikimedia.org",
    ],
  },
};

export default nextConfig;
