import type { Metadata } from "next";
import NewsOfTheTribe from "@/components/NewsOfTheTribe";

export const metadata: Metadata = {
  title: "Personalised Newspaper Gift | Printed Family Newsletter Australia",
  description:
    "Create a personalised newspaper gift using your family photos and stories. Professionally printed and delivered monthly throughout Australia.",
  alternates: {
    canonical: "/personalised-newspaper-gift",
  },
};

export default function Page() {
  return (
    <NewsOfTheTribe
      seoIntro={{
        title: "A Personalised Newspaper Gift Made from Real Family Moments",
        subtitle: "Professional Print • Monthly Delivery",
        paragraph:
          "Skip generic presents. Create a personalised newspaper filled with photos, updates, and stories — printed professionally and delivered to the people who matter most.",
      }}
    />
  );
}

