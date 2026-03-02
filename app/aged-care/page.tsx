import type { Metadata } from "next";
import AgedCarePage from "@/components/AgedCarePage";

export const metadata: Metadata = {
  title: "Family Connection for Aged Care Residents | News of the Tribe",
  description:
    "Help residents feel seen, loved and connected with a printed monthly family newspaper. Delivered directly to your facility. Free first edition for every resident family.",
  alternates: { canonical: "/aged-care" },
  openGraph: {
    title: "Printed Family Newspaper for Aged Care Residents",
    description:
      "Reduce resident loneliness and support family wellbeing with a monthly printed newspaper. No screens, no passwords — just warmth delivered to the door.",
    images: [{ url: "/images/aged-care-og.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "News of the Tribe – Aged Care Partner Program",
    provider: { "@type": "Organization", name: "News of the Tribe" },
    description:
      "Monthly printed family newspaper delivered to aged care residents. Reduces loneliness, supports wellbeing, and keeps families connected.",
    areaServed: "Australia",
    url: "https://www.newsofthetribe.com/aged-care",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgedCarePage />
    </>
  );
}