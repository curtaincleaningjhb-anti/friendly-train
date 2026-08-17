export const whatsappUrl =
  "https://wa.me/27750119200?text=Hello%20JHB%20Curtain%20Cleaning%2C%20I%27d%20like%20a%20free%20assessment.";

export type PageEntry = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  intro: string;
  highlights: string[];
  process: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
  kind: "service" | "sector" | "area";
};

export const landingHeroImages: Record<string, string> = {
  "curtain-blind-cleaning": "/heroes/service-curtain-blind-hero.webp",
  "mattress-sanitisation": "/heroes/service-mattress-hero.webp",
  "upholstery-carpet-cleaning": "/heroes/service-upholstery-carpet-hero.webp",
  "master-guarding": "/heroes/service-master-guarding-hero.webp",
  "fire-proofing": "/heroes/service-fire-proofing-hero.webp",
  "rug-care": "/heroes/service-rug-care-hero.webp",
  hotels: "/heroes/sector-hotels-hero.webp",
  corporate: "/heroes/sector-corporate-hero.webp",
  healthcare: "/heroes/sector-healthcare-hero.webp",
  education: "/heroes/sector-education-hero.webp",
  theatres: "/heroes/sector-theatres-hero.webp",
  residential: "/heroes/sector-residential-hero.webp",
  "jhb-north": "/heroes/area-jhb-north-hero.webp",
  "jhb-east": "/heroes/area-jhb-east-hero.webp",
  "jhb-south": "/heroes/area-jhb-south-hero.webp",
  "jhb-west": "/heroes/area-jhb-west-hero.webp",
  "jhb-central": "/heroes/area-jhb-central-hero.webp",
  "pretoria-midrand": "/heroes/area-pretoria-midrand-hero.webp",
  sandton: "/heroes/area-sandton-hero.webp",
  randburg: "/heroes/area-randburg-hero.webp",
  fourways: "/heroes/area-fourways-hero.webp",
  midrand: "/heroes/area-midrand-hero.webp",
};

const service = (entry: Omit<PageEntry, "path" | "kind">): PageEntry => ({
  ...entry,
  path: `/services/${entry.slug}`,
  kind: "service",
});

const sector = (entry: Omit<PageEntry, "path" | "kind">): PageEntry => ({
  ...entry,
  path: `/sectors/${entry.slug}`,
  kind: "sector",
});

const area = (entry: Omit<PageEntry, "path" | "kind">): PageEntry => ({
  ...entry,
  path: `/areas/${entry.slug}`,
  kind: "area",
});

