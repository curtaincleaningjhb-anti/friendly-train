import type { Metadata } from "next";
import Image from "next/image";
import { EditorialHero, EditorialShell } from "../editorial-page";
import { buildMetadata } from "../seo/build-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Curtain & Fabric Care Gallery | JHB Curtain Cleaning",
  description: "View selected curtain, blind, upholstery, mattress, rug and venue fabric-care scenes from the JHB Curtain Cleaning service portfolio.",
  path: "/gallery",
  image: "/heroes/service-curtain-blind-hero.webp",
  imageAlt: "Selected curtain and fabric care scenes from JHB Curtain Cleaning",
});

const galleryItems = [
  { title: "On-site curtain care", image: "/heroes/service-curtain-blind-hero.webp" },
  { title: "Hotel curtain programmes", image: "/heroes/sector-hotels-hero.webp" },
  { title: "Fine upholstery", image: "/heroes/service-upholstery-carpet-hero.webp" },
  { title: "Roman and fabric blinds", image: "/cards/service-curtain-blind.webp" },
  { title: "Persian and Oriental rugs", image: "/heroes/service-rug-care-hero.webp" },
  { title: "Commercial fire proofing", image: "/heroes/service-fire-proofing-hero.webp" },
  { title: "Curtain detail care", image: "/gallery/01-curtain-detail.webp" },
  { title: "Venetian blind care", image: "/gallery/02-blind-care.webp" },
  { title: "Hotel drapery programmes", image: "/gallery/03-hotel-drapery.webp" },
  { title: "Upholstery refresh", image: "/gallery/04-upholstery-care.webp" },
  { title: "Mattress sanitisation", image: "/gallery/05-mattress-sanitisation.webp" },
  { title: "Persian rug treatment", image: "/gallery/06-rug-care.webp" },
  { title: "Theatre fire protection", image: "/gallery/07-fire-proofing.webp" },
  { title: "Corporate fabric care", image: "/gallery/08-corporate-interior.webp" },
  { title: "Healthcare curtain care", image: "/gallery/09-healthcare.webp" },
  { title: "Master Guarding protection", image: "/gallery/10-master-guarding.webp" },
  { title: "Pristine sheer curtains", image: "/gallery/11-residential-sheer.webp" },
  { title: "Education-sector care", image: "/gallery/12-education.webp" },
  { title: "Velvet drapery care", image: "/gallery/13-theatre-drapery.webp" },
  { title: "Fabric texture, restored", image: "/gallery/14-drapery-detail.webp" },
  { title: "The finishing detail", image: "/gallery/15-finish-detail.webp" },
];

export default function GalleryPage() {
  return (
    <EditorialShell contactTitle="Let’s plan the right care for your space.">
      <EditorialHero eyebrow="Selected work" title="Fabric care, considered in every detail." description="A visual introduction to the spaces, fabrics and specialist services behind our Johannesburg work." />
      <section className="section gallery-section"><div className="page-shell gallery-grid">{galleryItems.map((item, index) => <figure key={item.title} className={`gallery-item gallery-item-${(index % 3) + 1}`}><div className="gallery-media"><Image src={item.image} alt={item.title} fill sizes="(max-width: 860px) calc(100vw - 40px), 60vw" /><span className="gallery-shade" aria-hidden="true" /></div><figcaption><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong></figcaption></figure>)}</div></section>
    </EditorialShell>
  );
}
