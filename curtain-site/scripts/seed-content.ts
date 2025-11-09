import { db } from '../lib/db';
import { siteSettings, contentBlocks, services, locations } from '../lib/db/schema';
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

    // Seed services
    console.log('\n📝 Seeding services...');
    const servicesData = [
      {
        slug: 'curtain-cleaning',
        title: 'On-Site Curtain Dry Cleaning',
        subtitle: 'We clean curtains where they hang - No takedown, No shrinkage, No hassle',
        intro: 'Professional curtain cleaning service that comes to you. We clean your curtains on-site without taking them down.',
        bullets: [
          'No shrinkage guarantee',
          'Curtains cleaned where they hang',
          'Hardware cleaning and repairs included',
          'Same-day service available',
          'Commercial and residential'
        ],
        longContent: {
          sections: [
            { heading: 'Why Choose On-Site Curtain Cleaning?', content: 'Our revolutionary on-site curtain cleaning service means your curtains are cleaned where they hang. No takedown, no shrinkage risks, no waiting weeks for your curtains to return.' },
            { heading: 'Professional Equipment & Techniques', content: 'We use specialized dry cleaning equipment and techniques designed specifically for delicate curtain fabrics. Our process is gentle yet effective, removing dirt, dust, and allergens while preserving fabric integrity.' }
          ]
        },
        seoTitle: 'Curtain Cleaning Johannesburg | Professional On-Site Dry Cleaning Service',
        seoDescription: 'Professional curtain cleaning Johannesburg. We clean curtains where they hang - no takedown, no shrinkage, no hassle. Hardware cleaning & repair included. Call +27 75 011 9200 for a free quote.',
        published: true
      },
      {
        slug: 'mattress-cleaning',
        title: 'Mattress Deep Cleaning & Sanitization',
        subtitle: 'Remove dust mites, allergens, and stains for a healthier sleep',
        intro: 'Professional mattress deep cleaning and sanitization service using advanced equipment to remove allergens, dust mites, and bacteria.',
        bullets: [
          'Dust mite elimination',
          'Allergen removal',
          'Stain treatment',
          'Anti-bacterial sanitization',
          'Fast drying process'
        ],
        longContent: {
          sections: [
            { heading: 'The Importance of Clean Mattresses', content: 'Your mattress can harbor millions of dust mites, dead skin cells, and allergens. Our professional deep cleaning service removes these contaminants for a healthier sleeping environment.' },
            { heading: 'Our Sanitization Process', content: 'We use hospital-grade sanitization equipment and eco-friendly cleaning solutions to deep clean and sanitize your mattress without harsh chemicals.' }
          ]
        },
        seoTitle: 'Mattress Cleaning Johannesburg | Deep Cleaning & Sanitization',
        seoDescription: 'Professional mattress deep cleaning and sanitization in Johannesburg. Remove dust mites, allergens, and bacteria for healthier sleep. Call +27 75 011 9200.',
        published: true
      },
      {
        slug: 'upholstery-cleaning',
        title: 'Professional Upholstery Cleaning',
        subtitle: 'Restore your sofas, chairs, and fabric furniture to like-new condition',
        intro: 'Expert upholstery cleaning for all types of fabric furniture including sofas, couches, chairs, and dining sets.',
        bullets: [
          'All fabric types cleaned safely',
          'Stain and odor removal',
          'Scotchgard fabric protection available',
          'Commercial and residential',
          'Fast drying times'
        ],
        longContent: {
          sections: [
            { heading: 'Upholstery Care Expertise', content: 'Our trained technicians understand different fabric types and use appropriate cleaning methods for each. From delicate silks to durable synthetics, we clean it all safely.' },
            { heading: 'Commercial Upholstery Services', content: 'We service hotels, offices, restaurants, and other commercial spaces. Keep your business furniture looking professional and inviting.' }
          ]
        },
        seoTitle: 'Upholstery Cleaning Johannesburg | Sofa & Couch Cleaning',
        seoDescription: 'Professional upholstery cleaning in Johannesburg. Sofas, couches, chairs, and all fabric furniture. Stain removal and fabric protection. Call +27 75 011 9200.',
        published: true
      },
      {
        slug: 'rug-cleaning',
        title: 'Persian & Oriental Rug Cleaning',
        subtitle: 'Specialist care for valuable carpets and rugs',
        intro: 'Expert cleaning and restoration for Persian, Oriental, and valuable area rugs using traditional hand-washing techniques.',
        bullets: [
          'Hand-washing for delicate rugs',
          'Color restoration',
          'Odor removal',
          'Moth and insect treatment',
          'Pickup and delivery available'
        ],
        longContent: {
          sections: [
            { heading: 'Traditional Rug Care', content: 'Persian and Oriental rugs require specialized care. We use traditional hand-washing techniques combined with modern cleaning solutions to safely clean these valuable investments.' },
            { heading: 'Rug Restoration Services', content: 'Beyond cleaning, we offer color restoration, repair, and moth treatment to preserve your rugs for generations.' }
          ]
        },
        seoTitle: 'Persian Rug Cleaning Johannesburg | Oriental Carpet Care',
        seoDescription: 'Specialist Persian and Oriental rug cleaning in Johannesburg. Hand-washing, restoration, and repair. Pickup and delivery available. Call +27 75 011 9200.',
        published: true
      },
      {
        slug: 'fabric-protection',
        title: 'Masterguard Fabric Protection',
        subtitle: 'Protect your investment with professional fabric protection',
        intro: 'Professional Masterguard fabric protection treatment for curtains, upholstery, and carpets.',
        bullets: [
          'Stain resistance',
          'Easier cleaning and maintenance',
          'UV protection',
          'Extended fabric life',
          'Water and oil repellent'
        ],
        longContent: {
          sections: [
            { heading: 'Why Fabric Protection Matters', content: 'Fabric protection creates an invisible barrier that repels liquids, prevents staining, and makes future cleaning easier. It\'s essential for high-traffic areas and light-colored fabrics.' },
            { heading: 'Masterguard Technology', content: 'We use Masterguard, the industry-leading fabric protection system that bonds to fibers at a molecular level for long-lasting protection.' }
          ]
        },
        seoTitle: 'Fabric Protection Johannesburg | Masterguard Treatment',
        seoDescription: 'Professional Masterguard fabric protection in Johannesburg. Protect curtains, upholstery, and carpets from stains. Call +27 75 011 9200.',
        published: true
      },
      {
        slug: 'fireproofing',
        title: 'Commercial Fireproofing Services',
        subtitle: 'Fire safety compliance for hotels, theaters, and commercial spaces',
        intro: 'Professional fireproofing treatment for curtains, drapes, and soft furnishings to meet commercial fire safety regulations.',
        bullets: [
          'Meets SABS fire safety standards',
          'Certificates provided',
          'Hotels and theaters',
          'Annual re-treatment available',
          'Non-toxic treatments'
        ],
        longContent: {
          sections: [
            { heading: 'Fire Safety Compliance', content: 'Commercial spaces require fireproofed curtains and soft furnishings to meet fire safety regulations. Our treatment ensures compliance with SABS standards.' },
            { heading: 'Certification and Documentation', content: 'We provide full documentation and certification for insurance and regulatory purposes. Regular re-treatment available for ongoing compliance.' }
          ]
        },
        seoTitle: 'Fireproofing Services Johannesburg | Commercial Fire Safety',
        seoDescription: 'Professional fireproofing for curtains and soft furnishings in Johannesburg. SABS certified. Hotels, theaters, commercial. Call +27 75 011 9200.',
        published: true
      }
    ];

    for (const serviceData of servicesData) {
      const existing = await db.select().from(services).where(eq(services.slug, serviceData.slug)).limit(1);
      if (existing.length === 0) {
        await db.insert(services).values({
          ...serviceData,
          publishedAt: new Date()
        });
        console.log(`✅ ${serviceData.title} seeded`);
      } else {
        console.log(`⏭️  ${serviceData.title} already exists`);
      }
    }

    // Seed locations
    console.log('\n📍 Seeding locations...');
    const locationsData = [
      {
        slug: 'sandton',
        title: 'Curtain Cleaning Sandton & Hyde Park',
        intro: 'Professional on-site curtain cleaning, mattress sanitization, and upholstery cleaning service in Sandton and surrounding areas.',
        neighborhoods: ['Hyde Park', 'Morningside', 'Bryanston', 'Rivonia', 'Sunninghill', 'Sandhurst'],
        longContent: {
          sections: [
            { heading: 'Serving Sandton\'s Premium Properties', content: 'Sandton is home to luxury residences and commercial properties that demand the highest cleaning standards. Our professional team serves estates, apartments, hotels, and offices throughout Sandton.' },
            { heading: 'Local Service Areas', content: 'We provide regular service to Hyde Park, Morningside, Bryanston, Rivonia, Sunninghill, and all Sandton suburbs. Same-day and after-hours service available for commercial clients.' }
          ]
        },
        seoTitle: 'Curtain Cleaning Sandton Johannesburg | On-Site Service Hyde Park',
        seoDescription: 'Professional curtain cleaning Sandton & Hyde Park, Johannesburg. On-site dry cleaning, mattress sanitization & upholstery cleaning. Serving Bryanston, Rivonia. Call +27 75 011 9200 for a free quote.',
        published: true
      },
      {
        slug: 'fourways',
        title: 'Curtain Cleaning Fourways & Bryanston',
        intro: 'Expert curtain cleaning and upholstery services for Fourways, Bryanston, and northern Johannesburg suburbs.',
        neighborhoods: ['Bryanston', 'Lonehill', 'Dainfern', 'Cedar Lakes', 'Broadacres', 'Douglasdale'],
        longContent: {
          sections: [
            { heading: 'Fourways Area Specialist', content: 'The Fourways area has unique cleaning needs with a mix of modern estates, family homes, and commercial properties. We understand these requirements and deliver accordingly.' },
            { heading: 'Estate and Complex Service', content: 'We regularly service security estates, apartment complexes, and gated communities throughout Fourways and Bryanston. Bulk service discounts available.' }
          ]
        },
        seoTitle: 'Curtain Cleaning Fourways Bryanston | Professional Service',
        seoDescription: 'Professional curtain cleaning in Fourways and Bryanston. On-site service for Lonehill, Dainfern, Cedar Lakes. Mattress and upholstery cleaning. Call +27 75 011 9200.',
        published: true
      },
      {
        slug: 'rosebank',
        title: 'Curtain Cleaning Rosebank & Morningside',
        intro: 'Premium curtain and upholstery cleaning services for Rosebank, Morningside, and surrounding Johannesburg suburbs.',
        neighborhoods: ['Morningside', 'Parktown', 'Parkview', 'Saxonwold', 'Dunkeld', 'Melrose'],
        longContent: {
          sections: [
            { heading: 'Rosebank Professional Services', content: 'Rosebank and Morningside feature high-end residential and commercial properties. Our cleaning services meet the exacting standards of this prestigious area.' },
            { heading: 'Heritage Property Expertise', content: 'Many Rosebank and Parktown properties are heritage buildings with period features. Our team has experience with delicate antique curtains and fabrics.' }
          ]
        },
        seoTitle: 'Curtain Cleaning Rosebank Morningside | Professional Service',
        seoDescription: 'Professional curtain cleaning in Rosebank and Morningside. Serving Parktown, Parkview, Saxonwold. Heritage property specialists. Call +27 75 011 9200.',
        published: true
      },
      {
        slug: 'randburg',
        title: 'Curtain Cleaning Randburg & Parkhurst',
        intro: 'Reliable curtain cleaning, mattress sanitization, and upholstery services for Randburg and surrounding areas.',
        neighborhoods: ['Parkhurst', 'Linden', 'Craighall', 'Northcliff', 'Ferndale', 'Blackheath'],
        longContent: {
          sections: [
            { heading: 'Randburg Area Coverage', content: 'From Parkhurst to Ferndale, we serve all of Randburg with fast, professional cleaning services. Both residential and commercial properties welcome.' },
            { heading: 'Family and Pet-Friendly Service', content: 'Randburg families trust us for safe, eco-friendly cleaning that\'s suitable for homes with children and pets. Non-toxic solutions and fast drying times.' }
          ]
        },
        seoTitle: 'Curtain Cleaning Randburg Parkhurst | Professional Service',
        seoDescription: 'Professional curtain cleaning in Randburg and Parkhurst. Serving Linden, Craighall, Northcliff. Family and pet-friendly. Call +27 75 011 9200.',
        published: true
      }
    ];

    for (const locationData of locationsData) {
      const existing = await db.select().from(locations).where(eq(locations.slug, locationData.slug)).limit(1);
      if (existing.length === 0) {
        await db.insert(locations).values({
          ...locationData,
          publishedAt: new Date()
        });
        console.log(`✅ ${locationData.title} seeded`);
      } else {
        console.log(`⏭️  ${locationData.title} already exists`);
      }
    }

    console.log('\n🎉 Content seeding complete!');
  } catch (error) {
    console.error('❌ Error seeding content:', error);
    process.exit(1);
  }
}

seedContent();
