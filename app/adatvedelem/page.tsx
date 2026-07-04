import type { Metadata } from "next";
import { getSettings } from "@/lib/db";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató",
  description: "Adatvédelmi tájékoztató az ajánlatkérések, kapcsolatfelvételek és feltöltött fájlok kezeléséről.",
  alternates: {
    canonical: absoluteUrl("/adatvedelem")
  },
  openGraph: {
    title: `Adatvédelmi tájékoztató | ${siteName}`,
    description: "Adatkezelési tájékoztató autófelvásárlási ajánlatkérésekhez.",
    url: absoluteUrl("/adatvedelem"),
    type: "website"
  }
};

export default async function PrivacyPage() {
  const settings = await getSettings();

  return (
    <section className="shell page-section legal-page">
      <p className="eyebrow">Jogi dokumentum</p>
      <h1>Adatvédelmi tájékoztató</h1>
      <div className="content-panel legal-content">
        <p className="legal-note">
          Hatályos: 2026. július 4. A tájékoztató a weboldalon beküldött ajánlatkérésekre és kapcsolatfelvételekre
          vonatkozik. Éles használat előtt a pontos üzemeltetői adatokkal véglegesítendő.
        </p>

        <h2>1. Adatkezelő</h2>
        <p>
          Adatkezelő neve: <strong>{settings.operatorName}</strong>
        </p>
        <p>Székhely / cím: {settings.operatorAddress}</p>
        <p>Adószám: {settings.operatorTaxNumber}</p>
        <p>Cégjegyzékszám / nyilvántartási szám: {settings.operatorRegistryNumber}</p>
        <p>E-mail: {settings.publicEmail}</p>
        <p>Telefon: {settings.phone}</p>

        <h2>2. Kezelt adatok</h2>
        <p>Ajánlatkérés esetén az adatkezelő az alábbi adatokat kezelheti:</p>
        <ul>
          <li>név, telefonszám, e-mail cím;</li>
          <li>gépjármű modellje, színe, évjárata, futásteljesítménye, üzemanyaga, váltója és állapota;</li>
          <li>a gépjárműről feltöltött képek;</li>
          <li>opcionálisan megadott gépjárműadatok, hibák, problémák és feltöltött dokumentumok;</li>
          <li>az üzenet beküldésének időpontja és technikai azonosítói.</li>
        </ul>
        <p>Kapcsolati üzenet esetén az adatkezelő a nevet, e-mail címet, telefonszámot és üzenetet kezeli.</p>

        <h2>3. Az adatkezelés célja</h2>
        <p>
          Az adatkezelés célja ajánlatkérés feldolgozása, kapcsolatfelvétel, gépjármű előzetes értékelése, üzleti
          egyeztetés, panaszkezelés és a jogi igények igazolása.
        </p>

        <h2>4. Jogalap</h2>
        <p>
          Az ajánlatkérés és kapcsolatfelvétel adatkezelésének jogalapja az érintett kérésére történő szerződéskötést
          megelőző lépések megtétele. Panaszkezelés és jogi igények esetén az adatkezelés jogalapja jogi kötelezettség
          teljesítése vagy jogos érdek lehet.
        </p>

        <h2>5. Megőrzési idő</h2>
        <p>
          Az ajánlatkérések és kapcsolatfelvételek adatait az adatkezelő legfeljebb az ügy lezárásától számított 12
          hónapig őrzi meg, kivéve, ha jogszabály, számviteli kötelezettség vagy jogi igény érvényesítése hosszabb
          megőrzést indokol.
        </p>

        <h2>6. Adattovábbítás és adatfeldolgozók</h2>
        <p>
          Az adatokhoz az üzemeltető és az általa igénybe vett tárhely-, e-mail- és informatikai szolgáltatók férhetnek
          hozzá. Az adatkezelő az adatokat harmadik félnek csak jogszabály alapján, hatósági megkeresésre vagy az ügy
          teljesítéséhez szükséges mértékben továbbítja.
        </p>

        <h2>7. Fájlok és képek</h2>
        <p>
          A feltöltött képek és dokumentumok személyes adatot is tartalmazhatnak, például rendszámot, okmányrészletet vagy
          egyéb azonosítót. A beküldő felelőssége, hogy csak szükséges és jogszerűen megosztható fájlokat töltsön fel.
        </p>

        <h2>8. Sütik</h2>
        <p>
          A weboldal alapvetően működéshez szükséges technikai sütiket használhat, például admin belépéshez kapcsolódó
          munkamenet sütit. Marketing vagy analitikai süti csak akkor használható, ha az üzemeltető külön tájékoztatást és
          szükség esetén hozzájárulási lehetőséget biztosít.
        </p>

        <h2>9. Érintetti jogok</h2>
        <p>
          Az érintett kérheti a hozzáférést, helyesbítést, törlést, az adatkezelés korlátozását, tiltakozhat az adatkezelés
          ellen, és bizonyos esetekben kérheti az adathordozhatóságot. Kérelmét az adatkezelő elérhetőségein nyújthatja be.
        </p>

        <h2>10. Jogorvoslat</h2>
        <p>
          Az érintett panasszal fordulhat a Nemzeti Adatvédelmi és Információszabadság Hatósághoz, valamint bírósághoz is
          fordulhat, ha úgy véli, hogy személyes adatainak kezelése jogsértő.
        </p>
        <p>
          NAIH honlap: <a href="https://www.naih.hu/">https://www.naih.hu/</a>
        </p>
      </div>
    </section>
  );
}
