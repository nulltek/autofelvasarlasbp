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
            HasznĂˇlt autĂł felvĂˇsĂˇrlĂˇs gyors ĂĽgyintĂ©zĂ©ssel, orszĂˇgos lefedettsĂ©ggel Ă©s korrekt ajĂˇnlattal.
          </p>
        </div>
        <nav aria-label="LĂˇblĂ©c navigĂˇciĂł">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/ajanlatkeres">AjĂˇnlatkĂ©rĂ©s</Link>
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
