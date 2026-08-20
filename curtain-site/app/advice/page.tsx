import type { Metadata } from "next";
import Link from "next/link";
import { EditorialHero, EditorialShell } from "../editorial-page";
import { editorialPages } from "../editorial-content";
import { buildMetadata } from "../seo/build-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Curtain Cleaning Advice Johannesburg | JHB Curtain Cleaning",
  description: "Assessment-led guidance on curtain cleaning prices, on-site service and method choices for Johannesburg homes and organisations.",
  path: "/advice",
  image: "/heroes/editorial-care-library-hero.webp",
  imageAlt: "Curtain cleaning advice from JHB Curtain Cleaning",
});

const advicePages = editorialPages.filter((page) => page.path.startsWith("/advice/"));

export default function AdviceIndexPage() {
  return (
    <EditorialShell contactTitle="Need help choosing the right next step?">
      <EditorialHero eyebrow="Expert advice" title="Understand the scope before you approve the work." description="Clear Johannesburg guidance on quotation factors, on-site service and choosing between cleaning approaches." />
      <section className="section section-light"><div className="page-shell editorial-card-grid">{advicePages.map((page, index) => <article key={page.path}><span>{String(index + 1).padStart(2, "0")} · Decision guide</span><h2>{page.shortTitle}</h2><p>{page.description}</p><Link href={page.path}>Read the complete guide →</Link></article>)}</div></section>
      <section className="guide-cta-section"><div className="page-shell guide-cta"><div><span className="eyebrow">Assessment first</span><h2>Bring the fabric, construction and access questions together.</h2><p>Send photographs and the basic job details, or arrange an on-site assessment for a written quotation.</p></div><Link className="button" href="/guides/how-to-get-curtain-cleaning-quote">Prepare for a quote</Link></div></section>
    </EditorialShell>
  );
}
