"use client";

import { useEffect, useState } from "react";
import { sitePath } from "./site-path";

type NavGroup = {
  label: string;
  href: string;
  items: Array<{ label: string; href: string }>;
};

const navGroups: NavGroup[] = [
  { label: "Wiki", href: "/wiki/", items: [
    { label: "文档目录", href: "/wiki/" },
    { label: "技术科普", href: "/wiki/articles/" },
    { label: "未来产品", href: "/wiki/future-products/" },
    { label: "实测案例", href: "/wiki/#cases" },
    { label: "开源社区", href: "/wiki/pixelpilot/" },
    { label: "开箱与实测视频", href: "/wiki/videos/" },
  ] },
  {
    label: "产品",
    href: "/#products",
    items: [
      { label: "全部产品", href: "/#all-products" },
      { label: "未来产品", href: "/wiki/future-products/" },
      { label: "数字高清图传", href: "/?category=数字图传#products" },
      { label: "模拟 FPV", href: "/?category=模拟图传#products" },
      { label: "Mesh 与数据链路", href: "/?category=网络通信#products" },
      { label: "热成像模组", href: "/?category=热成像#products" },
    ],
  },
  {
    label: "应用解决方案",
    href: "/#solutions",
    items: [
      { label: "无人机高清图传", href: "/#solutions" },
      { label: "应急自组网", href: "/#solutions" },
      { label: "机器人视觉", href: "/#solutions" },
      { label: "低延迟 FPV", href: "/#solutions" },
    ],
  },

  {
    label: "进入 ZYRO",
    href: "/#about",
    items: [
      { label: "关于 ZYRO", href: "/#about" },
      { label: "联系我们", href: "/#contact" },
      { label: "产品资料下载", href: "/downloads/zyro-portfolio.pdf" },
    ],
  },
];

export function SiteHeader({ language = "zh" }: { language?: "zh" | "en" } = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const english = language === "en";
  useEffect(() => { document.documentElement.lang = english ? "en" : "zh-CN"; }, [english]);
  const enLabels: Record<string, string> = {
    "文档目录": "Documentation", "技术科普": "Technical articles", "未来产品": "Future products",
    "实测案例": "Field tests", "开源社区": "Open-source community", "开箱与实测视频": "Unboxing & test videos",
    "产品": "Products", "全部产品": "All products", "数字高清图传": "Digital HD video links",
    "模拟 FPV": "Analog FPV", "Mesh 与数据链路": "Mesh & data links", "热成像模组": "Thermal imaging",
    "应用解决方案": "Applications", "无人机高清图传": "UAV HD video", "应急自组网": "Emergency Mesh",
    "机器人视觉": "Robotics vision", "低延迟 FPV": "Low-latency FPV",
    "进入 ZYRO": "About ZYRO", "关于 ZYRO": "Company", "联系我们": "Contact",
    "产品资料下载": "Product downloads",
  };
  const label = (text: string) => english ? (enLabels[text] ?? text) : text;

  const closeMenus = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  return (
    <header className="site-header">
      <a className="brand" href={sitePath("/")} aria-label={english ? "ZYRO home" : "返回 ZYRO 首页"} onClick={closeMenus}>
        <span className="brand-mark">Z</span>
        <span>ZYRO</span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label={english ? (menuOpen ? "Close navigation" : "Open navigation") : (menuOpen ? "关闭导航菜单" : "打开导航菜单")}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label={english ? "Main navigation" : "主导航"}>
        <a className="nav-direct" href={sitePath("/#featured")} onClick={closeMenus}>{english ? "New" : "新品"}</a>
        {navGroups.map((group) => (
          <div
            className={openGroup === group.label ? "nav-group nav-group-open" : "nav-group"}
            key={group.label}
          >
            <div className="nav-group-heading">
              <a href={sitePath(group.href)} onClick={closeMenus}>{label(group.label)}</a>
              <button
                type="button"
                aria-label={english ? `Open ${label(group.label)} submenu` : `展开${group.label}子菜单`}
                aria-expanded={openGroup === group.label}
                onClick={() => setOpenGroup((current) => current === group.label ? null : group.label)}
              >
                <span>⌄</span>
              </button>
            </div>
            <div className="nav-dropdown">
              {group.items.map((item) => (
                <a
                  href={sitePath(item.href)}
                  target={item.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel={item.href.endsWith(".pdf") ? "noreferrer" : undefined}
                  onClick={closeMenus}
                  key={`${group.label}-${item.label}`}
                >
                  {label(item.label)}<span>→</span>
                </a>
              ))}
            </div>
          </div>
        ))}
        <a className="nav-cta" href={sitePath("/downloads/zyro-portfolio.pdf")} target="_blank" rel="noreferrer" onClick={closeMenus}>{english ? "Product portfolio" : "产品总览"}</a>
      </nav>
    </header>
  );
}
