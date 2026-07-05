export type LocationPage = {
  slug: string;
  path: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  localExamples: string[];
  faqFocus: string;
};

export const locationPages: LocationPage[] = [
  {
    slug: "autofelvasarlas-budapest-11-kerulet",
    path: "/autofelvasarlas-budapest-11-kerulet",
    name: "Budapest XI. kerület",
    title: "Autófelvásárlás Budapest XI. kerület | Gyors ajánlat és átvétel",
    description:
      "Autófelvásárlás Budapest XI. kerület területén használt, sérült és hibás autókra. Egyeztetett átvétel, azonnali fizetés.",
    h1: "Autófelvásárlás Budapest XI. kerület területén",
    intro:
      "Újbuda, Kelenföld, Gazdagrét és Lágymányos környékéről is kérhető autófelvásárlási ajánlat. A pontos helyszín segít az átvétel és szállítás egyeztetésében.",
    localExamples: ["lakótelepi parkolóban álló használt autó", "garázsban tárolt régi autó", "nem induló vagy sérült autó Újbudán"],
    faqFocus: "XI. kerületi"
  },
  {
    slug: "autofelvasarlas-budapest-13-kerulet",
    path: "/autofelvasarlas-budapest-13-kerulet",
    name: "Budapest XIII. kerület",
    title: "Autófelvásárlás Budapest XIII. kerület | Használt és hibás autók",
    description:
      "Autófelvásárlás Budapest XIII. kerületben, Angyalföld, Újlipótváros és Vizafogó környékén. Gyors ajánlat és egyeztetett átvétel.",
    h1: "Autófelvásárlás Budapest XIII. kerület területén",
    intro:
      "Angyalföld, Újlipótváros, Vizafogó és környéke sűrűn parkolt városi terület, ahol sok tulajdonos gyors, hirdetés nélküli autóeladást keres. Használt, hibás és sérült autóra is kérhető ajánlat.",
    localExamples: ["utcán parkoló használt autó", "céges vagy flottaautó", "hibás autó társasházi parkolóból"],
    faqFocus: "XIII. kerületi"
  },
  {
    slug: "autofelvasarlas-budapest-18-kerulet",
    path: "/autofelvasarlas-budapest-18-kerulet",
    name: "Budapest XVIII. kerület",
    title: "Autófelvásárlás Budapest XVIII. kerület | Egyeztetett átvétel",
    description:
      "Autófelvásárlás Budapest XVIII. kerületben használt, sérült, hibás és nem működő autókra. Gyors ajánlat és azonnali fizetés.",
    h1: "Autófelvásárlás Budapest XVIII. kerület területén",
    intro:
      "Pestszentlőrinc és Pestszentimre térségéből is fogadunk ajánlatkérést. A családi házas, udvari vagy garázsban álló autók átvételét előre egyeztetjük.",
    localExamples: ["udvarban álló régi autó", "lejárt műszakis jármű", "nem működő autó Pestszentlőrincen"],
    faqFocus: "XVIII. kerületi"
  },
  {
    slug: "autofelvasarlas-debrecen",
    path: "/autofelvasarlas-debrecen",
    name: "Debrecen",
    title: "Autófelvásárlás Debrecen | Országos autófelvásárlás",
    description:
      "Autófelvásárlás Debrecen területén használt, sérült és hibás autókra. Képek alapján gyors ajánlat, egyeztetett átvétel.",
    h1: "Autófelvásárlás Debrecen területén",
    intro:
      "Debrecenből és környékéről is lehet ajánlatot kérni használt, hibás, sérült vagy nem induló autóra. A helyszín és állapot megadása segíti az országos átvétel egyeztetését.",
    localExamples: ["használt családi autó Debrecenből", "hibás autó Hajdú-Bihar környékéről", "nem induló jármű telephelyről"],
    faqFocus: "debreceni"
  },
  {
    slug: "autofelvasarlas-szeged",
    path: "/autofelvasarlas-szeged",
    name: "Szeged",
    title: "Autófelvásárlás Szeged | Használt és sérült autók",
    description:
      "Autófelvásárlás Szeged területén használt, hibás, sérült vagy forgalomból kivont autókra. Ajánlat képek és alapadatok alapján.",
    h1: "Autófelvásárlás Szeged területén",
    intro:
      "Szegedről és a környező településekről is fogadunk autófelvásárlási megkeresést. Sérült, hibás vagy nem használt autó esetén a pontos állapot és helyszín különösen fontos.",
    localExamples: ["belvárosi parkolóban álló autó", "sérült autó Csongrád-Csanád térségéből", "lejárt műszakis jármű"],
    faqFocus: "szegedi"
  },
  {
    slug: "autofelvasarlas-gyor",
    path: "/autofelvasarlas-gyor",
    name: "Győr",
    title: "Autófelvásárlás Győr | Gyors ajánlat és azonnali fizetés",
    description:
      "Autófelvásárlás Győr területén és környékén használt, sérült vagy hibás autókra. Egyeztetett átvétel, adásvételi szerződés.",
    h1: "Autófelvásárlás Győr területén",
    intro:
      "Győrből és környékéről is kérhető ajánlat használt, hibás vagy sérült autóra. Az autó állapota, helyszíne és dokumentumai alapján egyeztetjük az átvételt.",
    localExamples: ["céges autó Győrből", "sokat futott használt autó", "motorhibás vagy váltóhibás autó"],
    faqFocus: "győri"
  },
  {
    slug: "autofelvasarlas-miskolc",
    path: "/autofelvasarlas-miskolc",
    name: "Miskolc",
    title: "Autófelvásárlás Miskolc | Hibás és használt autók",
    description:
      "Autófelvásárlás Miskolc területén használt, hibás, sérült vagy nem működő autókra. Országos ajánlatkérés képekkel.",
    h1: "Autófelvásárlás Miskolc területén",
    intro:
      "Miskolcon és Borsod-Abaúj-Zemplén térségében is előfordul, hogy egy régi vagy hibás autó már csak helyet foglal. Ilyen autóra is kérhető felvásárlási ajánlat.",
    localExamples: ["nem induló autó Miskolcon", "régi autó udvarból", "sérült autó regionális átvétellel"],
    faqFocus: "miskolci"
  },
  {
    slug: "autofelvasarlas-pecs",
    path: "/autofelvasarlas-pecs",
    name: "Pécs",
    title: "Autófelvásárlás Pécs | Használt, sérült és hibás autók",
    description:
      "Autófelvásárlás Pécs területén használt, sérült, hibás vagy forgalomból kivont autókra. Gyors ajánlat és egyeztetett átvétel.",
    h1: "Autófelvásárlás Pécs területén",
    intro:
      "Pécsről és Baranya térségéből is fogadunk ajánlatkérést. Használt, hibás, sérült vagy nem működő autó esetén a pontos helyszín és képek segítik az értékelést.",
    localExamples: ["pécsi használt autó", "lejárt műszakis autó", "sérült vagy nem működő jármű"],
    faqFocus: "pécsi"
  },
  {
    slug: "autofelvasarlas-nyiregyhaza",
    path: "/autofelvasarlas-nyiregyhaza",
    name: "Nyíregyháza",
    title: "Autófelvásárlás Nyíregyháza | Országos átvétel",
    description:
      "Autófelvásárlás Nyíregyháza területén használt, hibás, sérült vagy nem induló autókra. Ajánlat alapadatok és képek alapján.",
    h1: "Autófelvásárlás Nyíregyháza területén",
    intro:
      "Nyíregyházáról és Szabolcs-Szatmár-Bereg térségéből is lehet ajánlatot kérni. A szolgáltatás használt, sérült, hibás és nem működő autókra is elérhető.",
    localExamples: ["nem induló autó Nyíregyházán", "használt családi autó", "forgalomból kivont jármű"],
    faqFocus: "nyíregyházi"
  }
];

export function getLocationPage(slug: string) {
  return locationPages.find((page) => page.slug === slug);
}
