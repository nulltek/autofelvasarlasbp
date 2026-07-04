import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { getFaqs, getSettings } from "@/lib/db";
import { mailHref, telHref } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Gyakran ismételt kérdések autófelvásárlás előtt",
  path: "/gyik",
  description:
    "Válaszok autófelvásárlásról, ajánlatkérésről, fizetésről, papírokról és elszállításról."
});

export default async function FaqPage() {
  const [faqs, settings] = await Promise.all([getFaqs(), getSettings()]);

  return (
    <section className="shell page-section narrow-page">
      <p className="eyebrow">GYIK</p>
      <h1>Gyakran Ismételt Kérdések</h1>
      <p className="page-lead">Minden, amit az autófelvásárlásról tudni érdemes.</p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details key={faq.id} open={index === 0}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>

      <div className="question-panel">
        <div>
          <h2>További kérdése van?</h2>
          <p>Keressen minket bizalommal.</p>
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
  );
}
