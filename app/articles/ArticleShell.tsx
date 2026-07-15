import type { ReactNode } from "react";

type ArticleShellProps = {
  category: string;
  title: string;
  deck: string;
  date: string;
  readingTime: string;
  children: ReactNode;
};

export function ArticleShell({ category, title, deck, date, readingTime, children }: ArticleShellProps) {
  return (
    <main className="article-page">
      <header className="article-nav">
        <a className="brand" href="/" aria-label="返回 ZYRO 首页"><span className="brand-mark">Z</span><span>ZYRO</span></a>
        <a href="/#knowledge">← 返回知识库</a>
      </header>
      <article>
        <header className="article-hero">
          <p className="article-kicker">{category} / ZYRO KNOWLEDGE</p>
          <h1>{title}</h1>
          <p className="article-deck">{deck}</p>
          <div className="article-meta"><span>{date}</span><span>{readingTime}</span><span>技术科普</span></div>
        </header>
        <div className="article-layout">
          <aside className="article-aside">
            <p>阅读提示</p>
            <span>本文中的产品数据来自 ZYRO 已发布产品资料。链路与成像表现会随环境、安装、镜头、配置和测试条件变化。</span>
          </aside>
          <div className="article-body">{children}</div>
        </div>
      </article>
      <section className="article-cta">
        <div><p>NEED A LINK PLAN?</p><h2>让我们一起评估你的任务链路。</h2></div>
        <a href="/#contact">联系 ZYRO <span>→</span></a>
      </section>
      <footer className="article-footer-nav"><span>© 2026 ZYRO</span><a href="/downloads/zyro-portfolio.pdf" target="_blank">下载产品总览 ↓</a></footer>
    </main>
  );
}
