import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/lib/articles";
import { absoluteUrl, siteName } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

type ArticleTemplateProps = {
  article: Article;
};

export function ArticleTemplate({ article }: ArticleTemplateProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.description,
    mainEntityOfPage: absoluteUrl(article.path),
    author: {
      "@type": "Organization",
      name: siteName
    },
    publisher: {
      "@type": "Organization",
      name: siteName
    }
  };

  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumbSchema([
            { name: "Főoldal", path: "/" },
            { name: "Tanácsok", path: article.path },
            { name: article.h1, path: article.path }
          ])
        ]}
      />
      <article className="shell page-section article-page">
        <nav className="breadcrumb" aria-label="Morzsanavigáció">
          <Link href="/">Főoldal</Link>
          <span>/</span>
          <span>{article.h1}</span>
        </nav>
        <p className="eyebrow">Autóeladási tanácsok</p>
        <h1>{article.h1}</h1>
        <p className="page-lead">{article.intro}</p>

        <div className="seo-content-grid">
          {article.sections.map((section) => (
            <section className="content-panel" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="content-panel">
          <h2>Kapcsolódó oldalak</h2>
          <div className="internal-link-grid">
            {article.links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="cta-panel">
          <div>
            <h2>Eladná az autóját?</h2>
            <p>Küldje el az autó adatait és képeit, hogy ajánlatot tudjunk adni.</p>
          </div>
          <Link className="gold-button" href="/ajanlatkeres">
            Ajánlatot kérek
            <ArrowRight size={18} />
          </Link>
        </section>
      </article>
    </>
  );
}
