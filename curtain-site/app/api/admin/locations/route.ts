import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { db } from '@/lib/db';
import { locations } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const allLocations = await db.select().from(locations);

    return NextResponse.json({ 
      locations: allLocations 
    });
  } catch (error) {
    console.error('Error fetching locations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch locations' },
      { status: 500 }
    );
  }
}

const ALLOWED_LOCATION_SLUGS = [
  'sandton',
  'fourways',
  'rosebank',
  'randburg',
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
        { error: 'Location slug is required' },
        { status: 400 }
      );
    }

    if (!ALLOWED_LOCATION_SLUGS.includes(body.slug.trim())) {
      return NextResponse.json(
        { error: 'Invalid location slug. Must be one of: ' + ALLOWED_LOCATION_SLUGS.join(', ') },
        { status: 400 }
      );
    }

    if (!body.title || !body.title.trim()) {
      return NextResponse.json(
        { error: 'Location title is required' },
        { status: 400 }
      );
    }

    if (!Array.isArray(body.neighborhoods)) {
      return NextResponse.json(
        { error: 'Neighborhoods must be an array' },
        { status: 400 }
      );
    }

    if (!body.longContent || !Array.isArray(body.longContent.sections)) {
      return NextResponse.json(
        { error: 'Long content sections must be an array' },
        { status: 400 }
      );
    }

    const locationData = {
      slug: body.slug.trim(),
      title: body.title.trim(),
      intro: body.intro?.trim() || null,
      neighborhoods: body.neighborhoods.filter((n: string) => n.trim()),
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
      .from(locations)
      .where(eq(locations.slug, locationData.slug));

    if (existing.length > 0) {
      const wasPublished = existing[0].published;
      const nowPublished = locationData.published;
      
      await db
        .update(locations)
        .set({
          ...locationData,
          publishedAt: !wasPublished && nowPublished ? new Date() : existing[0].publishedAt,
        })
        .where(eq(locations.slug, locationData.slug));
    } else {
      await db.insert(locations).values({
        ...locationData,
        publishedAt: locationData.published ? new Date() : null,
      });
    }

    return NextResponse.json({ 
      success: true,
      message: 'Location updated successfully'
    });
  } catch (error) {
    console.error('Error updating location:', error);
    return NextResponse.json(
      { error: 'Failed to update location' },
      { status: 500 }
    );
  }
}
