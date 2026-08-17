import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../seo/build-metadata";
import { ContactSection, Footer, Header } from "../site-chrome";

export const metadata: Metadata = buildMetadata({
  title: "Fabric Care Journal | JHB Curtain Cleaning",
  description: "Read practical Johannesburg guidance on curtain-cleaning frequency, mattress hygiene and the advantages of carefully planned on-site service.",
  path: "/blog",
  image: "/heroes/editorial-care-library-hero.webp",
  imageAlt: "Fabric care journal from JHB Curtain Cleaning",
});

const articles = [
  {
    id: "curtain-cleaning-frequency",
    category: "Curtain care",
    title: "How often should curtains be cleaned in Johannesburg?",
    intro: "Dust, pollen, traffic exposure, pets and open windows all affect the right cleaning interval. Here is a practical way to decide.",
    body: ["For many Johannesburg homes, a professional clean every 12 to 24 months is a sensible starting point. Homes near busy roads, properties with pets, allergy-sensitive households and hospitality environments may need attention more often.", "Look for dulling along leading edges, visible dust in folds, stale odours or irritation when curtains are moved. On-site cleaning makes scheduled care simpler because there is no removal, transport, rehanging or extended drying period."],
  },
  {
    id: "mattress-signs",
    category: "Healthy homes",
    title: "Five signs your mattress may need professional cleaning",
    intro: "A mattress can look tidy while still holding dust, allergens and everyday residue below the surface.",
    body: ["Consider a professional assessment when there are persistent odours, visible marks, increased allergy symptoms at night, a long gap since the last deep clean or a change of occupant.", "Regular linen care remains essential, but it does not replace treatment of the mattress surface itself. A fabric-safe professional process can refresh the sleep environment with minimal disruption."],
  },
  {
    id: "onsite-savings",
    category: "Expert advice",
    title: "Why on-site curtain cleaning can reduce handling and disruption",
    intro: "Traditional curtain cleaning includes labour and risk that are easy to overlook: removal, transport, drying, pressing and rehanging.",
    body: ["An on-site process removes several handling stages. The practical gain is continuity: rooms remain intact, curtains stay on their tracks and the service can be scheduled around the property.", "A fabric assessment is still essential, particularly for lined, interlined and delicate window treatments, because construction and prior condition affect the appropriate treatment."],
  },
];

export default function BlogPage() {
  return (
    <main>
      <section className="inner-hero journal-hero" style={{ backgroundImage: "url(/heroes/editorial-care-library-hero.webp)" }}><div className="inner-hero-shade" /><Header compact /><div className="page-shell inner-hero-content"><nav className="breadcrumb-trail" aria-label="Breadcrumb"><Link className="breadcrumb" href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Blog</span></nav><span className="eyebrow">The fabric-care journal</span><h1>Practical guidance for beautifully cared-for spaces.</h1><p>Local guidance for curtains, mattresses and specialist fabrics in Johannesburg homes and businesses.</p><div className="hero-cta"><Link className="button" href="/guides">Browse care guides</Link><Link className="button button-outline" href="/#contact">Ask a specialist</Link></div></div></section>
      <section className="section section-light">
        <div className="page-shell article-list">
          {articles.map((article, index) => (
            <article id={article.id} key={article.id}>
              <div className="article-meta"><span>0{index + 1}</span><span>{article.category}</span></div>
              <div><h2>{article.title}</h2><p className="lead-copy">{article.intro}</p>{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="article-links"><Link href="/services/curtain-blind-cleaning">In-situ zero-shrinkage curtain cleaning process →</Link><Link href="/areas/jhb-north">Curtain cleaning across Johannesburg North →</Link><Link href="/guides">Johannesburg fabric-care guides →</Link></div></div>
            </article>
          ))}
        </div>
      </section>
      <ContactSection title="Need advice for a particular fabric or space?" />
      <Footer />
    </main>
  );
}
