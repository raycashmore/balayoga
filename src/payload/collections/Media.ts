import { FixedToolbarFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
	slug: 'media',
	access: {
		read: () => true
	},
	fields: [
		{
			name: 'alt',
			type: 'text'
		},
		{
			name: 'caption',
			type: 'richText',
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()];
				}
			})
		}
	],
	upload: {
		disableLocalStorage: true // handled by Bunny.net
	}
};
