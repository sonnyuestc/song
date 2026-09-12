import type { Metadata } from "next";
import { SiteHeader } from "../../SiteHeader";
import { sitePath } from "../../site-path";
import styles from "./pocket.module.css";

export const metadata: Metadata = {
  title: "ZYRO PocketLink｜未来产品",
  description: "PocketLink 未来产品：口袋相机与运动相机远端监看方向。最终规格、价格与上市时间尚未确定。",
};

const sourceImage = "/products/pocketlink-overview.png";

// Display regions of the supplied product artwork without altering the source.
function Artwork({ x, y, width, height, alt, eager = false }: { x: number; y: number; width: number; height: number; alt: string; eager?: boolean }) {
  return <div className={styles.artwork} style={{ aspectRatio: `${width} / ${height}` }}>
    <img src={sitePath(sourceImage)} alt={alt} loading={eager ? "eager" : "lazy"} style={{ width: `${1024 / width * 100}%`, maxWidth: "none", left: `${-x / width * 100}%`, top: `${-y / height * 100}%` }} />
  </div>;
}

const specs = [
  ["产品名称", "ZYRO PocketLink"],
  ["产品版本", "Mini / Standard，均为 TX + RX 成对系统"],
  ["连接方式", "相机 Wi-Fi → PocketLink TX → 无线链路 → PocketLink RX → HDMI"],
  ["视频处理", "TX 转发相机原始视频流，无二次编码；RX 解码输出"],
  ["无线链路", "Sub-2.4G（资料标注，具体频点与区域版本待确认）"],
  ["规划距离目标", "5+ km，实际表现取决于环境、天线及安装条件"],
  ["端到端延迟", "约 100 ms，概念图目标值，待实测验证"],
  ["测试视频流", "约 3 Mbps；不代表最高支持码率"],
  ["交互方式", "2 英寸触摸屏，无实体按键设计"],
  ["屏幕信息", "频道、配对、链路状态、相机状态、电量与设置"],
  ["机身尺寸", "95 × 52 × 22 mm（资料示意，天线尺寸另计）"],
  ["Mini 供电", "USB-C 外接供电，无内置电池"],
  ["Standard 供电", "内置电池；资料标称续航约 4–6 小时"],
];

