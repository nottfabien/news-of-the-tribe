import type { Metadata } from "next";
import NewsOfTheTribe from "@/components/NewsOfTheTribe";

export const metadata: Metadata = {
  title: "Personalised Gift for Grandparents in Australia",
  description:
    "A meaningful personalised gift for grandparents: a printed family newspaper filled with photos and stories, delivered monthly across Australia.",
  alternates: {
    canonical: "/gift-for-grandparents",
  },
};

export default function Page() {
  return <NewsOfTheTribe seoIntro={{
    title: "A Personalised Gift for Grandparents They’ll Treasure",
    subtitle: "Printed Monthly • Delivered in Australia",
    paragraph:
      "Turn everyday family moments into a printed newspaper grandparents can hold, read, and keep—no social media or smartphone required.",
  }} />;
}

