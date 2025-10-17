import { lexicalEditor } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

export const FamilyYoga: Block = {
	slug: 'family',
	interfaceName: 'FamilyYogaBlockProps',
	labels: {
		singular: 'Family Yoga',
		plural: 'Family Yoga'
	},
	fields: [
		{
			name: 'title',
			type: 'text'
		},
		{
			name: 'details',
			type: 'richText',
			editor: lexicalEditor(),
			label: 'Details'
		},
		{
			name: 'description',
			type: 'richText',
			editor: lexicalEditor(),
			label: 'Description'
		}
	]
};