export default function PocketLinkPage() {
  return <main className={styles.page}>
    <SiteHeader />
    <nav className={styles.productNav} aria-label="PocketLink 页面导航">
      <a href="#overview" className={styles.productName}>PocketLink</a>
      <div><a href="#features">产品亮点</a><a href="#versions">规划版本</a><a href="#specs">规划参数</a><a href="#contact" className={styles.navCta}>咨询产品 ↗</a></div>
    </nav>

    <div style={{padding:"28px 6%",background:"#e0f1fb",color:"#143e5c",lineHeight:1.8}}><strong>未来产品 · 尚未上市</strong><p>本页为产品方向与概念图展示。外观、功能、距离、延迟、尺寸及版本配置均待验证和最终确认；图片内的价格与认证字样不构成正式报价、认证证明或实测结论。</p></div>
    <section id="overview" className={styles.hero}>
      <Artwork x={0} y={0} width={1024} height={368} alt="ZYRO PocketLink TX 与 RX 产品效果图，置于山湖户外拍摄场景中" eager />
      <div className={styles.heroCaption}><span>POCKET & ACTION CAMERA WIRELESS VIDEO</span><h1>ZYRO PocketLink</h1><p>走得更远，让创作自在发生。</p></div>
    </section>

    <section className={styles.metrics} aria-label="核心产品信息">
      <div><strong>5+<span> km</span></strong><p>规划距离目标 · 待验证</p></div>
      <div><strong>Original</strong><p>原始视频流转发 · 规划方向</p></div>
      <div><strong>~100<span> ms</span></strong><p>规划延迟目标 · 待验证</p></div>
      <div><strong>2<span> 英寸</span></strong><p>触摸屏 · 状态直观可见</p></div>
    </section>

    <section id="features" className={styles.feature}>
      <div className={styles.sectionIntro}><span>BEYOND CAMERA WI-FI</span><h2>把监看距离，<br />延伸到创作之外。</h2><p>口袋相机和运动相机负责记录，PocketLink 负责把实时画面带回远端。让拍摄机位与监看位置自由分开，适应山野拍摄、移动机位和多人协作。</p></div>
      <div className={styles.wideArt}><Artwork x={359} y={371} width={665} height={239} alt="PocketLink 户外无线链路应用示意，连接拍摄机位与远端监视器" /></div>
      <p className={styles.note}>5+ km 为概念图中的规划目标，尚不作为实测结论；实际距离随遮挡、射频环境、天线和设备配置变化。</p>
    </section>

    <section className={`${styles.feature} ${styles.soft}`}>
      <div className={styles.sectionIntro}><span>ORIGINAL IN. ORIGINAL OUT.</span><h2>保留原始视频流，<br />少一次编码。</h2><p>发射端接收相机输出的视频流并直接转发，不进行二次解码与重新编码。接收端完成解码，再通过 HDMI 将画面送至监视器或后续采集设备。</p></div>
      <div className={styles.flow} aria-label="视频传输流程">
        {[["01", "口袋 / 运动相机", "Wi-Fi 视频流"], ["02", "PocketLink TX", "原始视频流转发"], ["03", "PocketLink RX", "无线接收与解码"], ["04", "监视器 / 采集设备", "HDMI 输出"]].map(([n, title, text]) => <div key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></div>)}
      </div>
      <p className={styles.note}>相机型号、视频协议、分辨率和帧率的兼容范围，请在后续适配验证中确认。</p>
    </section>

    <section className={styles.split}>
      <div className={styles.splitCopy}><span>SEE IT AS IT HAPPENS</span><h2>约 <em>100 ms</em><br />让反馈跟上现场。</h2><p>面向实时监看、直播采集与动态拍摄，帮助创作者在远端掌握构图和现场变化。</p><small>当前概念资料记录约 3 Mbps 视频流、约 100 ms 端到端延迟。不同相机、输出模式与显示设备会影响最终延迟。</small></div>
      <Artwork x={638} y={615} width={386} height={213} alt="户外运动拍摄的远端监看示意与约 100 ms 延迟说明" />
    </section>

    <section className={`${styles.feature} ${styles.soft}`}>
      <div className={styles.sectionIntro}><span>LESS TO CARRY. MORE TO CREATE.</span><h2>简洁机身，直观操控。</h2><p>2 英寸触摸屏集中呈现连接状态与常用设置。查看频道、完成配对、检查链路，让设备调整融入拍摄节奏。</p></div>
      <div className={styles.designGrid}>
        <div><Artwork x={18} y={886} width={304} height={236} alt="PocketLink 正面、侧面与背面设计，示意尺寸 95 × 52 × 22 mm" /><h3>随行机身</h3><p>95 × 52 × 22 mm 机身示意尺寸，USB-C 接口，便于融入轻量拍摄装备。</p></div>
        <div><Artwork x={338} y={833} width={289} height={290} alt="PocketLink 触摸屏产品效果图，显示频道、配对及链路状态" /><h3>触屏即控</h3><p>频道、配对、链路、相机、电量和设置，集中在同一块屏幕上。</p></div>
      </div>
    </section>

    <section id="versions" className={styles.feature}>
      <div className={styles.sectionIntro}><span>PLANNED VERSIONS</span><h2>两种供电方式，<br />同样的创作自由。</h2><p>Mini 与 Standard 为规划版本，配置尚未冻结。</p></div>
      <div className={styles.versions}>
        <article><span>轻装集成</span><h3>PocketLink Mini</h3><Artwork x={715} y={926} width={70} height={78} alt="PocketLink Mini TX 与 RX 套装效果图" /><p className={styles.price}>待定 <small>/ 规划版本</small></p><ul><li>USB-C 外接供电，无内置电池</li><li>轻量便携，方便与拍摄装备集成</li><li>适合固定机位、车载及外接电源方案</li></ul><a className={styles.button} href="mailto:song_uestc@126.com?subject=PocketLink%20Mini%20Inquiry">咨询 Mini ↗</a></article>
        <article><span>户外随行</span><h3>PocketLink Standard</h3><Artwork x={903} y={926} width={73} height={78} alt="PocketLink Standard TX 与 RX 套装效果图" /><p className={styles.price}>待定 <small>/ 规划版本</small></p><ul><li>内置电池，适合移动拍摄</li><li>资料标称续航约 4–6 小时</li><li>支持电量显示，减少外接供电负担</li></ul><a className={styles.button} href="mailto:song_uestc@126.com?subject=PocketLink%20Standard%20Inquiry">咨询 Standard ↗</a></article>
      </div>
      <p className={styles.note}>价格为所提供资料中的美元成对参考价，尚未上市，最终价格及套装配置待定。续航随使用条件变化。</p>
    </section>

    <section className={`${styles.feature} ${styles.soft}`}>
      <div className={styles.sectionIntro}><span>MADE FOR REAL CREATORS</span><h2>从山野，到每一个现场。</h2><p>户外拍摄、直播、车载运动、多机位制作与旅行记录，让远端监看成为创作的一部分。</p></div>
      <div className={styles.scenes}>{[[28, "户外拍摄", "探索更多机位"], [151, "现场活动", "连接直播采集"], [274, "车载与运动", "掌握动态画面"], [393, "多机位制作", "协同查看现场"], [516, "旅行记录", "轻装随行"]].map(([x, title, copy]) => <article key={title}><Artwork x={Number(x)} y={1158} width={116} height={91} alt={String(title) + "应用场景示意"} /><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section id="specs" className={styles.feature}>
      <div className={styles.sectionIntro}><span>SPECIFICATIONS</span><h2>规划参数</h2><p>了解连接、显示与供电方式。</p></div>
      <dl className={styles.specs}>{specs.map(([name, value]) => <div key={name}><dt>{name}</dt><dd>{value}</dd></div>)}</dl>
      <p className={styles.note}>本页依据所提供的 PocketLink 产品概念与概念资料整理。产品效果图、尺寸与配置以最终确认版本为准。</p>
      <div className={styles.box}><div><span>IN THE BOX</span><h3>一套设备，开启连接。</h3><p>TX ×1 · RX ×1 · 天线 ×4<br />USB-C 线 ×2 · 安装支架 ×2 · 快速指南</p><a href={sitePath(sourceImage)} download="ZYRO-PocketLink.png">下载产品概览 ↓</a></div><Artwork x={29} y={1344} width={312} height={117} alt="PocketLink 包装清单示意：发射端、接收端、四根天线、USB-C 线、支架和快速指南" /></div>
    </section>

    <section id="contact" className={styles.contact}><span>CREATE FURTHER, TOGETHER.</span><h2>让下一个机位，<br />不受距离束缚。</h2><p>提交应用需求，了解适配验证与研发进展。</p><div><a className={styles.button} href="mailto:song_uestc@126.com?subject=ZYRO%20PocketLink%20Inquiry">邮件咨询 ↗</a><a href="https://wa.me/8613480720937" target="_blank" rel="noreferrer">WhatsApp ↗</a></div><p className={styles.contactDetails}>song_uestc@126.com · +86 134 8072 0937</p></section>
    <div className={styles.footer}><a href={sitePath("/")}>ZYRO</a><span>Wireless Imaging & Data Link</span><a href="https://www.zyrolink.cn">www.zyrolink.cn ↗</a></div>
  </main>;
}
