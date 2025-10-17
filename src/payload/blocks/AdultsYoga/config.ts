import { lexicalEditor } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

export const AdultsYoga: Block = {
	slug: 'adults',
	interfaceName: 'AdultsYogaBlockProps',
	labels: {
		singular: 'Adults Yoga',
		plural: 'Adults Yoga'
	},
	fields: [
		{
			name: 'title',
			type: 'text'
		},
		{
			name: 'richText',
			type: 'richText',
			editor: lexicalEditor(),
			label: false
		}
	]
};
