# Architecture

Project stack:
- Next.js 15
- TypeScript
- Payload CMS v3
- tRPC
- Drizzle ORM
- PostgreSQL

App router structure:
- `src/app/(frontend)/` — public routes
- `src/app/(payload)/` — admin routes
- `src/app/_components/` — shared components
- `src/app/_hooks/` — custom hooks

Payload structure:
- `src/payload/blocks/`
- `src/payload/collections/`
- `src/payload/globals/`
- `src/payload/fields/`
- `src/payload/utils/`

tRPC pattern:
- Define routers in `createTRPCRouter`
- Export `AppRouter` type for client usage
