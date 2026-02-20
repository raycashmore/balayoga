# Database

Drizzle patterns:
- Always include `where` on delete/update
- Use type-safe queries

Schema:
- Tables defined in `src/server/db/schema.ts`
- Migrations generated with `pnpm db:generate`
- Use Drizzle relations for foreign keys
