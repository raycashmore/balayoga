# Workflows

Database migrations:
- Local dev automatically pushes schema changes to the local DB.
- Use `pnpm payload:migrate` to create migration files for production.
- Vercel applies pending migrations on every deploy: its Build Command (set in the Vercel project settings, not in the repo) is `pnpm payload migrate && pnpm run build`. The build prerenders pages against the deployment's database, so migrations must run before it.
- `.github/workflows/migrate.yml` runs migrations manually against `preview` or `production`, if a database needs migrating outside a deploy.

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
