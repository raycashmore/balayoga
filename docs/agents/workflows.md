# Workflows

Database migrations:
- Local dev automatically pushes schema changes to the local DB.
- Use `pnpm payload:migrate` to create migration files for production.

Schema change workflow:
1. Modify collection/field definitions in `src/payload/collections/`
2. Run `pnpm payload:types` to regenerate types
3. Start the dev server with `pnpm dev` to apply local changes
4. Run `pnpm payload:migrate` to create remote migration files

Development workflow:
1. Run `pnpm db:start` before development
2. Run `pnpm typecheck` before commits
3. Use `pnpm check` for full validation
4. Use `pnpm format:write` to format
5. Generate migrations after schema updates
