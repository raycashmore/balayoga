import { boolean, decimal, integer, jsonb, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const yogaLessons = pgTable('yoga_lessons', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	description: text('description'),
	instructor: text('instructor').notNull(),
	duration: integer('duration'), // in minutes
	difficulty: text('difficulty').notNull(), // beginner, intermediate, advanced
	category: text('category').notNull(), // hatha, vinyasa, yin, etc.
	tags: jsonb('tags').$type<string[]>(),
	thumbnailUrl: text('thumbnail_url'),
	videoUrl: text('video_url'), // for future video hosting
	isPublished: boolean('is_published').default(false),
	isFree: boolean('is_free').default(false),
	price: decimal('price', { precision: 10, scale: 2 }),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow(),
	createdBy: text('created_by').notNull() // Clerk user ID
});

export const userPurchases = pgTable('user_purchases', {
	id: serial('id').primaryKey(),
	userId: text('user_id').notNull(), // Clerk user ID
	lessonId: integer('lesson_id').references(() => yogaLessons.id),
	purchaseDate: timestamp('purchase_date').defaultNow(),
	amount: decimal('amount', { precision: 10, scale: 2 }),
	paymentStatus: text('payment_status').notNull() // pending, completed, failed
});

export const videos = pgTable('videos', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	description: text('description'),
	thumbnailUrl: text('thumbnail_url'),
	bunnyStreamId: text('bunny_stream_id').notNull(),
	isPublic: boolean('is_public').default(false),
	isPaid: boolean('is_paid').default(false),
	isPartOfPackage: boolean('is_part_of_package').default(false),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
});
