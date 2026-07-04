import type { Metadata } from "next";
import { getSettings } from "@/lib/db";
import { absoluteUrl, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "ÁSZF",
  description: "Az Autófelvásárlás weboldal használatának általános szerződési feltételei.",
  alternates: {
    canonical: absoluteUrl("/aszf")
  },
  openGraph: {
    title: `ÁSZF | ${siteName}`,
    description: "Általános szerződési feltételek autófelvásárlási ajánlatkéréshez.",
    url: absoluteUrl("/aszf"),
    type: "website"
  }
};

export default async function TermsPage() {
  const settings = await getSettings();

  return (
    <section className="shell page-section legal-page">
      <p className="eyebrow">Jogi dokumentum</p>
      <h1>Általános Szerződési Feltételek</h1>
      <div className="content-panel legal-content">
        <p className="legal-note">
          Hatályos: 2026. július 4. Ez a dokumentum weboldalra szánt minta. Éles használat előtt az üzemeltető pontos
          cégadataival kell véglegesíteni, és jogi szakemberrel ajánlott ellenőriztetni.
        </p>

        <h2>1. Üzemeltető adatai</h2>
        <p>
          Üzemeltető neve: <strong>{settings.operatorName}</strong>
        </p>
        <p>Székhely / cím: {settings.operatorAddress}</p>
        <p>Adószám: {settings.operatorTaxNumber}</p>
        <p>Cégjegyzékszám / nyilvántartási szám: {settings.operatorRegistryNumber}</p>
        <p>E-mail: {settings.publicEmail}</p>
        <p>Telefon: {settings.phone}</p>

        <h2>2. A weboldal célja</h2>
        <p>
          A weboldal használt, hibás, sérült vagy forgalomból kivont gépjárművek felvásárlásával kapcsolatos
          ajánlatkérések fogadására szolgál. A látogató a weboldalon keresztül adatokat, leírást és képeket küldhet be,
          hogy az üzemeltető előzetes ajánlatot vagy kapcsolatfelvételt kezdeményezzen.
        </p>

        <h2>3. Ajánlatkérés és szerződés létrejötte</h2>
        <p>
          A weboldalon beküldött ajánlatkérés nem minősül az üzemeltető részéről kötelező vételi ajánlatnak. Az
          ajánlatkérés alapján az üzemeltető felveszi a kapcsolatot az érdeklődővel, pontosítja az adatokat, és külön
          egyeztetés után adhat ajánlatot.
        </p>
        <p>
          Adásvételi szerződés csak akkor jön létre, ha a felek a gépjármű adataiban, állapotában, vételárában,
          fizetési módban, átadásban és a szükséges dokumentumokban külön megállapodnak.
        </p>

        <h2>4. Felhasználói kötelezettségek</h2>
        <p>
          A beküldő köteles valós, pontos és jogszerű adatokat megadni. Nem tölthet fel olyan képet, dokumentumot vagy
          adatot, amelyhez nincs jogosultsága, vagy amely harmadik személy jogait sérti.
        </p>

        <h2>5. Képek és dokumentumok feltöltése</h2>
        <p>
          A feltöltött képek és dokumentumok kizárólag az ajánlatkérés feldolgozásához, a gépjármű azonosításához és az
          állapot előzetes felméréséhez használhatók fel. A beküldött fájlok alapján adott előzetes értékelés nem
          helyettesíti a személyes vagy részletes műszaki ellenőrzést.
        </p>

        <h2>6. Fizetés és gépjármű átvétele</h2>
        <p>
          A vételár, a fizetés módja, az elszállítás és az ügyintézés részletei minden esetben egyedi megállapodás
          tárgyát képezik. Az üzemeltető készpénzes vagy átutalásos fizetési módot is egyeztethet, a vonatkozó jogszabályok
          betartása mellett.
        </p>

        <h2>7. Felelősség</h2>
        <p>
          Az üzemeltető törekszik a weboldal folyamatos és biztonságos működtetésére, de nem vállal felelősséget az
          internetes szolgáltatás kimaradásából, hibás adatok megadásából vagy jogosulatlan fájlfeltöltésből eredő károkért.
        </p>

        <h2>8. Panaszkezelés</h2>
        <p>
          Panasz vagy kérdés az üzemeltető e-mail címén vagy telefonszámán jelezhető. Az üzemeltető a panaszt ésszerű
          határidőn belül megvizsgálja és válaszol.
        </p>

        <h2>9. Irányadó jog</h2>
        <p>
          A weboldal használatára és az abból eredő jogviszonyokra a magyar jog irányadó. Fogyasztói jogvita esetén a
          felhasználó a lakóhelye szerint illetékes békéltető testülethez vagy hatáskörrel rendelkező hatósághoz fordulhat.
        </p>
      </div>
    </section>
  );
}
