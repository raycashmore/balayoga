import type { Block } from 'payload';

export const FeatureListBlock: Block = {
	slug: 'featureList',
	labels: { singular: 'Feature List', plural: 'Feature Lists' },
	fields: [
		{
			name: 'title',
			type: 'text'
		},
		{
			name: 'items',
			type: 'array',
			labels: { singular: 'Item', plural: 'Items' },
			minRows: 1,
			fields: [
				{
					name: 'icon',
					type: 'upload',
					relationTo: 'media'
				},
				{ name: 'title', type: 'text', required: true },
				{
					name: 'body',
					type: 'richText',
					admin: { description: 'Feature description' }
				}
			]
		}
	]
};

export default FeatureListBlock;
