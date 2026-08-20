import type { Metadata } from "next";
import Link from "next/link";
import { EditorialHero, EditorialShell } from "../editorial-page";
import { editorialPages } from "../editorial-content";
import { buildMetadata } from "../seo/build-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Curtain & Fabric Care Guides | JHB Curtain Cleaning",
  description: "Individual Johannesburg guides for curtain fabrics, blinds, stains, cleaning frequency, offices, theatres, protection and quote preparation.",
  path: "/guides",
  image: "/heroes/editorial-care-library-hero.webp",
  imageAlt: "Curtain and fabric care guides from JHB Curtain Cleaning",
});

const guides = editorialPages.filter((page) => page.path.startsWith("/guides/"));

export default function GuidesPage() {
  return (
    <EditorialShell contactTitle="Need advice for a particular fabric, blind or property?">
      <EditorialHero eyebrow="Fabric-care guides" title="Practical guidance for informed fabric-care decisions." description="Detailed, assessment-led resources for Johannesburg homes, offices, hotels, schools, venues and specialist fabrics." />
      <section className="section section-light"><div className="page-shell editorial-card-grid editorial-card-grid-guides">{guides.map((guide, index) => <article key={guide.path}><span>{String(index + 1).padStart(2, "0")} · Specialist guide</span><h2>{guide.shortTitle}</h2><p>{guide.description}</p><Link href={guide.path}>Read the complete guide →</Link></article>)}</div></section>
      <section className="guide-cta-section"><div className="page-shell guide-cta"><div><span className="eyebrow">Ask a specialist</span><h2>Not sure which guide fits your curtains?</h2><p>Use the quote-preparation checklist, then send photographs or request an assessment for fabric-specific advice.</p></div><Link className="button" href="/guides/how-to-get-curtain-cleaning-quote">Prepare for a quote</Link></div></section>
    </EditorialShell>
  );
}
