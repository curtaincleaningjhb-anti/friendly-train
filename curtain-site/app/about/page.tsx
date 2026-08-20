import type { Metadata } from "next";
import { EditorialHero, EditorialShell } from "../editorial-page";
import { buildMetadata } from "../seo/build-metadata";

export const metadata: Metadata = buildMetadata({
  title: "About JHB Curtain Cleaning | Johannesburg Fabric Care",
  description: "Learn about JHB Curtain Cleaning’s on-site approach, founder-led fabric assessment and service for Johannesburg homes and professional properties.",
  path: "/about",
  image: "/heroes/editorial-about-hero.webp",
  imageAlt: "About the JHB Curtain Cleaning team and approach",
});

export default function AboutPage() {
  return (
    <EditorialShell contactTitle="Invite a specialist to assess your curtains.">
      <EditorialHero eyebrow="About JHB Curtain Cleaning" title="Specialist knowledge, brought directly to your space." description="JHB Curtain Cleaning provides careful, assessment-led fabric care for Johannesburg homes and professional properties." image="/heroes/editorial-about-hero.webp" />
      <section className="section story-section"><div className="page-shell story-grid"><div className="story-image" role="img" aria-label="Luxury curtains in a Johannesburg interior" /><div className="story-copy"><span className="eyebrow">Our approach</span><h2>Every curtain is different. That’s why we assess first.</h2><p className="lead">Our service is built room by room: clear advice, fabric-specific treatment and carefully planned on-site work.</p><p>Traditional curtain cleaning can introduce additional handling, transport, drying and rehanging. By bringing suitable treatment on site, we simplify the experience for homes, hotels, healthcare facilities, schools, offices and venues.</p><ul className="tick-list"><li>Fabric-specific assessment</li><li>Clear written quotations</li><li>Johannesburg-wide service</li><li>Residential and commercial care</li></ul></div></div></section>
      <section className="section section-dark"><div className="page-shell benefits-layout"><div><span className="eyebrow">Our standard</span><h2>Careful work. Clear advice. No surprises.</h2><p>We explain what a fabric needs, what outcome is realistic and how the property will be protected before we begin.</p></div><ul><li>Assess before treating</li><li>Protect the room and the fabric</li><li>Plan around your property</li><li>Finish with a quality check</li></ul></div></section>
    </EditorialShell>
  );
}
