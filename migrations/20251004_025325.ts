import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "media" ADD COLUMN "bunny_video_id" varchar;
  ALTER TABLE "media" ADD COLUMN "prefix" varchar DEFAULT 'media';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "media" DROP COLUMN "bunny_video_id";
  ALTER TABLE "media" DROP COLUMN "prefix";`)
}
