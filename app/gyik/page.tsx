import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { getFaqs, getSettings } from "@/lib/db";
import { mailHref, telHref } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { serviceLinks } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Gyakran ismételt kérdések autófelvásárlás előtt",
  path: "/gyik",
  description:
    "Válaszok autófelvásárlásról, ajánlatkérésről, fizetésről, papírokról, sérült autókról és elszállításról."
});

export default async function FaqPage() {
  const [faqs, settings] = await Promise.all([getFaqs(), getSettings()]);
  const schemaFaqs = faqs.map((faq) => ({ question: faq.question, answer: faq.answer }));

  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(schemaFaqs, "/gyik"),
          breadcrumbSchema([
            { name: "Főoldal", path: "/" },
            { name: "Gyakori kérdések", path: "/gyik" }
          ])
        ]}
      />
      <section className="shell page-section narrow-page">
        <p className="eyebrow">GYIK</p>
        <h1>Gyakran ismételt kérdések</h1>
        <p className="page-lead">
          Válaszok autófelvásárlás, ajánlatkérés, fizetés, papírmunka, sérült autók és elszállítás témában.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.id} open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        <section className="content-panel related-faq-links">
          <h2>Kapcsolódó témák autó eladása előtt</h2>
          <p>
            Ha konkrét szolgáltatás érdekli, ezek az oldalak részletesebben bemutatják az autófelvásárlás Budapesten,
            sérült autó felvásárlása, roncsautó átvétele és készpénzes autófelvásárlás témáit.
          </p>
          <div className="internal-link-grid">
            {serviceLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="/ajanlatkeres">ajánlatkérés autó eladására</Link>
          </div>
        </section>

        <div className="question-panel">
          <div>
            <h2>További kérdése van?</h2>
            <p>Keressen minket bizalommal, vagy küldjön ajánlatkérést az autó adataival.</p>
          </div>
          <div className="button-row">
            <a className="ghost-button" href={telHref(settings.phone)}>
              <Phone size={18} />
              {settings.phone}
            </a>
            <a className="ghost-button" href={mailHref(settings.publicEmail)}>
              <Mail size={18} />
              Írás e-mailt
            </a>
            <Link className="gold-button" href="/ajanlatkeres">
              Ajánlatkérés
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
