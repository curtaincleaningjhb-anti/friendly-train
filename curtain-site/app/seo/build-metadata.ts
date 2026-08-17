import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt: string;
};

export function buildMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultSocialImage,
  imageAlt,
}: SeoInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title,
      description,
      url: path,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
