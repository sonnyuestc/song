import type { Metadata } from "next";
import "./globals.css";
import { sitePath } from "./site-path";

const ogImage = sitePath("/og-zyro.png");

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zyrolink.cn"),
  title: "ZYRO｜Wireless Imaging & Data Link",
  description: "ZYRO 无线图像与数据链路产品：数字图传、模拟 FPV、Mesh 自组网与热成像模组。",
  icons: { icon: sitePath("/favicon.svg") },
  openGraph: {
    title: "ZYRO — Beyond Distance, In Real Time",
    description: "面向无人机、机器人与复杂现场的无线图像和数据链路产品。",
    type: "website",
    locale: "zh_CN",
    url: sitePath("/"),
    images: [{ url: ogImage, width: 1536, height: 1024, alt: "ZYRO Wireless Imaging & Data Link" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZYRO — Beyond Distance, In Real Time",
    description: "面向无人机、机器人与复杂现场的无线图像和数据链路产品。",
    images: [ogImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
