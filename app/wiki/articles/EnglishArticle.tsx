import { notFound } from "next/navigation";
import { WikiShell } from "../WikiShell";
import { Markdown } from "../Markdown";
import { sitePath } from "../../site-path";
import { englishArticles } from "./english";
import styles from "../wiki.module.css";

export function articleMetadata(slug: string) {
  const article = englishArticles.find(a => a.slug === slug);
  return { title: article ? `${article.title} | ZYRO Wiki` : "Technical Articles | ZYRO Wiki", description: article?.deck };
}

export function EnglishArticlePage({ slug }: { slug: string }) {
  const article = englishArticles.find(a => a.slug === slug);
  if (!article) notFound();
  return <WikiShell>
    <a className={styles.back} href={sitePath("/wiki/articles/")}>← All technical articles</a>
    <article className={styles.article} lang="en">
      <div className={styles.eyebrow}>{article.tag.toUpperCase()} · {article.date}</div>
      <p>{article.deck}</p>
      <Markdown text={article.body} />
    </article>
  </WikiShell>;
}
