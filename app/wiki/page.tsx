import { WikiShell } from "./WikiShell";
import entries from "./content-en.json";
import reports from "./reports.json";
import { sitePath } from "../site-path";
import styles from "./wiki.module.css";

export const metadata = {
  title: "ZYRO Wiki | Documentation, Field Tests & Open Source",
  description: "Product documentation, field-test reports, technical articles and community resources.",
};

export default function WikiHome() {
  return <WikiShell>
    <div className={styles.eyebrow}>DOCUMENTATION / 2026.09.15</div>
    <h1>ZYRO Documentation & Technical Wiki</h1>
    <p>Explore product documents, field-test records and open-source resources. Additional guides and videos will be added as verified material becomes available.</p>
    <h2>Products & documents</h2>
    <div className={styles.grid}>
      <a className={styles.card} href={sitePath("/#products")}><h3>Product center</h3><p>Digital video links, analog FPV, Mesh communications and thermal imaging.</p></a>
      <a className={styles.card} href={sitePath("/downloads/zyro-portfolio.pdf")}><h3>Product portfolio →</h3><p>View the existing products and original PDF documents.</p></a>
    </div>
    <h2 id="cases">Field-test case studies</h2>
    <div className={styles.notice}>A test distance is not a coverage guarantee. Check the recorded frequency, bandwidth, antennas, mounting height and measurement method; source gaps and inconsistencies are explained on each page.</div>
    <div className={styles.grid}>{entries.filter(e => e.slug !== "pixelpilot").map(e => {
      const report = reports.find(r => r.slug === e.slug);
      return <a className={styles.card} key={e.slug} href={sitePath(`/wiki/${e.slug}/`)}>
        <h3>{e.body.split(/\r?\n/)[0].slice(2)}</h3>
        <p>{e.body.split(/\r?\n\r?\n/)[1]}</p>
        <p><strong>{report ? `Original PDF · ${report.pages.length} pages · View all pages →` : "Field photo & test record →"}</strong></p>
      </a>;
    })}</div>
    <h2>Community & upcoming content</h2>
    <div className={styles.grid}>{[
      ["/wiki/pixelpilot/", "PixelPilot / OpenIPC", "Upstream source code, releases and compatibility notes."],
      ["/wiki/videos/", "Unboxing & test videos", "Watch ZYRO_link; more videos will be added by product and test scenario."],
      ["/wiki/future-products/", "Future products", "ZYRO PocketLink and ZYRO_AI_TRACET concept information."],
      ["/wiki/articles/", "Technical articles", "Antennas, latency, link budgets and imaging fundamentals."],
    ].map(([url, title, detail]) => <a className={styles.card} key={url} href={sitePath(url)}>
      <h3>{title}</h3><p>{detail}</p>
    </a>)}</div>
  </WikiShell>;
}
