import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/ArticleTemplate";
import { getArticle } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";

const article = getArticle("serult-auto-eladasa");

export const metadata = article
  ? pageMetadata({ title: article.title, description: article.description, path: article.path })
  : {};

export default function SerultAutoEladasaPage() {
  if (!article) notFound();
  return <ArticleTemplate article={article} />;
}
