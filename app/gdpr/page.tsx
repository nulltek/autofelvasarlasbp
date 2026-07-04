import type { Metadata } from "next";
import { getSettings } from "@/lib/db";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "GDPR tájékoztató",
  description: "GDPR érintetti jogok és adatkezelési összefoglaló az Autófelvásárlás weboldalon.",
  alternates: {
    canonical: absoluteUrl("/gdpr")
  },
  openGraph: {
    title: `GDPR tájékoztató | ${siteName}`,
    description: "GDPR jogok, kérelmek és adatkezelési összefoglaló.",
    url: absoluteUrl("/gdpr"),
    type: "website"
  }
};

export default async function GdprPage() {
  const settings = await getSettings();

  return (
    <section className="shell page-section legal-page">
      <p className="eyebrow">Jogi dokumentum</p>
      <h1>GDPR tájékoztató</h1>
      <div className="content-panel legal-content">
        <p className="legal-note">
          Ez az oldal közérthető összefoglaló az érintetti jogokról. A részletes adatkezelési szabályokat az
          Adatvédelmi tájékoztató tartalmazza.
        </p>

        <h2>1. Ki kezeli az adatokat?</h2>
        <p>
          Adatkezelő: <strong>{settings.operatorName}</strong>
        </p>
        <p>Kapcsolat: {settings.publicEmail}, {settings.phone}</p>

        <h2>2. Milyen ügyekben kérhet intézkedést?</h2>
        <p>Ön kérheti, hogy az adatkezelő:</p>
        <ul>
          <li>adjon tájékoztatást arról, milyen személyes adatot kezel Önről;</li>
          <li>javítsa a pontatlan adatot;</li>
          <li>törölje az adatot, ha annak kezelése már nem szükséges;</li>
          <li>korlátozza az adatkezelést vitatott vagy ellenőrzés alatt álló adat esetén;</li>
          <li>adja ki az Ön által megadott adatokat hordozható formában, ha ennek feltételei fennállnak;</li>
          <li>vizsgálja meg a tiltakozását jogos érdeken alapuló adatkezelés esetén.</li>
        </ul>

        <h2>3. Hogyan lehet kérelmet küldeni?</h2>
        <p>
          GDPR kérelmet e-mailben vagy telefonon lehet jelezni. A gyors ügyintézéshez írja meg, hogy melyik ajánlatkérésre
          vagy kapcsolatfelvételre vonatkozik a kérelem, és milyen intézkedést kér.
        </p>
        <p>E-mail: {settings.publicEmail}</p>
        <p>Telefon: {settings.phone}</p>

        <h2>4. Válaszadási határidő</h2>
        <p>
          Az adatkezelő indokolatlan késedelem nélkül, főszabály szerint legfeljebb egy hónapon belül válaszol. Összetett
          vagy sok kérelmet érintő ügyben a határidő a GDPR szabályai szerint meghosszabbítható.
        </p>

        <h2>5. Mikor tagadható meg a kérelem?</h2>
        <p>
          A kérelem teljesítése megtagadható vagy korlátozható, ha jogszabályi kötelezettség, jogi igény, más személy
          jogainak védelme vagy az érintett azonosításának hiánya ezt indokolja.
        </p>

        <h2>6. Panasz és hatóság</h2>
        <p>
          Ha úgy érzi, hogy az adatkezelő nem megfelelően kezeli az adatait, először érdemes közvetlenül az adatkezelőhöz
          fordulni. Emellett panasz tehető a Nemzeti Adatvédelmi és Információszabadság Hatóságnál.
        </p>
        <p>
          NAIH honlap: <a href="https://www.naih.hu/">https://www.naih.hu/</a>
        </p>

        <h2>7. Kapcsolódó dokumentumok</h2>
        <p>
          Részletes szabályok: <a href="/adatvedelem">Adatvédelmi tájékoztató</a>
        </p>
        <p>
          Weboldal használati feltételei: <a href="/aszf">ÁSZF</a>
        </p>
      </div>
    </section>
  );
}
