import { notFound } from "next/navigation";
import { LocationPageTemplate } from "@/components/LocationPageTemplate";
import { getSettings } from "@/lib/db";
import { getLocationPage } from "@/lib/location-pages";
import { pageMetadata } from "@/lib/metadata";

const page = getLocationPage("autofelvasarlas-miskolc");

export const metadata = page ? pageMetadata({ title: page.title, description: page.description, path: page.path }) : {};

export default async function LocationPage() {
  if (!page) notFound();
  const settings = await getSettings();
  return <LocationPageTemplate page={page} settings={settings} />;
}
