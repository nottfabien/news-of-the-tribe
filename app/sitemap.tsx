import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";

const SITE = "https://www.newsofthetribe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Homepage ────────────────────────────────────────────────────────────
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    // ── SEO Landing Pages ───────────────────────────────────────────────────
    {
      url: `${SITE}/gift-for-grandparents`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/gift-for-grandma`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/personalised-newspaper-gift`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/printed-family-newsletter`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/aged-care-family-connection`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── Blog index ──────────────────────────────────────────────────────────
    {
      url: `${SITE}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // ── Blog articles — dynamic, auto-includes every post in posts.ts ───────
    ...posts.map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),

    // ── Legal ───────────────────────────────────────────────────────────────
    {
      url: `${SITE}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}