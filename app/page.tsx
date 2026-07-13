"use client";

import { useMemo, useState } from "react";

const categories = ["全部产品", "数字图传", "模拟图传", "网络通信", "热成像"];

const products = [
  {
    name: "ZYRO Air",
    category: "数字图传",
    label: "4K30 · 1080P90",
    description: "相机、H.265 编码与无线传输一体化，约 30 g，面向无人机与 FPV 空中平台。",
    image: "/products/air.jpg",
    specs: ["5.18-5.845 GHz", "29 dBm", "2S-6S"],
    manual: "/downloads/zyro-air.pdf",
  },
  {
    name: "ZYRO Link",
    category: "网络通信",
    label: "低至 2 ms",
    description: "面向视频与数据回传的嵌入式链路模块，支持点对点、点对多点与中继部署。",
    image: "/products/link.jpg",
    specs: ["最高 100 Mbps", "典型空地 16 km", "WPA2 AES"],
    manual: "/downloads/zyro-link.pdf",
  },
  {
    name: "ZYRO Mesh",
    category: "网络通信",
    label: "自组网 · 多跳",
    description: "无主从节点的双向无线视频网络，支持自动入网、远程视频接入和中继扩展。",
    image: "/products/mesh.jpg",
    specs: ["AES256 / DES", "最高 2 跳", "Web 可视化配置"],
    manual: "/downloads/zyro-mesh.pdf",
  },
  {
    name: "ZYRO C403 Max",
    category: "数字图传",
    label: "3-7 GHz",
    description: "VTX 与 RBox 地面接收机套装，支持可见光、红外相机和 Betaflight / INAV OSD。",
    image: "/products/c403.jpg",
    specs: ["1080p60", "36 信道", "22.41 g VTX"],
    manual: "/downloads/zyro-c403-max.pdf",
  },
  {
    name: "ZYRO Air Analog",
    category: "模拟图传",
    label: "5.8 GHz · 2.5 W",
    description: "为低延迟 FPV 场景设计的轻量高功率模拟 VTX，支持 TRAMP OSD 远程调参。",
    image: "/products/air-analog.jpg",
    specs: ["48CH", "7-36 V", "15.6 g"],
    manual: "/downloads/zyro-air-analog.pdf",
  },
  {
    name: "ZYRO Cam",
    category: "模拟图传",
    label: "35 ms · 1800 TVL",
    description: "19 × 19 mm 低延迟模拟 FPV 相机，具备 Super WDR 与超低照度夜视能力。",
    image: "/products/cam.jpg",
    specs: ["0.00001 Lux", "125° FOV", "9 g"],
    manual: "/downloads/zyro-cam.pdf",
  },
  {
    name: "ZYRO Thermal Series",
    category: "热成像",
    label: "12 μm VOx",
    description: "256、384、640 三档分辨率的非制冷红外模组，面向无人机载荷、机器人与智能视觉。",
    image: "/products/thermal.jpg",
    specs: ["最高 640×512", "NETD ≤40 mK", "低至 <7 g"],
    manual: "/downloads/zyro-thermal.pdf",
  },
  {
    name: "ZYRO 3W VTX Series",
    category: "模拟图传",
    label: "4.9-8.2 GHz",
    description: "覆盖三个宽频版本的高功率模拟发射模块，支持 25 mW、1 W、2 W、3 W 四档输出。",
    image: "/products/tx3w.jpg",
    specs: ["64 信道/版本", "8-36 V", "IRC Tramp"],
    manual: "/downloads/zyro-tx-49-61.pdf",
    manuals: [
      ["4.9-6.1 GHz", "/downloads/zyro-tx-49-61.pdf"],
      ["6.1-7.2 GHz", "/downloads/zyro-tx-61-72.pdf"],
      ["7.1-8.2 GHz", "/downloads/zyro-tx-71-82.pdf"],
    ],
  },
  {
    name: "ZYRO C401",
    category: "数字图传",
    label: "Link Series",
    description: "面向专业 FPV 与移动视频链路的数字图传套装，配套摄像头和双天线系统。",
    image: "/products/c401.jpg",
    specs: ["VTX 套装", "双天线", "FPV 应用"],
    manual: "/downloads/zyro-c401.pdf",
  },
];

