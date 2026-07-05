import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { getSettings } from "@/lib/db";
import { pageMetadata } from "@/lib/metadata";
import { getServicePage } from "@/lib/service-pages";

const page = getServicePage("hasznaltauto-felvasarlas");

export const metadata = page
  ? pageMetadata({
      title: page.title,
      description: page.description,
      path: page.path
    })
  : {};

export default async function HasznaltautoFelvasarlasPage() {
  if (!page) notFound();
  const settings = await getSettings();
  return <ServicePageTemplate page={page} settings={settings} />;
}
