import React from 'react';
import type { Page } from '@/payload-types';

export type BlockUnion = NonNullable<Page['layout']>[number];
export type Props = Pick<Extract<BlockUnion, { blockType: 'contact' }>, 'heading'>;

const Component: React.FC<Props> = ({ heading }) => (
  <section className="py-6">
    {heading ? <h3 className="mb-2 text-2xl font-medium">{heading}</h3> : null}
    {/* form placeholder */}
  </section>
);

export default Component;
