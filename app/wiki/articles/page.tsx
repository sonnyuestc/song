import { WikiShell } from "../WikiShell";
import { articles } from "./catalog";
import { sitePath } from "../../site-path";
import styles from "../wiki.module.css";
export const metadata={title:"技术科普｜ZYRO Wiki"};
export default function Articles(){return <WikiShell><div className={styles.eyebrow}>WIKI / KNOWLEDGE</div><h1>技术科普</h1><p>从无线链路到成像原理，理解设备表现背后的技术与使用条件。</p><div className={styles.grid}>{articles.map(a=><a className={styles.card} key={a.href} href={sitePath(a.href+"/")}><div className={styles.eyebrow}>{a.tag} · {a.read}</div><h3>{a.title}</h3><p>{a.excerpt}</p></a>)}</div></WikiShell>;}
