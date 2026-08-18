import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "../../seo/build-metadata";
import { JsonLd } from "../../seo/json-ld";
import { absoluteUrl, siteConfig } from "../../seo/site-config";
import { ContactSection, Footer, Header } from "../../site-chrome";
import { allDetailPages, areas, findPage, findPageByPath, landingHeroImages, sectors, services, whatsappUrl } from "../../site-content";
import { findEditorialByPath } from "../../editorial-content";

type Props = { params: Promise<{ category: string; slug: string }> };

const detailTitles: Record<string, string> = {
  "curtain-blind-cleaning": "Curtain & Blind Cleaning Johannesburg | JHB Curtain Cleaning",
  "mattress-sanitisation": "Mattress Cleaning & Sanitisation Johannesburg | JHB Curtain Cleaning",
  "upholstery-carpet-cleaning": "Upholstery & Carpet Cleaning Johannesburg | JHB Curtain Cleaning",
  "master-guarding": "Fabric Protection Johannesburg | JHB Curtain Cleaning",
  "fire-proofing": "Fabric Fire-Retardant Treatment Johannesburg | JHB Curtain Cleaning",
  "persian-oriental-rug-care": "Persian & Oriental Rug Cleaning Johannesburg | JHB Curtain Cleaning",
  hotels: "Hotel Curtain & Fabric Cleaning Johannesburg | JHB Curtain Cleaning",
  corporate: "Office Curtain & Upholstery Cleaning Johannesburg | JHB Curtain Cleaning",
  healthcare: "Healthcare Curtain & Mattress Cleaning Johannesburg | JHB Curtain Cleaning",
  education: "School Curtain & Fabric Cleaning Johannesburg | JHB Curtain Cleaning",
  theatres: "Theatre Curtain & Venue Fabric Care Johannesburg | JHB Curtain Cleaning",
  residential: "Home Curtain & Fabric Cleaning Johannesburg | JHB Curtain Cleaning",
};

