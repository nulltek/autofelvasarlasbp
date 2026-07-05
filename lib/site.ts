import type { Settings } from "@/lib/types";

export const siteName = "Autófelvásárlás";
export const siteTitle = "Autófelvásárlás - használt autó felvásárlás gyorsan";
export const siteDescription =
  "Használt autó felvásárlás országos lefedettséggel, korrekt ajánlattal és gyors ügyintézéssel.";

export const defaultSettings: Settings = {
  businessEmail: "autofelvasarlasb@gmail.com",
  publicEmail: "autofelvasarlasb@gmail.com",
  phone: "+36 20 468 1856",
  facebookUrl: "https://facebook.com/",
  tiktokUrl: "https://www.tiktok.com/",
  instagramUrl: "https://instagram.com/",
  openingHours: "Hétfő - Vasárnap: 8:00 - 20:00",
  serviceArea: "Ország egész területe"
};

export function getBaseUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
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

export const routes = [
  "/",
  "/rolunk",
  "/kapcsolat",
  "/gyik",
  "/ajanlatkeres",
  "/ajanlatkeres/koszonjuk",
  "/uzenet-elkuldve"
];
