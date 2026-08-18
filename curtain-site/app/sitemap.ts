import type { MetadataRoute } from "next";
import { editorialPages } from "./editorial-content";
import { absoluteUrl, siteConfig } from "./seo/site-config";
import { allDetailPages } from "./site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.origin, changeFrequency: "weekly", priority: 1 },
    ...["services", "sectors", "areas"].map((category) => ({ url: absoluteUrl(`/${category}`), changeFrequency: "monthly" as const, priority: 0.9 })),
    ...allDetailPages.map(({ path, kind }) => ({ url: absoluteUrl(path), changeFrequency: "monthly" as const, priority: kind === "service" ? 0.9 : 0.8 })),
    { url: absoluteUrl("/advice"), changeFrequency: "monthly", priority: 0.8 },
    ...editorialPages.map(({ path }) => ({ url: absoluteUrl(path), changeFrequency: "monthly" as const, priority: path === "/case-studies" ? 0.8 : 0.75 })),
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/guides"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/gallery"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/blog"), changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/newsletter"), changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/privacy-policy"), changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/terms-of-service"), changeFrequency: "yearly", priority: 0.2 },
  ];
}
