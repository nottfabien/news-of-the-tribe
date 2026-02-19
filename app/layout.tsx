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
    "Transform your family photos into a personalised printed family newspaper. Perfect for grandparents and loved ones who aren't on social media. Monthly delivery across Australia (and worldwide).",

  keywords: [
    "family newspaper",
    "print family photos",
    "connect grandparents",
    "family newsletter",
    "printed family memories",
    "elderly communication",
    "personalised newspaper",
  ],

  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: "News of the Tribe",
    title: "Printed Family Newspaper for Grandparents",
    description:
      "Monthly printed family newspaper made from your photos and stories. Easy for grandparents to read and keep.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "News of the Tribe - Printed family newspaper",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Printed Family Newspaper for Grandparents",
    description: "Keep grandparents connected with a printed family newspaper.",
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

  // IMPORTANT:
  // Do NOT set a global canonical to the homepage here.
  // Each page should set its own canonical via metadata.alternates.canonical
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "News of the Tribe",
    url: "https://www.newsofthetribe.com",
    logo: "https://www.newsofthetribe.com/images/NOTT-Logo5gradient.png",
    areaServed: "Australia",
  };

  return (
    <html lang="en-AU">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
