import type { Settings } from "@/lib/types";
import { absoluteUrl, primaryWebsiteUrl, siteName } from "@/lib/site";

type FaqItem = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

export const aiBusinessSummary =
  "Az Auto Felvásárlás BP használt, sérült, hibás, forgalomból kivont és nem működő autók felvásárlásával foglalkozik Budapesten és országosan. Az érdeklődők képek és alapadatok elküldése után ajánlatot kapnak. Elfogadás esetén a fizetés az adásvételkor történik, az ügyintézésben pedig segítséget nyújtunk.";

export const conversationalFaqs: FaqItem[] = [
  {
    question: "Mennyi idő alatt kaphatok ajánlatot az autómra?",
    answer:
      "Az ajánlat ideje attól függ, mennyi adat és kép érkezik az autóról. Teljes körűen megadott adatoknál jellemzően még aznap visszajelzünk, nyitvatartási időben pedig telefonon gyorsabban egyeztethető a folyamat."
  },
  {
    question: "Vásároltok sérült vagy hibás autót?",
    answer:
      "Igen, sérült, hibás, régebbi, forgalomból kivont és nem működő autók esetén is kérhető ajánlat. A pontos állapot leírása segít reális ajánlatot adni."
  },
  {
    question: "Budapesten kívül is vállaltok autófelvásárlást?",
    answer:
      "Igen, Budapest mellett országosan is foglalkozunk autófelvásárlással. A helyszínt az ajánlatkéréskor érdemes megadni."
  },
  {
    question: "Mikor történik a fizetés?",
    answer:
      "Elfogadott ajánlat esetén a fizetés az adásvételkor történik, készpénzben vagy egyeztetés szerint azonnali utalással."
  },
  {
    question: "Milyen dokumentumok kellenek az autó eladásához?",
    answer:
      "Általában a forgalmi engedély, törzskönyv, személyes okmányok és meglévő kulcsok szükségesek. Egyedi esetben előre egyeztetjük, mire lesz szükség."
  },
  {
    question: "Elszállítjátok a nem működő autót?",
    answer:
      "Nem működő vagy nehezen mozgatható autó esetén az elszállításról egyeztetés alapján tudunk gondoskodni."
  }
];

export function organizationSchema(settings: Settings) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${primaryWebsiteUrl}/#organization`,
    name: siteName,
    url: primaryWebsiteUrl,
    email: settings.publicEmail,
    telephone: settings.phone,
    logo: absoluteUrl("/images/logo.png"),
    sameAs: [settings.facebookUrl, settings.instagramUrl, settings.tiktokUrl].filter(Boolean)
  };
}

export function autoDealerSchema(settings: Settings) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": `${primaryWebsiteUrl}/#autodealer`,
    name: siteName,
    url: primaryWebsiteUrl,
    email: settings.publicEmail,
    telephone: settings.phone,
    areaServed: ["Budapest", "Magyarország"],
    openingHours: settings.openingHours,
    image: absoluteUrl("/images/og-banner.jpg")
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    provider: {
      "@id": `${primaryWebsiteUrl}/#organization`
    },
    areaServed: ["Budapest", "Magyarország"],
    serviceType: "Autófelvásárlás",
    url: absoluteUrl(path)
  };
}

export function faqPageSchema(faqs: FaqItem[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
