import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bubble-plugins",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
