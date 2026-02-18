import type { Metadata } from "next";
import NewsOfTheTribe from "@/components/NewsOfTheTribe";

export const metadata: Metadata = {
  title: "Printed Family Newsletter | Monthly Family Newspaper Australia",
  description:
    "A printed family newsletter delivered monthly. Turn your photos and stories into a professional family newspaper for grandparents and loved ones across Australia.",
  alternates: {
    canonical: "/printed-family-newsletter",
  },
};

export default function Page() {
  return (
    <NewsOfTheTribe
      seoIntro={{
        title: "A Printed Family Newsletter People Actually Read",
        subtitle: "Turn Photos & Stories into a Family Newspaper",
        paragraph:
          "Create a monthly printed family newsletter that keeps grandparents and relatives connected — no apps, no social media, just a beautiful newspaper delivered to their door.",
      }}
    />
  );
}
