import React from 'react';
import type { Page } from '@/payload-types';

export type BlockUnion = NonNullable<Page['layout']>[number];
export type Props = Pick<Extract<BlockUnion, { blockType: 'familyYoga' }>, 'title'>;

const Component: React.FC<Props> = ({ title }) => (
  <section className="py-6">
    <h3 className="text-2xl font-medium">{title}</h3>
    {/* Detailed rendering to be implemented in Phase 4 */}
  </section>
);

export default Component;
