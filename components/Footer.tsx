import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import type { Settings } from "@/lib/types";
import { mailHref, telHref } from "@/lib/format";
import { navItems } from "@/lib/site";
import { Logo } from "@/components/Logo";

type FooterProps = {
  settings: Settings;
};

export function Footer({ settings }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Logo />
          <p>
            Használt autó felvásárlás gyors ügyintézéssel, országos lefedettséggel és korrekt ajánlattal.
          </p>
        </div>
        <nav aria-label="Lábléc navigáció">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/ajanlatkeres">Ajánlatkérés</Link>
          <Link href="/aszf">ÁSZF</Link>
          <Link href="/adatvedelem">Adatvédelem</Link>
          <Link href="/gdpr">GDPR</Link>
        </nav>
        <div className="footer-contact">
          <a href={telHref(settings.phone)}>
            <Phone size={16} />
            {settings.phone}
          </a>
          <a href={mailHref(settings.publicEmail)}>
            <Mail size={16} />
            {settings.publicEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
