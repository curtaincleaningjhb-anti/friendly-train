import type { Metadata } from "next";
import { EditorialHero, EditorialShell } from "../editorial-page";
import { buildMetadata } from "../seo/build-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | JHB Curtain Cleaning",
  description: "Review the general terms for assessments, quotations, fabric condition, site access, booking changes and services from JHB Curtain Cleaning.",
  path: "/terms-of-service",
  imageAlt: "JHB Curtain Cleaning terms of service",
});

export default function TermsPage() {
  return (
    <EditorialShell>
      <EditorialHero eyebrow="Legal" title="Terms of service" description="The general terms that apply when requesting an assessment, quotation or fabric-care service from JHB Curtain Cleaning." />
      <section className="section section-light"><div className="page-shell legal-copy"><h2>Assessments and quotations</h2><p>Recommendations and quotations are based on the visible condition, information and access available during assessment. Material changes to scope may require a revised quotation.</p><h2>Fabric condition and outcomes</h2><p>Age, sun damage, dye loss, prior treatment and permanent fibre damage can affect results. We explain material limitations before work where they can reasonably be identified.</p><h2>Access and preparation</h2><p>Clients are responsible for reasonable site access and for identifying sensitive fixtures, alarm requirements or operational restrictions before service begins.</p><h2>Bookings and changes</h2><p>Booking, payment, postponement and cancellation details are confirmed with each quotation. Contact us promptly if access or timing changes.</p></div></section>
    </EditorialShell>
  );
}
