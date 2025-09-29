import { Pages } from '@/payload/collections/Pages';
import { Posts } from '@/payload/collections/Posts';
import { Footer } from '@/payload/globals/footer/config';
import { Nav } from '@/payload/globals/nav/config';
import { userPurchases, videos, yogaLessons } from '@/server/db/schema';
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { Media } from './payload/collections/Media';

import { Users } from './payload/collections/Users';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname)
		}
	},
	collections: [Users, Media, Pages, Posts],
	globals: [Nav, Footer],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET ?? '',
	typescript: {
		outputFile: path.resolve(dirname, 'payload-types.ts')
	},
	db: vercelPostgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URL ?? ''
		},
		beforeSchemaInit: [
			// @ts-expect-error Loose table types
			({ schema }) => {
				return {
					...schema,
					tables: {
						...schema.tables,
						yogaLessons,
						userPurchases,
						videos
					}
				};
			}
		],
		migrationDir: './migrations'
	}),
	sharp,
	plugins: [
		payloadCloudPlugin()
		// storage-adapter-placeholder
	]
});
