import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TrustGrid } from "@/components/FeatureGrid";
import { HeroPicture } from "@/components/ResponsivePicture";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Köszönjük az ajánlatkérést",
  path: "/ajanlatkeres/koszonjuk",
  description: "Ajánlatkérését sikeresen elküldtük. Hamarosan felvesszük Önnel a kapcsolatot."
});

export default function OfferSuccessPage() {
  return (
    <section className="success-page">
      <HeroPicture className="success-bg" alt="Autófelvásárlás banner háttér autóval" />
      <div className="shell success-content">
        <CheckCircle2 size={96} />
        <h1>Köszönjük!</h1>
        <p>Ajánlatkérését sikeresen elküldtük. Munkatársunk hamarosan felveszi Önnel a kapcsolatot.</p>
        <Link className="gold-button" href="/">
          Vissza a főoldalra
          <ArrowRight size={18} />
        </Link>
        <TrustGrid />
      </div>
    </section>
  );
}
