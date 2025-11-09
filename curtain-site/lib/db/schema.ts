import { pgTable, serial, varchar, text, timestamp, jsonb, boolean } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const adminUsers = pgTable('admin_users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const siteSettings = pgTable('site_settings', {
  id: serial('id').primaryKey(),
  hero: jsonb('hero').$type<{
    title: string;
    subtitle: string;
    cta1Text: string;
    cta2Text: string;
  }>(),
  contact: jsonb('contact').$type<{
    phone: string;
    whatsapp: string;
    email: string;
  }>(),
  footer: jsonb('footer').$type<{
    socialLinks: {
      facebook?: string;
      instagram?: string;
      youtube?: string;
      tiktok?: string;
      pinterest?: string;
      x?: string;
    };
  }>(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  subtitle: varchar('subtitle', { length: 500 }),
  intro: text('intro'),
  bullets: jsonb('bullets').$type<string[]>(),
  longContent: jsonb('long_content').$type<{
    sections: Array<{
      heading: string;
      content: string;
    }>;
  }>(),
  seoTitle: varchar('seo_title', { length: 255 }),
  seoDescription: varchar('seo_description', { length: 500 }),
  published: boolean('published').default(true).notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  publishedAt: timestamp('published_at'),
});

export const locations = pgTable('locations', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  intro: text('intro'),
  neighborhoods: jsonb('neighborhoods').$type<string[]>(),
  longContent: jsonb('long_content').$type<{
    sections: Array<{
      heading: string;
      content: string;
    }>;
  }>(),
  seoTitle: varchar('seo_title', { length: 255 }),
  seoDescription: varchar('seo_description', { length: 500 }),
  published: boolean('published').default(true).notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  publishedAt: timestamp('published_at'),
});

export const contentBlocks = pgTable('content_blocks', {
  id: serial('id').primaryKey(),
  key: varchar('key', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  body: jsonb('body').$type<{ content: string }>(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
