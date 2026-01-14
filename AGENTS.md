# AGENTS.md - Bala Yoga Codebase Guide

This file contains essential information for AI agents working on the Bala Yoga codebase.

## Project Overview

**Type**: Yoga website with headless CMS and e-commerce  
**Stack**: Next.js 15, TypeScript, Payload CMS v3, tRPC, Drizzle ORM, PostgreSQL  
**Package Manager**: pnpm  
**Deployment**: Vercel

## Essential Commands

### Development

```bash
pnpm dev              # Start development server
pnpm build            # Production build
pnpm start            # Production server
pnpm preview          # Build and start production
```

### Code Quality

```bash
pnpm lint             # Run ESLint
pnpm lint:fix         # Auto-fix linting issues
pnpm typecheck        # TypeScript type checking
pnpm check            # Combined lint + typecheck
```

### Formatting

```bash
pnpm format:check     # Check Prettier formatting
pnpm format:write     # Auto-format with Prettier
```

### Database (Drizzle ORM)

```bash
pnpm db:start         # Start PostgreSQL
pnpm db:generate      # Generate migrations
pnpm db:migrate       # Run migrations
pnpm db:push          # Push schema changes
pnpm db:studio        # Database GUI
```

### Payload CMS

```bash
pnpm payload:types    # Generate TypeScript types
pnpm payload:importmap # Generate import map
pnpm payload:migrate  # Create Payload migration
```

**Database Migrations Note**: 

For local dev, schema changes will automatically be pushed to the local database.

When ready to create a migration file for the prod DB, run `pnpm payload:migrate`

**Workflow for schema changes**:
1. Modify the collection/field definitions in `src/payload/collections/`
2. Run `pnpm payload generate:types` to regenerate TypeScript types
3. Start the dev server (`pnpm dev`) - schema changes are pushed automatically to the local DB
4. Create migration files with `pnpm payload:migrate` to create the remote migrations

## Code Style Guidelines

### TypeScript Configuration

- **Strict mode enabled** - All types must be explicitly defined
- **Path aliases** - Use `@/*` for src directory imports
- **Inline type imports** - Prefer `import type { ... }` inline
- **ES modules** - All files use ES module syntax

### Import Style

```typescript
// ✅ Preferred - inline type imports
import { Component } from '@/app/_components/component';
import type { User } from '@/payload/types';

// ❌ Avoid - separate type imports
import { Component } from '@/app/_components/component';
import { User } from '@/payload/types';
```

### ESLint Rules (Key Ones)

- **Unused variables** - Prefix with `_` (e.g., `_unused`)
- **Array types** - Use `T[]` instead of `Array<T>`
- **Type definitions** - Interface or type based on preference
- **Database safety** - Drizzle delete/update must include where clause
- **Promises** - No misused promises allowed

### Prettier Configuration

- **Single quotes** for all strings
- **No trailing commas**
- **Tailwind class sorting** enabled
- **Tab indentation** (4 spaces)

### Naming Conventions

- **Components** - PascalCase (e.g., `HeroSection`)
- **Files** - kebab-case for utilities, PascalCase for components
- **Variables** - camelCase
- **Constants** - UPPER_SNAKE_CASE
- **Types/Interfaces** - PascalCase with descriptive names

### Error Handling

```typescript
// ✅ Use notFound() for missing data
const page = await fetchPageBySlug('home');
if (!page) return notFound();

// ✅ Proper async/await with error boundaries
try {
	const result = await apiCall();
	return result;
} catch (error) {
	console.error('API call failed:', error);
	throw error;
}
```

## Architecture Patterns

### Next.js App Router Structure

```
src/app/
├── (frontend)/        # Public routes
├── (payload)/         # Admin routes
├── _components/       # Shared components
└── _hooks/           # Custom hooks
```

### Component Patterns

- **Server Components** - Default for all components
- **Client Components** - Add `"use client"` directive when needed
- **Async Components** - Use for data fetching at component level
- **Shared Components** - Place in `_components/` directory

