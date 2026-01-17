import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
    {
      protocol: "https",
      hostname: "www.artic.edu",
      pathname: "/iiif/**",
    }],
  },
};

export default nextConfig;