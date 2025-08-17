import type { Block } from 'payload';

export const HeroBlock: Block = {
	slug: 'hero',
	labels: { singular: 'Hero', plural: 'Heros' },
	fields: [
		{
			name: 'heading',
			type: 'text',
			required: false
		},
		{
			name: 'subheading',
			type: 'richText',
			admin: {
				description: 'Optional formatted subheading'
			}
		},
		{
			name: 'background',
			type: 'upload',
			relationTo: 'media',
			admin: { description: 'Background image (optional)' }
		},
		{
			name: 'ctas',
			type: 'array',
			labels: { singular: 'CTA', plural: 'CTAs' },
			fields: [
				{ name: 'label', type: 'text', required: true },
				{ name: 'url', type: 'text', required: true },
				{
					name: 'variant',
					type: 'select',
					defaultValue: 'primary',
					options: [
						{ label: 'Primary', value: 'primary' },
						{ label: 'Secondary', value: 'secondary' },
						{ label: 'Link', value: 'link' }
					]
				}
			]
		}
	]
};

export default HeroBlock;
