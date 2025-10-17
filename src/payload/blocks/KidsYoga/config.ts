import { lexicalEditor } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

export const KidsYoga: Block = {
	slug: 'kids',
	interfaceName: 'KidsYogaBlockProps',
	labels: {
		singular: 'Kids Yoga',
		plural: 'Kids Yoga'
	},
	fields: [
		{
			name: 'title',
			type: 'text'
		},
		{
			name: 'kids',
			type: 'richText',
			editor: lexicalEditor(),
			label: 'Kids'
		},
		{
			name: 'teens',
			type: 'richText',
			editor: lexicalEditor(),
			label: 'Teens'
		}
	]
};
