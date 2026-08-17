import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../seo/build-metadata";
import { Footer, Header } from "../site-chrome";
import { NewsletterForm } from "./newsletter-form";

export const metadata: Metadata = buildMetadata({
  title: "Fabric Care Newsletter | JHB Curtain Cleaning",
  description: "Request occasional curtain and fabric-care guidance for Johannesburg homes, hospitality properties and commercial spaces.",
  path: "/newsletter",
  image: "/heroes/editorial-care-library-hero.webp",
  imageAlt: "Fabric care notes from JHB Curtain Cleaning",
});

export default function NewsletterPage() {
  return (
    <main className="newsletter-page">
      <section className="newsletter-hero"><Header compact /><div className="page-shell newsletter-grid"><div><nav className="breadcrumb-trail" aria-label="Breadcrumb"><Link className="breadcrumb" href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Newsletter</span></nav><span className="eyebrow">The JHB fabric-care letter</span><h1>Care notes for curtains, fabrics and beautifully kept spaces.</h1><p>Occasional, useful guidance from Johannesburg’s on-site curtain-cleaning specialists—never inbox clutter.</p><div className="newsletter-proof"><span>Local Johannesburg guidance</span><span>Practical fabric-care notes</span><span>Double opt-in</span></div></div><NewsletterForm /></div></section>
      <section className="section newsletter-benefits"><div className="page-shell"><div className="section-heading centered-heading"><span className="eyebrow">Useful by design</span><h2>Expert notes, only when they matter.</h2></div><div className="process-grid"><article><span>01</span><h3>Local timing</h3><p>Guidance shaped by Johannesburg seasons, dust and everyday living.</p></article><article><span>02</span><h3>Specialist detail</h3><p>Advice for lined curtains, upholstery, mattresses, blinds and rugs.</p></article><article><span>03</span><h3>No hard sell</h3><p>Clear, practical education with a simple path to expert help.</p></article><article><span>04</span><h3>Priority care</h3><p>Hear about seasonal assessment availability before the wider public.</p></article></div></div></section>
      <Footer />
    </main>
  );
}
