import type { MetadataRoute } from "next";

const SITE = "https://www.newsofthetribe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Homepage
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    // SEO Landing Pages
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

    // Blog index
    {
      url: `${SITE}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Blog articles
    {
      url: `${SITE}/blog/gift-ideas-for-grandparents`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE}/blog/how-to-keep-family-connected-long-distance`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE}/blog/how-to-involve-kids-in-family-storytelling`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE}/blog/loneliness-and-staying-connected-with-family`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Legal
    {
      url: `${SITE}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}