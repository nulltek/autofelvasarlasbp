import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found-page shell">
      <p>404</p>
      <h1>Az oldal nem található.</h1>
      <span>Úgy tűnik, rossz helyre tévedt.</span>
      <Link className="gold-button" href="/">
        Vissza a főoldalra
        <ArrowRight size={18} />
      </Link>
    </section>
  );
}
