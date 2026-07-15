"use client";

import { useMemo, useState } from "react";

const categories = ["全部产品", "数字图传", "模拟图传", "网络通信", "热成像"];

const productShowcases = [
  {
    title: "ZYRO Digital HD",
    subtitle: "数字高清系统，稳定低延迟",
    image: "/showcase/digital-hd-v1.png",
    href: "/downloads/zyro-air.pdf",
  },
  {
    title: "ZYRO Link & Mesh",
    subtitle: "数据链路与自组网，连接复杂现场",
    image: "/showcase/network-v1.png",
    href: "/downloads/zyro-mesh.pdf",
  },
  {
    title: "ZYRO Analog FPV",
    subtitle: "直接反馈，高功率宽频覆盖",
    image: "/showcase/analog-fpv-v1.png",
    href: "/downloads/zyro-air-analog.pdf",
  },
  {
    title: "ZYRO Thermal",
    subtitle: "轻量红外感知，全天候视觉",
    image: "/showcase/thermal-v1.png",
    href: "/downloads/zyro-thermal.pdf",
  },
];

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
    tag: "热成像基础",
    date: "本周更新",
    title: "没有可见光，热成像为什么仍能看见？",
    excerpt: "从 8–14 μm 热辐射到 NETD、红外分辨率和镜头视场，读懂热成像选型中的四个关键概念。",
    read: "8 分钟阅读",
    href: "/articles/thermal-imaging",
  },
  {
    tag: "链路科普",
    date: "07.13",
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
          <a href="#featured" onClick={() => setMenuOpen(false)}>新品</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>产品</a>
          <a href="#solutions" onClick={() => setMenuOpen(false)}>应用解决方案</a>
          <a href="#knowledge" onClick={() => setMenuOpen(false)}>知识库</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>进入 ZYRO</a>
          <a className="nav-cta" href="/downloads/zyro-portfolio.pdf" target="_blank" onClick={() => setMenuOpen(false)}>产品总览</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">超远范围数字高清图传系统</p>
          <h1>ZYRO AIR</h1>
          <h2>轻装上阵，稳定抵达</h2>
          <p className="hero-lead">4K30 · 1080P90 · H.265<br />为无人机与移动平台打造的一体化数字图传。</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/downloads/zyro-air.pdf" target="_blank">了解详情 <b>→</b></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="ZYRO Air 数字图传产品展示">
          <img src="/showcase/hero-air-v1.png" alt="ZYRO Air 一体化空中数字图传" />
        </div>
        <div className="hero-pagination"><span>01</span><i /><span>03</span></div>
      </section>

      <section className="ticker" aria-label="产品系列导航">
        <a href="#products">数字高清系统</a><a href="#products">模拟 FPV</a><a href="#products">Mesh 自组网</a><a href="#products">热成像模组</a><a href="#knowledge">技术知识中心</a>
      </section>

      <section className="featured-product" id="featured">
        <div className="featured-media"><img src="/showcase/featured-c403-v1.png" alt="ZYRO C403 Max 数字图传套装" /></div>
        <div className="featured-copy"><p>NEW / DIGITAL HD SYSTEM</p><h2>ZYRO<br />C403 MAX</h2><h3>1080P60 高清图传 · 3–7 GHz 多频段</h3><a href="/downloads/zyro-c403-max.pdf" target="_blank">了解详情 <span>→</span></a></div>
      </section>

      <section className="section products-section" id="products">
        <div className="section-heading">
          <div><p className="section-index">PRODUCT ECOSYSTEM</p><h2>多元无线视觉新装备</h2></div>
          <p>从高清图传到自组网和热成像，探索更多无人系统连接方式。</p>
        </div>
        <div className="showcase-grid">
          {productShowcases.map((showcase) => (
            <a className="showcase-card" href={showcase.href} target="_blank" rel="noreferrer" key={showcase.title}>
              <img src={showcase.image} alt={`${showcase.title} 产品系列场景展示`} />
              <div className="showcase-copy">
                <h3>{showcase.title}</h3>
                <p>{showcase.subtitle}</p>
                <span>了解详情　›</span>
              </div>
            </a>
          ))}
        </div>
        <div className="all-products-heading" id="all-products"><span>ALL PRODUCTS</span><h3>全部产品</h3></div>
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

      <section className="solutions-section" id="solutions">
        <div className="solutions-heading"><p className="section-index">APPLICATION SOLUTIONS</p><h2>面向真实任务场景</h2><p>让图像、控制与传感数据穿过距离和遮挡，稳定回到决策端。</p></div>
        <div className="solution-grid">
          <article><img src="/products/air.jpg" alt="无人机高清图传" /><div><span>01</span><h3>无人机高清图传</h3><p>高帧率画面与双向数据链路，适配 FPV、巡检和远程操控。</p></div></article>
          <article><img src="/products/mesh.jpg" alt="应急自组网" /><div><span>02</span><h3>应急自组网</h3><p>节点自动入网和多跳中继，为复杂现场快速补充无线覆盖。</p></div></article>
          <article><img src="/products/thermal.jpg" alt="热成像感知" /><div><span>03</span><h3>热成像感知</h3><p>轻量非制冷红外模组，服务夜间搜索、巡检和机器人视觉。</p></div></article>
          <article><img src="/products/cam.jpg" alt="低延迟 FPV" /><div><span>04</span><h3>低延迟 FPV</h3><p>从相机到高功率 VTX，构建反馈直接的模拟视频链路。</p></div></article>
        </div>
      </section>

      <section className="knowledge-section" id="knowledge">
        <div className="knowledge-intro">
          <p className="section-index light">ZYRO KNOWLEDGE</p>
          <h2>读懂无线，<br />再选择设备。</h2>
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

      <section className="support-grid" aria-label="服务与支持">
        <a href="#products"><span>01</span><h3>帮您选型</h3><p>按任务距离、清晰度、延迟和组网方式找到合适产品。</p><b>→</b></a>
        <a href="#knowledge"><span>02</span><h3>技术知识</h3><p>从基础原理到测试方法，持续更新可复用的工程内容。</p><b>→</b></a>
        <a href="/downloads/zyro-portfolio.pdf" target="_blank"><span>03</span><h3>下载中心</h3><p>获取产品总览、用户手册与频段版本资料。</p><b>↓</b></a>
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
        <div className="footer-intro"><a className="brand footer-brand" href="#top"><span className="brand-mark">Z</span><span>ZYRO</span></a><p>Beyond Distance,<br />In Real Time.</p></div>
        <div className="footer-column"><b>产品分类</b><a href="#products">数字图传</a><a href="#products">模拟图传</a><a href="#products">Mesh 自组网</a><a href="#products">热成像</a></div>
        <div className="footer-column"><b>解决方案</b><a href="#solutions">无人机图传</a><a href="#solutions">应急通信</a><a href="#solutions">机器人视觉</a><a href="#solutions">分布式视频</a></div>
        <div className="footer-column"><b>服务与支持</b><a href="#knowledge">技术知识</a><a href="/downloads/zyro-portfolio.pdf" target="_blank">下载中心</a><a href="#contact">联系我们</a></div>
        <div className="footer-bottom"><span>© 2026 ZYRO</span><span>无线图像与数据链路产品展示</span></div>
      </footer>
    </main>
  );
}
