import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_testimonials_testimonials" DROP COLUMN "short_body";
  ALTER TABLE "_pages_v_blocks_testimonials_testimonials" DROP COLUMN "short_body";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_testimonials_testimonials" ADD COLUMN "short_body" jsonb;
  ALTER TABLE "_pages_v_blocks_testimonials_testimonials" ADD COLUMN "short_body" jsonb;`)
}
