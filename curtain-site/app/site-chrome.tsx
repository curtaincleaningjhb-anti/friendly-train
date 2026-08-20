import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import { areas, sectors, services, whatsappUrl } from "./site-content";

function NavDropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: typeof services;
}) {
  return (
    <div className="nav-group">
      <Link href={href} aria-haspopup="true">
        {label} <span className="nav-chevron" aria-hidden="true">⌄</span>
      </Link>
      <div className="nav-dropdown" aria-label={`${label} navigation`}>
        {items.map((item) => (
          <Link href={item.path} key={item.slug}>{item.shortTitle}</Link>
        ))}
      </div>
    </div>
  );
}

export function Header({ compact = false }: { compact?: boolean }) {
  return (
    <header className={`site-header page-shell${compact ? " compact-header" : ""}`}>
      <Link className="brand" href="/" aria-label="JHB Curtain Cleaning home">
        <Image className="brand-symbol" src="/brand-drapery-mark.svg" alt="" width={42} height={52} />
        <span className="brand-copy"><strong>JHB Curtain Cleaning</strong><small>Professional services</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <NavDropdown label="Our services" href="/services" items={services} />
        <NavDropdown label="Sectors we serve" href="/sectors" items={sectors} />
        <NavDropdown label="Service areas" href="/areas" items={areas} />
        <Link href="/about">About</Link>
        <Link href="/guides">Guides</Link>
        <Link href="/case-studies">Case studies</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <div className="header-actions">
        <a className="phone-link" href="tel:+27750119200"><span aria-hidden="true">☎</span> +27 75 011 9200</a>
        <Link className="button button-small" href="/#contact">Get a quote</Link>
      </div>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          <Link href="/">Home</Link>
          <strong>Our services</strong>
          <Link className="mobile-overview-link" href="/services">View all services</Link>
          {services.map((item) => <Link href={item.path} key={item.slug}>{item.shortTitle}</Link>)}
          <strong>Sectors we serve</strong>
          <Link className="mobile-overview-link" href="/sectors">View all sectors</Link>
          {sectors.map((item) => <Link href={item.path} key={item.slug}>{item.shortTitle}</Link>)}
          <strong>Service areas</strong>
          <Link className="mobile-overview-link" href="/areas">View all service areas</Link>
          {areas.map((item) => <Link href={item.path} key={item.slug}>{item.shortTitle}</Link>)}
          <strong>Explore</strong>
          <Link href="/about">About</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/advice">Expert advice</Link>
          <Link href="/case-studies">Case studies</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#contact">Contact</Link>
          <a href="tel:+27750119200">Call +27 75 011 9200</a>
        </nav>
      </details>
    </header>
  );
}

export function ContactSection({ title = "Let’s restore the beauty of your fabrics." }: { title?: string }) {
  return (
    <section className="contact-section" id="contact">
      <div className="page-shell">
        <div className="contact-intro">
          <span className="eyebrow">Complimentary assessment</span>
          <h2>{title}</h2>
          <p>Tell us what needs attention. We’ll respond with practical advice and arrange a free assessment anywhere in Johannesburg. You can also visit our Florida, Roodepoort dispatch base by arrangement.</p>
        </div>
        <div className="contact-tools">
          <div className="contact-map-panel">
            <iframe
              title="JHB Curtain Cleaning dispatch base in Florida, Roodepoort"
              src="https://www.google.com/maps?q=10%20Second%20Avenue%2C%20Florida%2C%20Roodepoort%2C%201710&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="contact-map-address"><span>By arrangement</span><strong>10 Second Avenue, Florida, Roodepoort</strong></div>
          </div>
          <ContactForm />
        </div>
        <div className="contact-card">
          <a className="contact-option" href={whatsappUrl}><span>WhatsApp enquiries</span><strong>WhatsApp +27 75 011 9200</strong><b aria-hidden="true">↗</b></a>
          <a className="contact-option" href="tel:+27750119200"><span>Speak to a specialist</span><strong>Call +27 75 011 9200</strong><b aria-hidden="true">↗</b></a>
          <a className="contact-option" href="mailto:info@jhbcurtaincleaning.co.za?subject=Free%20assessment"><span>Send your requirements</span><strong>info@jhbcurtaincleaning.co.za</strong><b aria-hidden="true">↗</b></a>
          <div className="contact-trust" aria-label="JHB Curtain Cleaning trust commitments">
            <span>Fabric-specific assessment</span>
            <span>On-site service planning</span>
            <span>Clear written quotations</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <>
      <footer id="site-footer">
        <div className="page-shell footer-grid expanded-footer">
          <div className="footer-brand"><Link className="brand footer-brand-lockup" href="/" aria-label="JHB Curtain Cleaning home"><Image className="brand-symbol" src="/brand-drapery-mark.svg" alt="" width={50} height={62} /><span className="brand-copy"><strong>JHB Curtain<br />Cleaning</strong><small>Professional services</small></span></Link><p>Johannesburg’s specialist on-site curtain and fabric care team.</p><Link className="text-link" href="/guides">Read our fabric-care guides →</Link></div>
          <div><Link href="/sectors"><strong>Sectors we serve</strong></Link>{sectors.map((item) => <Link href={item.path} key={item.slug}>{item.shortTitle}</Link>)}</div>
          <div><Link href="/services"><strong>Our services</strong></Link>{services.map((item) => <Link href={item.path} key={item.slug}>{item.shortTitle}</Link>)}</div>
          <div><Link href="/areas"><strong>Service areas</strong></Link>{areas.map((item) => <Link href={item.path} key={item.slug}>{item.shortTitle}</Link>)}</div>
          <div><Link href="/#contact"><strong>Contact us</strong></Link><a href="tel:+27750119200">+27 75 011 9200</a><a href="mailto:info@jhbcurtaincleaning.co.za">info@jhbcurtaincleaning.co.za</a><a href={whatsappUrl}>WhatsApp us</a><span>10 Second Avenue, Florida, Roodepoort, 1710</span><small>Administrative dispatch base; all cleaning is delivered on site.</small></div>
        </div>
        <div className="page-shell footer-bottom">
          <nav className="footer-legal-links" aria-label="Footer utility navigation">
            <Link href="/about">About</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/advice">Advice</Link>
            <Link href="/case-studies">Case studies</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/newsletter">Newsletter</Link>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-service">Terms</Link>
          </nav>
          <span>© 2026 JHB Curtain Cleaning. All rights reserved.</span>
        </div>
      </footer>
      <a className="floating-whatsapp" href={whatsappUrl} aria-label="Chat with JHB Curtain Cleaning on WhatsApp">WhatsApp</a>
    </>
  );
}
