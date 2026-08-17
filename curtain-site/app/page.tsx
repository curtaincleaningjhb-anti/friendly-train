import Image from "next/image";
import Link from "next/link";
import { Armchair, BedDouble, Building2, Clock3, Construction, FileText, Flame, Gem, Ruler, ShieldCheck, Sparkles, Spool, ThumbsUp, type LucideIcon } from "lucide-react";
import { ContactSection, Footer, Header } from "./site-chrome";
import { areas, sectors, services, whatsappUrl } from "./site-content";

const guarantees = [
  { title: "No removal", copy: "Curtains remain safely hanging throughout the cleaning process." },
  { title: "Fabric-specific care", copy: "Material, lining and condition are assessed before treatment begins." },
  { title: "Minimal disruption", copy: "The on-site process avoids transport, rehanging and conventional drying stages." },
  { title: "Free assessment", copy: "Clear advice and a transparent quotation before any work begins." },
];

const quoteFactors = [
  { icon: Spool, title: "Fabric Type", copy: "Sheer, lined, blackout, velvet — each requires a different approach and cleaning agent." },
  { icon: Construction, title: "Track or Rod Hardware", copy: "Ceiling tracks, face-fit rods, motorised systems — access affects labour and time." },
  { icon: Building2, title: "Sector Requirements", copy: "Hotels, hospitals, offices, and homes each have different standards and scheduling needs." },
  { icon: Ruler, title: "Size & Quantity", copy: "Floor-to-ceiling vs standard height, single panel vs full suite — it all matters." },
];

const quoteBenefits = [
  { icon: FileText, title: "Detailed Written Quote", copy: "Itemised breakdown of every item, method, and cost — no surprises." },
  { icon: ThumbsUp, title: "Honest Assessment", copy: "If something doesn’t need cleaning, Kathy will tell you. No upselling." },
  { icon: Clock3, title: "Scheduling That Works for You", copy: "After hours, weekends, or during business — we work around your needs." },
];

const serviceImages: Record<string, string> = {
  "curtain-blind-cleaning": "/cards/service-curtain-blind.webp",
  "mattress-sanitisation": "/cards/service-mattress.webp",
  "upholstery-carpet-cleaning": "/cards/service-upholstery-carpet.webp",
  "master-guarding": "/cards/service-master-guarding.webp",
  "fire-proofing": "/cards/service-fire-proofing.webp",
  "rug-care": "/cards/service-rug-care.webp",
};

const serviceIcons: Record<string, LucideIcon> = {
  "curtain-blind-cleaning": Sparkles,
  "mattress-sanitisation": BedDouble,
  "upholstery-carpet-cleaning": Armchair,
  "master-guarding": ShieldCheck,
  "fire-proofing": Flame,
  "rug-care": Gem,
};

const sectorImages: Record<string, string> = {
  hotels: "/cards/sector-hotels.webp",
  corporate: "/cards/sector-corporate.webp",
  healthcare: "/cards/sector-healthcare.webp",
  education: "/cards/sector-education.webp",
  theatres: "/cards/sector-theatres.webp",
  residential: "/cards/sector-residential.webp",
};

const areaImages: Record<string, string> = {
  "jhb-north": "/cards/area-jhb-north.webp",
  "jhb-east": "/cards/area-jhb-east.webp",
  "jhb-south": "/cards/area-jhb-south.webp",
  "jhb-west": "/cards/area-jhb-west.webp",
  "jhb-central": "/cards/area-jhb-central.webp",
  "pretoria-midrand": "/cards/area-pretoria-midrand.webp",
};

