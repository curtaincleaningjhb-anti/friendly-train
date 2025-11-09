import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { db } from '@/lib/db';
import { contentBlocks } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const heroBlock = await db
      .select()
      .from(contentBlocks)
      .where(eq(contentBlocks.key, 'homepage_hero'))
      .limit(1);

    const trustBadgesBlock = await db
      .select()
      .from(contentBlocks)
      .where(eq(contentBlocks.key, 'homepage_trust_badges'))
      .limit(1);

    return NextResponse.json({
      hero: heroBlock[0]?.body || null,
      trustBadges: trustBadgesBlock[0]?.body || null,
    });
  } catch (error) {
    console.error('Failed to fetch homepage content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { hero, trustBadges } = await request.json();

    // Both hero and trustBadges must be provided (editor always sends both)
    if (!hero || !trustBadges) {
      return NextResponse.json(
        { error: 'Both hero and trustBadges are required' },
        { status: 400 }
      );
    }

    // Validate hero data
    if (!hero.title?.trim() || !hero.subtitle?.trim() || !hero.location?.trim() || 
        !hero.cta1Text?.trim() || !hero.cta2Text?.trim()) {
      return NextResponse.json(
        { error: 'Hero section requires all fields with non-empty values' },
        { status: 400 }
      );
    }

    // Validate trust badges
    if (!Array.isArray(trustBadges) || trustBadges.length !== 4) {
      return NextResponse.json(
        { error: 'Trust badges must be an array of exactly 4 items' },
        { status: 400 }
      );
    }

    for (let i = 0; i < trustBadges.length; i++) {
      const badge = trustBadges[i];
      if (!badge.title?.trim() || !badge.description?.trim()) {
        return NextResponse.json(
          { error: `Trust badge ${i + 1} requires title and description with non-empty values` },
          { status: 400 }
        );
      }
    }

    // Update hero
    const existingHero = await db
      .select()
      .from(contentBlocks)
      .where(eq(contentBlocks.key, 'homepage_hero'))
      .limit(1);

    if (existingHero.length > 0) {
      await db
        .update(contentBlocks)
        .set({
          body: hero,
          updatedAt: new Date(),
        })
        .where(eq(contentBlocks.key, 'homepage_hero'));
    } else {
      await db.insert(contentBlocks).values({
        key: 'homepage_hero',
        title: 'Homepage Hero Section',
        body: hero,
      });
    }

    // Update trust badges
    const existingBadges = await db
      .select()
      .from(contentBlocks)
      .where(eq(contentBlocks.key, 'homepage_trust_badges'))
      .limit(1);

    if (existingBadges.length > 0) {
      await db
        .update(contentBlocks)
        .set({
          body: trustBadges,
          updatedAt: new Date(),
        })
        .where(eq(contentBlocks.key, 'homepage_trust_badges'));
    } else {
      await db.insert(contentBlocks).values({
        key: 'homepage_trust_badges',
        title: 'Homepage Trust Badges',
        body: trustBadges,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to save homepage content:', error);
    return NextResponse.json(
      { error: 'Failed to save content' },
      { status: 500 }
    );
  }
}
