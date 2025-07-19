import { yogaLessonsRouter } from "@/server/api/routers/yogaLessons";
import { userPurchasesRouter } from "@/server/api/routers/userPurchases";
import { videosRouter } from "@/server/api/routers/videos";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	yogaLessons: yogaLessonsRouter,
	userPurchases: userPurchasesRouter,
	videos: videosRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