export const services: PageEntry[] = [
  service({
    slug: "curtain-blind-cleaning",
    title: "Professional curtain and blind cleaning in Johannesburg",
    shortTitle: "Curtain & Blind Cleaning",
    eyebrow: "Assessment-led on-site care",
    description: "Professional water-free, on-site curtain and blind cleaning in Johannesburg, completed with no removal and no conventional drying disruption.",
    intro: "We inspect fabric, lining, construction, operating systems and condition before selecting the treatment. Curtains are cleaned with a specialist water-free dry-extraction process while they remain safely hanging. Roman, roller, vertical, Venetian and fabric blinds receive material-appropriate professional care, with mechanisms protected throughout.",
    highlights: ["Curtains remain hanging", "Roman, roller and vertical blinds", "Fabric and lining assessed first", "Hardware and heading check included"],
    process: ["Free fabric assessment", "Room and furnishing protection", "Controlled on-site deep clean", "Finish and quality inspection"],
    benefits: ["No removal or rehanging", "Rooms remain usable", "Suitable for delicate and lined curtains", "Johannesburg-wide mobile service"],
    faqs: [
      { question: "Can velvet, sheer and blackout curtains be cleaned while hanging?", answer: "Yes, subject to a fabric assessment. Our specialist water-free dry-extraction process cleans suitable velvet, sheer and blackout curtains while they remain hanging, avoiding the liquid-water wash and thermal drying stages that can distort fabric and linings." },
      { question: "Will my curtains shrink?", answer: "We assess fabric, lining, construction and prior condition before confirming whether on-site treatment is appropriate." },
      { question: "Can you clean delicate fabrics?", answer: "Yes, including many silk, linen and lined fabrics, subject to a fabric, lining and colourfastness assessment before treatment begins." },
      { question: "Do I need to take my curtains down?", answer: "No. Curtains remain hanging throughout the service." },
    ],
    related: ["/services/mattress-sanitisation", "/services/upholstery-carpet-cleaning", "/sectors/hotels"],
  }),
  service({
    slug: "mattress-sanitisation",
    title: "Clinical dust-mite removal and hypoallergenic mattress treatment",
    shortTitle: "Deep Mattress Sanitisation",
    eyebrow: "Health-focused fabric care",
    description: "Professional mattress cleaning and sanitisation in Johannesburg for dust, allergens, odours and everyday hygiene concerns.",
    intro: "Our targeted treatment reaches embedded dust and allergens while refreshing the sleeping surface with minimal interruption to your home, hotel or care environment.",
    highlights: ["Dust and allergen reduction", "Odour treatment", "Fabric-safe sanitisation", "Residential and commercial appointments"],
    process: ["Inspect stains and construction", "Deep clean high-contact surfaces", "Target odours and hygiene concerns", "Complete a final condition check"],
    benefits: ["A fresher sleep environment", "Allergy-conscious care", "Convenient on-site treatment", "Suitable for homes and hospitality"],
    faqs: [
      { question: "Is the treatment safe for children?", answer: "We assess the mattress and household requirements first, then use an appropriate fabric-safe treatment." },
      { question: "How long until I can use the mattress?", answer: "Timing depends on the mattress and treatment selected; we confirm the expected turnaround during assessment." },
      { question: "How often should I sanitise my mattress?", answer: "Use, allergies, pets and the environment all affect the interval. We recommend a practical schedule after inspection." },
    ],
    related: ["/services/curtain-blind-cleaning", "/services/upholstery-carpet-cleaning", "/sectors/healthcare"],
  }),
  service({
    slug: "upholstery-carpet-cleaning",
    title: "Fabric-safe cleaning for upholstered furniture and carpets",
    shortTitle: "Upholstery & Carpet Cleaning",
    eyebrow: "Furniture and fitted-fabric care",
    description: "Specialist upholstery and carpet cleaning in Johannesburg for homes, offices, hotels and high-traffic environments.",
    intro: "From everyday lounge suites and fitted carpets to carefully specified commercial fabrics, we select the process for each fibre, construction, colourfastness and condition.",
    highlights: ["Sofas, chairs and banquettes", "Fitted carpets and traffic lanes", "Stain and odour treatment", "Optional fabric protection"],
    process: ["Assess fibre and colourfastness", "Pre-treat marks and high-use areas", "Deep clean with controlled moisture", "Groom, inspect and advise"],
    benefits: ["Fabric-specific care", "Improved appearance and freshness", "Residential and commercial capability", "After-hours options"],
    faqs: [
      { question: "Can you clean leather furniture?", answer: "We assess the material and finish first and recommend the correct specialist treatment." },
      { question: "Will cleaning change the texture?", answer: "Fibre and construction are checked before treatment to protect the fabric’s handle and appearance." },
      { question: "How long until furniture is dry?", answer: "Drying varies by fibre, ventilation and treatment. We explain the expected timeframe before work begins." },
    ],
    related: ["/services/curtain-blind-cleaning", "/services/master-guarding", "/sectors/corporate"],
  }),
  service({
    slug: "master-guarding",
    title: "Professional stain protection for curtains and fabrics",
    shortTitle: "Master Guarding Protection",
    eyebrow: "Longer-lasting fabric care",
    description: "Professional Master Guarding fabric protection in Johannesburg for curtains, upholstery, rugs and selected soft furnishings.",
    intro: "A specialist protective treatment helps suitable fibres resist everyday spills and soiling, making ongoing care easier and supporting a longer useful life.",
    highlights: ["Professional protective application", "Improved stain resistance", "Easier routine maintenance", "Suitability assessed first"],
    process: ["Assess fibre and prior treatments", "Clean and prepare the fabric", "Apply protection evenly", "Inspect coverage and explain aftercare"],
    benefits: ["More time to respond to spills", "Reduced soil penetration", "Supports longer fabric life", "Ideal for high-use environments"],
    faqs: [
      { question: "Is it safe for pets and children?", answer: "We confirm the product, surface and household requirements before application and explain the required aftercare." },
      { question: "Does it change the feel of the fabric?", answer: "The treatment is selected and applied to protect the fabric’s appearance and handle." },
      { question: "Can I apply it myself?", answer: "Professional preparation and even application are important for consistent, reliable coverage." },
    ],
    related: ["/services/curtain-blind-cleaning", "/services/upholstery-carpet-cleaning", "/services/rug-care"],
  }),
  service({
    slug: "fire-proofing",
    title: "Professional fire-retardant treatment for suitable fabrics",
    shortTitle: "Fire Proofing",
    eyebrow: "Compliance-focused treatment",
    description: "Professional fire-retardant fabric treatment in Johannesburg for hospitality, events, theatres and commercial venues.",
    intro: "We assess suitable curtains and fabrics against the property, application and compliance requirement before specifying and applying the treatment.",
    highlights: ["Fire-retardant fabric treatment", "Commercial and hospitality applications", "Suitability assessment", "Documentation where applicable"],
    process: ["Confirm fabric and requirement", "Test suitability and calculate coverage", "Apply the specified treatment", "Complete records and aftercare guidance"],
    benefits: ["Supports fire-safety planning", "Professional application", "Clear scope and records", "Scheduled around operations"],
    faqs: [
      { question: "How long does fire proofing last?", answer: "Service life depends on the product, fabric, cleaning history and use. We provide maintenance and retreatment guidance." },
      { question: "Is it required by law?", answer: "Requirements depend on the venue and use. We recommend confirming the applicable requirement with the responsible safety authority." },
      { question: "Can you work after hours?", answer: "Yes. Commercial work can be planned around access and operating requirements." },
    ],
    related: ["/services/curtain-blind-cleaning", "/sectors/hotels", "/sectors/theatres"],
  }),
  service({
    slug: "rug-care",
    title: "Expert care for Persian and Oriental rugs",
    shortTitle: "Persian & Oriental Rug Care",
    eyebrow: "Care for treasured rugs",
    description: "Considered Persian and Oriental rug cleaning in Johannesburg, with fibre, dye and construction assessed before treatment.",
    intro: "Hand-knotted and specialist rugs deserve individual attention. We examine fibre, weave, dye stability, fringe and prior damage before recommending cleaning or restorative care.",
    highlights: ["Pre-treatment assessment", "Careful hand washing where appropriate", "Fringe and detail care", "Restoration advice"],
    process: ["Document construction and condition", "Test fibres and dyes", "Select a specialist treatment", "Inspect, finish and provide care guidance"],
    benefits: ["Individual treatment plan", "Premium fibre care", "Condition documented first", "Long-term preservation focus"],
    faqs: [
      { question: "Will the colours bleed?", answer: "We test dye stability before treatment and select the method accordingly." },
      { question: "Can you clean silk rugs?", answer: "Silk and specialist fibres require individual assessment before a treatment recommendation." },
      { question: "Do I need to bring the rug to you?", answer: "Contact us with photos and dimensions first; we will confirm the safest collection or service arrangement." },
    ],
    related: ["/services/upholstery-carpet-cleaning", "/services/master-guarding", "/sectors/residential"],
  }),
];

