'use client';

import { BlogPage } from '@/app/(frontend)/blog/blog-page';
import type { Post } from '@/payload-types';
import { getClientSideURL } from '@/payload/utils/getURL';
import { useLivePreview } from '@payloadcms/live-preview-react';
import React from 'react';

export const LivePreviewPost: React.FC<{ post: Post }> = ({ post: initialPost }) => {
	const { data } = useLivePreview<Post>({
		initialData: initialPost,
		serverURL: getClientSideURL(),
		depth: 2
	});

	return <BlogPage post={data} />;
};