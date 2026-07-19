import type { ReactNode } from "react";
import { SiteHeader } from "../SiteHeader";

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
      <SiteHeader />
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
        <a href="mailto:song_uestc@126.com">发送邮件 <span>→</span></a>
      </section>
      <footer className="article-footer-nav">
        <span>© 2026 ZYRO</span>
        <a href="mailto:song_uestc@126.com">song_uestc@126.com</a>
        <a href="https://wa.me/8613480720937" target="_blank" rel="noreferrer">WhatsApp: +86 134 8072 0937</a>
        <a href="https://www.zyrolink.cn" target="_blank" rel="noreferrer">www.zyrolink.cn</a>
      </footer>
    </main>
  );
}
