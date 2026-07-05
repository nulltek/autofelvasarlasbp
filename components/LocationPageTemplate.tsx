import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import type { Settings } from "@/lib/types";
import type { LocationPage } from "@/lib/location-pages";
import { mailHref, telHref } from "@/lib/format";
import {
  autoDealerSchema,
  breadcrumbSchema,
  faqPageSchema,
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
  websiteSchema
} from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

type LocationPageTemplateProps = {
  page: LocationPage;
  settings: Settings;
};

export function LocationPageTemplate({ page, settings }: LocationPageTemplateProps) {
  const faqs = [
    {
      question: `Vállaltok autófelvásárlást ${page.name} területén?`,
      answer: `Igen, ${page.name} területéről is lehet ajánlatot kérni használt, sérült, hibás és nem működő autókra.`
    },
    {
      question: `Hibás autó felvásárlás ${page.name} környékén is lehetséges?`,
      answer:
        "Igen, hibás, motorhibás, nem induló vagy lejárt műszakis autóra is kérhető ajánlat, ha a helyszín és az állapot ismert."
    },
    {
      question: "Mikor történik a fizetés?",
      answer:
        "Elfogadott ajánlat esetén a fizetés az adásvételkor történik, készpénzben vagy egyeztetés szerint azonnali utalással."
    },
    {
      question: "Mit küldjek az ajánlatkéréshez?",
      answer:
        "Márka, modell, évjárat, futott kilométer, állapot, helyszín, képek, ismert hibák és elérhetőség segít a gyors ajánlatadásban."
    }
  ];

  const schema = [
    organizationSchema(settings),
    autoDealerSchema(settings),
    localBusinessSchema(settings),
    websiteSchema(),
    serviceSchema(page.h1, page.description, page.path),
    faqPageSchema(faqs, page.path),
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
          <p className="eyebrow">Helyi autófelvásárlás</p>
          <h1>{page.h1}</h1>
          <p className="page-lead">{page.intro}</p>
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

        <div className="seo-content-grid">
          <section className="content-panel">
            <h2>Használt autó felvásárlás {page.name} területén</h2>
            <p>
              {page.name} környékéről használt autó, régi autó, céges autó vagy magánszemélytől eladó autó esetén is
              kérhető ajánlat. Az autó pontos helye, állapota és képei alapján egyeztethető az átvétel.
            </p>
            <p>
              Az ajánlatkérés célja, hogy hirdetés és hosszú alkudozás nélkül kapjon visszajelzést az autó eladására.
            </p>
          </section>
          <section className="content-panel">
            <h2>Sérült autó felvásárlás {page.name} környékén</h2>
            <p>
              Sérült, törött vagy javításra szoruló autóra is kérhető ajánlat. A sérülésekről küldött képek és az ismert
              hibák leírása segítenek a reális értékelésben.
            </p>
            <p>Gyakori helyzetek: {page.localExamples.join(", ")}.</p>
          </section>
          <section className="content-panel">
            <h2>Hibás autó felvásárlás {page.name} területén</h2>
            <p>
              Motorhibás, váltóhibás, elektronikahibás vagy nem induló autó esetén is érdemes ajánlatot kérni. Ha az autó
              nem mozgatható, a szállítás és hozzáférhetőség előzetes egyeztetést igényel.
            </p>
          </section>
          <section className="content-panel">
            <h2>Azonnali fizetés, egyeztetett átvétel, adásvételi szerződés</h2>
            <p>
              Elfogadott ajánlat esetén a fizetés az adásvételkor történik. A folyamat része az egyeztetett átvétel, az
              adásvételi szerződés és szükség esetén az elszállítás megszervezése.
            </p>
          </section>
        </div>

        <section className="content-panel">
          <h2>Gyakori kérdések</h2>
          <div className="faq-list inline-faq">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="content-panel">
          <h2>Kapcsolódó oldalak</h2>
          <div className="internal-link-grid">
            <Link href="/autofelvasarlas-orszagosan">autófelvásárlás országosan</Link>
            <Link href="/ajanlatkeres">ajánlatkérés</Link>
            <Link href="/kapcsolat">kapcsolat</Link>
            <Link href="/hibas-auto-felvasarlas">hibás autó felvásárlás</Link>
          </div>
        </section>

        <section className="cta-panel service-cta">
          <div>
            <h2>Kérjen ajánlatot {page.faqFocus} autójára</h2>
            <p>Küldje el az autó adatait, helyszínét és képeit, vagy keressen minket telefonon.</p>
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
