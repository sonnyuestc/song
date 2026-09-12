import { notFound } from "next/navigation";
import entries from "../content.json";
import { WikiShell } from "../WikiShell";
import { Markdown } from "../Markdown";
import styles from "../wiki.module.css";
import { sitePath } from "../../site-path";
export function generateStaticParams(){return entries.map(e=>({slug:e.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const e=entries.find(e=>e.slug===slug);return {title:e?`${e.body.split(/\r?\n/)[0].slice(2)}｜ZYRO Wiki`:"ZYRO Wiki"};}
export default async function WikiArticle({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const entry=entries.find(e=>e.slug===slug);if(!entry)notFound();return <WikiShell><a className={styles.back} href={sitePath("/wiki/")}>← 返回 Wiki 目录</a><article className={styles.article}><div className={styles.eyebrow}>{slug==="pixelpilot"?"OPEN SOURCE / 开源社区":"FIELD REPORT / 实测案例"}</div><Markdown text={entry.body}/></article></WikiShell>;}
