import { WikiShell } from "../../WikiShell";
import { sitePath } from "../../../site-path";
import styles from "../../wiki.module.css";

export const metadata = {
  title: "ZYRO PocketLink | Future Product | ZYRO Wiki",
  description: "Planned long-range monitoring concept for pocket and action cameras; target specifications await validation.",
};

const specs = [
  ["Product", "ZYRO PocketLink"],
  ["Planned versions", "Mini and Standard, each a TX + RX pair"],
  ["Video path", "Camera Wi-Fi → PocketLink TX → radio link → PocketLink RX → HDMI"],
  ["Processing concept", "TX forwards the camera stream without a second encode; RX decodes it"],
  ["Planned radio band", "Below 2.4 GHz; exact frequency and regional versions pending"],
  ["Target range", "5+ km; no validated range result yet"],
  ["Target end-to-end delay", "Approximately 100 ms; validation pending"],
  ["Concept test stream", "Approximately 3 Mbps, not a maximum supported bitrate"],
  ["Interface", "2-inch touch display, no physical buttons in the concept"],
  ["Indicated dimensions", "95 × 52 × 22 mm excluding antennas"],
  ["Mini power", "External USB-C power; no built-in battery in the concept"],
  ["Standard power", "Built-in battery; concept sheet states approximately 4–6 hours"],
];

export default function PocketLinkWiki() {
  return <WikiShell>
    <a className={styles.back} href={sitePath("/wiki/future-products/")}>← Future products</a>
    <article className={styles.article}>
      <div className={styles.eyebrow}>FUTURE PRODUCT / WIRELESS VIDEO</div>
      <h1>ZYRO PocketLink</h1>
      <p>A planned long-range monitoring pair for pocket and action cameras. The transmitter receives the camera's Wi-Fi video stream and forwards it over a radio link. The receiver decodes the stream for HDMI monitoring.</p>
      <div className={styles.notice}>Concept stage: design, range, delay, dimensions, compatibility and version details require validation. Price and certification marks printed in the supplied artwork are not a formal quote or proof of certification.</div>
      <figure><img src={sitePath("/products/pocketlink-overview.png")} alt="Full PocketLink concept artwork showing transmitter, receiver and creator scenarios" loading="eager"/><figcaption>Supplied concept artwork. Product and performance figures shown in the artwork are planning targets.</figcaption></figure>
      <h2>What the system is planned to do</h2>
      <p>The video path aims to avoid a second encode at the transmitter. This does not establish compatibility with every camera: Wi-Fi protocol, resolution, frame rate, receiver output and actual delay still require tests with specific models.</p>
      <h2>Target specifications</h2>
      <div className={styles.tableWrap}><table><thead><tr><th>Item</th><th>Concept-sheet information</th></tr></thead><tbody>{specs.map(([name,value])=><tr key={name}><td>{name}</td><td>{value}</td></tr>)}</tbody></table></div>
      <p>The proposed 5+ km range and approximately 100 ms delay are targets, not completed field-test results. Environment, antennas, mounting and camera/display combinations will determine measured performance.</p>
      <p><a href="mailto:song_uestc@126.com?subject=ZYRO%20PocketLink%20Inquiry">Discuss a camera or monitoring requirement →</a></p>
    </article>
  </WikiShell>;
}
