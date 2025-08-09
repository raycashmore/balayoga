import type { Block } from 'payload';

export const TwoColumnBlock: Block = {
	slug: 'twoColumn',
	labels: { singular: 'Two Column', plural: 'Two Column Blocks' },
	fields: [
		{
			name: 'left',
			type: 'richText'
		},
		{
			name: 'right',
			type: 'richText'
		},
		{
			name: 'layout',
			type: 'select',
			defaultValue: 'split',
			options: [
				{ label: 'Image Left', value: 'imageLeft' },
				{ label: 'Image Right', value: 'imageRight' },
				{ label: 'Split', value: 'split' }
			]
		}
	]
};

export default TwoColumnBlock;
