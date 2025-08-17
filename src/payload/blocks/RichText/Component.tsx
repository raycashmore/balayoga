import React from 'react';
import type { Page } from '@/payload-types';

export type BlockUnion = NonNullable<Page['layout']>[number];
export type Props = Pick<Extract<BlockUnion, { blockType: 'richText' }>, 'content'>;

const Component: React.FC<Props> = ({ content: _content }) => (
  <div className="prose max-w-none">{/* Rendered by Lexical on client/admin; SSR rendering TBD */}</div>
);

export default Component;
