import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "ZYRO product documentation, field-test records, technical articles and open-source resources.",
  openGraph: {
    title: "ZYRO Wiki | Documentation & Field Tests",
    description: "Explore ZYRO product documentation, original field-test reports and technical articles in English.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "ZYRO Wiki | Documentation & Field Tests",
    description: "ZYRO product documentation, field-test reports and technical articles in English.",
  },
};

export default function WikiLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
