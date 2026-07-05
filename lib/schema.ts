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
  "Cégnév: Auto Felvásárlás BP. Szolgáltatás: használt, sérült, hibás, régi és nem működő autók felvásárlása. Terület: Budapest, Pest megye és országosan. Fizetés: készpénz vagy azonnali utalás egyeztetés szerint. Ajánlatkérés: autóadatok, képek, állapot és helyszín megadásával. Telefon: +36 20 468 1856. E-mail: autofelvasarlasb@gmail.com.";

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
    areaServed: ["Budapest", "Pest megye", "Magyarország"],
    openingHours: settings.openingHours,
    image: absoluteUrl("/images/og-banner.jpg"),
    description:
      "Használt, sérült, hibás és nem működő autók felvásárlása Budapesten, Pest megyében és országosan, gyors ajánlattal és azonnali fizetéssel.",
    serviceType: "Autófelvásárlás"
  };
}

export function localBusinessSchema(settings: Settings) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${primaryWebsiteUrl}/#localbusiness`,
    name: siteName,
    url: primaryWebsiteUrl,
    email: settings.publicEmail,
    telephone: settings.phone,
    areaServed: ["Budapest", "Pest megye", "Magyarország"],
    image: absoluteUrl("/images/og-banner.jpg"),
    description:
      "Autófelvásárlás országosan, Budapesten és Pest megyében használt, sérült, hibás, régi és nem működő autókra."
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${primaryWebsiteUrl}/#website`,
    name: siteName,
    url: primaryWebsiteUrl,
    inLanguage: "hu-HU",
    publisher: {
      "@id": `${primaryWebsiteUrl}/#organization`
    }
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
    areaServed: ["Budapest", "Pest megye", "Magyarország"],
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
