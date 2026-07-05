import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/ArticleTemplate";
import { getArticle } from "@/lib/articles";
import { pageMetadata } from "@/lib/metadata";

const article = getArticle("hogyan-adjam-el-az-autom-gyorsan");

export const metadata = article
  ? pageMetadata({ title: article.title, description: article.description, path: article.path })
  : {};

export default function HogyanAdjamElAzAutomGyorsanPage() {
  if (!article) notFound();
  return <ArticleTemplate article={article} />;
}
