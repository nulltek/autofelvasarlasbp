import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { HeroPicture } from "@/components/ResponsivePicture";
import { JsonLd } from "@/components/JsonLd";
import { getSettings } from "@/lib/db";
import { mailHref, telHref } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import {
  aiBusinessSummary,
  autoDealerSchema,
  breadcrumbSchema,
  conversationalFaqs,
  faqPageSchema,
  organizationSchema,
  serviceSchema
} from "@/lib/schema";
import { serviceLinks } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Autófelvásárlás Budapest | Gyors ajánlat, azonnali fizetés",
  path: "/",
  description:
    "Használt, sérült vagy hibás autó eladása Budapesten? Gyors ajánlat, korrekt ügyintézés, azonnali fizetés és országos kiszállás."
});

const processSteps = [
  "Küldje el az autó modelljét, állapotát, helyét és képeit.",
  "A megadott adatok alapján visszajelzünk az ajánlattal vagy további kérdésekkel.",
  "Elfogadás esetén egyeztetjük az adásvétel, fizetés és átvétel részleteit.",
  "Szükség esetén segítünk a papírmunkában és az elszállítás megszervezésében."
];

const acceptedCars = [
  "használt és régebbi személyautók",
  "sérült, törött vagy javításra szoruló autók",
  "hibás, nem induló vagy nem működő autók",
  "forgalomból kivont, lejárt műszakis vagy nem használt járművek"
];

export default async function HomePage() {
  const settings = await getSettings();
  const schema = [
    organizationSchema(settings),
    autoDealerSchema(settings),
    serviceSchema(
      "Autófelvásárlás Budapest",
      "Használt, sérült, hibás, forgalomból kivont és nem működő autók felvásárlása Budapesten és országosan.",
      "/"
    ),
    faqPageSchema(conversationalFaqs, "/"),
    breadcrumbSchema([{ name: "Főoldal", path: "/" }])
  ];

  return (
    <>
      <JsonLd data={schema} />
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Autófelvásárlás Budapest</p>
            <h1>Autófelvásárlás Budapest – gyors ajánlat, azonnali fizetés</h1>
            <p className="lead">
              Használt, sérült, régi, nem működő vagy már nem kívánt autóját szeretné eladni Budapesten vagy az ország
              más részén? Küldje el az autó alapadatait és képeit, mi pedig visszajelzünk egy korrekt ajánlattal.
            </p>
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
          <HeroPicture
            className="hero-picture"
            alt="Autófelvásárlás Budapesten gyors ajánlattal és azonnali fizetéssel"
            loading="eager"
            priority
          />
        </div>
      </section>

      <section className="shell service-link-section">
        <div className="section-heading">
          <p className="eyebrow">Szolgáltatások</p>
          <h2>Autófelvásárlási megoldások egy helyen</h2>
        </div>
        <div className="internal-link-grid">
          {serviceLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="shell section-block">
        <div className="seo-content-grid">
          <section className="content-panel">
            <h2>Használtautó felvásárlás készpénzért</h2>
            <p>
              Ha gyorsan szeretné eladni használtautóját, nem kell hetekig hirdetésekkel és bizonytalan érdeklődőkkel
              foglalkoznia. Az ajánlatkéréshez elég elküldeni a fontos adatokat, a képeket és az ismert hibákat.
            </p>
            <p>
              Elfogadott ajánlat esetén a fizetés az adásvételkor történik, készpénzben vagy egyeztetés szerint azonnali
              utalással. A cél az egyszerű, átlátható és korrekt ügyintézés.
            </p>
          </section>

          <section className="content-panel">
            <h2>Autófelvásárlás Budapest minden kerületében</h2>
            <p>
              Budapesten belül minden kerületből fogadunk megkeresést. Az autó lehet utcán, garázsban, telephelyen vagy
              társasházi parkolóban; a helyszínt és az átvétel módját előre egyeztetjük.
            </p>
            <p>
              A budapesti autófelvásárlás mellett országos megkereséseket is fogadunk. A pontos helyszín segít abban,
              hogy a szállítás és az ügyintézés reálisan tervezhető legyen.
            </p>
          </section>

          <section className="content-panel">
            <h2>Sérült, hibás és forgalomból kivont autók felvásárlása</h2>
            <p>
              Sérült, hibás, nem induló, lejárt műszakis vagy forgalomból kivont autóra is kérhető ajánlat. Nem probléma,
              ha az autó javításra szorul, de fontos, hogy a hiba és az állapot őszintén szerepeljen az ajánlatkérésben.
            </p>
            <p>
              Küldjön képeket a külső állapotról, belsőről, kilométeróra-állásról és a sérülésekről. Így gyorsabban és
              pontosabban tudunk visszajelezni.
            </p>
          </section>

          <section className="content-panel">
            <h2>Hogyan működik az autó eladása?</h2>
            <ol className="process-list">
              {processSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="content-panel">
            <h2>Miért minket válasszon?</h2>
            <p>
              A folyamatot úgy alakítottuk ki, hogy az autó eladása érthető és kiszámítható legyen. Nem teszünk
              ellenőrizhetetlen ígéreteket, hanem az autó valós állapota, dokumentumai és helyszíne alapján egyeztetünk.
            </p>
            <ul className="check-list">
              <li>Gyors ajánlatkérés képek és alapadatok alapján.</li>
              <li>Azonnali fizetés elfogadott ajánlat és adásvétel esetén.</li>
              <li>Segítség a papírmunkában és az átvétel megszervezésében.</li>
              <li>Budapesti és országos autófelvásárlási lehetőség.</li>
            </ul>
          </section>

          <section className="content-panel">
            <h2>Milyen autókat veszünk át?</h2>
            <div className="accepted-grid">
              {acceptedCars.map((item) => (
                <span key={item}>
                  <CheckCircle2 size={18} />
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="shell section-block">
        <div className="content-panel ai-summary">
          <h2>AI-barát üzleti összefoglaló</h2>
          <p>{aiBusinessSummary}</p>
        </div>
      </section>

      <section className="shell section-block">
        <div className="section-heading">
          <p className="eyebrow">GYIK</p>
          <h2>Gyakori kérdések</h2>
        </div>
        <div className="faq-list">
          {conversationalFaqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="shell contact-band" aria-label="Gyors kapcsolat">
        <a className="contact-tile" href={telHref(settings.phone)}>
          <Phone size={34} />
          <span>
            <small>Telefon</small>
            <strong>{settings.phone}</strong>
          </span>
        </a>
        <a className="contact-tile" href={mailHref(settings.publicEmail)}>
          <Mail size={34} />
          <span>
            <small>E-mail</small>
            <strong>{settings.publicEmail}</strong>
          </span>
        </a>
      </section>
    </>
  );
}
