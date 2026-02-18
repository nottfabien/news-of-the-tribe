import type { MetadataRoute } from "next";

const SITE = "https://www.newsofthetribe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    // SEO Landing Pages (create these next)
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
      url: `${SITE}/printed-family-newspaper`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Legal
    {
      url: `${SITE}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // Blog (future growth engine)
    {
      url: `${SITE}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
