import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Star, Timer } from "lucide-react";
import { HeroPicture } from "@/components/ResponsivePicture";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Rólunk - korrekt partner az autófelvásárlásban",
  path: "/rolunk",
  description:
    "Ismerje meg az Autófelvásárlás szolgáltatását: gyors folyamat, országos lefedettség és átlátható autófelvásárlás."
});

const values = [
  { icon: Star, title: "Tapasztalat", text: "Több éves szakmai tapasztalat az autófelvásárlásban." },
  { icon: ShieldCheck, title: "Megbízhatóság", text: "Átlátható folyamat és korrekt ügyintézés." },
  { icon: Timer, title: "Rugalmasság", text: "Az Ön időbeosztásához igazodunk." },
  { icon: MapPin, title: "Országos lefedettség", text: "Bárhol is van, mi elmegyünk érte." }
];

export default function AboutPage() {
  return (
    <section className="shell page-section about-grid">
      <div className="content-panel">
        <p className="eyebrow">Rólunk</p>
        <h1>Korrekt partner az autófelvásárlásban</h1>
        <p>
          Célunk, hogy az autóeladás folyamata gyors, egyszerű és biztonságos legyen ügyfeleink számára.
          Több éves tapasztalattal, megbízható háttérrel és rugalmas ügyintézéssel állunk rendelkezésére az
          ország egész területén.
        </p>
        <p>
          A beküldött adatok és képek alapján átnézzük az autó állapotát, majd érthető, reális ajánlatot adunk.
          Megállapodás után segítünk a papírmunkában, a fizetésben és az elszállításban is.
        </p>
      </div>
      <div className="image-panel">
        <HeroPicture alt="Autófelvásárlás banner autóval és országos szolgáltatással" className="panel-picture" />
      </div>
      <div className="value-grid">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <article key={value.title} className="value-card">
              <Icon size={30} />
              <h2>{value.title}</h2>
              <p>{value.text}</p>
            </article>
          );
        })}
      </div>
      <div className="cta-panel">
        <div>
          <h2>Készen áll az eladásra?</h2>
          <p>Kérjen ingyenes ajánlatot most.</p>
        </div>
        <Link className="gold-button" href="/ajanlatkeres">
          Ajánlatot kérek
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