export function generateStaticParams() {
  return allDetailPages.map(({ path }) => {
    const [, category, slug] = path.split("/");
    return { category, slug };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const page = findPage(category, slug);
  if (!page) return {};
  const title = detailTitles[page.slug] ?? `Curtain Cleaning ${page.shortTitle} | JHB Curtain Cleaning`;
  const image = landingHeroImages[page.slug] ?? "/hero-luxury.webp";
  return buildMetadata({
    title,
    description: page.description,
    path: page.path,
    image,
    imageAlt: `${page.shortTitle} by JHB Curtain Cleaning`,
  });
}

export default async function DetailPage({ params }: Props) {
  const { category, slug } = await params;
  const page = findPage(category, slug);
  if (!page) notFound();

  const relatedPages = page.related.map((path) => {
    const detail = findPageByPath(path);
    if (detail) return { path: detail.path, shortTitle: detail.shortTitle, kind: detail.kind };
    const editorial = findEditorialByPath(path);
    if (editorial) return { path: editorial.path, shortTitle: editorial.shortTitle, kind: editorial.path.startsWith("/advice/") ? "advice" : editorial.path === "/case-studies" ? "proof" : "guide" };
    return undefined;
  }).filter(Boolean);
  const heroImage = landingHeroImages[page.slug] ?? "/hero-luxury.webp";
  const companionLinks = page.kind === "service" ? sectors.slice(0, 4) : services.slice(0, 4);
  const categoryLabel = page.kind === "service" ? "Services" : page.kind === "sector" ? "Sectors" : "Service areas";
  const pageUrl = absoluteUrl(page.path);
  const serviceId = `${pageUrl}#service`;
  const pageId = `${pageUrl}#webpage`;
  const imageId = `${pageUrl}#primaryimage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: detailTitles[page.slug] ?? `Curtain Cleaning ${page.shortTitle}`,
        description: page.description,
        isPartOf: { "@id": `${siteConfig.origin}/#website` },
        about: { "@id": serviceId },
        primaryImageOfPage: { "@id": imageId },
        breadcrumb: { "@id": breadcrumbId },
        inLanguage: siteConfig.language,
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: page.shortTitle,
        serviceType: page.shortTitle,
        description: page.description,
        url: pageUrl,
        provider: { "@id": `${siteConfig.origin}/#organization` },
        image: { "@id": imageId },
        areaServed: page.kind === "area"
          ? page.highlights.map((name) => ({ "@type": "Place", name }))
          : { "@type": "AdministrativeArea", name: "Greater Johannesburg" },
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        url: absoluteUrl(heroImage),
        contentUrl: absoluteUrl(heroImage),
        caption: `${page.shortTitle} by JHB Curtain Cleaning`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.origin },
          { "@type": "ListItem", position: 2, name: categoryLabel, item: absoluteUrl(`/${category}`) },
          { "@type": "ListItem", position: 3, name: page.shortTitle, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main>
      <section className="inner-hero landing-hero">
        <Image
          className="inner-hero-media"
          src={heroImage}
          alt=""
          fill
          sizes="100vw"
          quality={80}
          fetchPriority="high"
        />
        <div className="inner-hero-shade" />
        <Header compact />
        <div className="page-shell inner-hero-content">
          <nav className="breadcrumb-trail" aria-label="Breadcrumb">
            <Link className="breadcrumb" href="/">Home</Link><span aria-hidden="true">/</span><Link className="breadcrumb" href={`/${category}`}>{categoryLabel}</Link><span aria-hidden="true">/</span><span aria-current="page">{page.shortTitle}</span>
          </nav>
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
          <div className="hero-cta">
            <a className="button" href={whatsappUrl}>Get a free assessment</a>
            <a className="button button-outline" href="tel:+27750119200">Call +27 75 011 9200</a>
          </div>
        </div>
      </section>

      <section className="promise-strip" aria-label="Service promise">
        <div className="page-shell promise-grid"><p><strong>On-site convenience</strong><span>Planned around your home or operation.</span></p><p><strong>Specialist assessment</strong><span>Fabric, construction and condition considered first.</span></p><p><strong>Clear quotation</strong><span>Practical advice with no obligation.</span></p></div>
      </section>

      <section className="section section-light">
        <div className="page-shell detail-intro-grid">
          <div><span className="eyebrow">The JHB approach</span><h2>{page.kind === "area" ? "Local care, expertly delivered." : "Expert care, clearly explained."}</h2></div>
          <div><p className="lead-copy">{page.intro}</p><div className="highlight-grid">{page.highlights.map((item) => <span key={item}>✓ {item}</span>)}</div></div>
        </div>
      </section>

      {page.slug === "curtain-blind-cleaning" && (
        <section className="section detail-process" aria-labelledby="blind-cleaning-title">
          <div className="page-shell detail-intro-grid">
            <div>
              <span className="eyebrow">Professional blind cleaning service</span>
              <h2 id="blind-cleaning-title">Specialist blind cleaning across Johannesburg.</h2>
            </div>
            <div>
              <p className="lead-copy">Blinds collect fine Highveld dust around slats, folds, cords and headrails. We assess the material and mechanism before choosing a controlled treatment for suitable Roman, roller, vertical, Venetian and fabric blinds.</p>
              <div className="highlight-grid">
                <span>✓ Material-specific treatment</span>
                <span>✓ Mechanisms and fittings protected</span>
                <span>✓ Residential and commercial service</span>
                <span>✓ Free Johannesburg assessment</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section detail-process">
        <div className="page-shell">
          <div className="section-heading split-heading"><div><span className="eyebrow">What’s included</span><h2>A careful four-step service.</h2></div><p>Every appointment begins with an assessment and ends with a clear quality check.</p></div>
          <div className="process-grid">{page.process.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3><p>{index === 0 ? "We confirm the correct treatment before work starts." : index === 3 ? "We review the result and practical aftercare with you." : "Your property and surrounding finishes are treated with care."}</p></article>)}</div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="page-shell benefits-layout">
          <div><span className="eyebrow">Why choose JHB</span><h2>Specialist standards without unnecessary disruption.</h2><p>Assessment-led fabric care, practical property planning and a clear no-obligation quotation.</p></div>
          <ul>{page.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
        </div>
      </section>

      <section className="section section-light">
        <div className="page-shell faq-layout">
          <div><span className="eyebrow">Common questions</span><h2>Before your assessment.</h2></div>
          <div className="faq-list">{page.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
        </div>
        <JsonLd data={pageSchema} />
      </section>

      <section className="section related-section">
        <div className="page-shell">
          <div className="section-heading split-heading"><div><span className="eyebrow">Continue exploring</span><h2>Related services and local pages.</h2></div><p>Build a complete plan for the fabrics and spaces that matter to you.</p></div>
          <div className="related-grid">{relatedPages.map((item) => item && <Link href={item.path} key={item.path}><span>{item.kind}</span><strong>{item.shortTitle}</strong><b aria-hidden="true">↗</b></Link>)}</div>
          <div className="context-links"><strong>Also useful:</strong>{companionLinks.map((item) => <Link href={item.path} key={item.path}>{item.shortTitle}</Link>)}{page.kind !== "area" && areas.slice(0, 2).map((item) => <Link href={item.path} key={item.path}>{item.shortTitle}</Link>)}</div>
          <div className="category-back-link"><Link className="text-link" href={`/${category}`}>← Back to all {categoryLabel.toLowerCase()}</Link></div>
        </div>
      </section>

      <ContactSection title={`Discuss ${page.shortTitle.toLowerCase()} with a specialist.`} />
      <Footer />
    </main>
  );
}
