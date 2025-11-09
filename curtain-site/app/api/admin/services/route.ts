import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { db } from '@/lib/db';
import { services } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const allServices = await db.select().from(services);

    return NextResponse.json({ 
      services: allServices 
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

const ALLOWED_SERVICE_SLUGS = [
  'curtain-cleaning',
  'mattress-cleaning',
  'upholstery-cleaning',
  'rug-cleaning',
  'fabric-protection',
  'fireproofing',
];

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    
    if (!body.slug || !body.slug.trim()) {
      return NextResponse.json(
        { error: 'Service slug is required' },
        { status: 400 }
      );
    }

    if (!ALLOWED_SERVICE_SLUGS.includes(body.slug.trim())) {
      return NextResponse.json(
        { error: 'Invalid service slug. Must be one of: ' + ALLOWED_SERVICE_SLUGS.join(', ') },
        { status: 400 }
      );
    }

    if (!body.title || !body.title.trim()) {
      return NextResponse.json(
        { error: 'Service title is required' },
        { status: 400 }
      );
    }

    if (!Array.isArray(body.bullets)) {
      return NextResponse.json(
        { error: 'Bullets must be an array' },
        { status: 400 }
      );
    }

    if (!body.longContent || !Array.isArray(body.longContent.sections)) {
      return NextResponse.json(
        { error: 'Long content sections must be an array' },
        { status: 400 }
      );
    }

    const serviceData = {
      slug: body.slug.trim(),
      title: body.title.trim(),
      subtitle: body.subtitle?.trim() || null,
      intro: body.intro?.trim() || null,
      bullets: body.bullets.filter((b: string) => b.trim()),
      longContent: {
        sections: body.longContent.sections.map((s: any) => ({
          heading: s.heading?.trim() || '',
          content: s.content?.trim() || ''
        }))
      },
      seoTitle: body.seoTitle?.trim() || null,
      seoDescription: body.seoDescription?.trim() || null,
      published: body.published !== undefined ? body.published : true,
      updatedAt: new Date(),
    };

    const existing = await db
      .select()
      .from(services)
      .where(eq(services.slug, serviceData.slug));

    if (existing.length > 0) {
      const wasPublished = existing[0].published;
      const nowPublished = serviceData.published;
      
      await db
        .update(services)
        .set({
          ...serviceData,
          publishedAt: !wasPublished && nowPublished ? new Date() : existing[0].publishedAt,
        })
        .where(eq(services.slug, serviceData.slug));
    } else {
      await db.insert(services).values({
        ...serviceData,
        publishedAt: serviceData.published ? new Date() : null,
      });
    }

    return NextResponse.json({ 
      success: true,
      message: 'Service updated successfully'
    });
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json(
      { error: 'Failed to update service' },
      { status: 500 }
    );
  }
}
