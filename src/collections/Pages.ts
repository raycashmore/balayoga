import type { CollectionConfig } from 'payload';

export const Pages: CollectionConfig<'pages'> = {
	slug: 'pages',
	fields: [
		{
			name: 'title',
			type: 'text',
		},
	],
};
