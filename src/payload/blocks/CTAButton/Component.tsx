import React from 'react';
import type { Page } from '@/payload-types';

export type BlockUnion = NonNullable<Page['layout']>[number];
export type Props = Pick<Extract<BlockUnion, { blockType: 'ctaButton' }>, 'label' | 'url' | 'variant'>;

const Component: React.FC<Props> = ({ label, url, variant }) => (
  <a
    href={url}
    className={`inline-block rounded px-4 py-2 text-white ${
      variant === 'secondary' ? 'bg-gray-600' : variant === 'link' ? 'bg-transparent text-blue-600 underline' : 'bg-blue-600'
    }`}
  >
    {label}
  </a>
);

export default Component;
