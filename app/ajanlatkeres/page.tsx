import { SellerForm } from "@/components/SellerForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Ajánlatkérés használt autó eladásához",
  path: "/ajanlatkeres",
  description:
    "Küldje el autója modelljét, színét, képeit és opcionális adatait. Rövid időn belül felvesszük a kapcsolatot."
});

export default function OfferPage() {
  return (
    <section className="shell page-section">
      <p className="eyebrow">Ajánlatkérés</p>
      <h1>Küldje el autója adatait</h1>
      <p className="page-lead">
        Töltse fel az autó modelljét, színét és képeit. Az adatok és a problémák leírása opcionális, de pontosabb
        ajánlatot segít adni.
      </p>
      <SellerForm />
    </section>
  );
}
