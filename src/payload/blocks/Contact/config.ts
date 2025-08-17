import type { Block } from 'payload';

export const ContactBlock: Block = {
	slug: 'contact',
	labels: { singular: 'Contact', plural: 'Contact Blocks' },
	fields: [
		{ name: 'heading', type: 'text' },
		{ name: 'body', type: 'richText' },
		{ name: 'formConfig', type: 'json', admin: { description: 'Placeholder until form strategy is decided' } }
	]
};

export default ContactBlock;
