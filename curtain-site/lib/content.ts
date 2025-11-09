import { db } from './db';
import { contentBlocks, siteSettings, services, locations } from './db/schema';
import { eq } from 'drizzle-orm';

// Default fallback content if database is empty
const DEFAULT_HERO = {
  title: 'Curtain Cleaning Johannesburg | Professional On-Site Service',
  subtitle: 'We clean curtains where they hang - No takedown, No shrinkage, No hassle',
  location: 'Serving Sandton, Bryanston, Fourways, Rosebank, and all Johannesburg suburbs',
  cta1Text: 'Call Now: +27 75 011 9200',
  cta2Text: 'Get Free Quote',
};

const DEFAULT_TRUST_BADGES = [
  {
    title: 'No Shrinkage Guarantee',
    description: 'All work guaranteed against shrinkage and fabric damage',
  },
  {
    title: 'On-Site Service',
    description: 'Curtains cleaned where they hang - minimal disruption',
  },
  {
    title: 'Same-Day Available',
    description: 'Hotels & offices can rent rooms same day',
  },
  {
    title: 'Hardware Servicing',
    description: 'We repair and service all curtain hardware',
  },
];

const DEFAULT_CONTACT = {
  phone: '+27750119200',
  whatsapp: '+27716226753',
  email: 'info@curtaincleaning.co.za',
};

const DEFAULT_SOCIAL = {
  facebook: 'https://facebook.com/curtaincleaningjhb',
  instagram: 'https://instagram.com/curtaincleaningjhb',
  youtube: 'https://youtube.com/@curtaincleaningjhb',
  tiktok: 'https://tiktok.com/@curtaincleaningjhb',
  pinterest: 'https://pinterest.com/curtaincleaningjhb',
  x: 'https://x.com/curtaincleaningjhb',
};

export async function getHomepageHero() {
  try {
    const result = await db
      .select()
      .from(contentBlocks)
      .where(eq(contentBlocks.key, 'homepage_hero'))
      .limit(1);

    if (result.length > 0 && result[0].body) {
      return result[0].body as typeof DEFAULT_HERO;
    }
  } catch (error) {
    console.error('Failed to fetch homepage hero:', error);
  }
  
  return DEFAULT_HERO;
}

export async function getHomepageTrustBadges() {
  try {
    const result = await db
      .select()
      .from(contentBlocks)
      .where(eq(contentBlocks.key, 'homepage_trust_badges'))
      .limit(1);

    if (result.length > 0 && result[0].body) {
      return result[0].body as typeof DEFAULT_TRUST_BADGES;
    }
  } catch (error) {
    console.error('Failed to fetch homepage trust badges:', error);
  }
  
  return DEFAULT_TRUST_BADGES;
}

export async function getSiteSettings() {
  try {
    const result = await db.select().from(siteSettings).limit(1);

    if (result.length > 0) {
      return {
        contact: result[0].contact || DEFAULT_CONTACT,
        social: result[0].footer?.socialLinks || DEFAULT_SOCIAL,
      };
    }
  } catch (error) {
    console.error('Failed to fetch site settings:', error);
  }
  
  return {
    contact: DEFAULT_CONTACT,
    social: DEFAULT_SOCIAL,
  };
}

export async function getServiceContent(slug: string) {
  try {
    const result = await db
      .select()
      .from(services)
      .where(eq(services.slug, slug))
      .limit(1);

    if (result.length > 0) {
      return result[0];
    }
  } catch (error) {
    console.error(`Failed to fetch service content for ${slug}:`, error);
  }
  
  return null;
}

export async function getLocationContent(slug: string) {
  try {
    const result = await db
      .select()
      .from(locations)
      .where(eq(locations.slug, slug))
      .limit(1);

    if (result.length > 0) {
      return result[0];
    }
  } catch (error) {
    console.error(`Failed to fetch location content for ${slug}:`, error);
  }
  
  return null;
}
