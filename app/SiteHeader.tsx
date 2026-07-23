"use client";

import { useState } from "react";
import { sitePath } from "./site-path";

type NavGroup = {
  label: string;
  href: string;
  items: Array<{ label: string; href: string }>;
};

const navGroups: NavGroup[] = [
  {
    label: "产品",
    href: "/#products",
    items: [
      { label: "全部产品", href: "/#all-products" },
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
    label: "知识库",
    href: "/#knowledge",
    items: [
      { label: "分辨率、帧率与码率", href: "/articles/video-bitrate" },
      { label: "热成像基础", href: "/articles/thermal-imaging" },
      { label: "图传延迟", href: "/articles/latency" },
      { label: "Mesh 自组网", href: "/articles/mesh-networking" },
      { label: "无线链路预算", href: "/articles/link-budget" },
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

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const closeMenus = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  return (
    <header className="site-header">
      <a className="brand" href={sitePath("/")} aria-label="返回 ZYRO 首页" onClick={closeMenus}>
        <span className="brand-mark">Z</span>
        <span>ZYRO</span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "关闭导航菜单" : "打开导航菜单"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="主导航">
        <a className="nav-direct" href={sitePath("/#featured")} onClick={closeMenus}>新品</a>
        {navGroups.map((group) => (
          <div
            className={openGroup === group.label ? "nav-group nav-group-open" : "nav-group"}
            key={group.label}
          >
            <div className="nav-group-heading">
              <a href={sitePath(group.href)} onClick={closeMenus}>{group.label}</a>
              <button
                type="button"
                aria-label={`展开${group.label}子菜单`}
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
                  {item.label}<span>→</span>
                </a>
              ))}
            </div>
          </div>
        ))}
        <a className="nav-cta" href={sitePath("/downloads/zyro-portfolio.pdf")} target="_blank" rel="noreferrer" onClick={closeMenus}>产品总览</a>
      </nav>
    </header>
  );
}
