import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { navItems } from "@/lib/site";
import type { Settings } from "@/lib/types";
import { telHref } from "@/lib/format";
import { Logo } from "@/components/Logo";

type HeaderProps = {
  settings: Settings;
};

export function Header({ settings }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo />
        <input className="nav-toggle" type="checkbox" id="nav-toggle" aria-label="Menü nyitása" />
        <label className="menu-button" htmlFor="nav-toggle" title="Menü">
          <Menu size={24} />
        </label>
        <nav className="site-nav" aria-label="Fő navigáció">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="ghost-button compact" href={telHref(settings.phone)}>
            <Phone size={16} />
            {settings.phone}
          </a>
          <Link className="gold-button compact" href="/ajanlatkeres">
            Ajánlatot kérek
          </Link>
        </div>
      </div>
    </header>
  );
}
