import type { Block } from 'payload';

export const CTAButtonBlock: Block = {
	slug: 'ctaButton',
	labels: { singular: 'CTA Button', plural: 'CTA Buttons' },
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
};

export default CTAButtonBlock;
