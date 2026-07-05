export type Article = {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: {
    title: string;
    paragraphs: string[];
  }[];
  links: {
    href: string;
    label: string;
  }[];
};

export const articles: Article[] = [
  {
    slug: "hogyan-adjam-el-az-autom-gyorsan",
    path: "/tanacsok/hogyan-adjam-el-az-autom-gyorsan",
    title: "Hogyan adjam el az autómat gyorsan? | Autóeladási útmutató",
    description:
      "Gyakorlati útmutató gyors autóeladáshoz: adatok, képek, dokumentumok, ár, vevőválasztás és ajánlatkérés.",
    h1: "Hogyan adjam el az autómat gyorsan?",
    intro:
      "A gyors autóeladás nem csak azon múlik, hogy mennyire vonzó az ár. A pontos adatok, jó képek, rendezett dokumentumok és reális elvárások sokkal gyorsabb döntést tesznek lehetővé.",
    sections: [
      {
        title: "Készítse elő az alapadatokat",
        paragraphs: [
          "A vevő vagy felvásárló elsőként a márkát, modellt, évjáratot, futásteljesítményt, üzemanyagot, váltót, állapotot és helyszínt szeretné látni. Ha ezek hiányoznak, az ajánlatadás lassabb és pontatlanabb lesz.",
          "Érdemes előre összegyűjteni a forgalmi engedélyt, törzskönyvet, kulcsokat, szervizinformációkat és az ismert hibák listáját."
        ]
      },
      {
        title: "A képek döntő szerepet játszanak",
        paragraphs: [
          "Külső, belső, kilométeróra- és sérülésfotók nélkül nehéz reális ajánlatot adni. A jó képek csökkentik a felesleges kérdéseket és segítenek elkerülni a félreértéseket.",
          "Nem érdemes elrejteni a hibákat. A sérülések, rozsda, kopás vagy műszaki probléma őszinte bemutatása gyorsabb és tisztább egyeztetést eredményez."
        ]
      },
      {
        title: "Mikor jobb felvásárlót választani?",
        paragraphs: [
          "Ha nincs ideje hirdetésekkel, próbakörökkel és alkudozással foglalkozni, a felvásárlás egyszerűbb út lehet. Különösen igaz ez hibás, sérült, régi vagy nem működő autóknál.",
          "A felvásárlásnál a cél a gyors, dokumentált adásvétel és a kiszámítható fizetés."
        ]
      }
    ],
    links: [
      { href: "/ajanlatkeres", label: "ajánlatkérés autó eladására" },
      { href: "/hasznaltauto-felvasarlas", label: "használtautó felvásárlás" },
      { href: "/autofelvasarlas-orszagosan", label: "autófelvásárlás országosan" }
    ]
  },
  {
    slug: "serult-auto-eladasa",
    path: "/tanacsok/serult-auto-eladasa",
    title: "Sérült autó eladása | Mire figyeljen ajánlatkérés előtt?",
    description:
      "Hasznos tanácsok sérült, törött vagy hibás autó eladásához: fotók, hibaleírás, szállítás, dokumentumok és fizetés.",
    h1: "Sérült autó eladása",
    intro:
      "Sérült autót eladni nehezebb, mert a javítási költség, a szállítás és a hibák mértéke sok kérdést vet fel. Pontos információval viszont gyorsabban lehet reális ajánlatot kapni.",
    sections: [
      {
        title: "Írja le pontosan a sérüléseket",
        paragraphs: [
          "Fontos megírni, hogy az autó balesetes, karosszériasérült, motorhibás, váltóhibás, elektronikahibás vagy nem indul. Ha van szerelői diagnózis, biztosítási információ vagy javítási ajánlat, azt is érdemes jelezni.",
          "A képeken látszódjon az autó minden oldala, a sérült rész közelről, a beltér és a kilométeróra."
        ]
      },
      {
        title: "Szállítás és hozzáférhetőség",
        paragraphs: [
          "Nem működő autóknál a legfontosabb kérdés, hogy gurítható-e, hozzáférhető-e, utcán áll-e, udvarban van-e vagy mélygarázsban található. Ezek mind befolyásolják az átvételt.",
          "Ha az autó nem közlekedhet saját lábon, a szállítási igényt már az első megkeresésben jelezni kell."
        ]
      },
      {
        title: "Reális ár sérült autóra",
        paragraphs: [
          "Sérült autónál az érték nem csak a típustól függ, hanem a javítási kockázattól, alkatrészek állapotától, dokumentumoktól és az autó mozgathatóságától is.",
          "A gyors eladás kulcsa a reális ár és az őszinte állapotbemutatás."
        ]
      }
    ],
    links: [
      { href: "/serult-auto-felvasarlas", label: "sérült autó felvásárlása" },
      { href: "/motorhibas-auto-felvasarlas", label: "motorhibás autó felvásárlás" },
      { href: "/roncsauto-felvasarlas", label: "roncsautó felvásárlás" }
    ]
  },
  {
    slug: "keszpenzes-autofelvasarlas-menete",
    path: "/tanacsok/keszpenzes-autofelvasarlas-menete",
    title: "Készpénzes autófelvásárlás menete | Fizetés és papírmunka",
    description:
      "Mit jelent a készpénzes autófelvásárlás, mikor történik a fizetés, milyen dokumentum kell, és mire figyeljen eladáskor?",
    h1: "Készpénzes autófelvásárlás menete",
    intro:
      "A készpénzes autófelvásárlás fő előnye a gyors, előre egyeztetett folyamat. A tulajdonos ajánlatot kap, majd elfogadás esetén az adásvételkor történik a fizetés.",
    sections: [
      {
        title: "Mit jelent az azonnali fizetés?",
        paragraphs: [
          "Az azonnali fizetés azt jelenti, hogy elfogadott ajánlat és rendezett adásvétel esetén a fizetés az autó átadásakor történik. A fizetés módja lehet készpénz vagy egyeztetés szerinti azonnali utalás.",
          "A pontos feltételeket mindig előre kell egyeztetni, különösen akkor, ha az autó sérült, nem működik vagy hiányos dokumentumokkal rendelkezik."
        ]
      },
      {
        title: "Milyen dokumentumok legyenek kéznél?",
        paragraphs: [
          "Általában szükséges a forgalmi engedély, törzskönyv, kulcsok és személyes okmányok. Céges autó vagy meghatalmazás esetén további dokumentumokra is szükség lehet.",
          "Ha valami hiányzik, azt nem érdemes az utolsó pillanatra hagyni. Már ajánlatkéréskor jelezze a helyzetet."
        ]
      },
      {
        title: "Hogyan gyorsítható az ajánlatadás?",
        paragraphs: [
          "A márka, modell, évjárat, futott kilométer, üzemanyag, váltó, állapot, helyszín, ismert hibák és képek megadása jelentősen gyorsítja az értékelést.",
          "Minél pontosabb az első megkeresés, annál kevesebb utólagos kérdésre van szükség."
        ]
      }
    ],
    links: [
      { href: "/keszpenzes-autofelvasarlas", label: "készpénzes autófelvásárlás" },
      { href: "/autofelvasarlas-budapest", label: "autófelvásárlás Budapesten" },
      { href: "/ajanlatkeres", label: "ajánlatkérés autó eladására" }
    ]
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
