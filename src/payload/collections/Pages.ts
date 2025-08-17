import { About } from '@/payload/blocks/About/config';
import { BadgeBlock } from '@/payload/blocks/Badge/config';
import { ContactBlock } from '@/payload/blocks/Contact/config';
import { ContentBlock } from '@/payload/blocks/Content/config';
import { CTAButtonBlock } from '@/payload/blocks/CTAButton/config';
import { FamilyYogaBlock } from '@/payload/blocks/FamilyYoga/config';
import { FeatureListBlock } from '@/payload/blocks/FeatureList/config';
import { HeroBlock } from '@/payload/blocks/Hero/config';
import { ImageBlock } from '@/payload/blocks/Image/config';
import { RichTextBlock } from '@/payload/blocks/RichText/config';
import { Testimonials } from '@/payload/blocks/Testimonials/config';
import { TwoColumnBlock } from '@/payload/blocks/TwoColumn/config';
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
			blocks: [
				HeroBlock,
				RichTextBlock,
				ImageBlock,
				CTAButtonBlock,
				FeatureListBlock,
				TwoColumnBlock,
				ContactBlock,
				BadgeBlock,
				FamilyYogaBlock,
				ContentBlock,
				About,
				Testimonials
			]
		}
	]
};
