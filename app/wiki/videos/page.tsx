import { WikiShell } from "../WikiShell";
import styles from "../wiki.module.css";
import videoStyles from "./videos.module.css";

export const metadata = { title: "Unboxing & Field-Test Videos | ZYRO Wiki" };

const videos = [
  { title: "ZYRO_link", label: "ZYRO LINK / VIDEO", id: "9dpoyFAF67Q", start: 7 },
  { title: "ZYRO_air openipc", label: "ZYRO AIR / OPENIPC", id: "wlMVYj8k-ik", start: 0 },
];

export default function Videos() {
  return <WikiShell>
    <h1>Unboxing & field-test videos</h1>
    {videos.map(video => {
      const timestamp = video.start ? `&t=${video.start}s` : "";
      const embedStart = video.start ? `?start=${video.start}` : "";
      return <article className={`${styles.article} ${videoStyles.card}`} key={video.id}>
        <div className={styles.eyebrow}>{video.label}</div>
        <h2>{video.title}</h2>
        <div className={videoStyles.embed}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}${embedStart}`}
            title={`${video.title} YouTube video`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <p><a href={`https://www.youtube.com/watch?v=${video.id}${timestamp}`} target="_blank" rel="noopener noreferrer">Watch {video.title} on YouTube ↗</a></p>
      </article>;
    })}
    <article className={`${styles.article} ${videoStyles.card}`}>
      <h2>Upcoming video material</h2>
      <ul>
        <li>7020 long-range and 40 km tests: complete PDFs and original pages are available; separate videos are pending.</li>
        <li>Daya Bay approximately 20 km test: the PDF includes field frames and a video filename; a separate video is pending.</li>
        <li>Shenzhen–Zhongshan MESH test: the video folder referenced by the report has not been supplied.</li>
        <li>ZYRO Link 5.8 GHz customer validation: the full PDF is online; three videos cited in that report are not yet available as separate resources.</li>
        <li>7030 277 km test: the PDF and separate video are pending.</li>
        <li>Product unboxing: accessories, interfaces, first connection and usage notes will be added by model.</li>
        <li>PocketLink: a future product; later demonstrations will identify the hardware stage.</li>
      </ul>
      <p>New field-test videos will be linked to product models, recording dates and documents, with equipment setup, distance and test conditions where available.</p>
    </article>
  </WikiShell>;
}
