import React from 'react';
import type { Page } from '@/payload-types';

// Properly typed props based on Payload-generated types
export type BlockUnion = NonNullable<Page['layout']>[number];
export type Props = Pick<Extract<BlockUnion, { blockType: 'hero' }>, 'heading' | 'subheading'>;

const Component: React.FC<Props> = ({ heading, subheading }) => (
  <section className="py-8">
    {heading ? <h2 className="text-3xl font-semibold">{heading}</h2> : null}
    {subheading ? (
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: '' }} />
    ) : null}
  </section>
);

export default Component;