const commonSectorFaqs = [
  { question: "Can work be scheduled after hours?", answer: "Yes. We plan access and phased work around the property’s operating requirements." },
  { question: "Can several fabric services be combined?", answer: "Yes. Curtains, blinds, upholstery, carpets, mattresses and protection can be scoped together." },
  { question: "Is the assessment free?", answer: "Yes. Contact us for a no-obligation site assessment and clear quotation." },
];

export const sectors: PageEntry[] = [
  sector({ slug: "hotels", title: "Hotel curtain cleaning with zero guest disruption", shortTitle: "Hotels & Hospitality", eyebrow: "Guest-ready fabric care", description: "Scheduled in-situ curtain, upholstery, carpet and mattress cleaning for Johannesburg hotels, lodges and guest properties.", intro: "Curtains remain on their tracks, so rooms avoid bare-window downtime and conventional drying delays. We coordinate floor by floor during low-occupancy periods or approved night-shift windows, protecting room availability, presentation and guest privacy.", highlights: ["In-situ cleaning planned around room operations", "Night-shift and low-occupancy scheduling", "Fire-retardant treatment options where specified", "Room-by-room reporting and volume programmes"], process: ["Survey rooms and fabric specifications", "Build a phased occupancy-aware schedule", "Complete a representative test room", "Deliver and report by floor or zone"], benefits: ["Protect room occupancy and presentation", "Avoid curtain removal and transport", "One specialist across fabric categories", "Flexible recurring schedules"], faqs: [...commonSectorFaqs, { question: "How long does hotel curtain cleaning take?", answer: "Work is planned around the survey, room count and access. Large portfolios can be phased through low-occupancy windows such as 10:00–14:00 or approved night shifts such as 22:00–06:00; confirmed daily capacity is provided after the site assessment." }], related: ["/services/curtain-blind-cleaning", "/services/mattress-sanitisation", "/services/fire-proofing"] }),
  sector({ slug: "corporate", title: "Professional fabric care for corporate offices", shortTitle: "Corporate Offices", eyebrow: "Workplace presentation", description: "After-hours curtain, blind, upholstery and carpet cleaning for offices across Johannesburg.", intro: "A cared-for workplace supports brand presentation and daily comfort. We plan quiet, phased or after-hours service around teams and building access.", highlights: ["After-hours scheduling", "Boardroom and reception care", "Maintenance programmes", "Multi-floor capability"], process: ["Survey the workplace", "Prioritise public areas", "Agree a phased plan", "Complete and report by zone"], benefits: ["Minimal employee disruption", "Professional presentation", "Consolidated fabric-care scope", "Planned maintenance options"], faqs: commonSectorFaqs, related: ["/services/curtain-blind-cleaning", "/services/upholstery-carpet-cleaning", "/services/master-guarding"] }),
  sector({ slug: "healthcare", title: "Hygiene-conscious fabric care for healthcare environments", shortTitle: "Healthcare", eyebrow: "Controlled service planning", description: "Carefully planned curtain, blind, upholstery and mattress sanitisation for Johannesburg healthcare environments.", intro: "Healthcare and care settings require controlled access, clear product choices and hygiene-conscious execution. We coordinate with facility teams, use suitable low-odour or fragrance-free options where specified, and work by approved zones around patient care.", highlights: ["Anti-bacterial and allergen-focused options", "Mattress and high-contact fabric care", "Low-odour or fragrance-free planning", "Phased work with clear service records"], process: ["Review facility protocols", "Agree access, products and zones", "Complete controlled work by area", "Record scope and aftercare guidance"], benefits: ["Minimal patient-care disruption", "Clear pre-work product planning", "Multi-surface expertise", "Repeatable hygiene programmes"], faqs: commonSectorFaqs, related: ["/services/curtain-blind-cleaning", "/services/mattress-sanitisation", "/services/fire-proofing"] }),
  sector({ slug: "education", title: "Flexible curtain and fabric care for schools and education", shortTitle: "Schools & Education", eyebrow: "Term-aware scheduling", description: "Planned curtain, blind, carpet, upholstery and fire-retardant treatment for Johannesburg education facilities.", intro: "We coordinate around term dates, halls, classrooms and high-use shared areas. Weekend and holiday scheduling reduces disruption, while allergen-focused cleaning and suitable fire-retardant treatment options can be included where specified.", highlights: ["Weekend and school-holiday service", "Allergen reduction for learning spaces", "Fire-retardant treatment options where specified", "Phased campus and hall schedules"], process: ["Survey buildings and safety priorities", "Plan around the academic calendar", "Work by block, hall or zone", "Complete a facilities and documentation review"], benefits: ["Minimal timetable disruption", "One fabric-care specialist", "Practical large-site planning", "Recurring maintenance options"], faqs: commonSectorFaqs, related: ["/services/curtain-blind-cleaning", "/services/upholstery-carpet-cleaning", "/services/fire-proofing"] }),
  sector({ slug: "theatres", title: "Specialist curtain care for theatres and venues", shortTitle: "Theatres & Venues", eyebrow: "Stage and venue expertise", description: "Specialist cleaning and fire-retardant treatment for suitable stage curtains, drapes, seating and venue fabrics in Johannesburg.", intro: "Heavy acoustic velour, stage drapes and public venues demand specialist high-reach access, rigging-aware planning and coordination around rehearsals and performances. Treatment scope and applicable flame-retardant documentation are confirmed before work begins.", highlights: ["Heavy stage and acoustic velour drapes", "High-reach and rigging-aware planning", "Treatment scope and service records", "After-hours work around performances"], process: ["Assess scale, rigging access and fabrics", "Confirm venue and fire-safety requirements", "Complete the planned specialist treatment", "Document and inspect the result"], benefits: ["Less venue downtime", "Large-format fabric capability", "Compliance-conscious planning", "One coordinated cleaning and treatment scope"], faqs: commonSectorFaqs, related: ["/services/curtain-blind-cleaning", "/services/fire-proofing", "/services/upholstery-carpet-cleaning"] }),
  sector({ slug: "residential", title: "Discreet curtain and fabric care for Johannesburg homes", shortTitle: "Residential", eyebrow: "Care for your home", description: "Convenient on-site curtain, blind, upholstery and mattress cleaning for homes across Johannesburg.", intro: "We work carefully around your home, family and furnishings. Curtains remain hanging, rooms remain usable and every treatment is explained before work begins.", highlights: ["Family-friendly on-site service", "No removal or rehanging", "Allergy-conscious mattress care", "Free assessment"], process: ["Discuss rooms and priorities", "Assess fabrics in your home", "Confirm a clear quotation", "Complete work with room protection"], benefits: ["Convenient scheduling", "Fabric-specific expertise", "One team for household fabrics", "Fabric and lining assessed first"], faqs: commonSectorFaqs, related: ["/services/curtain-blind-cleaning", "/services/mattress-sanitisation", "/services/upholstery-carpet-cleaning"] }),
];

