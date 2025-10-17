import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

export const KidsYoga: Block = {
	slug: 'kids',
	interfaceName: 'KidsYogaBlock',
	labels: {
		singular: 'Kids Yoga',
		plural: 'Kids Yoga'
	},
	fields: [
		{
			name: 'richText',
			type: 'richText',
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [
						...rootFeatures,
						HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
						FixedToolbarFeature(),
						InlineToolbarFeature()
					];
				}
			}),
			label: false
		}
	]
};
