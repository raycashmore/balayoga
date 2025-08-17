import React from 'react';
import type { Page } from '@/payload-types';

export type BlockUnion = NonNullable<Page['layout']>[number];
export type Props = Pick<Extract<BlockUnion, { blockType: 'image' }>, 'image' | 'alt' | 'caption'>;

const Component: React.FC<Props> = ({ image: _image, alt, caption }) => (
  <figure className="my-6">
    {/* At render time, you would map Media to <Image/>; stub only */}
    <div className="h-48 w-full rounded bg-gray-100" aria-label={alt}></div>
    {caption ? <figcaption className="text-sm text-gray-500">{caption}</figcaption> : null}
  </figure>
);

export default Component;
