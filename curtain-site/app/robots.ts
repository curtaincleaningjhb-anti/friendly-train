import type { MetadataRoute } from "next";
import { absoluteUrl } from "./seo/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: ["GPTBot", "PerplexityBot", "ClaudeBot", "Google-Extended"], allow: "/", disallow: "/api/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
