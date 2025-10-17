import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_kids" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"kids" jsonb,
  	"teens" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_family" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"details" jsonb,
  	"description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_adults" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_kids" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"kids" jsonb,
  	"teens" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_family" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"details" jsonb,
  	"description" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_adults" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_kids" ADD CONSTRAINT "pages_blocks_kids_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_family" ADD CONSTRAINT "pages_blocks_family_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_adults" ADD CONSTRAINT "pages_blocks_adults_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_kids" ADD CONSTRAINT "_pages_v_blocks_kids_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_family" ADD CONSTRAINT "_pages_v_blocks_family_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_adults" ADD CONSTRAINT "_pages_v_blocks_adults_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_kids_order_idx" ON "pages_blocks_kids" USING btree ("_order");
  CREATE INDEX "pages_blocks_kids_parent_id_idx" ON "pages_blocks_kids" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_kids_path_idx" ON "pages_blocks_kids" USING btree ("_path");
  CREATE INDEX "pages_blocks_family_order_idx" ON "pages_blocks_family" USING btree ("_order");
  CREATE INDEX "pages_blocks_family_parent_id_idx" ON "pages_blocks_family" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_family_path_idx" ON "pages_blocks_family" USING btree ("_path");
  CREATE INDEX "pages_blocks_adults_order_idx" ON "pages_blocks_adults" USING btree ("_order");
  CREATE INDEX "pages_blocks_adults_parent_id_idx" ON "pages_blocks_adults" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_adults_path_idx" ON "pages_blocks_adults" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_kids_order_idx" ON "_pages_v_blocks_kids" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_kids_parent_id_idx" ON "_pages_v_blocks_kids" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_kids_path_idx" ON "_pages_v_blocks_kids" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_family_order_idx" ON "_pages_v_blocks_family" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_family_parent_id_idx" ON "_pages_v_blocks_family" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_family_path_idx" ON "_pages_v_blocks_family" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_adults_order_idx" ON "_pages_v_blocks_adults" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_adults_parent_id_idx" ON "_pages_v_blocks_adults" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_adults_path_idx" ON "_pages_v_blocks_adults" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_kids" CASCADE;
  DROP TABLE "pages_blocks_family" CASCADE;
  DROP TABLE "pages_blocks_adults" CASCADE;
  DROP TABLE "_pages_v_blocks_kids" CASCADE;
  DROP TABLE "_pages_v_blocks_family" CASCADE;
  DROP TABLE "_pages_v_blocks_adults" CASCADE;`)
}
