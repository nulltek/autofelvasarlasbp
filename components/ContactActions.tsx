import { Facebook, Instagram, Mail, Music2, Phone } from "lucide-react";
import type { Settings } from "@/lib/types";
import { mailHref, telHref } from "@/lib/format";

type ContactActionsProps = {
  settings: Settings;
};

export function ContactActions({ settings }: ContactActionsProps) {
  const items = [
    { label: "Facebook", href: settings.facebookUrl, icon: Facebook },
    { label: "TikTok", href: settings.tiktokUrl, icon: Music2 },
    { label: "Instagram", href: settings.instagramUrl, icon: Instagram },
    { label: settings.phone, href: telHref(settings.phone), icon: Phone },
    { label: settings.publicEmail, href: mailHref(settings.publicEmail), icon: Mail }
  ];

  return (
    <div className="contact-action-grid">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a key={item.label} className="outline-button" href={item.href}>
            <Icon size={18} />
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
