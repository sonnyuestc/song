import type { NextConfig } from "next";

const isStaticWikiBuild = process.env.ZYRO_STATIC_WIKI === "1";
const staticBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "/wiki";

const nextConfig: NextConfig = {
  ...(isStaticWikiBuild
    ? {
        basePath: staticBasePath,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
