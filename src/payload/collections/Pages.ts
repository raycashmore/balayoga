import { About } from '@/payload/blocks/About/config';
import { ContentBlock } from '@/payload/blocks/Content/config';
import { Testimonials } from '@/payload/blocks/Testimonials/config';
import { slugField } from '@/payload/fields/slug';
import type { CollectionConfig } from 'payload';

export const Pages: CollectionConfig<'pages'> = {
	slug: 'pages',
	versions: {
		drafts: true
	},
	access: {
		read: () => true,
		create: ({ req }) => !!req.user,
		update: ({ req }) => !!req.user,
		delete: ({ req }) => !!req.user
	},
	defaultPopulate: {
		title: true,
		slug: true
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true
		},
		...slugField(),
		{
			name: 'layout',
			type: 'blocks',
			labels: {
				singular: 'Section',
				plural: 'Sections'
			},
			blocks: [ContentBlock, About, Testimonials]
		}
	]
};
