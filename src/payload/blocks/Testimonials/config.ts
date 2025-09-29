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
					name: 'shortBody',
					type: 'richText',
					admin: { description: 'Short testimonial' },
					required: true
				},
				{
					name: 'body',
					type: 'richText',
					admin: { description: 'Expanded testimonial' },
					required: true
				}
			]
		}
	]
};
