import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { videos } from "@/server/db/schema";
import { z } from "zod";
import { eq, and } from "drizzle-orm";

const createVideoSchema = z.object({
	title: z.string().min(1),
	description: z.string().optional(),
	thumbnailUrl: z.string().url().optional(),
	bunnyStreamId: z.string().min(1),
	isPublic: z.boolean().default(false),
	isPaid: z.boolean().default(false),
	isPartOfPackage: z.boolean().default(false),
});

const updateVideoSchema = createVideoSchema.partial().extend({
	id: z.number().int().positive(),
});

export const videosRouter = createTRPCRouter({
	// Get all videos
	getAll: publicProcedure.query(async ({ ctx }) => {
		return await ctx.db.select().from(videos);
	}),

	// Get video by ID
	getById: publicProcedure.input(z.object({ id: z.number().int().positive() })).query(async ({ ctx, input }) => {
		const video = await ctx.db.select().from(videos).where(eq(videos.id, input.id));
		return video[0] ?? null;
	}),

	// Get video by Bunny Stream ID
	getByBunnyStreamId: publicProcedure.input(z.object({ bunnyStreamId: z.string().min(1) })).query(async ({ ctx, input }) => {
		const video = await ctx.db.select().from(videos).where(eq(videos.bunnyStreamId, input.bunnyStreamId));
		return video[0] ?? null;
	}),

	// Get public videos
	getPublic: publicProcedure.query(async ({ ctx }) => {
		return await ctx.db.select().from(videos).where(eq(videos.isPublic, true));
	}),

	// Get paid videos
	getPaid: publicProcedure.query(async ({ ctx }) => {
		return await ctx.db.select().from(videos).where(eq(videos.isPaid, true));
	}),

	// Get free videos (not paid)
	getFree: publicProcedure.query(async ({ ctx }) => {
		return await ctx.db.select().from(videos).where(eq(videos.isPaid, false));
	}),

	// Get package videos
	getPackageVideos: publicProcedure.query(async ({ ctx }) => {
		return await ctx.db.select().from(videos).where(eq(videos.isPartOfPackage, true));
	}),

	// Get standalone videos (not part of package)
	getStandaloneVideos: publicProcedure.query(async ({ ctx }) => {
		return await ctx.db.select().from(videos).where(eq(videos.isPartOfPackage, false));
	}),

	// Get public and free videos (for general browsing)
	getPublicAndFree: publicProcedure.query(async ({ ctx }) => {
		return await ctx.db
			.select()
			.from(videos)
			.where(and(eq(videos.isPublic, true), eq(videos.isPaid, false)));
	}),

	// Create a new video
	create: publicProcedure.input(createVideoSchema).mutation(async ({ ctx, input }) => {
		const result = await ctx.db
			.insert(videos)
			.values({
				title: input.title,
				description: input.description,
				thumbnailUrl: input.thumbnailUrl,
				bunnyStreamId: input.bunnyStreamId,
				isPublic: input.isPublic,
				isPaid: input.isPaid,
				isPartOfPackage: input.isPartOfPackage,
			})
			.returning();
		return result[0];
	}),

	// Update a video
	update: publicProcedure.input(updateVideoSchema).mutation(async ({ ctx, input }) => {
		const { id, ...updateData } = input;
		const result = await ctx.db
			.update(videos)
			.set({
				...updateData,
				updatedAt: new Date(),
			})
			.where(eq(videos.id, id))
			.returning();
		return result[0] ?? null;
	}),

	// Delete a video
	delete: publicProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ ctx, input }) => {
		const result = await ctx.db.delete(videos).where(eq(videos.id, input.id)).returning();
		return result[0] ?? null;
	}),

	// Toggle public status
	togglePublic: publicProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ ctx, input }) => {
		const video = await ctx.db.select().from(videos).where(eq(videos.id, input.id));
		if (!video[0]) return null;

		const result = await ctx.db
			.update(videos)
			.set({
				isPublic: !video[0].isPublic,
				updatedAt: new Date(),
			})
			.where(eq(videos.id, input.id))
			.returning();
		return result[0];
	}),

	// Toggle paid status
	togglePaid: publicProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ ctx, input }) => {
		const video = await ctx.db.select().from(videos).where(eq(videos.id, input.id));
		if (!video[0]) return null;

		const result = await ctx.db
			.update(videos)
			.set({
				isPaid: !video[0].isPaid,
				updatedAt: new Date(),
			})
			.where(eq(videos.id, input.id))
			.returning();
		return result[0];
	}),

	// Toggle package status
	togglePackage: publicProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ ctx, input }) => {
		const video = await ctx.db.select().from(videos).where(eq(videos.id, input.id));
		if (!video[0]) return null;

		const result = await ctx.db
			.update(videos)
			.set({
				isPartOfPackage: !video[0].isPartOfPackage,
				updatedAt: new Date(),
			})
			.where(eq(videos.id, input.id))
			.returning();
		return result[0];
	}),

	// Get video statistics
	getStats: publicProcedure.query(async ({ ctx }) => {
		const allVideos = await ctx.db.select().from(videos);
		const publicVideos = allVideos.filter((v) => v.isPublic);
		const paidVideos = allVideos.filter((v) => v.isPaid);
		const packageVideos = allVideos.filter((v) => v.isPartOfPackage);

		return {
			total: allVideos.length,
			public: publicVideos.length,
			private: allVideos.length - publicVideos.length,
			paid: paidVideos.length,
			free: allVideos.length - paidVideos.length,
			package: packageVideos.length,
			standalone: allVideos.length - packageVideos.length,
		};
	}),
});
