import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_kids" ADD COLUMN "show_kids" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_kids" ADD COLUMN "show_kids" boolean DEFAULT false;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_kids" DROP COLUMN "show_kids";
  ALTER TABLE "_pages_v_blocks_kids" DROP COLUMN "show_kids";`)
}
