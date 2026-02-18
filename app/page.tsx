import type { Metadata } from "next";
import NewsOfTheTribe from "@/components/NewsOfTheTribe";

export const metadata: Metadata = {
  title: "Personalised Family Newspaper for Grandparents | News of the Tribe Australia",
  description:
    "Create a personalised printed family newspaper filled with photos and stories. Delivered monthly to grandparents across Australia.",
  alternates: {
    canonical: "/",
  },
};


export default function Home() {
  const jsonLd = {
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
        name: "Personalised Family Newspaper Subscription",
        description:
          "Monthly printed family newspaper delivered to grandparents and loved ones.",
        brand: {
          "@type": "Brand",
          name: "News of the Tribe",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "AUD",
          lowPrice: "19.99",
          highPrice: "24.99",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewsOfTheTribe />
    </>
  );
}
