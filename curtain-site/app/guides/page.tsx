import type { Metadata } from "next";
import { EditorialHero, EditorialShell } from "../editorial-page";
import { buildMetadata } from "../seo/build-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Curtain & Fabric Care Guides | JHB Curtain Cleaning",
  description: "Practical curtain, mattress, upholstery and rug-care guidance for Johannesburg homes and businesses, with links to specialist help.",
  path: "/guides",
  image: "/heroes/editorial-care-library-hero.webp",
  imageAlt: "Curtain and fabric care guides from JHB Curtain Cleaning",
});

const guides = [
  ["Curtain care", "The Johannesburg curtain-care guide", "How dust, sunlight, pets and open windows affect cleaning frequency—and when to call a specialist.", "/services/curtain-blind-cleaning", "Professional on-site curtain cleaning in Johannesburg"],
  ["Healthy homes", "A practical mattress hygiene checklist", "The signs that a mattress needs professional attention, plus simple habits between deep cleans.", "/services/mattress-sanitisation", "Deep mattress sanitisation and allergen care"],
  ["Furniture care", "First aid for upholstery spills", "What to do immediately, what to avoid and when a mark needs fabric-specific treatment.", "/services/upholstery-carpet-cleaning", "Johannesburg upholstery and carpet cleaning"],
  ["Rug care", "Protecting Persian and Oriental rugs", "A concise guide to rotation, vacuuming, sunlight, storage and specialist cleaning.", "/services/rug-care", "Specialist Persian and Oriental rug care"],
];

export default function GuidesPage() {
  return (
    <EditorialShell contactTitle="Need advice for a particular fabric?">
      <EditorialHero eyebrow="Fabric-care guides" title="Practical knowledge for beautifully kept spaces." description="Clear, useful guidance for caring for curtains, mattresses, upholstery and rugs in Johannesburg spaces." />
      <section className="section section-light"><div className="page-shell editorial-card-grid">{guides.map(([category, title, copy, href, linkLabel], index) => <article key={title}><span>0{index + 1} · {category}</span><h2>{title}</h2><p>{copy}</p><a href={href}>{linkLabel} →</a></article>)}</div></section>
      <section className="guide-cta-section"><div className="page-shell guide-cta"><div><span className="eyebrow">Ask a specialist</span><h2>Not sure what your fabric needs?</h2><p>Send a photo by WhatsApp for practical first-step advice and a free assessment.</p></div><a className="button" href="https://wa.me/27750119200">WhatsApp a photo</a></div></section>
    </EditorialShell>
  );
}
