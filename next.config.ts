import type { NextConfig } from "next";

const isStaticWikiBuild = process.env.ZYRO_STATIC_WIKI === "1";

const nextConfig: NextConfig = {
  ...(isStaticWikiBuild
    ? {
        basePath: "/wiki",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
