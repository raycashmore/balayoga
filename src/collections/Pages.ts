import { slugField } from '@/fields/slug';
import type { CollectionConfig } from 'payload';

export const Pages: CollectionConfig<'pages'> = {
	slug: 'pages',
	defaultPopulate: {
		title: true,
		slug: true
	},
	fields: [
		{
			name: 'title',
			type: 'text'
		},
		...slugField()
	]
};
