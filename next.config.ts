import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["26.238.58.251", '192.168.3.7'],
  turbopack: {
    root: path.resolve("."),
  },
  images: {
    remotePatterns: [
      { hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
