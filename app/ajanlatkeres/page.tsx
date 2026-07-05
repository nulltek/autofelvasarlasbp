import { SellerForm } from "@/components/SellerForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Ajánlatkérés autó eladására | Gyors autófelvásárlási ajánlat",
  path: "/ajanlatkeres",
  description:
    "Küldje el autója márkáját, modelljét, évjáratát, futásteljesítményét, helyszínét, hibáit és képeit. Visszajelzünk autófelvásárlási ajánlattal."
});

export default function OfferPage() {
  return (
    <section className="shell page-section">
      <p className="eyebrow">Ajánlatkérés</p>
      <h1>Küldje el autója adatait</h1>
      <p className="page-lead">
        Adja meg az autó márkáját, modelljét, évjáratát, futásteljesítményét, helyszínét, ismert hibáit és képeit.
        Ezek az adatok segítenek gyorsabb és pontosabb autófelvásárlási ajánlatot adni.
      </p>
      <SellerForm />
    </section>
  );
}
