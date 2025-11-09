import { db } from '../lib/db';
import { siteSettings, contentBlocks } from '../lib/db/schema';
import { eq } from 'drizzle-orm';

async function seedContent() {
  console.log('Seeding website content...');

  try {
    // Seed site settings (contact & social media)
    const existingSettings = await db.select().from(siteSettings).limit(1);
    
    if (existingSettings.length === 0) {
      await db.insert(siteSettings).values({
        contact: {
          phone: '+27750119200',
          whatsapp: '+27716226753',
          email: 'info@curtaincleaning.co.za',
        },
        footer: {
          socialLinks: {
            facebook: 'https://facebook.com/curtaincleaningjhb',
            instagram: 'https://instagram.com/curtaincleaningjhb',
            youtube: 'https://youtube.com/@curtaincleaningjhb',
            tiktok: 'https://tiktok.com/@curtaincleaningjhb',
            pinterest: 'https://pinterest.com/curtaincleaningjhb',
            x: 'https://x.com/curtaincleaningjhb',
          },
        },
      });
      console.log('✅ Site settings seeded');
    } else {
      console.log('⏭️  Site settings already exist');
    }

    // Seed homepage hero
    const existingHero = await db
      .select()
      .from(contentBlocks)
      .where(eq(contentBlocks.key, 'homepage_hero'))
      .limit(1);

    if (existingHero.length === 0) {
      await db.insert(contentBlocks).values({
        key: 'homepage_hero',
        title: 'Homepage Hero Section',
        body: {
          title: 'Curtain Cleaning Johannesburg | Professional On-Site Service',
          subtitle: 'We clean curtains where they hang - No takedown, No shrinkage, No hassle',
          location: 'Serving Sandton, Bryanston, Fourways, Rosebank, and all Johannesburg suburbs',
          cta1Text: 'Call Now: +27 75 011 9200',
          cta2Text: 'Get Free Quote',
        },
      });
      console.log('✅ Homepage hero seeded');
    } else {
      console.log('⏭️  Homepage hero already exists');
    }

    // Seed homepage trust badges
    const existingBadges = await db
      .select()
      .from(contentBlocks)
      .where(eq(contentBlocks.key, 'homepage_trust_badges'))
      .limit(1);

    if (existingBadges.length === 0) {
      await db.insert(contentBlocks).values({
        key: 'homepage_trust_badges',
        title: 'Homepage Trust Badges',
        body: [
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
        ],
      });
      console.log('✅ Homepage trust badges seeded');
    } else {
      console.log('⏭️  Homepage trust badges already exist');
    }

    console.log('\n🎉 Content seeding complete!');
  } catch (error) {
    console.error('❌ Error seeding content:', error);
    process.exit(1);
  }
}

seedContent();
