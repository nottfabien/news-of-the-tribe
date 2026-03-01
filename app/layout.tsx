import "./globals.css";
import type { Metadata } from "next";
import GoogleTagManager from "@/components/GoogleTagManager";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.newsofthetribe.com"),

  title: {
    default: "News of the Tribe | Printed Family Newspaper for Grandparents",
    template: "%s | News of the Tribe",
  },

  description:
    "Australia's #1 printed family newspaper for grandparents. Turn your family photos into a personalised monthly newspaper — mailed directly to grandparents and aged care residents. No app needed on their end.",

  keywords: [
    "gift for grandparents Australia",
    "personalised gift for grandma",
    "printed family newspaper Australia",
    "gift ideas for grandparents",
    "aged care family connection",
    "family newspaper for elderly",
    "printed photo newspaper grandparents",
    "meaningful gift for grandparents",
    "family connection aged care residents",
    "personalised newspaper gift Australia",
  ],

  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: "News of the Tribe",
    title: "Printed Family Newspaper for Grandparents | News of the Tribe",
    description:
      "Monthly printed family newspaper made from your photos and stories. Mailed to grandparents across Australia — no technology required on their end.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "News of the Tribe - Personalised printed family newspaper for grandparents Australia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Printed Family Newspaper for Grandparents | News of the Tribe",
    description:
      "Turn your family photos into a personalised printed newspaper, mailed monthly to grandparents across Australia.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Do NOT set a global canonical here.
  // Each page sets its own via metadata.alternates.canonical
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "News of the Tribe",
    url: "https://www.newsofthetribe.com",
    logo: "https://www.newsofthetribe.com/images/NOTT-Logo5gradient.png",
    areaServed: "Australia",
    sameAs: [
      "https://www.facebook.com/newsofthetribe",
      "https://www.instagram.com/newsofthetribe",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@newsofthetribe.com",
      contactType: "customer support",
      areaServed: "AU",
      availableLanguage: "English",
    },
  };

  return (
    <html lang="en-AU">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <GoogleTagManager />
        {children}
      </body>
    </html>
  );
}