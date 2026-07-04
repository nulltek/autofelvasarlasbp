import { BadgeCheck, Banknote, ClipboardCheck, ShieldCheck, Star, Truck, Wrench } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Ingyenes kiszállás",
    text: "Bárhol is van az autó, mi elmegyünk érte."
  },
  {
    icon: Banknote,
    title: "Azonnali fizetés",
    text: "Készpénzben vagy azonnali utalással."
  },
  {
    icon: ClipboardCheck,
    title: "Minden állapotban",
    text: "Akár törött, hibás vagy forgalomból kivont."
  },
  {
    icon: Wrench,
    title: "Bontás / export",
    text: "Mi intézzük a szállítást és a papírmunkát."
  }
];

const trust = [
  {
    icon: Star,
    title: "Több éves tapasztalat",
    text: "Szakmai háttér az autófelvásárlásban."
  },
  {
    icon: ShieldCheck,
    title: "Korrekt ajánlat",
    text: "Átlátható folyamat, rejtett költségek nélkül."
  },
  {
    icon: BadgeCheck,
    title: "Biztonságos folyamat",
    text: "Az adatok biztonságban vannak."
  }
];

export function FeatureGrid() {
  return (
    <section className="feature-strip" aria-label="Szolgáltatási előnyök">
      <div className="shell feature-grid">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article className="feature-item" key={feature.title}>
              <Icon size={28} />
              <div>
                <h2>{feature.title}</h2>
                <p>{feature.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function TrustGrid() {
  return (
    <div className="trust-grid">
      {trust.map((item) => {
        const Icon = item.icon;
        return (
          <article key={item.title} className="trust-card">
            <Icon size={30} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        );
      })}
    </div>
  );
}