const areaEntry = ({ slug, shortTitle, localities, localContext, related }: { slug: string; shortTitle: string; localities: string[]; localContext: string; related?: string[] }): PageEntry => area({
  slug,
  title: `On-site curtain cleaning in ${shortTitle}`,
  shortTitle,
  eyebrow: "Johannesburg service area",
  description: `Professional on-site curtain, blind and fabric care throughout ${shortTitle}, with free assessments and no-removal curtain cleaning.`,
  intro: `Our mobile specialist team serves homes, hotels and businesses across ${shortTitle}. ${localContext} We assess on site, recommend the right fabric-specific treatment and plan the work around your property.`,
  highlights: localities,
  process: ["Send photos or request a visit", "Receive a free local assessment", "Approve a clear quotation", "Enjoy careful on-site service"],
  benefits: ["Johannesburg-based team", "No curtain removal", "Residential and commercial care", "Call and WhatsApp booking"],
  faqs: [
    { question: `Do you serve all of ${shortTitle}?`, answer: `We cover the main suburbs and surrounding areas. Send your location by WhatsApp and we will confirm availability.` },
    { question: "Is there a call-out fee for an assessment?", answer: "Assessments are free and no-obligation within our normal service area." },
    { question: "Can you clean curtains without taking them down?", answer: "Yes. Our core curtain-cleaning process is completed while curtains remain hanging." },
  ],
  related: related ?? ["/services/curtain-blind-cleaning", "/services/upholstery-carpet-cleaning", "/sectors/residential"],
});

