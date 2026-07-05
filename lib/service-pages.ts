export type ServicePage = {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  serviceName: string;
  sections: {
    title: string;
    paragraphs: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "autofelvasarlas-budapest",
    path: "/autofelvasarlas-budapest",
    title: "Autófelvásárlás Budapest | Gyors ajánlat és azonnali fizetés",
    description:
      "Autófelvásárlás Budapesten használt, sérült, hibás vagy nem kívánt autókra. Gyors ajánlat, korrekt ügyintézés és azonnali fizetés.",
    h1: "Autófelvásárlás Budapest",
    serviceName: "Autófelvásárlás Budapest",
    lead:
      "Budapesten sok autótulajdonos szeretné gyorsan, hirdetés és hosszú alkudozás nélkül eladni az autóját. Az Auto Felvásárlás BP ebben segít: használt, sérült, hibás, régi, nem működő vagy forgalomból kivont autókra is kérhető ajánlat.",
    sections: [
      {
        title: "Gyors eladás budapesti autótulajdonosoknak",
        paragraphs: [
          "Az autó eladása Budapesten gyakran időigényes folyamat. A magánhirdetések kezelése, az érdeklődők szűrése, a próbakörök egyeztetése és az alkudozás sok energiát vehet el. Autófelvásárlási szolgáltatásunk azoknak szól, akik inkább egy átlátható, rövidebb folyamatot választanának.",
          "Az ajánlatkéréshez elég megadni az autó alapadatait, a modell nevét, színét, állapotát és néhány képet. A beérkező információk alapján visszajelzünk, majd elfogadás esetén egyeztetjük az adásvétel és az átvétel részleteit."
        ]
      },
      {
        title: "Autófelvásárlás Budapest minden kerületében",
        paragraphs: [
          "Budapest teljes területén foglalkozunk autófelvásárlással, így a belvárosi, budai, pesti és külső kerületekből is lehet ajánlatot kérni. A helyszín megadása azért fontos, mert a szállítás, az állapotfelmérés és az időpont-egyeztetés így pontosabban tervezhető.",
          "Legyen az autó garázsban, társasházi parkolóban, telephelyen vagy utcán, a folyamatot előre egyeztetjük. Nem szükséges tökéletes állapotú autó: értékelünk futóképes, hibás, sérült, régi és forgalomból kivont járműveket is."
        ]
      },
      {
        title: "Milyen autókra kérhető ajánlat?",
        paragraphs: [
          "Ajánlat kérhető használt személyautókra, régebbi modellekre, sokat futott autókra, műszaki hibás járművekre, sérült autókra és olyan autókra is, amelyeket a tulajdonos már nem szeretne tovább fenntartani. A pontos ár függ az állapottól, a papíroktól, a piaci kereslettől és a szállítási körülményektől.",
          "A reális ajánlathoz érdemes őszintén jelezni a hibákat: motorhiba, váltóhiba, karosszériasérülés, hiányzó alkatrész, lejárt műszaki vagy forgalomból kivonás. A részletesebb leírás gyorsabb és pontosabb elbírálást tesz lehetővé."
        ]
      },
      {
        title: "Az adásvétel menete",
        paragraphs: [
          "A folyamat első lépése az ajánlatkérés. Ez történhet az oldalon található űrlapon, telefonon vagy e-mailben. A kapott adatok alapján előzetes ajánlat készül, majd egyeztetjük, hogy az autó átadása milyen helyszínen és időpontban történjen.",
          "Elfogadott ajánlat esetén a fizetés az adásvételkor történik. A cél az, hogy a tulajdonos kiszámítható folyamatot kapjon, segítséget az ügyintézésben, és ne kelljen hetekig hirdetnie az autót."
        ]
      }
    ],
    faqs: [
      {
        question: "Budapest mely kerületeiben vállaltok autófelvásárlást?",
        answer:
          "Budapest minden kerületéből lehet ajánlatot kérni. A pontos helyszínt az egyeztetéskor érdemes megadni, hogy a szállítás és az átvétel tervezhető legyen."
      },
      {
        question: "Hibás autóra is adtok ajánlatot Budapesten?",
        answer:
          "Igen, hibás, sérült, nem működő vagy forgalomból kivont autóra is kérhető ajánlat. A hiba pontos leírása segít a korrekt értékelésben."
      },
      {
        question: "Kell személyesen bemennem valahová?",
        answer:
          "Nem feltétlenül. Az első egyeztetéshez elegendőek az autó adatai és képei, utána közösen egyeztetjük az átvétel módját."
      },
      {
        question: "Mikor kapom meg a pénzt?",
        answer:
          "Elfogadott ajánlat esetén a fizetés az adásvételkor történik, készpénzben vagy egyeztetés szerint azonnali utalással."
      },
      {
        question: "Lejárt műszakis autót is megvesztek?",
        answer:
          "Igen, lejárt műszakis autó esetén is érdemes ajánlatot kérni, különösen akkor, ha az állapot és a papírok előre tisztázottak."
      }
    ],
    related: ["/hasznaltauto-felvasarlas", "/serult-auto-felvasarlas", "/keszpenzes-autofelvasarlas"]
  },
  {
    slug: "hasznaltauto-felvasarlas",
    path: "/hasznaltauto-felvasarlas",
    title: "Használtautó felvásárlás | Gyors eladás korrekt ügyintézéssel",
    description:
      "Használtautó felvásárlás Budapesten és országosan. Kérjen ajánlatot régi, sokat futott, hibás vagy eladásra szánt autójára.",
    h1: "Használtautó felvásárlás",
    serviceName: "Használtautó felvásárlás",
    lead:
      "A használtautó eladása nem mindig egyszerű: hirdetést kell írni, képeket készíteni, érdeklődőkkel egyeztetni és alkudozni. Felvásárlási szolgáltatásunk gyorsabb megoldást kínál azoknak, akik közvetlen ajánlatot szeretnének kapni autójukra.",
    sections: [
      {
        title: "Mikor érdemes használtautó felvásárlást választani?",
        paragraphs: [
          "Használtautó felvásárlás akkor lehet jó megoldás, ha az autótulajdonos nem szeretne hosszú ideig hirdetéssel foglalkozni, vagy fontos számára a gyors, kiszámítható ügyintézés. Ez különösen hasznos lehet, ha az autó régebbi, sokat futott, esztétikai hibás vagy már nem felel meg a család, vállalkozás vagy napi közlekedés igényeinek.",
          "A szolgáltatás célja nem az, hogy túlzó ígéretekkel csábítson, hanem hogy reális ajánlatot adjon a megadott adatok alapján. Minél több információ érkezik az autóról, annál pontosabb lehet az értékelés."
        ]
      },
      {
        title: "Használt autók állapottól független értékelése",
        paragraphs: [
          "Nem csak hibátlan autókra lehet ajánlatot kérni. Értékelhetőek kisebb sérüléses, kopott belterű, magas futásteljesítményű, javításra szoruló vagy régebbi modellek is. A piaci értéket több tényező befolyásolja, például az évjárat, motor, felszereltség, állapot, dokumentumok és a kereslet.",
          "A képek különösen fontosak. Külső fotók, belső képek, kilométeróra-állás, forgalmi állapot és ismert hibák alapján gyorsabban lehet eldönteni, milyen ajánlat adható."
        ]
      },
      {
        title: "Budapest és országos átvétel",
        paragraphs: [
          "Budapesten és országosan is kérhető használtautó felvásárlási ajánlat. Ha az autó távolabb található, érdemes már az első üzenetben megadni a várost vagy kerületet, mert ez segít az átvétel és szállítás megtervezésében.",
          "A cél az egyszerű folyamat: az érdeklődő elküldi az adatokat, visszajelzést kap, majd elfogadás esetén egyeztetés történik az adásvételről. Ez sok esetben kényelmesebb, mint a nyilvános hirdetés kezelése."
        ]
      },
      {
        title: "Papírmunka és fizetés",
        paragraphs: [
          "Az autó eladásakor fontos, hogy az adásvétel dokumentálása rendezett legyen. A forgalmi engedély, törzskönyv, kulcsok és tulajdonosi adatok meglétét előre érdemes ellenőrizni. Ha valami hiányzik vagy speciális helyzet áll fenn, azt ajánlatkéréskor jelezni kell.",
          "Elfogadott ajánlat esetén a fizetés az adásvételkor történik. A fizetés módja egyeztethető, jellemzően készpénz vagy azonnali utalás jöhet szóba."
        ]
      }
    ],
    faqs: [
      {
        question: "Milyen használtautót vásároltok fel?",
        answer:
          "Használt, régi, sokat futott, hibás, sérült vagy eladásra szánt autóra is kérhető ajánlat. A pontos érték az állapottól és a dokumentumoktól függ."
      },
      {
        question: "Kell friss műszaki vizsga?",
        answer:
          "Nem minden esetben. Lejárt műszakis autóra is lehet ajánlatot kérni, de ezt fontos előre jelezni."
      },
      {
        question: "Milyen képeket küldjek az autóról?",
        answer:
          "Érdemes külső, belső, kilométeróra- és sérülésfotókat küldeni. Minél több a pontos információ, annál gyorsabb az értékelés."
      },
      {
        question: "Országosan is működik a használtautó felvásárlás?",
        answer:
          "Igen, Budapest mellett országosan is fogadunk ajánlatkéréseket."
      },
      {
        question: "Mi történik, ha elfogadom az ajánlatot?",
        answer:
          "Egyeztetjük az átvétel és az adásvétel részleteit, majd a fizetés az adásvételkor történik."
      }
    ],
    related: ["/autofelvasarlas-budapest", "/keszpenzes-autofelvasarlas", "/serult-auto-felvasarlas"]
  },
  {
    slug: "serult-auto-felvasarlas",
    path: "/serult-auto-felvasarlas",
    title: "Sérült autó felvásárlás | Hibás és törött autók átvétele",
    description:
      "Sérült autó felvásárlás Budapesten és országosan. Ajánlat törött, hibás, nem működő vagy javításra nem érdemes autókra.",
    h1: "Sérült autó felvásárlás",
    serviceName: "Sérült autó felvásárlás",
    lead:
      "Egy sérült autó eladása sokszor nehezebb, mint egy hibátlan jármű értékesítése. A javítás költsége magas lehet, a vevők óvatosabbak, a szállítás pedig külön szervezést igényelhet. Ilyenkor a sérült autó felvásárlás gyorsabb és egyszerűbb megoldás lehet.",
    sections: [
      {
        title: "Törött, hibás és javításra szoruló autók",
        paragraphs: [
          "Ajánlat kérhető karosszériasérült, törött, motorhibás, váltóhibás, elektronikailag problémás, jégkáros vagy egyéb módon sérült autókra. Nem feltétel, hogy az autó hibátlanul működjön, de a pontos állapot leírása fontos a korrekt értékeléshez.",
          "A sérült autók értékét nagyban befolyásolja, hogy mely alkatrészek sérültek, mozgatható-e a jármű, milyen dokumentumok állnak rendelkezésre, és gazdaságosan javítható-e. Ezért kérünk képeket és rövid leírást a problémákról."
        ]
      },
      {
        title: "Miért nehéz sérült autót magánúton eladni?",
        paragraphs: [
          "Sérült autó esetén a magánvevők gyakran bizonytalanok a javítási költségek miatt. Sok érdeklődő csak nagyon alacsony áron vásárolna, vagy többszörös egyeztetés után sem dönt. A hirdetés, fotózás, időpontok szervezése és alkudozás emiatt hosszadalmas lehet.",
          "A felvásárlás előnye, hogy az autó állapotát már az első egyeztetésnél figyelembe vesszük. Nem szükséges elhallgatni a hibákat, sőt a pontos információ segíti a gyors döntést."
        ]
      },
      {
        title: "Budapest és országos sérült autó átvétel",
        paragraphs: [
          "Budapesten és az ország más részein is lehet ajánlatot kérni sérült autóra. Ha az autó nem közlekedésképes, ezt már az első üzenetben jelezni kell, hogy az elszállítás lehetősége is egyeztethető legyen.",
          "A helyszín, az autó mozgathatósága és a sérülés mértéke mind fontos adat. Ezek alapján lehet megtervezni, hogyan történjen az átvétel, és milyen ügyintézés szükséges."
        ]
      },
      {
        title: "Korrekt folyamat sérült autó eladásakor",
        paragraphs: [
          "A sérült autó eladásakor a legfontosabb a tiszta kommunikáció. Küldje el a modell nevét, évjáratot, futásteljesítményt, sérülésfotókat és a probléma rövid leírását. Ha volt biztosítási ügy vagy javítási ajánlat, annak ténye is hasznos információ lehet.",
          "Elfogadott ajánlat esetén egyeztetjük az adásvételt, a fizetést és szükség esetén a szállítást. A cél, hogy a tulajdonos rendezett módon tudjon megválni a sérült autótól."
        ]
      }
    ],
    faqs: [
      {
        question: "Megvesztek törött autót is?",
        answer:
          "Igen, törött vagy karosszériasérült autóra is kérhető ajánlat. Fontos, hogy a sérülésekről képeket küldjön."
      },
      {
        question: "Motorhibás autóval is foglalkoztok?",
        answer:
          "Igen, motorhibás, váltóhibás és nem működő autó esetén is érdemes ajánlatot kérni."
      },
      {
        question: "Elszállítható a nem közlekedő autó?",
        answer:
          "Nem működő autó esetén az elszállításról egyeztetés alapján tudunk gondoskodni."
      },
      {
        question: "Milyen adat kell sérült autóhoz?",
        answer:
          "Modell, évjárat, futásteljesítmény, képek, sérülésleírás és a papírok állapota segít a gyors ajánlatadásban."
      },
      {
        question: "Budapesten kívül is kérhetek ajánlatot?",
        answer:
          "Igen, Budapest mellett országosan is fogadunk sérült autó felvásárlási megkereséseket."
      }
    ],
    related: ["/roncsauto-felvasarlas", "/autofelvasarlas-budapest", "/hasznaltauto-felvasarlas"]
  },
  {
    slug: "roncsauto-felvasarlas",
    path: "/roncsauto-felvasarlas",
    title: "Roncsautó felvásárlás | Nem működő és forgalomból kivont autók",
    description:
      "Roncsautó felvásárlás Budapesten és országosan. Ajánlat régi, nem működő, erősen sérült vagy forgalomból kivont autókra.",
    h1: "Roncsautó felvásárlás",
    serviceName: "Roncsautó felvásárlás",
    lead:
      "A roncsautó sok tulajdonosnak csak helyet foglal, miközben a javítás már nem gazdaságos. Roncsautó felvásárlás esetén olyan járművekre is kérhető ajánlat, amelyek nem működnek, erősen sérültek, hiányosak vagy forgalomból kivont állapotban vannak.",
    sections: [
      {
        title: "Mikor számít egy autó roncsautónak?",
        paragraphs: [
          "Roncsautónak gyakran azokat a járműveket nevezik, amelyek javítása aránytalanul drága lenne, régóta állnak, nem indulnak, erősen sérültek vagy már nem alkalmasak rendszeres használatra. Ide tartozhat balesetes, motorhibás, rozsdás, hiányos vagy forgalomból kivont autó is.",
          "Az érték ilyenkor nem csak a közlekedőképességtől függ. Számít a típus, az alkatrészek állapota, a dokumentumok megléte, a szállítási lehetőség és az, hogy az autó milyen módon hasznosítható tovább."
        ]
      },
      {
        title: "Roncsautó eladása hirdetés nélkül",
        paragraphs: [
          "Roncsautót magánhirdetésben eladni sokszor nehéz. A vevők gyakran csak alkatrésznek keresnek autót, alacsony ajánlatot adnak, vagy a szállítás miatt visszalépnek. Ha az autó nem indul, már a megtekintés és mozgatás is külön problémát jelenthet.",
          "A felvásárlási folyamat egyszerűbb: az autó adatai, képei és ismert hibái alapján előzetes ajánlat kérhető. Így a tulajdonos gyorsabban képet kap arról, hogy érdemes-e továbblépni az adásvétellel."
        ]
      },
      {
        title: "Forgalomból kivont és nem működő autók",
        paragraphs: [
          "Forgalomból kivont autó esetén különösen fontos a dokumentumok állapota. Ha rendelkezésre áll a forgalmi engedély, törzskönyv vagy egyéb papír, azt érdemes jelezni. Hiányzó dokumentum vagy speciális tulajdonosi helyzet esetén előzetes egyeztetés szükséges.",
          "Nem működő autóknál a helyszín, megközelíthetőség és mozgatás lehetősége is lényeges. Ha az autó udvarban, mélygarázsban vagy nehezen hozzáférhető helyen áll, ezt már ajánlatkéréskor érdemes megírni."
        ]
      },
      {
        title: "Budapesti és országos roncsautó felvásárlás",
        paragraphs: [
          "Budapesten gyakori, hogy a régi vagy sérült autó parkolóhelyet foglal, miközben a tulajdonos már nem szeretne költeni rá. Országosan is előfordul, hogy egy autó telephelyen, kertben vagy garázsban áll hosszabb ideje.",
          "Ajánlatkéréskor küldje el a pontos helyszínt, a modell nevét, a képeket és azt, hogy az autó mozgatható-e. Ezek alapján lehet reális ajánlatot és átvételi tervet készíteni."
        ]
      }
    ],
    faqs: [
      {
        question: "Nem induló roncsautóra is adtok ajánlatot?",
        answer:
          "Igen, nem induló vagy nem működő autóra is kérhető ajánlat, ha az állapot és a helyszín előre ismert."
      },
      {
        question: "Forgalomból kivont autót is megvesztek?",
        answer:
          "Igen, forgalomból kivont autó esetén is érdemes egyeztetni. A dokumentumok állapota fontos az adásvételhez."
      },
      {
        question: "Hiányos autóra is lehet ajánlatot kérni?",
        answer:
          "Igen, de jelezni kell, milyen alkatrészek hiányoznak, mert ez befolyásolja az értékelést."
      },
      {
        question: "El tudjátok szállítani a roncsautót?",
        answer:
          "Az elszállítás egyeztetés alapján megoldható lehet. A pontos helyszín és hozzáférhetőség fontos adat."
      },
      {
        question: "Milyen gyorsan történhet az átvétel?",
        answer:
          "Az időpont az autó helyétől, állapotától és a szállítási igénytől függ. A részleteket ajánlat után egyeztetjük."
      }
    ],
    related: ["/serult-auto-felvasarlas", "/keszpenzes-autofelvasarlas", "/autofelvasarlas-budapest"]
  },
  {
    slug: "keszpenzes-autofelvasarlas",
    path: "/keszpenzes-autofelvasarlas",
    title: "Készpénzes autófelvásárlás | Azonnali fizetés autó eladásakor",
    description:
      "Készpénzes autófelvásárlás Budapesten és országosan. Gyors ajánlat, egyeztetett átvétel és fizetés az adásvételkor.",
    h1: "Készpénzes autófelvásárlás",
    serviceName: "Készpénzes autófelvásárlás",
    lead:
      "Ha az autó eladásánál fontos a gyors fizetés és az egyszerű ügyintézés, a készpénzes autófelvásárlás praktikus megoldás lehet. A folyamat lényege, hogy a tulajdonos előzetes ajánlatot kap, majd elfogadás esetén a fizetés az adásvételkor történik.",
    sections: [
      {
        title: "Azonnali fizetés, átlátható folyamat",
        paragraphs: [
          "A készpénzes autófelvásárlás egyik legfontosabb előnye a kiszámíthatóság. Nem kell heteket várni egy komoly vevőre, nem kell bizonytalan érdeklődőkkel találkozni, és az adásvétel feltételei előre egyeztethetők.",
          "A fizetés módja az egyeztetés része. Azonnali fizetés alatt azt értjük, hogy elfogadott ajánlat és rendezett adásvétel esetén a fizetés a jármű átadásakor történik, készpénzben vagy megállapodás szerint azonnali utalással."
        ]
      },
      {
        title: "Milyen autókra kérhető készpénzes ajánlat?",
        paragraphs: [
          "Készpénzes ajánlat kérhető használt, régi, sokat futott, sérült, hibás vagy forgalomból kivont autóra is. A lényeg, hogy az állapot, a dokumentumok és a helyszín előre tisztázott legyen.",
          "A pontos értékeléshez szükséges a modell neve, évjárat, futásteljesítmény, üzemanyag típusa, váltó, képek és ismert hibák. Ha az autó nem működik vagy szállítást igényel, ezt is érdemes az ajánlatkérésben jelezni."
        ]
      },
      {
        title: "Budapest és országos készpénzes autófelvásárlás",
        paragraphs: [
          "Budapesten sok tulajdonos azért választ felvásárlást, mert gyorsan szeretne túladni egy már nem használt autón. Országosan is vállalható az egyeztetés, ha a helyszín és az autó állapota ismert.",
          "A budapesti kerületekben és vidéki helyszíneken is ugyanaz a cél: az autó adatai alapján ajánlatot adni, majd elfogadás esetén rendezett adásvételt és fizetést biztosítani."
        ]
      },
      {
        title: "Biztonságos adásvétel készpénzes fizetésnél",
        paragraphs: [
          "Készpénzes adásvételnél különösen fontos, hogy a dokumentumok rendben legyenek, és az átadás feltételei egyértelműek legyenek. A forgalmi engedély, törzskönyv, kulcsok és személyes okmányok meglétét érdemes előre ellenőrizni.",
          "A folyamat során segítséget nyújtunk az ügyintézésben. Nem teszünk ellenőrizhetetlen ígéreteket, hanem az autó valós állapota és az egyeztetett feltételek alapján történik az ajánlatadás."
        ]
      }
    ],
    faqs: [
      {
        question: "Tényleg készpénzben történhet a fizetés?",
        answer:
          "Igen, elfogadott ajánlat és rendezett adásvétel esetén a fizetés történhet készpénzben, vagy egyeztetés szerint azonnali utalással."
      },
      {
        question: "Mikor kapom meg az összeget?",
        answer:
          "A fizetés az adásvételkor történik, amikor az autó átadása és a szükséges dokumentumok rendezése megtörténik."
      },
      {
        question: "Sérült autóra is lehet készpénzes ajánlatot kérni?",
        answer:
          "Igen, sérült vagy hibás autóra is kérhető ajánlat, ha a sérülések és hibák előre ismertek."
      },
      {
        question: "Budapesten kívül is működik a szolgáltatás?",
        answer:
          "Igen, Budapest mellett országosan is lehet érdeklődni. A helyszín megadása segít a pontos egyeztetésben."
      },
      {
        question: "Mit küldjek az ajánlatkéréshez?",
        answer:
          "Modell, évjárat, futásteljesítmény, állapot, képek, ismert hibák és elérhetőség szükséges a gyors visszajelzéshez."
      }
    ],
    related: ["/autofelvasarlas-budapest", "/hasznaltauto-felvasarlas", "/roncsauto-felvasarlas"]
  },
  {
    slug: "autofelvasarlas-orszagosan",
    path: "/autofelvasarlas-orszagosan",
    title: "Autófelvásárlás országosan | Gyors ajánlat, azonnali fizetés",
    description:
      "Autófelvásárlás országosan használt, sérült, hibás vagy nem működő autókra. Kérjen ajánlatot képekkel és alapadatokkal.",
    h1: "Autófelvásárlás országosan",
    serviceName: "Autófelvásárlás országosan",
    lead:
      "Országos autófelvásárlási szolgáltatásunk azoknak szól, akik Budapest mellett vidéki városból, kisebb településről vagy nehezebben megközelíthető helyről szeretnének autót eladni. Használt, sérült, hibás, régi, nem induló és forgalomból kivont autóra is kérhető ajánlat.",
    sections: [
      {
        title: "Használtautó felvásárlás országosan",
        paragraphs: [
          "Az autó helye nem mindig esik közel egy kereskedéshez vagy felvásárlóhoz. Ezért fontos, hogy az ajánlatkérés már az első lépésben tartalmazza a pontos várost vagy települést, az autó állapotát, mozgathatóságát és a rendelkezésre álló dokumentumokat.",
          "Országos megkeresésnél a képek és az alapadatok különösen sokat számítanak. A márka, modell, évjárat, futásteljesítmény, üzemanyag, váltó, sérülések és helyszín alapján lehet előzetesen megítélni, hogy milyen ajánlat és átvételi feltétel reális."
        ]
      },
      {
        title: "Autófelvásárlás kedvező áron, reális értékeléssel",
        paragraphs: [
          "Kedvező ár alatt nem ellenőrizhetetlen ígéretet értünk, hanem olyan ajánlatot, amely figyelembe veszi az autó valós állapotát, piaci keresletét, dokumentumait és a szállítás körülményeit.",
          "A cél az, hogy a tulajdonos gyorsan kapjon használható visszajelzést, és ne kelljen hetekig hirdetésekre, alkudozásra vagy bizonytalan vevőkre várnia."
        ]
      },
      {
        title: "Azonnali fizetés adásvételkor",
        paragraphs: [
          "Elfogadott ajánlat esetén a fizetés az adásvételkor történik. A fizetés módja előzetes egyeztetés kérdése: készpénz vagy megállapodás szerinti azonnali utalás is szóba jöhet.",
          "A fizetés feltétele, hogy az autó állapota és dokumentumai megfeleljenek az előzetesen megadott információknak. Ezért fontos az őszinte hibaleírás és a pontos képek elküldése."
        ]
      },
      {
        title: "Országos átvétel és papírmunka",
        paragraphs: [
          "A helyszín, a hozzáférhetőség és az autó mozgathatósága meghatározza az átvétel módját. Nem működő vagy sérült autó esetén előre egyeztetni kell, hogy milyen szállításra van szükség.",
          "Az adásvételhez általában forgalmi engedély, törzskönyv, kulcsok és személyes okmányok szükségesek. Ha valami hiányzik, azt már ajánlatkéréskor érdemes jelezni."
        ]
      }
    ],
    faqs: [
      {
        question: "Valóban országosan vállaltok autófelvásárlást?",
        answer:
          "Igen, Budapest mellett országos megkereséseket is fogadunk. A pontos helyszín és az autó állapota alapján egyeztetjük a lehetőségeket."
      },
      {
        question: "Milyen adat kell országos ajánlatkéréshez?",
        answer:
          "Márka, modell, évjárat, futásteljesítmény, állapot, helyszín, képek, ismert hibák és elérhetőség szükséges a gyors értékeléshez."
      },
      {
        question: "Nem működő autó országosan is elszállítható?",
        answer:
          "Egyeztetés alapján igen, de a helyszín, hozzáférhetőség és az autó mozgathatósága fontos feltétel."
      },
      {
        question: "Mikor történik a fizetés?",
        answer:
          "Elfogadott ajánlat esetén a fizetés az adásvételkor történik, készpénzben vagy egyeztetés szerinti azonnali utalással."
      },
      {
        question: "Sérült autóra is kérhetek országos ajánlatot?",
        answer:
          "Igen, sérült, hibás, motorhibás vagy forgalomból kivont autóra is kérhető ajánlat."
      }
    ],
    related: ["/autofelvasarlas-budapest", "/hasznaltauto-felvasarlas", "/keszpenzes-autofelvasarlas"]
  },
  {
    slug: "motorhibas-auto-felvasarlas",
    path: "/motorhibas-auto-felvasarlas",
    title: "Motorhibás autó felvásárlás | Nem induló és javításra szoruló autók",
    description:
      "Motorhibás autó felvásárlás Budapesten és országosan. Ajánlat nem induló, javításra szoruló vagy gazdaságosan nem javítható autókra.",
    h1: "Motorhibás autó felvásárlás",
    serviceName: "Motorhibás autó felvásárlás",
    lead:
      "A motorhiba sokszor olyan javítási költséget jelent, amely mellett a tulajdonos inkább eladná az autót. Motorhibás, nem induló, füstölő, kopogó motorú vagy javításra nem érdemes autóra is kérhető ajánlat Budapesten és országosan.",
    sections: [
      {
        title: "Mikor érdemes motorhibás autót felvásárlónak eladni?",
        paragraphs: [
          "Ha a diagnosztika, bontás vagy javítás költsége bizonytalan, a magáneladás nehézkes lehet. A vevők tartanak a rejtett hibáktól, a szállítás problémás lehet, és a javítási kockázat miatt erős alkudozásra lehet számítani.",
          "Felvásárlásnál az ismert hiba nem akadály, hanem értékelési szempont. Fontos megírni, hogy az autó indul-e, járóképes-e, milyen hibajelenség látható, volt-e diagnosztika, és mozgatható-e a jármű."
        ]
      },
      {
        title: "Nem induló és javításra szoruló autók",
        paragraphs: [
          "Ajánlat kérhető olyan autóra is, amely nem indul, túlmelegszik, motorhibát jelez, erősen füstöl, kopog, hengerfejes, vezérlés- vagy turbóproblémás, illetve gazdaságosan már nem javítható.",
          "A pontos értékeléshez hasznosak a képek, a kilométeróra állása, a hibaleírás, a szerelői vélemény és az információ arról, hogy az autó mikor állt le vagy mióta nem használják."
        ]
      },
      {
        title: "Szállítás és átvétel motorhibás autónál",
        paragraphs: [
          "Motorhibás autó esetén gyakori, hogy az autó nem közlekedhet saját lábon. Ilyenkor előre egyeztetni kell a helyszínt, a hozzáférhetőséget és azt, hogy az autó gurítható-e.",
          "Budapesten és országosan is fogadunk megkeresést. A szállítás lehetősége mindig az autó állapotától és a helyszíntől függ."
        ]
      },
      {
        title: "Fizetés és dokumentumok",
        paragraphs: [
          "Elfogadott ajánlat esetén a fizetés az adásvételkor történik. A tulajdonosnak érdemes előkészíteni a forgalmi engedélyt, törzskönyvet, kulcsokat és a szükséges személyes okmányokat.",
          "Ha az autó forgalomból kivont, hiányos papírokkal rendelkezik vagy nem saját néven van, ezt már az ajánlatkérésben jelezni kell."
        ]
      }
    ],
    faqs: [
      {
        question: "Motorhibás autót is megvesztek?",
        answer:
          "Igen, motorhibás, nem induló vagy javításra szoruló autóra is lehet ajánlatot kérni."
      },
      {
        question: "Mi számít motorhibának?",
        answer:
          "Ide tartozhat a nem induló motor, füstölés, kopogás, hengerfejhiba, turbóhiba, vezérlésprobléma vagy más komoly motorhiba."
      },
      {
        question: "Kell szerelői diagnózis?",
        answer:
          "Nem kötelező, de ha van diagnózis vagy javítási ajánlat, segíthet pontosabb ajánlatot adni."
      },
      {
        question: "El tudjátok szállítani a nem induló autót?",
        answer:
          "Egyeztetés alapján igen, ha a helyszín és a hozzáférhetőség ezt lehetővé teszi."
      },
      {
        question: "Országosan is kérhető motorhibás autó felvásárlás?",
        answer:
          "Igen, Budapest mellett országos megkereséseket is fogadunk."
      }
    ],
    related: ["/serult-auto-felvasarlas", "/roncsauto-felvasarlas", "/autofelvasarlas-orszagosan"]
  },
  {
    slug: "hibas-auto-felvasarlas",
    path: "/hibas-auto-felvasarlas",
    title: "Hibás autó felvásárlás országosan | Gyors ajánlat és fizetés",
    description:
      "Hibás autó felvásárlás Budapesten, Pest megyében és országosan. Ajánlat motorhibás, váltóhibás, nem induló vagy javításra szoruló autókra.",
    h1: "Hibás autó felvásárlás",
    serviceName: "Hibás autó felvásárlás",
    lead:
      "Hibás autót magánúton eladni gyakran nehéz, mert a vevők tartanak a javítási költségektől és a rejtett problémáktól. Az Auto Felvásárlás BP hibás, nem induló, motorhibás, váltóhibás és javításra szoruló autókra is fogad ajánlatkérést Budapesten, Pest megyében és országosan.",
    sections: [
      {
        title: "Hibás autó felvásárlás országosan",
        paragraphs: [
          "Hibás autó felvásárlás országosan akkor lehet praktikus megoldás, ha az autó javítása már bizonytalan vagy aránytalanul drága lenne. Ilyen lehet a motorhiba, váltóhiba, elektronikai probléma, nem induló állapot, lejárt műszaki vagy régóta álló jármű.",
          "Az ajánlatkéréshez érdemes megadni a pontos hibajelenséget, a helyszínt, az autó mozgathatóságát, a futott kilométert, az évjáratot és néhány képet. Minél pontosabb az első leírás, annál gyorsabb az egyeztetés."
        ]
      },
      {
        title: "Nem induló és javításra szoruló autók",
        paragraphs: [
          "Nem induló autó esetén a szállítás és hozzáférhetőség fontos kérdés. Más feltételekkel vehető át egy utcán álló autó, mint egy mélygarázsban vagy udvarban lévő jármű.",
          "A javításra szoruló autóknál nem szükséges eltitkolni a hibákat. A korrekt ajánlat alapja az ismert probléma és a dokumentumok pontos bemutatása."
        ]
      },
      {
        title: "Fizetés és adásvétel hibás autónál",
        paragraphs: [
          "Elfogadott ajánlat esetén a fizetés az adásvételkor történik, készpénzben vagy egyeztetés szerinti azonnali utalással. Az adásvételi szerződés és a papírok rendezése a folyamat része.",
          "Ha a forgalmi, törzskönyv, kulcs vagy tulajdonosi helyzet nem egyértelmű, azt előre jelezni kell."
        ]
      }
    ],
    faqs: [
      {
        question: "Milyen hibás autóra kérhetek ajánlatot?",
        answer:
          "Motorhibás, váltóhibás, elektronikahibás, nem induló, lejárt műszakis vagy javításra szoruló autóra is kérhető ajánlat."
      },
      {
        question: "El kell indítanom az autót az átvételhez?",
        answer:
          "Nem feltétlenül. Ha az autó nem indul, ezt előre jelezze, hogy az átvétel és szállítás egyeztethető legyen."
      },
      {
        question: "Országosan is vásároltok hibás autót?",
        answer:
          "Igen, Budapest, Pest megye és országos helyszínek esetén is lehet ajánlatot kérni."
      },
      {
        question: "Mikor történik a fizetés?",
        answer:
          "Elfogadott ajánlat esetén a fizetés az adásvételkor történik, készpénzben vagy egyeztetés szerint azonnali utalással."
      }
    ],
    related: ["/motorhibas-auto-felvasarlas", "/serult-auto-felvasarlas", "/autofelvasarlas-orszagosan"]
  },
  {
    slug: "autofelvasarlas-pest-megye",
    path: "/autofelvasarlas-pest-megye",
    title: "Autófelvásárlás Pest megye | Használt és hibás autók átvétele",
    description:
      "Autófelvásárlás Pest megyében gyors ajánlattal, egyeztetett átvétellel és azonnali fizetéssel használt, sérült vagy hibás autókra.",
    h1: "Autófelvásárlás Pest megye",
    serviceName: "Autófelvásárlás Pest megye",
    lead:
      "Pest megyében sok autótulajdonos szeretne gyorsan, hirdetés nélkül túladni használt, hibás, sérült vagy nem működő autóján. Ajánlatkéréshez elegendő elküldeni az autó adatait, képeit, állapotát és pontos helyszínét.",
    sections: [
      {
        title: "Használt autó felvásárlás Pest megyében",
        paragraphs: [
          "Pest megye településeiről, agglomerációs városokból és kisebb falvakból is lehet ajánlatot kérni. A helyszín azért fontos, mert az átvétel, szállítás és időpont-egyeztetés így tervezhető.",
          "Használt autó, régi autó, sokat futott jármű, sérült vagy hibás autó esetén is érdemes képeket és pontos állapotleírást küldeni."
        ]
      },
      {
        title: "Sérült és hibás autó felvásárlás Pest megyében",
        paragraphs: [
          "Sérült, törött, motorhibás, váltóhibás vagy nem induló autóra is kérhető ajánlat Pest megyében. Ilyenkor a szállítási feltételeket előre egyeztetjük.",
          "A gyors egyeztetéshez fontos tudni, hogy az autó mozgatható-e, hol áll, és milyen dokumentumok állnak rendelkezésre."
        ]
      },
      {
        title: "Azonnali fizetés és egyeztetett átvétel",
        paragraphs: [
          "Elfogadott ajánlat esetén az adásvételkor történik a fizetés, készpénzben vagy egyeztetés szerinti azonnali utalással. Az átvétel időpontját és módját előre egyeztetjük.",
          "A folyamat célja, hogy az autó eladása Pest megyében is átlátható, gyors és rendezett legyen."
        ]
      }
    ],
    faqs: [
      {
        question: "Pest megye mely településeiről lehet ajánlatot kérni?",
        answer:
          "Pest megye teljes területéről fogadunk megkeresést. A pontos települést és címet ajánlatkéréskor érdemes megadni."
      },
      {
        question: "Hibás autót is átvesztek Pest megyében?",
        answer:
          "Igen, hibás, sérült, motorhibás vagy nem induló autóra is kérhető ajánlat."
      },
      {
        question: "Kell képet küldeni az autóról?",
        answer:
          "Igen, a képek segítenek a gyorsabb és pontosabb ajánlatadásban."
      },
      {
        question: "Mikor fizettek?",
        answer:
          "Elfogadott ajánlat esetén a fizetés az adásvételkor történik."
      }
    ],
    related: ["/autofelvasarlas-orszagosan", "/autofelvasarlas-budapest", "/hibas-auto-felvasarlas"]
  }
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function serviceLinkLabel(path: string) {
  return servicePages.find((page) => page.path === path)?.h1 || "autófelvásárlási szolgáltatás";
}
