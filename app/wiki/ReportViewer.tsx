import { sitePath } from "../site-path";
import styles from "./reports.module.css";

type Report = { title: string; filename: string; pdf: string; pages: Array<{number:number;image:string;width:number;height:number;text:string}> };
export function ReportViewer({report}:{report:Report}) {
  return <section className={styles.viewer} aria-label="Complete PDF report">
    <div className={styles.toolbar}><div><h2>Original report · {report.pages.length} pages</h2><p>Every page of the original report is reproduced with its images, tables and text. Click a page to open the full-resolution scan.</p></div><a href={sitePath(report.pdf)} download={report.filename}>Download original PDF ↓</a><a href={sitePath(report.pdf)} target="_blank" rel="noreferrer">Open PDF ↗</a></div>
    <nav className={styles.pageNav} aria-label="Report pages">{report.pages.map(p=><a key={p.number} href={`#report-page-${p.number}`}>{p.number}</a>)}</nav>
    {report.pages.map(p=><div key={p.number} id={`report-page-${p.number}`} className={styles.page}>
      <figure><figcaption>Page {p.number} of {report.pages.length}</figcaption><a href={sitePath(p.image)} target="_blank" rel="noreferrer" aria-label={`${report.title} page ${p.number}, open full-resolution image`}><img src={sitePath(p.image)} alt={`${report.title} — original report page ${p.number} with its text, tables and images`} width={p.width} height={p.height} loading={p.number===1?"eager":"lazy"}/></a></figure>
      {p.text.trim()?<details><summary>View the original text layer</summary><p className={styles.textNote}>Text extracted from the original PDF. For table order and labels inside figures, refer to the page scan above. The source language is preserved.</p><pre>{p.text}</pre></details>:<p>This page contains image-based content; see the complete scan above.</p>}
    </div>)}
  </section>;
}