const articles = [
  {
    tag: "链路科普",
    date: "本周更新",
    title: "2 ms、35 ms 与一帧画面：图传延迟到底从哪里来？",
    excerpt: "从无线往返延迟、相机处理到编码与显示，拆解实时视频链路中的每一段时间。",
    read: "7 分钟阅读",
    href: "/articles/latency",
  },
  {
    tag: "网络原理",
    date: "07.06",
    title: "Mesh 自组网为什么适合无人系统与应急现场？",
    excerpt: "没有固定主从、节点自动入网、多跳扩大覆盖：用任务场景看懂 Mesh 的价值与边界。",
    read: "8 分钟阅读",
    href: "/articles/mesh-networking",
  },
  {
    tag: "射频基础",
    date: "06.29",
    title: "发射功率不等于传输距离：链路预算的四个关键变量",
    excerpt: "频率、天线增益、接收灵敏度与环境共同决定覆盖，功率只是其中一环。",
    read: "6 分钟阅读",
    href: "/articles/link-budget",
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
          <span className="brand-mark">Z</span>
          <span>ZYRO</span>
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
          <p className="eyebrow"><span /> Wireless imaging & data link</p>
          <h1>超越距离，<br />保持<span>实时。</span></h1>
          <p className="hero-lead">
            面向无人机、机器人与复杂现场的无线图像和数据链路产品。从数字图传到 Mesh 自组网，让任务画面与控制数据稳定抵达。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">浏览全部产品 <b>↗</b></a>
            <a className="text-link" href="#knowledge">阅读最新科普 <span>→</span></a>
          </div>
          <div className="hero-proof">
            <div><strong>3-8.2</strong><span>GHz 产品覆盖</span></div>
            <div><strong>2 ms</strong><span>典型链路延迟</span></div>
            <div><strong>16 km</strong><span>典型空地链路</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="ZYRO Air 数字图传产品展示">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-product-photo"><img src="/products/air.jpg" alt="ZYRO Air 一体化空中数字图传" /></div>
          <div className="float-card float-card-one"><span>4K</span><p>最高支持<br /><b>3840×2160 30fps</b></p></div>
          <div className="float-card float-card-two"><span>30g</span><p>相机 · 编码<br /><b>无线传输一体化</b></p></div>
          <p className="visual-note">Beyond distance, in real time</p>
        </div>
      </section>

      <section className="ticker" aria-label="网站特色">
        <span>数字图传</span><i>✦</i><span>模拟 FPV</span><i>✦</i><span>Mesh 自组网</span><i>✦</i><span>热成像模组</span><i>✦</i><span>每周技术新知</span>
      </section>

      <section className="section products-section" id="products">
        <div className="section-heading">
          <div><p className="section-index">01 / PRODUCTS</p><h2>完整无线视觉产品矩阵</h2></div>
          <p>覆盖空中端、嵌入式链路、地面接收、Mesh 网络、模拟视频与红外感知。</p>
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
              <div className="product-art">
                <span className="product-number">0{index + 1}</span>
                <img src={product.image} alt={product.name} />
                <span className="product-pill">{product.label}</span>
              </div>
              <div className="product-info">
                <p>{product.category}</p>
                <h3>{product.name}</h3>
                <span>{product.description}</span>
                <div className="spec-chips">{product.specs.map((spec) => <small key={spec}>{spec}</small>)}</div>
                <a href={product.manual} target="_blank" rel="noreferrer" aria-label={`下载 ${product.name} 产品资料`}>下载产品资料 <b>↓</b></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="knowledge-section" id="knowledge">
        <div className="knowledge-intro">
          <p className="section-index light">02 / KNOWLEDGE</p>
          <h2>每周一篇，<br />把无线技术讲明白。</h2>
          <p>从真实链路问题出发，讲清延迟、频率、功率、Mesh、编码与热成像背后的工程逻辑。</p>
          <div className="update-chip"><i /> 每周三更新</div>
        </div>
        <div className="article-list">
          {articles.map((article, index) => (
            <a className="article-card" href={article.href} key={article.title}>
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
          <h2>为实时任务，建立可靠连接。</h2>
          <p>ZYRO 专注于无线图像与数据链路。我们的产品服务于无人机、机器人、无人车辆、应急响应和分布式视频系统，并通过清晰的技术资料帮助客户完成选型与集成。</p>
        </div>
        <div className="about-stamp"><span>透明</span><b>·</b><span>专业</span><b>·</b><span>长期</span></div>
      </section>

      <section className="newsletter" id="contact">
        <div>
          <p className="section-index light">STAY CURIOUS</p>
          <h2>{subscribed ? "已为你登记更新提醒" : "获取 ZYRO 产品与技术更新。"}</h2>
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
        <a className="brand footer-brand" href="#top"><span className="brand-mark">Z</span><span>ZYRO</span></a>
        <p>Beyond Distance, In Real Time.</p>
        <div><a href="#products">产品</a><a href="#knowledge">知识库</a><a href="#about">关于</a></div>
        <span>© 2026 ZYRO</span>
      </footer>
    </main>
  );
}
