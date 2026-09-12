import { SiteHeader } from "../../../SiteHeader";
import { sitePath } from "../../../site-path";
import styles from "./tracet.module.css";
export const metadata={title:"ZYRO_AI_TRACET｜CV610 AI 视觉跟踪模组 · 未来产品",description:"CV610 AI 视觉方案、识别与跟踪功能、四种规划版本及接口规格。未来产品，最终配置待确认。"};
const artwork="/products/zyro-ai-tracet-overview.png";
function Artwork({x,y,width,height,alt,eager=false}:{x:number;y:number;width:number;height:number;alt:string;eager?:boolean}){return <div className={styles.artwork} style={{aspectRatio:`${width} / ${height}`}}><img src={sitePath(artwork)} alt={alt} loading={eager?"eager":"lazy"} style={{width:`${941/width*100}%`,maxWidth:"none",left:`${-x/width*100}%`,top:`${-y/height*100}%`}}/></div>;}
const features=[
  ["多目标识别","规划支持人、车、无人机等目标的检测与筛选。"],
  ["智能十字星吸附","十字星靠近目标后自动吸附并锁定，简化目标选择。"],
  ["动态记忆锁定","目标短时遮挡后，规划通过历史轨迹辅助重新捕获。"],
  ["目标丢失二次锁定","失锁后在搜索区域内再次定位目标，衔接跟踪过程。"],
  ["画中画显示","规划支持广角与长焦双视角协同显示，兼顾场景与细节。"],
  ["热成像扩展","可选 USB 热成像模块，规划兼顾昼夜观察需求。"],
];
const versions=[
  {name:"S",lens:"单可见光 · 4 mm",copy:"轻量灵活，面向常规观察。",x:82,y:1134,width:110,height:77},
  {name:"D-Lite",lens:"双可见光 · 4 mm + 12 mm",copy:"远近结合，兼顾广角与长焦。",x:276,y:1136,width:164,height:79},
  {name:"ST",lens:"单可见光 + 热成像",copy:"双模态观察，面向昼夜场景。",x:500,y:1135,width:161,height:80},
  {name:"DT-Lite",lens:"双可见光 + 热成像",copy:"多视角组合，覆盖更多观察需求。",x:710,y:1134,width:179,height:82},
];
const specs=[["主控平台","Hi3516CV610"],["NPU 算力","1 TOPS（概念资料标注）"],["视频输出","1920 × 1080 @ 30 fps"],["AI 输入","640 × 640"],["检测帧率","10–15 fps"],["跟踪帧率","30 fps"],["输入电压","9–16 V"],["安装孔位","25.5 × 25.5 mm"],["接口 / 协议","CRSF / MAVLink / USB Thermal"]];
export default function AiTracet(){return <><SiteHeader/><main className={styles.page}>
  <nav className={styles.subnav} aria-label="产品导航"><a href={sitePath("/wiki/future-products/")}>← 未来产品</a><div><a href="#architecture">产品架构</a><a href="#features">功能亮点</a><a href="#versions">产品版本</a><a href="#specs">规划规格</a></div></nav>
  <section className={styles.hero}><div className={styles.heroCopy}><span className={styles.eyebrow}>FUTURE PRODUCT / AI VISION</span><h1>ZYRO_AI_TRACET</h1><h2><em>CV610</em> AI 视觉跟踪模组</h2><p>基于 Hi3516CV610 的无人机智能识别与跟踪方案</p><div className={styles.keywords}>智能识别　/　精准跟踪　/　轻量高效　/　开放兼容</div></div><Artwork x={0} y={137} width={941} height={275} alt="CV610 AI 处理板、可见光和热成像镜头，以及无人机观察场景概念图" eager/><div className={styles.metrics}>{[["Hi3516CV610","主控平台"],["1 TOPS","NPU 规划算力"],["1080P30","规划视频输出"],["CRSF / MAVLink","协议对接方向"]].map(([v,l])=><div key={l}><strong>{v}</strong><span>{l}</span></div>)}</div></section>
  <div className={styles.status}><strong>未来产品 · 尚未上市</strong><p>本页依据所提供的产品概念图整理。功能、外观及规格为规划信息，最终版本、适配范围与实测表现待确认；并非性能保证或上市承诺。</p></div>
  <section id="architecture" className={styles.section}><div className={styles.sectionTitle}><div><span className={styles.eyebrow}>01 / SYSTEM ARCHITECTURE</span><h2>从感知，到认知，再到行动。</h2></div><p>检测、锁定、跟踪与画中画显示一体化的规划架构。</p></div><div className={styles.architecture}>{[
    {title:"可见光 / 热成像摄像头",copy:"广角 · 长焦 · 热成像",x:48,y:610,width:164,height:81},
    {title:"CV610 AI 图像处理板",copy:"检测 · 锁定 · 跟踪 · 融合",x:306,y:591,width:144,height:103},
    {title:"飞控 / 云台控制",copy:"输出跟随指令",x:521,y:610,width:150,height:85},
    {title:"图传 / 显示输出",copy:"实时图传 · 画中画显示",x:739,y:610,width:153,height:85},
  ].map((a,i)=><article key={a.title}><span className={styles.eyebrow}>0{i+1}</span><Artwork {...a} alt={a.title+"概念示意"}/><h3>{a.title}</h3><p>{a.copy}</p></article>)}</div></section>
  <section id="features" className={`${styles.section} ${styles.alternate}`}><div className={styles.sectionTitle}><div><span className={styles.eyebrow}>02 / INTELLIGENT VISION</span><h2>让识别与跟踪，连贯发生。</h2></div><p>围绕目标选择、持续跟踪与多视角观察的六项功能方向。</p></div><div className={styles.features}>{features.map(([t,d],i)=><article key={t}><span className={styles.number}>0{i+1}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>
  <section id="versions" className={styles.section}><div className={styles.sectionTitle}><div><span className={styles.eyebrow}>03 / PLANNED VERSIONS</span><h2>四种配置，不同视角。</h2></div><p>版本按镜头组合区分，最终套装与配置待确认。</p></div><div className={styles.versions}>{versions.map(v=><article key={v.name}><h3>{v.name}</h3><p className={styles.lens}>{v.lens}</p><Artwork {...v} alt={v.name+"版本镜头组合概念图"}/><p>{v.copy}</p></article>)}</div></section>
  <section id="specs" className={`${styles.section} ${styles.alternate}`}><div className={styles.specLayout}><div><span className={styles.eyebrow}>04 / TARGET SPECIFICATIONS</span><h2>规划规格</h2><p>保留概念资料中的参数口径，检测帧率与跟踪帧率分别列示。</p><dl className={styles.specs}>{specs.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl><p className={styles.note}>算力、帧率与输出表现需结合算法模型、镜头、输入源及硬件版本验证。热成像模块为可选扩展，具体兼容型号待确认。</p></div><div className={styles.applications}><span className={styles.eyebrow}>05 / APPLICATION SCENARIOS</span><h2>面向更多观察场景</h2>{[
    {title:"无人机观察",copy:"应急搜救、电力巡检与环境监测。",x:414,y:1314,width:147,height:99},
    {title:"移动目标跟踪",copy:"人员与车辆的视觉检测、动态目标观察。",x:584,y:1314,width:148,height:99},
    {title:"昼夜观察",copy:"可见光与热成像组合，拓展不同光照下的观察方向。",x:757,y:1314,width:146,height:99},
  ].map(a=><article key={a.title}><Artwork {...a} alt={a.title+"场景概念图"}/><div><h3>{a.title}</h3><p>{a.copy}</p></div></article>)}</div></div></section>
  <section className={styles.contact}><span className={styles.eyebrow}>A SMARTER VIEW, A WIDER WORLD</span><h2>轻量化 AI 视觉，<br/>连接更多可能。</h2><p>欢迎沟通镜头组合、平台接口和实际应用需求。</p><div className={styles.actions}><a className={styles.button} href="mailto:song_uestc@126.com?subject=ZYRO_AI_TRACET">交流产品需求 ↗</a><a href={sitePath(artwork)} target="_blank" rel="noreferrer">查看完整概念图 ↗</a></div><p className={styles.note}>资料来源：CV610 AI 视觉跟踪模组概念图。示意场景与界面不作为已完成实测的证据。</p></section>
  <footer className={styles.footer}><a href={sitePath("/wiki/future-products/")}>ZYRO / 未来产品</a><a href="mailto:song_uestc@126.com">song_uestc@126.com</a><a href="https://wa.me/8613480720937">WhatsApp +86 134 8072 0937</a><a href="https://www.zyrolink.cn">www.zyrolink.cn</a></footer>
</main></>;}
