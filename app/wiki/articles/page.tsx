import { WikiShell } from "../WikiShell";
import { englishArticles } from "./english";
import { sitePath } from "../../site-path";
import styles from "../wiki.module.css";
export const metadata={title:"Technical Articles | ZYRO Wiki"};
export default function Articles(){return <WikiShell><div className={styles.eyebrow}>WIKI / KNOWLEDGE</div><h1>Technical articles</h1><p>From radio links to imaging principles, explore the technology and operating conditions behind equipment performance.</p><div className={styles.grid}>{englishArticles.map(a=><a className={styles.card} key={a.slug} href={sitePath(`/wiki/articles/${a.slug}/`)}><div className={styles.eyebrow}>{a.tag}</div><h3>{a.title}</h3><p>{a.deck}</p></a>)}</div></WikiShell>;}
