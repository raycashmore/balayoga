# Code Style

TypeScript:
- Strict mode enabled
- Use `@/*` for src imports
- Prefer inline type imports: `import type { Foo } from '@/...'`
- Use ES module syntax

ESLint:
- Prefix unused vars with `_`
- Use `T[]` over `Array<T>`
- Drizzle delete/update must include `where`
- No misused promises

Prettier:
- Single quotes
- No trailing commas
- Tailwind class sorting enabled
- Tabs (4 spaces)

Naming:
- Components: PascalCase
- Utilities: kebab-case filenames
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE
- Types/Interfaces: PascalCase

Error handling:
- Use `notFound()` for missing data
- Use try/catch with logging for async failures
