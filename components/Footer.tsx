import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import type { Settings } from "@/lib/types";
import { mailHref, telHref } from "@/lib/format";
import { navItems, serviceLinks } from "@/lib/site";
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
          <p>Használt autó felvásárlás gyors ügyintézéssel, budapesti és országos lefedettséggel, korrekt ajánlattal.</p>
        </div>
        <nav aria-label="Lábléc navigáció">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/ajanlatkeres">Ajánlatkérés</Link>
          <Link href="/autofelvasarlas-orszagosan">Országos autófelvásárlás</Link>
          {serviceLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
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