export const areas: PageEntry[] = [
  areaEntry({ slug: "jhb-north", shortTitle: "Johannesburg North", localities: ["Sandton", "Bryanston", "Fourways", "Randburg"], localContext: "Highveld dust settles quickly on full-length sheer voiles, silk, linen and imported floor-to-ceiling fabrics, so we emphasise gentle, non-abrasive extraction and careful track protection.", related: ["/areas/sandton", "/areas/randburg", "/areas/fourways"] }),
  areaEntry({ slug: "jhb-east", shortTitle: "Johannesburg East", localities: ["Bedfordview", "Edenvale", "Germiston", "Boksburg"], localContext: "Traffic and airport-corridor residue can leave a greasy film on heavy drapes, so treatment is selected to lift soil and neutralise odours without stressing the fabric." }),
  areaEntry({ slug: "jhb-south", shortTitle: "Johannesburg South", localities: ["Alberton", "Mondeor", "Glenvista", "Mulbarton"], localContext: "Many local homes feature velvet, chenille, lined and blackout window treatments; our water-free method is designed to protect heavy multi-layered fabrics and delicate linings." }),
  areaEntry({ slug: "jhb-west", shortTitle: "Johannesburg West", localities: ["Roodepoort", "Florida", "Constantia Kloof", "Weltevreden Park"], localContext: "Fine Highveld and mining-belt particulate can settle deep in lined drapes, so we focus on controlled deep extraction that lifts dust instead of driving it into the lining." }),
  areaEntry({ slug: "jhb-central", shortTitle: "Johannesburg Central", localities: ["Rosebank", "Parktown", "Melrose", "Houghton"], localContext: "Urban traffic, office use and heritage interiors call for careful fabric identification, discreet scheduling and targeted treatment of dust, odours and high-contact areas." }),
  areaEntry({ slug: "pretoria-midrand", shortTitle: "Pretoria & Midrand", localities: ["Midrand", "Centurion", "Waterkloof", "Menlyn"], localContext: "Seasonal pollen and dry Highveld dust become trapped in woven fabrics, so we prioritise deep allergen extraction, mattress sanitisation and suitable fire-retardant options.", related: ["/areas/midrand", "/services/mattress-sanitisation", "/sectors/corporate"] }),
];

