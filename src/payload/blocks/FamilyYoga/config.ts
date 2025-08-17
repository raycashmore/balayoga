import type { Block } from 'payload';

// FamilyYoga block definition to map the existing static family.tsx section
export const FamilyYogaBlock: Block = {
	slug: 'familyYoga',
	labels: {
		singular: 'Family Yoga',
		plural: 'Family Yoga Blocks'
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
			defaultValue: 'Family yoga'
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
			required: true
		},
		{
			name: 'upcomingDates',
			type: 'array',
			admin: {
				description: 'Add one entry per date or a short human-readable label.'
			},
			fields: [{ name: 'label', type: 'text', required: true }]
		},
		{ name: 'time', type: 'text' },
		{ name: 'locationLabel', type: 'text' },
		{ name: 'locationUrl', type: 'text' },
		{ name: 'suitability', type: 'text' },
		{ name: 'intro', type: 'richText' },
		{
			name: 'bulletPoints',
			type: 'array',
			fields: [{ name: 'text', type: 'text', required: true }]
		},
		{ name: 'description', type: 'richText' },
		{ name: 'bookingUrl', type: 'text' }
	]
};

export default FamilyYogaBlock;
