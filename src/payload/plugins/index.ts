import { type Page, type Post } from '@/payload-types';
import { getServerSideURL } from '@/payload/utils/getURL';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { type GenerateTitle, type GenerateURL } from '@payloadcms/plugin-seo/types';
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
	})
];
