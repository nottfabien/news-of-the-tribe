import type { Metadata } from "next";
import AgedCarePage from "@/components/AgedCarePage";

export const metadata: Metadata = {
  title: "Family Connection for Aged Care Residents | News of the Tribe",
  description: "Help residents feel seen, loved and connected...",
  alternates: { canonical: "/aged-care" },
  openGraph: {
    title: "Printed Family Newspaper for Aged Care Residents",
    description: "Reduce resident loneliness...",
    images: [{ url: "/images/aged-care-og.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  const jsonLd = { ... };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AgedCarePage />
    </>
  );
}