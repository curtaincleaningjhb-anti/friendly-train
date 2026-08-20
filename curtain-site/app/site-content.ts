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
  "persian-oriental-rug-care": "/heroes/service-rug-care-hero.webp",
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
    description: "Assessment-led on-site curtain and blind cleaning in Johannesburg, planned around the fabric, lining, hardware, access and existing condition.",
    intro: "We inspect the fabric, lining, construction, operating system, access and existing condition before recommending a treatment. Suitable curtains may be treated while they remain hanging. Roman, roller, vertical, Venetian and fabric blinds are assessed individually because material, finish and mechanisms affect the service plan.",
    highlights: ["On-site options for suitable curtains", "Roman, roller and vertical blinds", "Fabric and lining assessed first", "Hardware and heading check included"],
    process: ["Free fabric assessment", "Room and furnishing protection", "Controlled on-site deep clean", "Finish and quality inspection"],
    benefits: ["Reduced handling where on-site care is suitable", "Service planned around the property", "Construction and condition considered first", "Johannesburg mobile assessment"],
    faqs: [
      { question: "Can velvet, sheer and blackout curtains be cleaned while hanging?", answer: "Some can be treated while hanging, but the fabric, lining, backing, prior condition, colourfastness and hardware must be assessed before suitability is confirmed." },
      { question: "Will my curtains shrink?", answer: "We assess fabric, lining, construction and prior condition before confirming whether on-site treatment is appropriate." },
      { question: "Can you clean delicate fabrics?", answer: "Delicate and lined fabrics require individual assessment. We document fibre, construction, colourfastness and existing damage before recommending treatment or referral." },
      { question: "Do I need to take my curtains down?", answer: "Not always. Suitable curtains may be treated on site, while other constructions or conditions may require a different plan or specialist referral." },
    ],
    related: ["/advice/how-on-site-curtain-cleaning-works", "/advice/curtain-cleaning-vs-washing-vs-dry-cleaning", "/advice/curtain-cleaning-prices", "/guides/how-to-get-curtain-cleaning-quote", "/case-studies"],
  }),
  service({
    slug: "mattress-sanitisation",
    title: "Assessment-led mattress cleaning and sanitisation",
    shortTitle: "Deep Mattress Sanitisation",
    eyebrow: "Health-focused fabric care",
    description: "Professional mattress cleaning in Johannesburg, planned around the cover fabric, construction, marks, odours and household or facility requirements.",
    intro: "We assess the mattress cover, construction, condition and use before recommending a cleaning plan. The scope, products, expected drying factors and limitations are explained before work begins.",
    highlights: ["Condition and construction review", "Odour and mark assessment", "Product choice confirmed first", "Residential and commercial appointments"],
    process: ["Inspect stains and construction", "Deep clean high-contact surfaces", "Target odours and hygiene concerns", "Complete a final condition check"],
    benefits: ["A fresher sleep environment", "Allergy-conscious care", "Convenient on-site treatment", "Suitable for homes and hospitality"],
    faqs: [
      { question: "What should I tell you about children, pets or sensitivities?", answer: "Share relevant household or facility requirements during assessment so the proposed products, access plan and aftercare can be reviewed before approval." },
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
    intro: "An optional protective treatment may help suitable fibres resist some everyday spills and soiling. Suitability, product instructions, limitations and aftercare must be confirmed for the exact item before application.",
    highlights: ["Professional protective application", "Improved stain resistance", "Easier routine maintenance", "Suitability assessed first"],
    process: ["Assess fibre and prior treatments", "Clean and prepare the fabric", "Apply protection evenly", "Inspect coverage and explain aftercare"],
    benefits: ["More time to respond to spills", "Reduced soil penetration", "Supports longer fabric life", "Ideal for high-use environments"],
    faqs: [
      { question: "What product information is reviewed before application?", answer: "The exact product, supplier instructions, surface, household or facility requirements, exclusions and aftercare should be reviewed before application is approved." },
      { question: "Does it change the feel of the fabric?", answer: "The treatment is selected and applied to protect the fabric’s appearance and handle." },
      { question: "Can I apply it myself?", answer: "Preparation, application and aftercare depend on the exact product and fabric. Review the supplier instructions and the item’s construction before deciding how to proceed." },
    ],
    related: ["/services/curtain-blind-cleaning", "/services/upholstery-carpet-cleaning", "/services/persian-oriental-rug-care"],
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
    slug: "persian-oriental-rug-care",
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
  sector({ slug: "hotels", title: "Hotel curtain cleaning planned around room operations", shortTitle: "Hotels & Hospitality", eyebrow: "Guest-ready fabric care", description: "Scheduled curtain, upholstery, carpet and mattress cleaning for Johannesburg hotels, lodges and guest properties.", intro: "We survey rooms, fabrics, access and occupancy requirements before proposing a phased plan. Suitable on-site curtain care can reduce removal and transport handling, while daily capacity and service windows are confirmed after assessment.", highlights: ["Service planned around room operations", "Low-occupancy or approved after-hours options", "Fire-retardant treatment considered where specified", "Room-by-room scope and reporting"], process: ["Survey rooms and fabric specifications", "Build a phased occupancy-aware schedule", "Complete an approved representative test area", "Deliver and report by floor or zone"], benefits: ["Plan around room availability", "Reduce handling where on-site care is suitable", "Coordinate several fabric categories", "Define repeat-service requirements"], faqs: [...commonSectorFaqs, { question: "How long does hotel curtain cleaning take?", answer: "Timing depends on the survey, room count, fabric, access, treatment and approved operating windows. A phased schedule and expected daily scope are confirmed in the written quotation." }], related: ["/services/curtain-blind-cleaning", "/guides/how-to-get-curtain-cleaning-quote", "/case-studies", "/advice/curtain-cleaning-prices"] }),
  sector({ slug: "corporate", title: "Professional fabric care for corporate offices", shortTitle: "Corporate Offices", eyebrow: "Workplace presentation", description: "Assessment-led curtain, blind, upholstery and carpet cleaning for offices across Johannesburg, with phased and after-hours options considered.", intro: "We survey floor access, security, room availability, fabric types and operating constraints before proposing a quiet, phased or after-hours service plan.", highlights: ["After-hours options assessed", "Boardroom and reception care", "Maintenance scope planning", "Multi-floor phasing"], process: ["Survey the workplace", "Prioritise public and operational areas", "Agree access and a phased plan", "Complete and report by zone"], benefits: ["Plan around teams and security", "Support workplace presentation", "Coordinate several fabric categories", "Define recurring scope"], faqs: commonSectorFaqs, related: ["/services/curtain-blind-cleaning", "/guides/office-curtain-blind-cleaning-maintenance", "/guides/how-to-get-curtain-cleaning-quote", "/case-studies"] }),
  sector({ slug: "healthcare", title: "Controlled fabric-care planning for healthcare environments", shortTitle: "Healthcare", eyebrow: "Evidence-gated service planning", description: "Assessment-led curtain, blind, upholstery and mattress care for Johannesburg healthcare and care environments.", intro: "Healthcare and care settings require approved access, product review, clear scope and careful coordination with facility teams. Service should proceed only after the responsible facility representative has approved the zones, products, records, terminology and operating constraints.", highlights: ["Facility protocols reviewed first", "Products and scope approved before work", "Phased access by authorised zone", "Service records aligned to the agreed scope"], process: ["Review facility protocols and evidence", "Agree access, products and zones", "Complete the approved scope by area", "Record work and aftercare guidance"], benefits: ["Plan around patient-care operations", "Clear pre-work product review", "Defined scope and boundaries", "Documented repeat-service planning"], faqs: commonSectorFaqs, related: ["/services/curtain-blind-cleaning", "/services/mattress-sanitisation", "/services/fire-proofing"] }),
  sector({ slug: "education", title: "Flexible curtain and fabric care for schools and education", shortTitle: "Schools & Education", eyebrow: "Term-aware scheduling", description: "Planned curtain, blind, carpet, upholstery and specified fabric-treatment services for Johannesburg education facilities.", intro: "We coordinate around term dates, halls, classrooms and shared areas. Weekend or holiday work can be considered during assessment, while any fire-retardant product, test or documentation requirement must be confirmed before it is included in scope.", highlights: ["Term-aware scheduling options", "Classroom, hall and stage-fabric assessment", "Specified treatments reviewed before quotation", "Phased campus and hall schedules"], process: ["Survey buildings and priorities", "Plan around the academic calendar", "Work by approved block, hall or zone", "Complete a facilities and documentation review"], benefits: ["Plan around timetable constraints", "Coordinate several fabric categories", "Practical large-site planning", "Recurring maintenance options"], faqs: commonSectorFaqs, related: ["/services/curtain-blind-cleaning", "/services/upholstery-carpet-cleaning", "/services/fire-proofing"] }),
  sector({ slug: "theatres", title: "Specialist curtain care for theatres and venues", shortTitle: "Theatres & Venues", eyebrow: "Stage and venue expertise", description: "Assessment-led cleaning and specified fabric treatment for suitable stage curtains, drapes, seating and venue fabrics in Johannesburg.", intro: "Heavy stage drapes and public venues require access planning, rigging boundaries and coordination around rehearsals and performances. Cleaning, fire-retardant treatment, testing and documentation are separate scope decisions that must be confirmed before work begins.", highlights: ["Stage and large-format drape assessment", "High-reach and rigging boundaries", "Cleaning and treatment scopes separated", "Scheduling around venue operations"], process: ["Assess scale, access and fabrics", "Confirm venue, evidence and scope requirements", "Complete the approved specialist work", "Document and inspect the agreed scope"], benefits: ["Plan around venue operations", "Assess large-format fabrics", "Evidence-gated treatment planning", "Coordinate cleaning and approved treatment scopes"], faqs: commonSectorFaqs, related: ["/services/curtain-blind-cleaning", "/guides/theatre-curtain-cleaning-fire-retardant-treatment", "/services/fire-proofing", "/case-studies"] }),
  sector({ slug: "residential", title: "Discreet curtain and fabric care for Johannesburg homes", shortTitle: "Residential", eyebrow: "Care for your home", description: "Assessment-led curtain, blind, upholstery and mattress cleaning for Johannesburg homes, planned around the rooms, fabrics and access.", intro: "We assess the curtains, blinds, rooms, household requirements and furnishings before recommending a service plan. Suitable on-site work can reduce handling, while room protection, products, timing factors and aftercare are explained before approval.", highlights: ["On-site options assessed", "Room and furnishing protection", "Household requirements discussed", "No-obligation assessment"], process: ["Discuss rooms and priorities", "Assess fabrics and access", "Confirm a written quotation", "Complete the approved scope with room protection"], benefits: ["Plan around the household", "Fabric-specific assessment", "Coordinate household fabric categories", "Fabric and lining considered first"], faqs: commonSectorFaqs, related: ["/services/curtain-blind-cleaning", "/guides/how-often-clean-curtains-johannesburg", "/guides/delicate-curtain-fabrics-silk-velvet-linen-sheers", "/guides/how-to-get-curtain-cleaning-quote"] }),
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
  areaEntry({ slug: "johannesburg", shortTitle: "Johannesburg", localities: ["Johannesburg North", "Johannesburg East", "Johannesburg South", "Johannesburg West", "Johannesburg Central", "Sandton", "Randburg", "Fourways", "Midrand"], localContext: "Properties across the city vary in curtain height, fabric construction, access, parking and operating requirements, so scope and suitability are confirmed for each site.", related: ["/services/curtain-blind-cleaning", "/areas/jhb-north", "/areas/jhb-central", "/guides/how-to-get-curtain-cleaning-quote"] }),
  areaEntry({ slug: "jhb-north", shortTitle: "Johannesburg North", localities: ["Sandton", "Bryanston", "Fourways", "Randburg"], localContext: "Highveld dust settles quickly on full-length sheer voiles, silk, linen and imported floor-to-ceiling fabrics, so we emphasise gentle, non-abrasive extraction and careful track protection.", related: ["/areas/sandton", "/areas/randburg", "/areas/fourways"] }),
  areaEntry({ slug: "jhb-east", shortTitle: "Johannesburg East", localities: ["Bedfordview", "Edenvale", "Germiston", "Boksburg"], localContext: "Traffic and airport-corridor residue can leave a greasy film on heavy drapes, so treatment is selected to lift soil and neutralise odours without stressing the fabric." }),
  areaEntry({ slug: "jhb-south", shortTitle: "Johannesburg South", localities: ["Alberton", "Mondeor", "Glenvista", "Mulbarton"], localContext: "Many local homes feature velvet, chenille, lined and blackout window treatments; our water-free method is designed to protect heavy multi-layered fabrics and delicate linings." }),
  areaEntry({ slug: "jhb-west", shortTitle: "Johannesburg West", localities: ["Roodepoort", "Florida", "Constantia Kloof", "Weltevreden Park"], localContext: "Fine Highveld and mining-belt particulate can settle deep in lined drapes, so we focus on controlled deep extraction that lifts dust instead of driving it into the lining." }),
  areaEntry({ slug: "jhb-central", shortTitle: "Johannesburg Central", localities: ["Rosebank", "Parktown", "Melrose", "Houghton"], localContext: "Urban traffic, office use and heritage interiors call for careful fabric identification, discreet scheduling and targeted treatment of dust, odours and high-contact areas." }),
  areaEntry({ slug: "pretoria-midrand", shortTitle: "Pretoria & Midrand", localities: ["Midrand", "Centurion", "Waterkloof", "Menlyn"], localContext: "Seasonal pollen and dry Highveld dust can settle in woven fabrics, while estates, offices and taller window treatments introduce different access and scheduling requirements.", related: ["/areas/midrand", "/services/mattress-sanitisation", "/sectors/corporate"] }),
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
