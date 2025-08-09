import { BadgeBlock } from '@/blocks/Badge';
import { ContactBlock } from '@/blocks/Contact';
import { CTAButtonBlock } from '@/blocks/CTAButton';
import { FamilyYogaBlock } from '@/blocks/FamilyYoga';
import { FeatureListBlock } from '@/blocks/FeatureList';
import { HeroBlock } from '@/blocks/Hero';
import { ImageBlock } from '@/blocks/Image';
import { RichTextBlock } from '@/blocks/RichText';
import { TwoColumnBlock } from '@/blocks/TwoColumn';
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
			blocks: [
				HeroBlock,
				RichTextBlock,
				ImageBlock,
				CTAButtonBlock,
				FeatureListBlock,
				TwoColumnBlock,
				ContactBlock,
				BadgeBlock,
				FamilyYogaBlock
			]
		}
	]
};
