import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { db } from '@/lib/db';
import { siteSettings } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const settings = await db.select().from(siteSettings).limit(1);

    if (settings.length === 0) {
      return NextResponse.json({ contact: null, social: null });
    }

    return NextResponse.json({
      contact: settings[0].contact,
      social: settings[0].footer?.socialLinks || null,
    });
  } catch (error) {
    console.error('Failed to fetch settings:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { contact, social } = await request.json();

    // Validate contact data if provided
    if (contact) {
      if (!contact.phone || !contact.whatsapp || !contact.email) {
        return NextResponse.json(
          { error: 'Contact info requires phone, whatsapp, and email' },
          { status: 400 }
        );
      }
    }

    // Validate social data if provided
    if (social) {
      const validKeys = ['facebook', 'instagram', 'youtube', 'tiktok', 'pinterest', 'x'];
      for (const key of Object.keys(social)) {
        if (!validKeys.includes(key)) {
          return NextResponse.json(
            { error: `Invalid social media key: ${key}` },
            { status: 400 }
          );
        }
      }
    }

    const existing = await db.select().from(siteSettings).limit(1);

    if (existing.length > 0) {
      // Merge with existing data - only update fields that are provided
      const existingContact = existing[0].contact || {};
      const existingSocial = existing[0].footer?.socialLinks || {};
      
      const updatedContact = contact ? { ...existingContact, ...contact } : existingContact;
      const updatedSocial = social ? { ...existingSocial, ...social } : existingSocial;

      await db
        .update(siteSettings)
        .set({
          contact: updatedContact,
          footer: {
            socialLinks: updatedSocial,
          },
          updatedAt: new Date(),
        })
        .where(eq(siteSettings.id, existing[0].id));
    } else {
      // First time insert
      if (!contact || !social) {
        return NextResponse.json(
          { error: 'Initial settings require both contact and social data' },
          { status: 400 }
        );
      }

      await db.insert(siteSettings).values({
        contact,
        footer: { socialLinks: social },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to save settings:', error);
    return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
  }
}