const homeFaqs = [
  { question: "How much does curtain cleaning cost in Johannesburg?", answer: "Every quotation is based on a free on-site assessment because fabric type, lining, hardware, size, quantity and sector requirements affect the correct method and cost. Kathy evaluates the curtains properly and provides a detailed written quote with no obligation." },
  { question: "Can velvet or blackout curtains be dry cleaned on site?", answer: "Suitable velvet, sheer and blackout curtains may be treated on site, subject to a fabric, lining, condition and colourfastness assessment before work begins." },
  { question: "Do you clean curtains without taking them down?", answer: "Yes. Curtains remain hanging, which removes the need for transport, rehanging and room disruption." },
  { question: "Do you offer a professional blind cleaning service in Johannesburg?", answer: "Yes. We assess and clean suitable Roman, roller, vertical, Venetian and fabric blinds across Johannesburg. The treatment is selected for the blind material, construction, operating system and condition." },
  { question: "How long does the cleaning take?", answer: "Timing depends on the number, size and condition of the curtains. We confirm the expected schedule with your quotation." },
  { question: "Which areas do you serve?", answer: "We serve greater Johannesburg, Midrand and selected Pretoria areas from our Roodepoort base." },
  { question: "How is hotel curtain cleaning scheduled?", answer: "Hospitality work can be phased during low-occupancy windows or approved night shifts, with daily capacity and room sequencing confirmed after the site survey." },
  { question: "What is Master Guarding?", answer: "It is a professional protective treatment that helps suitable fabrics resist spills and everyday soiling." },
  { question: "Do you offer fire-retardant fabric treatment?", answer: "We assess the fabric and venue requirement before confirming a suitable treatment scope and any applicable documentation." },
  { question: "How do I book a cleaning?", answer: "Call or WhatsApp +27 75 011 9200, or email info@jhbcurtaincleaning.co.za to arrange your free assessment." },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <Image
          className="hero-media"
          src="/jhb-textile-hero.webp"
          alt=""
          fill
          sizes="100vw"
          quality={80}
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <Header />
        <div className="hero-content page-shell">
          <div className="hero-copy">
            <span className="eyebrow">Johannesburg-wide specialist care</span>
            <h1 id="hero-title">Professional curtain cleaning Johannesburg</h1>
            <p className="hero-subtitle">On-site curtain &amp; blind cleaning, planned around your fabric and property.</p>
            <div className="hero-cta">
              <a className="button" href="#contact">Book a free assessment</a>
              <a className="button button-outline" href={whatsappUrl}>WhatsApp us <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-stats" aria-label="Business credentials">
              <div><span>Approach</span><strong>Assessment first</strong></div>
              <div><span>Service</span><strong>Delivered on site</strong></div>
              <div><span>Coverage</span><strong>Johannesburg-wide</strong></div>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#services" aria-label="Scroll to services"><span /></a>
      </section>

      <section className="promise-strip" aria-label="Service promise">
        <div className="page-shell promise-grid">
          <p><strong>On-site convenience</strong><span>We clean while your curtains remain hanging.</span></p>
          <p><strong>Fabric-specific care</strong><span>Material, lining and condition are assessed first.</span></p>
          <p><strong>Less disruption</strong><span>No transport or rehanging stages.</span></p>
        </div>
      </section>

      <section className="section section-light" id="services">
        <div className="page-shell">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Our services</span><h2>Specialist care for every fabric in your space.</h2></div>
            <p>Six focused services—each beginning with a fabric assessment and a treatment selected for the material, construction and condition.</p>
          </div>
          <div className="service-grid service-grid-six">
            {services.map((service, index) => (
              <article className="service-card" key={service.slug}>
                <Link className="card-image service-card-image" href={service.path} aria-label={`Explore ${service.shortTitle}`}>
                  <Image
                    src={serviceImages[service.slug]}
                    alt={`${service.shortTitle} by JHB Curtain Cleaning`}
                    width={960}
                    height={720}
                    sizes="(max-width: 560px) calc(100vw - 32px), (max-width: 1180px) calc(50vw - 40px), calc(33vw - 40px)"
                  />
                </Link>
                <div className="service-card-copy">
                  <div className="service-card-meta">
                    <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                    {(() => {
                      const ServiceIcon = serviceIcons[service.slug] ?? Sparkles;
                      return <span className="service-card-icon" aria-hidden="true"><ServiceIcon size={21} strokeWidth={1.35} /></span>;
                    })()}
                  </div>
                  <h3>{service.shortTitle}</h3>
                  <p>{service.description}</p>
                  <Link href={service.path}>{service.slug === "curtain-blind-cleaning" ? "Curtain & blind cleaning services in Johannesburg" : `${service.shortTitle} in Johannesburg`} <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section detail-process" id="process">
        <div className="page-shell">
          <div className="section-heading split-heading"><div><span className="eyebrow">How on-site curtain cleaning works</span><h2>A careful process, with none of the disruption.</h2></div><p>From the first assessment to the final finish, your curtains stay in place and your room stays intact.</p></div>
          <div className="process-grid">
            <article><span>01</span><h3>Free assessment</h3><p>We inspect fabric, construction, lining, condition and access.</p></article>
            <article><span>02</span><h3>Pre-treatment</h3><p>Surroundings are protected and marks receive targeted attention.</p></article>
            <article><span>03</span><h3>Deep clean</h3><p>A controlled on-site process lifts embedded dust and soiling.</p></article>
            <article><span>04</span><h3>Protect & finish</h3><p>We complete a quality check and advise on optional protection.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-dark guarantees-section">
        <div className="page-shell">
          <div className="section-heading split-heading"><div><span className="eyebrow">Our guarantees</span><h2>Confident care from first assessment to final finish.</h2></div><p>Our service model is built around protecting the fabric, the room and your time.</p></div>
          <div className="guarantee-grid">{guarantees.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section section-light comparison-section">
        <div className="page-shell comparison-layout">
          <div><span className="eyebrow">A better way to care</span><h2>On-site dry cleaning vs conventional wet cleaning.</h2><p>Traditional cleaning adds removal, transport, drying, pressing and rehanging. Our on-site method removes those handling stages and keeps your space operational.</p></div>
          <div className="comparison-scroll">
            <div className="comparison-table comparison-table-four" role="table" aria-label="Curtain cleaning method comparison">
              <div role="row"><strong role="columnheader">What matters</strong><strong role="columnheader">JHB dry care</strong><strong role="columnheader">Off-site cleaning</strong><strong role="columnheader">On-site wet extraction</strong></div>
              <div role="row"><span>Handling</span><b>Remains hanging</b><span>Removed and transported</span><span>Remains hanging</span></div>
              <div role="row"><span>Drying</span><b>No conventional drying stage</b><span>Often several days</span><span>Several hours possible</span></div>
              <div role="row"><span>Fabric control</span><b>Assessment-led process</b><span>Wash-and-dry exposure</span><span>Moisture and heat exposure</span></div>
              <div role="row"><span>Hardware care</span><b>Track check included</b><span>Not usually included</span><span>Fabric-focused</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="page-shell">
          <div className="quote-story-grid">
            <div className="quote-story-copy">
              <span className="eyebrow">A quote you can trust</span>
              <h2>Why we don’t publish prices online</h2>
              <p className="quote-story-lead">Because “one size fits all” doesn’t work for curtains. Here’s why we do it differently — and why you’ll be glad we do.</p>
              <h3>Every job is genuinely different</h3>
              <blockquote>“Every job genuinely requires a proper assessment first — fabric type, lining construction, track or rod hardware, the cleaning method required, and your specific sector requirements all affect the process and the outcome.”</blockquote>
              <p>Publishing a price without seeing your curtains would mean either overcharging you or cutting corners — and we’re not willing to do either.</p>
              <p>Instead, we offer a completely free, no-obligation on-site assessment. Kathy personally visits, evaluates everything properly, and provides a detailed written quote you can trust.</p>
              <p className="quote-story-emphasis">Most clients are genuinely surprised by how affordable professional on-site cleaning is compared to replacement or conventional services.</p>
            </div>
            <aside className="quote-cta-card" aria-labelledby="quote-cta-title">
              <span className="eyebrow">Book your free assessment</span>
              <h3 id="quote-cta-title">A proper assessment, at no cost.</h3>
              <p>Free <span aria-hidden="true">·</span> No obligation <span aria-hidden="true">·</span> Kathy visits within 48 hours</p>
              <a className="button" href="#contact">Get a Free Quote</a>
              <div className="quote-phone-list" aria-label="Call JHB Curtain Cleaning">
                <a href="tel:+27750119200"><span>Call</span><strong>+27 75 011 9200</strong></a>
                <a href="tel:+27716226753"><span>Kathy</span><strong>071 622 6753</strong></a>
                <a href="tel:+27615222037"><span>Office</span><strong>061 522 2037</strong></a>
              </div>
            </aside>
          </div>

          <div className="quote-factors-section">
            <div className="quote-subheading"><span className="eyebrow">What affects your quote</span><h3>Four details shape the right treatment.</h3></div>
            <div className="quote-factor-grid">
              {quoteFactors.map(({ icon: Icon, title, copy }) => <article key={title}><span className="quote-icon" aria-hidden="true"><Icon size={24} strokeWidth={1.35} /></span><h4>{title}</h4><p>{copy}</p></article>)}
            </div>
          </div>

          <div className="quote-benefits-section">
            <div className="quote-subheading"><span className="eyebrow">What you get instead of a price list</span><h3>When Kathy visits for your free assessment, you’ll receive:</h3></div>
            <div className="quote-benefit-grid">
              {quoteBenefits.map(({ icon: Icon, title, copy }) => <article key={title}><span className="quote-icon" aria-hidden="true"><Icon size={24} strokeWidth={1.35} /></span><div><h4>{title}</h4><p>{copy}</p></div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark sectors-section" id="sectors">
        <div className="page-shell">
          <div className="section-heading split-heading sectors-heading">
            <div><span className="eyebrow">Sectors we serve</span><h2>One specialist standard, across every property.</h2></div>
            <div><p>Discreet, scheduled service for private homes and demanding professional environments throughout Johannesburg.</p><a className="button button-outline" href="#contact">Discuss your property</a></div>
          </div>
          <div className="sector-card-grid">{sectors.map((item, index) => (
            <Link className="sector-card" href={item.path} key={item.slug}>
              <Image
                src={sectorImages[item.slug]}
                alt={`${item.shortTitle} fabric-care environment`}
                width={960}
                height={720}
                sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1180px) calc(50vw - 40px), calc(33vw - 40px)"
              />
              <span className="sector-card-shade" />
              <span className="sector-card-number">0{index + 1}</span>
              <span className="sector-card-copy"><strong>{item.shortTitle}</strong><b>Explore sector <span aria-hidden="true">↗</span></b></span>
            </Link>
          ))}</div>
        </div>
      </section>

      <section className="section areas-section" id="areas">
        <div className="page-shell">
          <div className="section-heading split-heading"><div><span className="eyebrow">Areas we serve</span><h2>Expert care across Johannesburg.</h2></div><p>Based in Roodepoort and serving homes, hotels and businesses across greater Johannesburg, Midrand and selected Pretoria areas.</p></div>
          <div className="area-card-grid">{areas.map((item) => <Link href={item.path} key={item.slug}>
            <Image
              src={areaImages[item.slug]}
              alt={`Luxury interior in ${item.shortTitle}`}
              width={960}
              height={720}
              sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1180px) calc(50vw - 40px), calc(33vw - 40px)"
            />
            <span className="area-card-shade" />
            <span className="area-card-copy"><em>Service area</em><strong>{item.shortTitle}</strong><b>On-site curtain cleaning in {item.shortTitle} <span aria-hidden="true">↗</span></b></span>
          </Link>)}</div>
        </div>
      </section>

      <section className="section story-section" id="about">
        <div className="page-shell story-grid">
          <div className="story-image" role="img" aria-label="Elegant ivory curtains in a Johannesburg interior" />
          <div className="story-copy"><span className="eyebrow">About JHB Curtain Cleaning</span><h2>Every curtain is different. That’s why we come to you.</h2><p className="lead">JHB Curtain Cleaning brings fabric assessment and on-site care directly to your home or business.</p><p>We assess first, explain the proposed treatment and work carefully around your space, with a practical plan for residential and professional properties.</p><ul className="tick-list"><li>Fabric-specific assessment</li><li>No removal or rehanging</li><li>Clear written quotation</li><li>Residential and commercial care</li></ul><Link className="text-link" href="/about">Learn about our approach <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section section-light" id="faq">
        <div className="page-shell faq-layout">
          <div><span className="eyebrow">Curtain cleaning FAQ</span><h2>Clear answers before we visit.</h2><p className="faq-intro">Still have questions? Call or WhatsApp and speak directly with a curtain-care specialist.</p></div>
          <div className="faq-list">{homeFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="guide-cta-section">
        <div className="page-shell guide-cta"><div><span className="eyebrow">Free fabric-care guide</span><h2>Expert advice for beautifully kept curtains.</h2><p>Explore practical curtain, mattress, upholstery and rug-care guidance from Johannesburg specialists.</p></div><Link className="button" href="/guides">Get your free fabric-care guide</Link></div>
      </section>

      <ContactSection title="Get your free assessment." />
      <Footer />
    </main>
  );
}
