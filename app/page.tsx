import type { Metadata } from "next";
import NewsOfTheTribe from "@/components/NewsOfTheTribe";

export const metadata: Metadata = {
  title: "Personalised Family Newspaper for Grandparents | News of the Tribe Australia",
  description:
    "Create a personalised printed family newspaper filled with photos and stories. Delivered monthly to grandparents and aged care residents across Australia. From $19.99 AUD. No technology required on their end.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  // ── Product + AggregateRating ──────────────────────────────────────────────
  // AggregateRating unlocks ⭐⭐⭐⭐⭐ stars in Google search results.
  // Update reviewCount as real reviews grow.
  const productJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "News of the Tribe",
        url: "https://www.newsofthetribe.com",
        logo: "https://www.newsofthetribe.com/images/NOTT-Logo5gradient.png",
        areaServed: "Australia",
      },
      {
        "@type": "Product",
        name: "News of the Tribe — Personalised Printed Family Newspaper",
        description:
          "Monthly personalised printed family newspaper delivered to grandparents and aged care residents across Australia. Made from your family's photos and stories. No technology required on the recipient's end.",
        brand: {
          "@type": "Brand",
          name: "News of the Tribe",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "AUD",
          lowPrice: "19.99",
          highPrice: "24.99",
          offerCount: "3",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",   // ← update this number regularly
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  };

  // ── FAQPage ────────────────────────────────────────────────────────────────
  // Gets expandable Q&A rich snippets directly in Google search results.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best gift for grandparents in Australia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A personalised printed family newspaper is one of the most meaningful gifts for grandparents in Australia. It arrives monthly in their letterbox filled with family photos and stories — no technology required on their end. Services like News of the Tribe start from $19.99 AUD/month.",
        },
      },
      {
        "@type": "Question",
        name: "Does the grandparent need a smartphone or internet to receive the newspaper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The recipient receives a physical printed newspaper in the mail. No smartphone, tablet, or internet connection is required. Family members contribute via the app, and the newspaper is printed and mailed directly to the grandparent's address.",
        },
      },
      {
        "@type": "Question",
        name: "How often is the family newspaper printed and delivered?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "News of the Tribe prints and mails your personalised family newspaper every first Monday of the month. Worldwide delivery is included in all plans.",
        },
      },
      {
        "@type": "Question",
        name: "Can multiple family members contribute to the newspaper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Up to 300 family members can be invited to contribute photos, stories, and updates throughout the month — including family members living overseas.",
        },
      },
      {
        "@type": "Question",
        name: "Can News of the Tribe be delivered to an aged care facility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The newspaper is mailed to any address in Australia including aged care homes and nursing facilities. Simply use the facility's address and the resident's room number as the delivery address.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a contract or minimum commitment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No contracts. Plans start from $19.99 AUD per month and can be cancelled or changed anytime. Your first two months are available at a special welcome price.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <NewsOfTheTribe />
    </>
  );
}