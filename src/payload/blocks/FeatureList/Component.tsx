import React from 'react';
import type { Page } from '@/payload-types';

export type BlockUnion = NonNullable<Page['layout']>[number];
export type Props = Pick<Extract<BlockUnion, { blockType: 'featureList' }>, 'title' | 'items'>;

const Component: React.FC<Props> = ({ title, items }) => (
  <section className="py-6">
    {title ? <h3 className="mb-2 text-2xl font-medium">{title}</h3> : null}
    <ul className="space-y-2">
      {Array.isArray(items) &&
        items.map((it, i) => (
          <li key={it?.id ?? i} className="flex items-start gap-3">
            <div className="h-6 w-6 rounded bg-gray-200" />
            <div>
              <div className="font-semibold">{it?.title ?? ''}</div>
              <div className="text-sm text-gray-700">{/* body rich text not SSR-rendered yet */}</div>
            </div>
          </li>
        ))}
    </ul>
  </section>
);

export default Component;
