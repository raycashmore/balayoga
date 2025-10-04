import { type Page, type Post } from '@/payload-types';
import { getServerSideURL } from '@/payload/utils/getURL';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { type GenerateTitle, type GenerateURL } from '@payloadcms/plugin-seo/types';
import { bunnyStorage } from '@seshuk/payload-storage-bunny';
import { type Plugin } from 'payload';

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
	return doc?.title ? `${doc.title} | Bala Yoga` : 'Bala Yoga';
};

const generateURL: GenerateURL<Post | Page> = ({ doc }) => {
	const url = getServerSideURL();
	return doc?.slug ? `${url}/${doc.slug}` : url;
};

export const plugins: Plugin[] = [
	seoPlugin({
		generateTitle,
		generateURL
	}),
	bunnyStorage({
		collections: {
			media: {
				prefix: 'media',
				disablePayloadAccessControl: true
			}
		},
		storage: {
			apiKey: process.env.BUNNY_STORAGE_API_KEY ?? '',
			hostname: process.env.BUNNY_HOSTNAME ?? '',
			zoneName: process.env.BUNNY_ZONE_NAME ?? '',
			region: process.env.BUNNY_REGION ?? ''
		},
		stream: {
			apiKey: process.env.BUNNY_STREAM_API_KEY ?? '',
			hostname: 'vz-6c49b326-1ad.b-cdn.net',
			libraryId: 460862,
			tus: true // Enable resumable uploads
		}
	})
];
