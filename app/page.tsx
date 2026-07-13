"use client";

import { useMemo, useState } from "react";

const categories = ["全部产品", "核心系列", "专业系列", "配套方案"];

const products = [
  {
    name: "旗舰产品 A",
    category: "核心系列",
    label: "核心系列",
    description: "面向高要求场景的主力产品，兼顾性能、稳定性与易用体验。",
    accent: "cobalt",
  },
  {
    name: "专业产品 B",
    category: "专业系列",
    label: "专业系列",
    description: "为专业用户设计的进阶方案，适合持续、高强度的应用需求。",
    accent: "mint",
  },
  {
    name: "轻量产品 C",
    category: "核心系列",
    label: "轻量之选",
    description: "用更轻巧的形态保留关键能力，适合日常与灵活部署。",
    accent: "sun",
  },
  {
    name: "一体化方案 D",
    category: "配套方案",
    label: "完整方案",
    description: "从产品到配套服务的一体化组合，减少选型与落地成本。",
    accent: "coral",
  },
];

const articles = [
  {
    tag: "选购指南",
    date: "本周更新",
    title: "如何根据真实需求，选择适合自己的产品？",
    excerpt: "从使用场景、关键指标到长期成本，用一套简单的方法避开参数焦虑。",
    read: "6 分钟阅读",
  },
  {
    tag: "原理科普",
    date: "07.06",
    title: "看懂核心参数：哪些数字真正影响使用体验",
    excerpt: "拆解常见参数背后的含义，以及它们在实际使用中如何相互作用。",
    read: "8 分钟阅读",
  },
  {
    tag: "使用技巧",
    date: "06.29",
    title: "做好这 5 件事，让产品长期保持理想状态",
    excerpt: "一份容易执行的日常维护清单，帮你延长使用寿命、减少意外损耗。",
    read: "5 分钟阅读",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("全部产品");
  const [menuOpen, setMenuOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const filteredProducts = useMemo(
    () =>
      activeCategory === "全部产品"
        ? products
        : products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark">P</span>
          <span>品牌名</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="打开导航菜单"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="主导航">
          <a href="#products" onClick={() => setMenuOpen(false)}>产品</a>
          <a href="#knowledge" onClick={() => setMenuOpen(false)}>知识库</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>关于我们</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>联系我们</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> 让好产品更容易被理解</p>
          <h1>了解产品，<br />也了解<span>为什么。</span></h1>
          <p className="hero-lead">
            不只展示产品，更用持续更新的专业内容，帮你看懂原理、选对方案、用好每一次体验。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">浏览全部产品 <b>↗</b></a>
            <a className="text-link" href="#knowledge">阅读最新科普 <span>→</span></a>
          </div>
          <div className="hero-proof">
            <div><strong>4</strong><span>大产品方向</span></div>
            <div><strong>52</strong><span>周持续更新</span></div>
            <div><strong>100%</strong><span>真实知识分享</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="品牌产品视觉展示">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="product-object">
            <div className="object-top" />
            <div className="object-face"><span>核心<br />产品</span></div>
          </div>
          <div className="float-card float-card-one"><span>01</span><p>精心设计<br /><b>可靠品质</b></p></div>
          <div className="float-card float-card-two"><span>NEW</span><p>本周科普<br /><b>已更新</b></p></div>
          <p className="visual-note">把复杂的技术，变成清晰的选择</p>
        </div>
      </section>

      <section className="ticker" aria-label="网站特色">
        <span>产品全景</span><i>✦</i><span>参数解读</span><i>✦</i><span>选购指南</span><i>✦</i><span>使用技巧</span><i>✦</i><span>每周新知</span>
      </section>

      <section className="section products-section" id="products">
        <div className="section-heading">
          <div><p className="section-index">01 / PRODUCTS</p><h2>找到适合你的产品</h2></div>
          <p>从核心产品到完整配套方案，每一项都围绕真实使用场景设计。</p>
        </div>
        <div className="filters" role="group" aria-label="产品分类筛选">
          {categories.map((category) => (
            <button
              type="button"
              className={activeCategory === category ? "filter-active" : ""}
              onClick={() => setActiveCategory(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className={`product-art ${product.accent}`}>
                <span className="product-number">0{index + 1}</span>
                <div className="mini-product"><i /><b /></div>
                <span className="product-pill">{product.label}</span>
              </div>
              <div className="product-info">
                <p>{product.category}</p>
                <h3>{product.name}</h3>
                <span>{product.description}</span>
                <a href="#contact" aria-label={`了解 ${product.name}`}>了解产品 <b>↗</b></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="knowledge-section" id="knowledge">
        <div className="knowledge-intro">
          <p className="section-index light">02 / KNOWLEDGE</p>
          <h2>每周一篇，<br />把知识讲明白。</h2>
          <p>拒绝堆砌术语。我们从真实问题出发，用易懂、可靠的内容，分享产品背后的原理与方法。</p>
          <div className="update-chip"><i /> 每周三更新</div>
        </div>
        <div className="article-list">
          {articles.map((article, index) => (
            <a className="article-card" href="#contact" key={article.title}>
              <span className="article-no">0{index + 1}</span>
              <div>
                <p><b>{article.tag}</b><span>{article.date}</span></p>
                <h3>{article.title}</h3>
                <div className="article-footer"><span>{article.excerpt}</span><small>{article.read}　↗</small></div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-quote">“</div>
        <div>
          <p className="section-index">03 / OUR BELIEF</p>
          <h2>好的产品，经得起了解。</h2>
          <p>我们相信，真正可靠的品牌不该只给出结论，还应该解释依据。透明地介绍产品，认真地分享知识，让每一次选择都更有把握。</p>
        </div>
        <div className="about-stamp"><span>透明</span><b>·</b><span>专业</span><b>·</b><span>长期</span></div>
      </section>

      <section className="newsletter" id="contact">
        <div>
          <p className="section-index light">STAY CURIOUS</p>
          <h2>{subscribed ? "已为你登记更新提醒" : "让每周的新知识，准时抵达。"}</h2>
        </div>
        {subscribed ? (
          <p className="success-note">感谢关注。正式接入邮件服务后，你将在每周文章发布时收到通知。</p>
        ) : (
          <form onSubmit={(event) => { event.preventDefault(); setSubscribed(true); }}>
            <label className="sr-only" htmlFor="email">邮箱地址</label>
            <input id="email" type="email" required placeholder="输入你的邮箱地址" />
            <button type="submit">订阅每周新知 <span>→</span></button>
          </form>
        )}
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">P</span><span>品牌名</span></a>
        <p>产品与知识，值得被认真对待。</p>
        <div><a href="#products">产品</a><a href="#knowledge">知识库</a><a href="#about">关于</a></div>
        <span>© 2026 品牌名</span>
      </footer>
    </main>
  );
}
