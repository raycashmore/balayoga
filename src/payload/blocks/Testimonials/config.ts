import type { Block } from 'payload';

export const Testimonials: Block = {
	slug: 'testimonials',
	interfaceName: 'TestimonialsBlockProps',
	fields: [
		{
			name: 'title',
			type: 'text'
		},
		{
			name: 'testimonials',
			type: 'array',
			labels: { singular: 'Item', plural: 'Items' },
			minRows: 1,
			fields: [
				{ name: 'quote', type: 'text', required: true },
				{
					name: 'body',
					type: 'richText',
					admin: { description: 'Shown clipped on the card until the visitor selects Read more' },
					required: true
				}
			]
		}
	]
};
