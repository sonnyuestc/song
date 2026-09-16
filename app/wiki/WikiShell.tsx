import type { ReactNode } from "react";
import { SiteHeader } from "../SiteHeader";
import { sitePath } from "../site-path";
import styles from "./wiki.module.css";
export function WikiShell({ children }: { children: ReactNode }) {
return <><SiteHeader language="en"/><div className={styles.wiki} lang="en"><aside><a className={styles.brand} href={sitePath("/wiki/")}>ZYRO / WIKI</a><nav aria-label="Wiki navigation">{[["/wiki/","Documentation"],["/wiki/#cases","Field tests"],["/wiki/pixelpilot/","Open-source community"],["/wiki/videos/","Unboxing & test videos"],["/wiki/future-products/","Future products"],["/wiki/articles/","Technical articles"]].map(([url,title])=><a key={url} href={sitePath(url)}>{title}</a>)}</nav><p>Updated as source material becomes available. Field results apply to the equipment and conditions recorded in each report.</p></aside><main>{children}</main></div></>;
}
