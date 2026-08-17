import Image from "next/image";
import Link from "next/link";
import { ContactSection, Footer, Header } from "./site-chrome";

export function EditorialHero({ eyebrow, title, description, image = "/heroes/editorial-care-library-hero.webp" }: { eyebrow: string; title: string; description: string; image?: string }) {
  return (
    <section className="inner-hero editorial-hero">
      <Image className="inner-hero-media" src={image} alt="" fill sizes="100vw" quality={80} fetchPriority="high" />
      <div className="inner-hero-shade" />
      <Header compact />
      <div className="page-shell inner-hero-content">
        <nav className="breadcrumb-trail" aria-label="Breadcrumb">
          <Link className="breadcrumb" href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{eyebrow}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export function EditorialShell({ children, contactTitle }: { children: React.ReactNode; contactTitle?: string }) {
  return (
    <main>
      {children}
      {contactTitle && <ContactSection title={contactTitle} />}
      <Footer />
    </main>
  );
}
