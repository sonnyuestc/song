import type { ReactNode } from "react";
import { SiteHeader } from "../SiteHeader";
import { sitePath } from "../site-path";
import styles from "./wiki.module.css";
export function WikiShell({ children }: { children: ReactNode }) {
return <><SiteHeader/><div className={styles.wiki}><aside><a className={styles.brand} href={sitePath("/wiki/")}>ZYRO / WIKI</a><nav aria-label="Wiki 导航">{[["/wiki/","文档目录"],["/wiki/#cases","实测案例"],["/wiki/pixelpilot/","开源社区"],["/wiki/videos/","开箱与实测视频"],["/products/pocket/","PocketLink · 规划产品"],["/#knowledge","技术科普"]].map(([url,title])=><a key={url} href={sitePath(url)}>{title}</a>)}</nav><p>根据已有资料持续完善。测试结果仅适用于报告中的设备与环境。</p></aside><main>{children}</main></div><footer className={styles.footer}>ZYRO · <a href="mailto:song_uestc@126.com">song_uestc@126.com</a> · <a href="https://wa.me/8613480720937">WhatsApp</a> · <a href="https://www.zyrolink.cn">www.zyrolink.cn</a></footer></>;
}
