import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { FeatureGrid, TrustGrid } from "@/components/FeatureGrid";
import { HeroPicture } from "@/components/ResponsivePicture";
import { getSettings } from "@/lib/db";
import { mailHref, telHref } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Használt autó felvásárlás gyors ajánlattal",
  path: "/",
  description:
    "Adja el használt autóját gyorsan, korrekt áron. Országos kiszállás, azonnali fizetés és egyszerű online ajánlatkérés."
});

export default async function HomePage() {
  const settings = await getSettings();

  return (
    <>
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Országos autófelvásárlás</p>
            <h1>
              Eladná az <span>autóját?</span>
            </h1>
            <p className="lead">
              Vásároljuk használt autóját az ország egész területén. Küldje el az adatokat és rövid időn belül
              jelentkezünk ajánlattal.
            </p>
            <div className="button-row">
              <Link className="gold-button" href="/ajanlatkeres">
                Ingyenes ajánlat kérése
                <ArrowRight size={18} />
              </Link>
              <a className="ghost-button" href={telHref(settings.phone)}>
                <Phone size={18} />
                Hívás most
              </a>
            </div>
          </div>
          <HeroPicture
            className="hero-picture"
            alt="Autófelvásárlás banner gyors, egyszerű és korrekt ajánlattal"
            loading="eager"
            priority
          />
        </div>
      </section>

      <FeatureGrid />

      <section className="shell contact-band" aria-label="Gyors kapcsolat">
        <a className="contact-tile" href={telHref(settings.phone)}>
          <Phone size={34} />
          <span>
            <small>Hívjon bizalommal</small>
            <strong>{settings.phone}</strong>
          </span>
        </a>
        <a className="contact-tile" href={mailHref(settings.publicEmail)}>
          <Mail size={34} />
          <span>
            <small>Írjon nekünk</small>
            <strong>{settings.publicEmail}</strong>
          </span>
        </a>
      </section>

      <section className="shell section-block">
        <div className="section-heading">
          <p className="eyebrow">Miért minket?</p>
          <h2>Korrekt ügyintézés az első üzenettől az elszállításig</h2>
        </div>
        <TrustGrid />
      </section>
    </>
  );
}
