import type { Metadata } from "next";
import NewsOfTheTribe from "@/components/NewsOfTheTribe";

export const metadata: Metadata = {
  title: "Gift for Grandma | Personalised Printed Family Newspaper Australia",
  description:
    "A heartfelt gift for grandma: a personalised printed family newspaper filled with photos and stories. Delivered monthly across Australia.",
  alternates: {
    canonical: "/gift-for-grandma",
  },
};

export default function Page() {
  return (
    <NewsOfTheTribe
      seoIntro={{
        title: "The Most Heartfelt Gift for Grandma",
        subtitle: "Personalised • Printed • Delivered Monthly",
        paragraph:
          "Make grandma feel truly included in everyday family life. We transform your photos and stories into a beautifully printed newspaper she can read, re-read, and treasure.",
      }}
    />
  );
}
