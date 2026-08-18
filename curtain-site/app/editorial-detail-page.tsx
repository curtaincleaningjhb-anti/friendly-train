import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "./seo/json-ld";
import { absoluteUrl, siteConfig } from "./seo/site-config";
import { buildMetadata } from "./seo/build-metadata";
import { ContactSection, Footer, Header } from "./site-chrome";
import { findPageByPath, whatsappUrl } from "./site-content";
import type { EditorialEntry } from "./editorial-types";
import { findEditorialByPath } from "./editorial-content";

const editorialImage = "/heroes/editorial-care-library-hero.webp";

export function buildEditorialMetadata(entry: EditorialEntry): Metadata {
  return buildMetadata({
    title: `${entry.title} | JHB Curtain Cleaning`,
    description: entry.description,
    path: entry.path,
    image: editorialImage,
    imageAlt: `${entry.shortTitle} from JHB Curtain Cleaning`,
  });
}

function labelForPath(path: string) {
  return findEditorialByPath(path)?.shortTitle ?? findPageByPath(path)?.shortTitle ?? path.split("/").filter(Boolean).at(-1)?.replaceAll("-", " ") ?? "Related page";
}

function categoryFor(entry: EditorialEntry) {
  if (entry.path === "/case-studies") return { path: "/case-studies", label: "Case studies" };
  const category = entry.path.split("/")[1];
  return { path: `/${category}`, label: category === "advice" ? "Expert advice" : "Care guides" };
}

export function EditorialDetailPage({ entry }: { entry: EditorialEntry }) {
  const category = categoryFor(entry);
  const pageUrl = absoluteUrl(entry.path);
  const pageId = `${pageUrl}#webpage`;
  const imageId = `${pageUrl}#primaryimage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const isCollection = entry.path === "/case-studies";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": isCollection ? "CollectionPage" : "Article",
        "@id": pageId,
        url: pageUrl,
        name: entry.title,
        headline: entry.title,
        description: entry.description,
        isPartOf: { "@id": `${siteConfig.origin}/#website` },
        author: { "@id": `${siteConfig.origin}/#organization` },
        publisher: { "@id": `${siteConfig.origin}/#organization` },
        primaryImageOfPage: { "@id": imageId },
        breadcrumb: { "@id": breadcrumbId },
        inLanguage: siteConfig.language,
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        url: absoluteUrl(editorialImage),
        contentUrl: absoluteUrl(editorialImage),
        caption: `${entry.shortTitle} from JHB Curtain Cleaning`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.origin },
          ...(entry.path === "/case-studies" ? [] : [{ "@type": "ListItem", position: 2, name: category.label, item: absoluteUrl(category.path) }]),
          { "@type": "ListItem", position: entry.path === "/case-studies" ? 2 : 3, name: entry.shortTitle, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main>
      <section className="inner-hero editorial-hero editorial-detail-hero">
        <Image className="inner-hero-media" src={editorialImage} alt="" fill sizes="100vw" quality={80} fetchPriority="high" />
        <div className="inner-hero-shade" />
        <Header compact />
        <div className="page-shell inner-hero-content">
          <nav className="breadcrumb-trail" aria-label="Breadcrumb">
            <Link className="breadcrumb" href="/">Home</Link><span aria-hidden="true">/</span>
            {entry.path !== "/case-studies" && <><Link className="breadcrumb" href={category.path}>{category.label}</Link><span aria-hidden="true">/</span></>}
            <span aria-current="page">{entry.shortTitle}</span>
          </nav>
          <span className="eyebrow">{entry.eyebrow}</span>
          <h1>{entry.title}</h1>
          <p>{entry.description}</p>
          <div className="hero-cta"><a className="button" href={whatsappUrl}>Request an assessment</a><a className="button button-outline" href="tel:+27750119200">Call +27 75 011 9200</a></div>
        </div>
      </section>

      <section className="section editorial-quick-answer">
        <div className="page-shell editorial-quick-grid">
          <div><span className="eyebrow">Quick answer</span><h2>Start with the fabric, construction and condition.</h2></div>
          <div><p className="lead-copy">{entry.quickAnswer}</p><p>{entry.intro}</p></div>
        </div>
      </section>

      <article className="editorial-detail-body">
        {entry.sections.map((section, index) => (
          <section className={`section editorial-content-section ${index % 2 ? "editorial-content-alt" : ""}`} key={section.heading}>
            <div className="page-shell editorial-content-grid">
              <div><span className="editorial-section-number">{String(index + 1).padStart(2, "0")}</span><h2>{section.heading}</h2></div>
              <div className="editorial-prose">{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets.length > 0 && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</div>
            </div>
          </section>
        ))}
      </article>

      <section className="section section-dark editorial-review-section">
        <div className="page-shell editorial-review-grid"><div><span className="eyebrow">Evidence and scope</span><h2>Advice is confirmed during assessment.</h2></div><p>{entry.reviewNote}</p></div>
      </section>

      <section className="section section-light">
        <div className="page-shell faq-layout"><div><span className="eyebrow">Common questions</span><h2>What to know before you book.</h2><p className="faq-intro">These answers explain the decision process. The final recommendation depends on an inspection of the fabric, construction, hardware and existing condition.</p></div><div className="faq-list">{entry.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div>
        <JsonLd data={schema} />
      </section>

      <section className="section related-section">
        <div className="page-shell"><div className="section-heading split-heading"><div><span className="eyebrow">Continue your research</span><h2>Related services and decision guides.</h2></div><p>Use these pages to prepare for an assessment and understand the options that may apply.</p></div><div className="related-grid">{entry.related.slice(0, 6).map((path) => <Link href={path} key={path}><span>Related page</span><strong>{labelForPath(path)}</strong><b aria-hidden="true">↗</b></Link>)}</div></div>
      </section>

      <ContactSection title={`Discuss ${entry.shortTitle.toLowerCase()} with a specialist.`} />
      <Footer />
    </main>
  );
}
