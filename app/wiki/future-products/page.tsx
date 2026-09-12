import { WikiShell } from "../WikiShell";
import { sitePath } from "../../site-path";
import styles from "../wiki.module.css";
export const metadata={title:"未来产品｜ZYRO PocketLink 与 ZYRO_AI_TRACET"};
export default function FutureProducts(){return <WikiShell><div className={styles.eyebrow}>FUTURE PRODUCTS</div><h1>未来产品</h1><p>关注 ZYRO 后续产品方向与进展。以下产品尚未上市，最终规格及发布时间待确认。</p><div className={styles.grid}><a className={styles.card} href={sitePath("/products/pocket/")}><div className={styles.eyebrow}>未来产品</div><h3>ZYRO PocketLink</h3><p>面向口袋相机与运动相机的远端监看方向，查看现有概念展示与规划信息。</p><p>了解产品方向 →</p></a><a className={styles.card} href={sitePath("/wiki/future-products/ai-tracet/")}><div className={styles.eyebrow}>未来产品</div><h3>ZYRO_AI_TRACET</h3><p>产品详细资料将后续补充。</p><p>查看产品状态 →</p></a></div></WikiShell>;}
