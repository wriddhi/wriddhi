import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    typedEnv: true,
  },
};

export default nextConfig;