### Payload CMS Structure

```
src/payload/
├── blocks/           # Content blocks (Content, About, Testimonials, etc.)
├── collections/      # Data collections
├── globals/         # Global configuration (nav, footer)
├── fields/          # Custom field types
└── utils/           # CMS utilities
```

### tRPC API Structure

```typescript
// Router definition
export const appRouter = createTRPCRouter({
	yogaLessons: yogaLessonsRouter,
	userPurchases: userPurchasesRouter,
	videos: videosRouter
});

// Type exports for client usage
export type AppRouter = typeof appRouter;
```

## Styling Guidelines

### Tailwind CSS v4

- **CSS Custom Properties** - Use for brand colors and theming
- **Responsive Design** - Mobile-first approach
- **Component Classes** - Prefer utility classes over custom CSS
- **Brand Colors**:
    - `--bala-purple` / `--bala-purple-dark`
    - `--bala-olive` / `--bala-olive-dark`
    - `--bala-blue` / `--bala-blue-dark`

### Typography

- **Font Family** - DM Serif Text for headings
- **System Fonts** - For body text
- **Responsive Sizing** - Use fluid typography with Tailwind

## Database Patterns

### Drizzle ORM

```typescript
// ✅ Always use where clauses for delete/update
await db.delete(yogaLessons).where(eq(yogaLessons.id, id));

// ✅ Type-safe queries
const lesson = await db.select().from(yogaLessons).where(eq(yogaLessons.slug, slug));
```

### Schema Organization

- **Tables** - Define in `src/server/db/schema.ts`
- **Migrations** - Auto-generated with `pnpm db:generate`
- **Relations** - Use Drizzle relations for foreign keys

## Testing

Currently no test framework is configured. When adding tests:

1. Choose appropriate framework (Jest, Vitest, etc.)
2. Add test script to package.json
3. Follow existing code patterns

## Development Workflow

1. **Setup** - Run `pnpm db:start` before development
2. **Type Safety** - Always run `pnpm typecheck` before commits
3. **Code Quality** - Use `pnpm check` for comprehensive validation
4. **Formatting** - Auto-format with `pnpm format:write`
5. **Database Changes** - Generate migrations after schema updates

## Environment Variables

- **Validation** - Use `src/env.js` with T3 Env
- **Type Safety** - All env vars must be typed
- **Runtime Validation** - Built-in validation on app start

## Key Dependencies

- **Next.js 15** - React framework with App Router
- **Payload 3** - Headless CMS with Lexical editor
- **tRPC** - Type-safe API layer
- **Drizzle ORM** - Type-safe database queries
- **Tailwind CSS v4** - Utility-first styling

## Common Patterns

### Data Fetching

```typescript
// Server component data fetching
export default async function Page() {
  const data = await fetchPageBySlug('home');
  return <Component data={data} />;
}
```

### Block Rendering

```typescript
// Payload block rendering
<BlockRenderer layout={page.layout} />
```

### API Calls

```typescript
// tRPC client usage
const { data } = api.yogaLessons.getAll.useQuery();
```

## File Organization Rules

1. **Co-location** - Keep related files together
2. **Index Exports** - Use index files for clean imports
3. **Type Files** - Keep types close to implementation
4. **Utility Functions** - Centralize in utils directories
5. **Constants** - Define in appropriate scope

## Security Considerations

- **Environment Variables** - Never commit secrets
- **Database Queries** - Always use parameterized queries
- **Type Safety** - Rely on TypeScript for security
- **Payload Auth** - Use built-in authentication for admin

## Performance Guidelines

- **Images** - Optimize with Next.js Image component
- **Code Splitting** - Leverage Next.js automatic splitting
- **Database Queries** - Optimize with proper indexing
- **Bundle Size** - Monitor with Next.js bundle analyzer

Remember: This codebase prioritizes type safety, developer experience, and maintainability. When in doubt, follow existing patterns and conventions.
