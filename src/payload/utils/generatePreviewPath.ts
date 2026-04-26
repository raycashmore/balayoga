import { type PayloadRequest } from 'payload';

type Props = {
	collection: 'pages' | 'posts';
	slug: string;
	req: PayloadRequest;
};

export const generateFrontendPath = ({ collection, slug }: Omit<Props, 'req'>) => {
	if (collection === 'posts') {
		return `/blog/${slug}`;
	}

	return slug === 'home' ? '/' : `/${slug}`;
};

export const generatePreviewTargetPath = ({ collection, slug }: Omit<Props, 'req'>) => {
	if (collection === 'posts') {
		return `/preview/blog/${slug}`;
	}

	return `/preview/${slug}`;
};

export const generatePreviewPath = ({ collection, slug }: Props) => {
	const path = generatePreviewTargetPath({ collection, slug });
	const encodedParams = new URLSearchParams({
		slug,
		collection,
		path,
		previewSecret: process.env.PREVIEW_SECRET || ''
	});

	const url = `/next/preview?${encodedParams.toString()}`;

	return url;
};
