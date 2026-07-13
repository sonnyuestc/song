import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "localhost:3000";
  const protocol = headerList.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const ogImage = `${protocol}://${host}/og-zyro.png`;

  return {
    title: "ZYRO｜Wireless Imaging & Data Link",
    description: "ZYRO 无线图像与数据链路产品：数字图传、模拟 FPV、Mesh 自组网与热成像模组。",
    icons: { icon: "/favicon.svg" },
    openGraph: {
      title: "ZYRO — Beyond Distance, In Real Time",
      description: "面向无人机、机器人与复杂现场的无线图像和数据链路产品。",
      type: "website",
      locale: "zh_CN",
      images: [{ url: ogImage, width: 1536, height: 1024, alt: "ZYRO Wireless Imaging & Data Link" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "ZYRO — Beyond Distance, In Real Time",
      description: "面向无人机、机器人与复杂现场的无线图像和数据链路产品。",
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
