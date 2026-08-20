import type { Metadata } from "next";
import Link from "next/link";
import { EditorialHero, EditorialShell } from "../editorial-page";
import { buildMetadata } from "../seo/build-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Fabric Care Journal | JHB Curtain Cleaning",
  description: "Browse individual Johannesburg curtain and fabric-care articles on frequency, on-site service, delicate fabrics, stains, quotes and method choices.",
  path: "/blog",
  image: "/heroes/editorial-care-library-hero.webp",
  imageAlt: "Fabric care journal from JHB Curtain Cleaning",
});

const articles = [
  ["Curtain care", "How often should curtains be cleaned in Johannesburg?", "Use condition, exposure, construction and property use to plan an appropriate care interval.", "/guides/how-often-clean-curtains-johannesburg"],
  ["Expert advice", "How on-site curtain cleaning works", "Understand suitability checks, preparation, room protection and the factors that affect timing.", "/advice/how-on-site-curtain-cleaning-works"],
  ["Method comparison", "Curtain cleaning vs washing vs dry cleaning", "Compare method language, likely handling, assessment needs and referral conditions.", "/advice/curtain-cleaning-vs-washing-vs-dry-cleaning"],
  ["Fabric guide", "Cleaning delicate curtain fabrics", "Review silk, velvet, linen, sheers, lace, voile and designer-fabric assessment factors.", "/guides/delicate-curtain-fabrics-silk-velvet-linen-sheers"],
  ["Problem guide", "Curtain stains, odours and mould: what to do", "Take sensible first steps, avoid common damage and understand textile-cleaning boundaries.", "/guides/curtain-stains-odours-mould-what-to-do"],
  ["Quote planning", "How to prepare for a curtain cleaning quote", "Gather useful photographs, measurements, fabric details, access notes and scheduling requirements.", "/guides/how-to-get-curtain-cleaning-quote"],
];

export default function BlogPage() {
  return (
    <EditorialShell contactTitle="Need advice for a particular fabric or space?">
      <EditorialHero eyebrow="The fabric-care journal" title="Individual guides for better fabric-care decisions." description="Start with the question that matters, then follow a complete article to its service, sector and assessment links." />
      <section className="section section-light"><div className="page-shell editorial-card-grid">{articles.map(([category, title, copy, href], index) => <article key={href}><span>{String(index + 1).padStart(2, "0")} · {category}</span><h2>{title}</h2><p>{copy}</p><Link href={href}>Read the individual article →</Link></article>)}</div></section>
      <section className="guide-cta-section"><div className="page-shell guide-cta"><div><span className="eyebrow">Complete library</span><h2>Browse all specialist curtain and blind guides.</h2><p>The guide hub organises fabric, problem, sector, protection and maintenance topics in one place.</p></div><Link className="button" href="/guides">View all guides</Link></div></section>
    </EditorialShell>
  );
}
