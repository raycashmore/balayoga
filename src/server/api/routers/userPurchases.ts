import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { userPurchases, yogaLessons } from '@/server/db/schema';
import { and, eq } from 'drizzle-orm';
import { z } from 'zod';

const createUserPurchaseSchema = z.object({
	userId: z.string().min(1),
	lessonId: z.number().int().positive(),
	amount: z.string(), // decimal as string
	paymentStatus: z.enum(['pending', 'completed', 'failed'])
});

const updateUserPurchaseSchema = z.object({
	id: z.number().int().positive(),
	paymentStatus: z.enum(['pending', 'completed', 'failed']).optional(),
	amount: z.string().optional()
});

export const userPurchasesRouter = createTRPCRouter({
	// Get all user purchases
	getAll: publicProcedure.query(async ({ ctx }) => {
		return await ctx.db.select().from(userPurchases);
	}),

	// Get purchase by ID
	getById: publicProcedure.input(z.object({ id: z.number().int().positive() })).query(async ({ ctx, input }) => {
		const purchase = await ctx.db.select().from(userPurchases).where(eq(userPurchases.id, input.id));
		return purchase[0] ?? null;
	}),

	// Get purchases by user ID
	getByUserId: publicProcedure.input(z.object({ userId: z.string().min(1) })).query(async ({ ctx, input }) => {
		return await ctx.db.select().from(userPurchases).where(eq(userPurchases.userId, input.userId));
	}),

	// Get purchases by lesson ID
	getByLessonId: publicProcedure.input(z.object({ lessonId: z.number().int().positive() })).query(async ({ ctx, input }) => {
		return await ctx.db.select().from(userPurchases).where(eq(userPurchases.lessonId, input.lessonId));
	}),

	// Get purchases by payment status
	getByPaymentStatus: publicProcedure
		.input(z.object({ paymentStatus: z.enum(['pending', 'completed', 'failed']) }))
		.query(async ({ ctx, input }) => {
			return await ctx.db.select().from(userPurchases).where(eq(userPurchases.paymentStatus, input.paymentStatus));
		}),

	// Get user's purchased lessons with lesson details
	getUserPurchasedLessons: publicProcedure.input(z.object({ userId: z.string().min(1) })).query(async ({ ctx, input }) => {
		return await ctx.db
			.select({
				purchaseId: userPurchases.id,
				purchaseDate: userPurchases.purchaseDate,
				amount: userPurchases.amount,
				paymentStatus: userPurchases.paymentStatus,
				lesson: {
					id: yogaLessons.id,
					title: yogaLessons.title,
					description: yogaLessons.description,
					instructor: yogaLessons.instructor,
					duration: yogaLessons.duration,
					difficulty: yogaLessons.difficulty,
					category: yogaLessons.category,
					thumbnailUrl: yogaLessons.thumbnailUrl,
					videoUrl: yogaLessons.videoUrl
				}
			})
			.from(userPurchases)
			.innerJoin(yogaLessons, eq(userPurchases.lessonId, yogaLessons.id))
			.where(eq(userPurchases.userId, input.userId));
	}),

	// Get completed purchases for a user
	getUserCompletedPurchases: publicProcedure.input(z.object({ userId: z.string().min(1) })).query(async ({ ctx, input }) => {
		return await ctx.db
			.select()
			.from(userPurchases)
			.where(and(eq(userPurchases.userId, input.userId), eq(userPurchases.paymentStatus, 'completed')));
	}),

	// Check if user has purchased a specific lesson
	hasUserPurchasedLesson: publicProcedure
		.input(
			z.object({
				userId: z.string().min(1),
				lessonId: z.number().int().positive()
			})
		)
		.query(async ({ ctx, input }) => {
			const purchase = await ctx.db
				.select()
				.from(userPurchases)
				.where(
					and(
						eq(userPurchases.userId, input.userId),
						eq(userPurchases.lessonId, input.lessonId),
						eq(userPurchases.paymentStatus, 'completed')
					)
				);

			return purchase.length > 0;
		}),

	// Create a new user purchase
	create: publicProcedure.input(createUserPurchaseSchema).mutation(async ({ ctx, input }) => {
		const result = await ctx.db
			.insert(userPurchases)
			.values({
				userId: input.userId,
				lessonId: input.lessonId,
				amount: input.amount,
				paymentStatus: input.paymentStatus
			})
			.returning();
		return result[0];
	}),

	// Update a user purchase (mainly for payment status updates)
	update: publicProcedure.input(updateUserPurchaseSchema).mutation(async ({ ctx, input }) => {
		const { id, ...updateData } = input;
		const result = await ctx.db.update(userPurchases).set(updateData).where(eq(userPurchases.id, id)).returning();
		return result[0] ?? null;
	}),

	// Update payment status
	updatePaymentStatus: publicProcedure
		.input(
			z.object({
				id: z.number().int().positive(),
				paymentStatus: z.enum(['pending', 'completed', 'failed'])
			})
		)
		.mutation(async ({ ctx, input }) => {
			const result = await ctx.db
				.update(userPurchases)
				.set({ paymentStatus: input.paymentStatus })
				.where(eq(userPurchases.id, input.id))
				.returning();
			return result[0] ?? null;
		}),

	// Delete a user purchase
	delete: publicProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ ctx, input }) => {
		const result = await ctx.db.delete(userPurchases).where(eq(userPurchases.id, input.id)).returning();
		return result[0] ?? null;
	}),

	// Get purchase statistics
	getStats: publicProcedure.query(async ({ ctx }) => {
		const allPurchases = await ctx.db.select().from(userPurchases);
		const completedPurchases = allPurchases.filter((p) => p.paymentStatus === 'completed');
		const pendingPurchases = allPurchases.filter((p) => p.paymentStatus === 'pending');
		const failedPurchases = allPurchases.filter((p) => p.paymentStatus === 'failed');

		return {
			total: allPurchases.length,
			completed: completedPurchases.length,
			pending: pendingPurchases.length,
			failed: failedPurchases.length,
			totalRevenue: completedPurchases.reduce((sum, p) => sum + parseFloat(p.amount ?? '0'), 0)
		};
	})
});
