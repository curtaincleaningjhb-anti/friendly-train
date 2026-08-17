import type { Metadata } from "next";
import { EditorialHero, EditorialShell } from "../editorial-page";
import { buildMetadata } from "../seo/build-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | JHB Curtain Cleaning",
  description: "Read how JHB Curtain Cleaning handles contact details, property information, photographs and service enquiries submitted online, by phone or WhatsApp.",
  path: "/privacy-policy",
  imageAlt: "JHB Curtain Cleaning privacy policy",
});

export default function PrivacyPage() {
  return (
    <EditorialShell>
      <EditorialHero eyebrow="Legal" title="Privacy policy" description="How JHB Curtain Cleaning handles information submitted through calls, WhatsApp, email and assessment requests." />
      <section className="section section-light"><div className="page-shell legal-copy"><h2>Information we receive</h2><p>We may receive your name, contact details, property location, photographs and service requirements when you submit an online enquiry or contact us by phone, WhatsApp or email.</p><h2>How we use it</h2><p>We use this information to respond to your enquiry, assess the requested work, schedule service and maintain appropriate business records. Newsletter subscriptions use double opt-in and begin only after you confirm your email address. We do not sell personal information.</p><h2>Service providers</h2><p>Website enquiry emails may be delivered through SendGrid, and confirmed newsletter subscriptions may be managed through Mailchimp. These providers process the information needed to deliver the requested communication under their own security and privacy controls.</p><h2>Sharing and retention</h2><p>Information is shared only when needed to deliver the requested service, operate the communication tools you choose or comply with applicable obligations. We keep it only for as long as reasonably required.</p><h2>Your choices</h2><p>You may unsubscribe from newsletter email using the link in each message. You may ask us to correct or delete information by emailing info@jhbcurtaincleaning.co.za. This policy may be updated as the website and services evolve.</p></div></section>
    </EditorialShell>
  );
}
