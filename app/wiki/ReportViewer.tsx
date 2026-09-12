import { sitePath } from "../site-path";
import styles from "./reports.module.css";

type Report = { title: string; filename: string; pdf: string; pages: Array<{number:number;image:string;width:number;height:number;text:string}> };
export function ReportViewer({report}:{report:Report}) {
  return <section className={styles.viewer} aria-label="完整 PDF 报告">
    <div className={styles.toolbar}><div><h2>完整报告 · {report.pages.length} 页</h2><p>逐页保留原报告的全部图片、表格与文字。点击页面可打开高清大图。</p></div><a href={sitePath(report.pdf)} download={report.filename}>下载原始 PDF ↓</a><a href={sitePath(report.pdf)} target="_blank" rel="noreferrer">打开 PDF ↗</a></div>
    <nav className={styles.pageNav} aria-label="报告页码">{report.pages.map(p=><a key={p.number} href={`#report-page-${p.number}`}>{p.number}</a>)}</nav>
    {report.pages.map(p=><div key={p.number} id={`report-page-${p.number}`} className={styles.page}>
      <figure><figcaption>第 {p.number} / {report.pages.length} 页</figcaption><a href={sitePath(p.image)} target="_blank" rel="noreferrer" aria-label={`${report.title} 第 ${p.number} 页，打开高清图片`}><img src={sitePath(p.image)} alt={`${report.title}，原报告第 ${p.number} 页（包含该页所有文字、表格和图片）`} width={p.width} height={p.height} loading={p.number===1?"eager":"lazy"}/></a></figure>
      {p.text.trim()?<details><summary>查看本页可复制文字</summary><p className={styles.textNote}>以下为 PDF 文字层提取内容，表格顺序与图内文字请以原页面为准。</p><pre>{p.text}</pre></details>:<p>本页为图片内容，请查看上方完整页面。</p>}
    </div>)}
  </section>;
}
