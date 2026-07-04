import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Üzenet elküldve",
  path: "/uzenet-elkuldve",
  description: "Köszönjük, hogy felvette velünk a kapcsolatot. Hamarosan válaszolunk."
});

export default function MessageSentPage() {
  return (
    <section className="simple-state-page shell">
      <Send size={92} />
      <h1>Üzenetét elküldtük!</h1>
      <p>Köszönjük, hogy felvette velünk a kapcsolatot. Hamarosan válaszolunk.</p>
      <Link className="gold-button" href="/">
        Vissza a főoldalra
        <ArrowRight size={18} />
      </Link>
    </section>
  );
}
