import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import type { Settings } from "@/lib/types";
import type { ServicePage } from "@/lib/service-pages";
import { serviceLinkLabel } from "@/lib/service-pages";
import { mailHref, telHref } from "@/lib/format";
import {
  aiBusinessSummary,
  autoDealerSchema,
  breadcrumbSchema,
  faqPageSchema,
  organizationSchema,
  serviceSchema
} from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

type ServicePageTemplateProps = {
  page: ServicePage;
  settings: Settings;
};

export function ServicePageTemplate({ page, settings }: ServicePageTemplateProps) {
  const schema = [
    organizationSchema(settings),
    autoDealerSchema(settings),
    serviceSchema(page.serviceName, page.description, page.path),
    faqPageSchema(page.faqs, page.path),
    breadcrumbSchema([
      { name: "Főoldal", path: "/" },
      { name: page.h1, path: page.path }
    ])
  ];

  return (
    <>
      <JsonLd data={schema} />
      <section className="shell page-section service-page">
        <nav className="breadcrumb" aria-label="Morzsanavigáció">
          <Link href="/">Főoldal</Link>
          <span>/</span>
          <span>{page.h1}</span>
        </nav>

        <div className="service-hero">
          <p className="eyebrow">Autófelvásárlás</p>
          <h1>{page.h1}</h1>
          <p className="page-lead">{page.lead}</p>
          <div className="button-row">
            <Link className="gold-button" href="/ajanlatkeres">
              Ajánlatot kérek
              <ArrowRight size={18} />
            </Link>
            <a className="ghost-button" href={telHref(settings.phone)}>
              <Phone size={18} />
              Telefonálok
            </a>
          </div>
        </div>

        <section className="content-panel service-summary">
          <h2>Autófelvásárlás Budapesten és országosan</h2>
          <p>{aiBusinessSummary}</p>
        </section>

        <div className="seo-content-grid">
          {page.sections.map((section) => (
            <section className="content-panel" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="content-panel">
          <h2>Kapcsolódó autófelvásárlási szolgáltatások</h2>
          <p>
            Ha nem pontosan ezt a szolgáltatást keresi, nézze meg a kapcsolódó oldalakat is, vagy küldjön
            ajánlatkérést autó eladására.
          </p>
          <div className="internal-link-grid">
            <Link href="/">autófelvásárlás Budapesten</Link>
            <Link href="/ajanlatkeres">ajánlatkérés autó eladására</Link>
            {page.related.map((href) => (
              <Link href={href} key={href}>
                {serviceLinkLabel(href)}
              </Link>
            ))}
          </div>
        </section>

        <section className="content-panel">
          <h2>Gyakori kérdések</h2>
          <div className="faq-list inline-faq">
            {page.faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="cta-panel service-cta">
          <div>
            <h2>Kérjen ajánlatot az autójára</h2>
            <p>
              Küldje el az autó adatait és képeit, vagy keressen telefonon. Visszajelzünk, és egyeztetjük a következő
              lépést.
            </p>
          </div>
          <div className="button-row">
            <a className="ghost-button" href={telHref(settings.phone)}>
              <Phone size={18} />
              {settings.phone}
            </a>
            <a className="ghost-button" href={mailHref(settings.publicEmail)}>
              <Mail size={18} />
              {settings.publicEmail}
            </a>
            <Link className="gold-button" href="/ajanlatkeres">
              Ajánlatot kérek
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}
