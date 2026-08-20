export const siteConfig = {
  name: "JHB Curtain Cleaning",
  origin: "https://www.jhbcurtaincleaning.co.za",
  locale: "en_ZA",
  language: "en-ZA",
  phone: "+27750119200",
  displayPhone: "+27 75 011 9200",
  email: "info@jhbcurtaincleaning.co.za",
  defaultSocialImage: "/hero-luxury.webp",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.origin).href;
}
