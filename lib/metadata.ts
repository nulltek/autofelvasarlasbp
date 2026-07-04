import type { Metadata } from "next";
import { absoluteUrl, siteDescription, siteName } from "@/lib/site";

type PageMeta = {
  title: string;
  description?: string;
  path: string;
};

export function pageMetadata({ title, description = siteDescription, path }: PageMeta): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "hu_HU",
      type: "website",
      images: [
        {
          url: absoluteUrl("/images/og-banner.jpg"),
          width: 1200,
          height: 630,
          alt: "Autófelvásárlás banner autóval és elérhetőségekkel"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/images/og-banner.jpg")]
    }
  };
}
