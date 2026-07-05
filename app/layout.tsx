import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getSettings } from "@/lib/db";
import { absoluteUrl, getBaseUrl, siteDescription, siteName, siteTitle } from "@/lib/site";
import "./globals.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  alternates: {
    canonical: absoluteUrl("/")
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: absoluteUrl("/"),
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
    }
  };

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();

  return (
    <html lang="hu">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GQY82J9JFN" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GQY82J9JFN');
          `}
        </Script>
        <Header settings={settings} />
        <main>{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
