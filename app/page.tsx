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
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
  websiteSchema
} from "@/lib/schema";
import { serviceLinks } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Autófelvásárlás országosan és Budapesten | Gyors ajánlat, azonnali fizetés",
  path: "/",
  description:
    "Autófelvásárlás országosan gyors ajánlattal, korrekt áron, azonnali fizetéssel. Használt, sérült, hibás és nem működő autók felvásárlása."
});

const processSteps = [
  "Küldje el az autó modelljét, állapotát, helyét és képeit.",
  "A megadott adatok alapján visszajelzünk az ajánlattal vagy további kérdésekkel.",
  "Elfogadás esetén egyeztetjük az adásvétel, fizetés és átvétel részleteit.",
  "Szükség esetén segítünk a papírmunkában és az elszállítás megszervezésében."
];

const acceptedCars = [
  {
    title: "Használt autók",
    text: "Használt autó felvásárlás jó áron akkor is kérhető, ha az autó régebbi, sokat futott vagy már nem felel meg a napi használati igényeknek. A pontos állapot, kilométeróra-állás és képek segítenek a reális ajánlatban."
  },
  {
    title: "Régi autók",
    text: "Régi autók esetén is fogadunk ajánlatkérést, különösen akkor, ha a tulajdonos nem szeretne tovább költeni javításra, vizsgáztatásra vagy fenntartásra. A dokumentumok megléte fontos az adásvételhez."
  },
  {
    title: "Sérült és törött autók",
    text: "Sérült autó felvásárlás országosan is egyeztethető, ha a sérülések képeken és leírásban láthatók. Törött, karosszériasérült vagy balesetes autóknál az átvétel módját előre egyeztetjük."
  },
  {
    title: "Hibás és motorhibás autók",
    text: "Hibás autó felvásárlás országosan is kérhető motorhiba, váltóhiba, elektronikai hiba vagy nem induló állapot esetén. A hibajelenség pontos leírása gyorsítja az ajánlatadást."
  },
  {
    title: "Lejárt műszakis és forgalomból kivont autók",
    text: "Lejárt műszakis, forgalomból kivont vagy régóta álló autókra is kérhető ajánlat. Ilyenkor különösen fontos megadni, hogy az autó mozgatható-e és milyen papírok állnak rendelkezésre."
  },
  {
    title: "Magánszemélytől és cégtől eladó autók",
    text: "Magánszemélytől eladó autók és céges vagy flottaautók esetén is lehet ajánlatot kérni. Céges járműnél az adásvételhez szükséges jogosultságokat és dokumentumokat előre érdemes tisztázni."
  }
];

export default async function HomePage() {
  const settings = await getSettings();
  const schema = [
    organizationSchema(settings),
    autoDealerSchema(settings),
    localBusinessSchema(settings),
    websiteSchema(),
    serviceSchema(
      "Autófelvásárlás országosan és Budapesten",
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
            <p className="eyebrow">Autófelvásárlás országosan</p>
            <h1>Autófelvásárlás országosan és Budapesten – gyors ajánlat, korrekt ár, azonnali fizetés</h1>
            <p className="lead">
              Használt, sérült, hibás vagy nem működő autó felvásárlása országosan, gyors ügyintézéssel. Küldje el az
              autó adatait és képeit, mi pedig korrekt ajánlatot adunk. Elfogadás esetén azonnali fizetés, adásvételi
              szerződés és egyeztetett átvétel.
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
              <li>Országos autófelvásárlás egyeztetett átvétellel.</li>
              <li>Gyors ajánlat képek és alapadatok alapján.</li>
              <li>Azonnali fizetés készpénzben vagy utalással.</li>
              <li>Hivatalos adásvételi szerződés.</li>
              <li>Sérült, hibás, régi és nem működő autókra is kérhető ajánlat.</li>
              <li>Segítség az ügyintézésben és az elszállítás megszervezésében.</li>
            </ul>
          </section>

          <section className="content-panel">
            <h2>Milyen autókat veszünk át?</h2>
            <div className="accepted-grid">
              {acceptedCars.map((item) => (
                <article key={item.title}>
                  <CheckCircle2 size={18} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="shell section-block">
        <div className="content-panel">
          <h2>Autófelvásárlás országosan – gyorsan, korrekt áron</h2>
          <p>
            Országos autófelvásárlási lehetőséget biztosítunk azoknak, akik gyorsan és egyszerűen szeretnék eladni
            használt, sérült, hibás vagy már nem használt autójukat. Az ajánlatkéréshez elegendő elküldeni az autó
            alapadatait, futásteljesítményét, állapotát, helyszínét és néhány képet.
          </p>
          <p>
            Ez alapján korrekt ajánlatot adunk, elfogadás esetén pedig egyeztetjük az adásvétel, fizetés és átvétel
            részleteit. A szolgáltatás használható gyors autófelvásárlás, autó eladás gyorsan, autófelvásárlás azonnali
            fizetéssel és használtautó felvásárlás készpénzért keresési szándék esetén is.
          </p>
        </div>
      </section>

      <section className="shell section-block">
        <div className="content-panel service-summary">
          <h2>Autófelvásárlás Budapesten és országosan</h2>
          <p>{aiBusinessSummary}</p>
        </div>
      </section>

      <section className="shell section-block">
        <div className="section-heading">
          <p className="eyebrow">Tanácsok autó eladásához</p>
          <h2>Hasznos útmutatók eladás előtt</h2>
        </div>
        <div className="internal-link-grid">
          <Link href="/tanacsok/hogyan-adjam-el-az-autom-gyorsan">hogyan adja el az autóját gyorsan</Link>
          <Link href="/tanacsok/serult-auto-eladasa">sérült autó eladása</Link>
          <Link href="/tanacsok/keszpenzes-autofelvasarlas-menete">készpénzes autófelvásárlás menete</Link>
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
