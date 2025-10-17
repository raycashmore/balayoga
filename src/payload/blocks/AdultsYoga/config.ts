import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

export const AdultsYoga: Block = {
	slug: 'adults',
	interfaceName: 'AdultsYogaBlock',
	labels: {
		singular: 'Adults Yoga',
		plural: 'Adults Yoga'
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
