import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactActions } from "@/components/ContactActions";
import { getSettings } from "@/lib/db";
import { mailHref, telHref } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Kapcsolat - autófelvásárlás országosan",
  path: "/kapcsolat",
  description:
    "Lépjen kapcsolatba velünk telefonon, e-mailben, Facebookon, TikTokon vagy Instagramon. Országos autófelvásárlás."
});

export default async function ContactPage() {
  const settings = await getSettings();

  return (
    <section className="shell page-section contact-layout">
      <div className="contact-main">
        <p className="eyebrow">Kapcsolatok</p>
        <h1>Lépjen kapcsolatba velünk</h1>

        <div className="contact-info-list">
          <a href={telHref(settings.phone)}>
            <Phone size={22} />
            <span>
              <strong>Telefon</strong>
              {settings.phone}
            </span>
          </a>
          <a href={mailHref(settings.publicEmail)}>
            <Mail size={22} />
            <span>
              <strong>E-mail</strong>
              {settings.publicEmail}
            </span>
          </a>
          <p>
            <Clock size={22} />
            <span>
              <strong>Nyitvatartás</strong>
              {settings.openingHours}
            </span>
          </p>
          <p>
            <MapPin size={22} />
            <span>
              <strong>Szolgáltatási terület</strong>
              {settings.serviceArea}
            </span>
          </p>
        </div>

        <ContactActions settings={settings} />
      </div>

      <div className="coverage-panel" aria-label="Országos lefedettség">
        <div className="map-shape">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} className={`pin pin-${index + 1}`} />
          ))}
        </div>
      </div>

      <form className="message-form" action="/api/contact" method="post">
        <div>
          <p className="eyebrow">Kérdése van?</p>
          <h2>Írjon üzenetet</h2>
          <p>Üzenete a beállított üzleti e-mail címre érkezik.</p>
        </div>
        <label>
          Név
          <input name="name" required placeholder="Teljes név" />
        </label>
        <label>
          E-mail
          <input name="email" type="email" required placeholder="email@pelda.hu" />
        </label>
        <label>
          Telefon
          <input name="phone" type="tel" placeholder="+36..." />
        </label>
        <label>
          Üzenet
          <textarea name="message" required rows={5} placeholder="Miben segíthetünk?" />
        </label>
        <button className="gold-button" type="submit">
          Üzenet írása
          <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}