export const suburbAreas: PageEntry[] = [
  areaEntry({ slug: "sandton", shortTitle: "Sandton", localities: ["Sandton Central", "Bryanston", "Morningside", "Hyde Park"], localContext: "Luxury homes, hotels and offices often combine imported sheers, silk blends and double-volume curtains that need gentle on-site care without track removal.", related: ["/areas/jhb-north", "/services/curtain-blind-cleaning", "/sectors/hotels"] }),
  areaEntry({ slug: "randburg", shortTitle: "Randburg", localities: ["Randburg", "Ferndale", "Northcliff", "Blairgowrie"], localContext: "Open windows and seasonal dust can load curtain folds, blinds and upholstery with fine particulate and allergens, making coordinated room-by-room care especially useful.", related: ["/areas/jhb-north", "/services/curtain-blind-cleaning", "/sectors/residential"] }),
  areaEntry({ slug: "fourways", shortTitle: "Fourways", localities: ["Fourways", "Lonehill", "Dainfern", "Broadacres"], localContext: "Large residential interiors and estate properties often feature floor-to-ceiling drapery, sheers and layered blockouts that are best treated in place.", related: ["/areas/jhb-north", "/services/curtain-blind-cleaning", "/services/master-guarding"] }),
  areaEntry({ slug: "midrand", shortTitle: "Midrand", localities: ["Midrand", "Waterfall", "Kyalami", "Halfway Gardens"], localContext: "Rapid development, seasonal pollen and busy commercial environments create a need for allergen-focused residential care and phased after-hours office programmes.", related: ["/areas/pretoria-midrand", "/services/mattress-sanitisation", "/sectors/corporate"] }),
];

export const allDetailPages = [...services, ...sectors, ...areas, ...suburbAreas];
export const industries = sectors;

export function findPage(category: string, slug: string) {
  return allDetailPages.find((page) => page.path === `/${category}/${slug}`);
}

export function findPageByPath(path: string) {
  return allDetailPages.find((page) => page.path === path);
}
