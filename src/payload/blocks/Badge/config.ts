import type { Block } from 'payload';

export const BadgeBlock: Block = {
	slug: 'badge',
	labels: { singular: 'Badge', plural: 'Badges' },
	fields: [
		{ name: 'text', type: 'text' },
		{ name: 'image', type: 'upload', relationTo: 'media' },
		{ name: 'link', type: 'text' }
	]
};

export default BadgeBlock;
