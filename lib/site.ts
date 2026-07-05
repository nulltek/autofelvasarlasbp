import type { Settings } from "@/lib/types";

export const primaryWebsiteUrl = "https://auto-felvasarlas-bp.hu";
export const siteName = "Auto Felvásárlás BP";
export const siteTitle = "Autófelvásárlás Budapest | Gyors ajánlat, azonnali fizetés";
export const siteDescription =
  "Használt, sérült vagy hibás autó eladása Budapesten? Gyors ajánlat, korrekt ügyintézés, azonnali fizetés és országos kiszállás.";

export const defaultSettings: Settings = {
  businessEmail: "autofelvasarlasb@gmail.com",
  publicEmail: "autofelvasarlasb@gmail.com",
  phone: "+36 20 468 1856",
  facebookUrl: "https://facebook.com/",
  tiktokUrl: "https://www.tiktok.com/",
  instagramUrl: "https://instagram.com/",
  openingHours: "Hétfő - Vasárnap: 8:00 - 20:00",
  serviceArea: "Budapest és ország egész területe"
};

export function getBaseUrl() {
  return primaryWebsiteUrl;
}

export function absoluteUrl(path: string) {
  return `${getBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

export const navItems = [
  { href: "/", label: "Főoldal" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/kapcsolat", label: "Kapcsolat" },
  { href: "/gyik", label: "GYIK" }
];

export const serviceLinks = [
  { href: "/autofelvasarlas-budapest", label: "autófelvásárlás Budapesten" },
  { href: "/autofelvasarlas-orszagosan", label: "autófelvásárlás országosan" },
  { href: "/hasznaltauto-felvasarlas", label: "használtautó felvásárlás" },
  { href: "/serult-auto-felvasarlas", label: "sérült autó felvásárlása" },
  { href: "/motorhibas-auto-felvasarlas", label: "motorhibás autó felvásárlás" },
  { href: "/roncsauto-felvasarlas", label: "roncsautó felvásárlás" },
  { href: "/keszpenzes-autofelvasarlas", label: "készpénzes autófelvásárlás" }
];

export const routes = [
  "/",
  "/rolunk",
  "/kapcsolat",
  "/gyik",
  "/ajanlatkeres",
  "/ajanlatkeres/koszonjuk",
  "/uzenet-elkuldve",
  "/autofelvasarlas-budapest",
  "/autofelvasarlas-orszagosan",
  "/hasznaltauto-felvasarlas",
  "/serult-auto-felvasarlas",
  "/motorhibas-auto-felvasarlas",
  "/roncsauto-felvasarlas",
  "/keszpenzes-autofelvasarlas",
  "/tanacsok/hogyan-adjam-el-az-autom-gyorsan",
  "/tanacsok/serult-auto-eladasa",
  "/tanacsok/keszpenzes-autofelvasarlas-menete"
];
