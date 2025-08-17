import type { Block } from 'payload';

export const ImageBlock: Block = {
	slug: 'image',
	labels: { singular: 'Image', plural: 'Images' },
	fields: [
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
			required: true
		},
		{
			name: 'alt',
			type: 'text',
			required: true,
			admin: {
				description: 'Required for accessibility unless decorative'
			}
		},
		{
			name: 'caption',
			type: 'text'
		},
		{
			name: 'aspect',
			type: 'select',
			admin: { description: 'Optional aspect ratio control' },
			options: [
				{ label: 'Auto', value: 'auto' },
				{ label: '1:1', value: '1:1' },
				{ label: '4:3', value: '4:3' },
				{ label: '16:9', value: '16:9' }
			]
		}
	]
};

export default ImageBlock;
