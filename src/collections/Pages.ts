import { FamilyYogaBlock } from '@/blocks/FamilyYoga';
import { slugField } from '@/fields/slug';
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
			blocks: [FamilyYogaBlock]
		}
	]
};
