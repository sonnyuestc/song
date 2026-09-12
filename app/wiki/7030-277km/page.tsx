import { WikiShell } from "../WikiShell";
import { sitePath } from "../../site-path";
import styles from "../wiki.module.css";
export const metadata={title:"7030 277 km 测试报告待补充｜ZYRO Wiki"};
export default function PendingReport(){return <WikiShell><h1>7030 277 km 测试报告</h1><div className={styles.notice}>旧版 Word 报告已撤下，PDF 版本待补充。</div><p>请先浏览当前已提供完整 PDF 的实测案例。</p><a href={sitePath("/wiki/#cases")}>返回实测案例 →</a></WikiShell>;}
