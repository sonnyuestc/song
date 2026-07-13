import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "localhost:3000";
  const protocol = headerList.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const ogImage = `${protocol}://${host}/og.png`;

  return {
    title: "品牌名｜产品与知识中心",
    description: "展示产品，更用每周更新的专业科普，帮助你看懂原理、选对方案。",
    icons: { icon: "/favicon.svg" },
    openGraph: {
      title: "了解产品，也了解为什么。",
      description: "产品与知识中心，每周更新一篇专业科普。",
      type: "website",
      locale: "zh_CN",
      images: [{ url: ogImage, width: 1536, height: 1024, alt: "产品与知识中心" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "了解产品，也了解为什么。",
      description: "产品与知识中心，每周更新一篇专业科普。",
      images: [ogImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
