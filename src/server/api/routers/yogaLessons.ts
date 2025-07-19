import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { yogaLessons } from "@/server/db/schema";
import { z } from "zod";
import { eq } from "drizzle-orm";

const createYogaLessonSchema = z.object({
	title: z.string().min(1),
	description: z.string().optional(),
	instructor: z.string().min(1),
	duration: z.number().int().positive().optional(),
	difficulty: z.enum(["beginner", "intermediate", "advanced"]),
	category: z.string().min(1),
	tags: z.array(z.string()).optional(),
	thumbnailUrl: z.string().url().optional(),
	videoUrl: z.string().url().optional(),
	isPublished: z.boolean().default(false),
	isFree: z.boolean().default(false),
	price: z.string().optional(), // decimal as string
	createdBy: z.string().min(1),
});

const updateYogaLessonSchema = createYogaLessonSchema.partial().extend({
	id: z.number().int().positive(),
});

export const yogaLessonsRouter = createTRPCRouter({
	// Get all yoga lessons
	getAll: publicProcedure.query(async ({ ctx }) => {
		return await ctx.db.select().from(yogaLessons);
	}),

	// Get published yoga lessons only
	getPublished: publicProcedure.query(async ({ ctx }) => {
		return await ctx.db.select().from(yogaLessons).where(eq(yogaLessons.isPublished, true));
	}),

	// Get yoga lesson by ID
	getById: publicProcedure
		.input(z.object({ id: z.number().int().positive() }))
		.query(async ({ ctx, input }) => {
			const lesson = await ctx.db.select().from(yogaLessons).where(eq(yogaLessons.id, input.id));
			return lesson[0] ?? null;
		}),

	// Get yoga lessons by category
	getByCategory: publicProcedure
		.input(z.object({ category: z.string().min(1) }))
		.query(async ({ ctx, input }) => {
			return await ctx.db.select().from(yogaLessons).where(eq(yogaLessons.category, input.category));
		}),

	// Get yoga lessons by difficulty
	getByDifficulty: publicProcedure
		.input(z.object({ difficulty: z.enum(["beginner", "intermediate", "advanced"]) }))
		.query(async ({ ctx, input }) => {
			return await ctx.db.select().from(yogaLessons).where(eq(yogaLessons.difficulty, input.difficulty));
		}),

	// Get yoga lessons by instructor
	getByInstructor: publicProcedure
		.input(z.object({ instructor: z.string().min(1) }))
		.query(async ({ ctx, input }) => {
			return await ctx.db.select().from(yogaLessons).where(eq(yogaLessons.instructor, input.instructor));
		}),

	// Get free yoga lessons
	getFree: publicProcedure.query(async ({ ctx }) => {
		return await ctx.db.select().from(yogaLessons).where(eq(yogaLessons.isFree, true));
	}),

	// Create a new yoga lesson
	create: publicProcedure
		.input(createYogaLessonSchema)
		.mutation(async ({ ctx, input }) => {
			const result = await ctx.db.insert(yogaLessons).values({
				title: input.title,
				description: input.description,
				instructor: input.instructor,
				duration: input.duration,
				difficulty: input.difficulty,
				category: input.category,
				tags: input.tags,
				thumbnailUrl: input.thumbnailUrl,
				videoUrl: input.videoUrl,
				isPublished: input.isPublished,
				isFree: input.isFree,
				price: input.price,
				createdBy: input.createdBy,
			}).returning();
			return result[0];
		}),

	// Update a yoga lesson
	update: publicProcedure
		.input(updateYogaLessonSchema)
		.mutation(async ({ ctx, input }) => {
			const { id, ...updateData } = input;
			const result = await ctx.db
				.update(yogaLessons)
				.set({
					...updateData,
					updatedAt: new Date(),
				})
				.where(eq(yogaLessons.id, id))
				.returning();
			return result[0] ?? null;
		}),

	// Delete a yoga lesson
	delete: publicProcedure
		.input(z.object({ id: z.number().int().positive() }))
		.mutation(async ({ ctx, input }) => {
			const result = await ctx.db.delete(yogaLessons).where(eq(yogaLessons.id, input.id)).returning();
			return result[0] ?? null;
		}),

	// Toggle published status
	togglePublished: publicProcedure
		.input(z.object({ id: z.number().int().positive() }))
		.mutation(async ({ ctx, input }) => {
			const lesson = await ctx.db.select().from(yogaLessons).where(eq(yogaLessons.id, input.id));
			if (!lesson[0]) return null;

			const result = await ctx.db
				.update(yogaLessons)
				.set({
					isPublished: !lesson[0].isPublished,
					updatedAt: new Date(),
				})
				.where(eq(yogaLessons.id, input.id))
				.returning();
			return result[0];
		}),
});
