import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

export const AdultsYoga: Block = {
	slug: 'adults',
	interfaceName: 'AdultsYogaBlockProps',
	labels: {
		singular: 'Adults Yoga',
		plural: 'Adults Yoga'
	},
	fields: [
		{
			name: 'title',
			type: 'text'
		},
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
