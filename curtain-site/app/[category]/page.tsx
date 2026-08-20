import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { buildMetadata } from "../seo/build-metadata";
import { ContactSection, Footer, Header } from "../site-chrome";
import { areas, landingHeroImages, sectors, services, type PageEntry } from "../site-content";

type Props = { params: Promise<{ category: string }> };

const legacyRoutes: Record<string, string> = {
  "curtain-cleaning": "/services/curtain-blind-cleaning",
  "blind-cleaning": "/services/curtain-blind-cleaning",
  "mattress-cleaning": "/services/mattress-sanitisation",
  "upholstery-cleaning": "/services/upholstery-carpet-cleaning",
  "carpet-cleaning": "/services/upholstery-carpet-cleaning",
  "fabric-protection": "/services/master-guarding",
  "persian-rugs": "/services/persian-oriental-rug-care",
  "fire-proofing": "/services/fire-proofing",
  offices: "/sectors/corporate",
  restaurants: "/sectors/hotels",
  retail: "/sectors/corporate",
};

const categoryContent: Record<string, { label: string; title: string; seoTitle: string; description: string; items: PageEntry[] }> = {
  services: {
    label: "Our services",
    title: "Specialist care for curtains, blinds and every fabric in your space.",
    seoTitle: "Curtain & Fabric Cleaning Services Johannesburg | JHB Curtain Cleaning",
    description: "Explore six fabric-specific services for Johannesburg homes, hotels, offices and specialist environments.",
    items: services,
  },
  sectors: {
    label: "Sectors we serve",
    title: "Fabric-care programmes shaped around your property.",
    seoTitle: "Fabric Care for Homes & Businesses Johannesburg | JHB Curtain Cleaning",
    description: "Discreet residential service and carefully scheduled commercial care across six property sectors.",
    items: sectors,
  },
  areas: {
    label: "Service areas",
    title: "On-site curtain and fabric care across greater Johannesburg.",
    seoTitle: "Curtain Cleaning Service Areas Johannesburg | JHB Curtain Cleaning",
    description: "Choose your area for local service details, nearby suburbs and the quickest route to a free assessment.",
    items: areas,
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const content = categoryContent[category];
  if (!content) return {};
  return buildMetadata({
    title: content.seoTitle,
    description: content.description,
    path: `/${category}`,
    image: "/heroes/editorial-care-library-hero.webp",
    imageAlt: `${content.label} from JHB Curtain Cleaning`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (legacyRoutes[category]) redirect(legacyRoutes[category]);
  const content = categoryContent[category];
  if (!content) notFound();

  return (
    <main>
      <section className="inner-hero editorial-hero category-hero" style={{ backgroundImage: "url(/heroes/editorial-care-library-hero.webp)" }}>
        <div className="inner-hero-shade" />
        <Header compact />
        <div className="page-shell inner-hero-content">
          <nav className="breadcrumb-trail" aria-label="Breadcrumb">
            <Link className="breadcrumb" href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{content.label}</span>
          </nav>
          <span className="eyebrow">{content.label}</span>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="page-shell category-card-grid">
          {content.items.map((item, index) => (
            <article className="category-card" key={item.path}>
              <Link className="category-card-image" href={item.path} aria-label={`Explore ${item.shortTitle}`}>
                <Image
                  src={landingHeroImages[item.slug] ?? "/hero-luxury.webp"}
                  alt={`${item.shortTitle} by JHB Curtain Cleaning`}
                  width={960}
                  height={720}
                  sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1180px) calc(50vw - 40px), 38vw"
                />
              </Link>
              <div>
                <span>0{index + 1}</span>
                <h2>{item.shortTitle}</h2>
                <p>{item.description}</p>
                <Link className="text-link" href={item.path}>Explore {item.shortTitle} <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="page-shell category-back-link"><Link className="text-link" href="/">← Back to the JHB Curtain Cleaning homepage</Link></div>
      </section>

      <ContactSection title={`Discuss ${content.label.toLowerCase()} with a specialist.`} />
      <Footer />
    </main>
  );
}
