import { authenticated } from '@/payload/access/authenticated';
import { authenticatedOrPublished } from '@/payload/access/authenticatedOrPublished';
import { About } from '@/payload/blocks/About/config';
import { AdultsYoga } from '@/payload/blocks/AdultsYoga/config';
import { ContentBlock } from '@/payload/blocks/Content/config';
import { FamilyYoga } from '@/payload/blocks/FamilyYoga/config';
import { KidsYoga } from '@/payload/blocks/KidsYoga/config';
import { Testimonials } from '@/payload/blocks/Testimonials/config';
import { revalidateDelete, revalidatePage } from '@/payload/collections/hooks/revalidatePage';
import { slugField } from '@/payload/fields/slug';
import { generatePreviewPath } from '@/payload/utils/generatePreviewPath';
import type { CollectionConfig } from 'payload';

export const Pages: CollectionConfig<'pages'> = {
	slug: 'pages',
	access: {
		create: authenticated,
		delete: authenticated,
		read: authenticatedOrPublished,
		update: authenticated
	},
	defaultPopulate: {
		title: true,
		slug: true
	},
	admin: {
		defaultColumns: ['title', 'slug', 'updatedAt'],
		livePreview: {
			url: ({ data, req }) => {
				const path = generatePreviewPath({
					slug: typeof data?.slug === 'string' ? data.slug : '',
					collection: 'pages',
					req
				});

				return path;
			}
		},
		preview: (data, { req }) =>
			generatePreviewPath({
				slug: typeof data?.slug === 'string' ? data.slug : '',
				collection: 'pages',
				req
			}),
		useAsTitle: 'title'
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
			blocks: [ContentBlock, About, Testimonials, KidsYoga, FamilyYoga, AdultsYoga]
		}
	],
	hooks: {
		afterChange: [revalidatePage],
		afterDelete: [revalidateDelete]
	},
	versions: {
		drafts: {
			// autosave: {
			// 	interval: 100 // We set this interval for optimal live preview
			// },
			schedulePublish: true
		},
		maxPerDoc: 50
	}
};
