import type { Page } from '@/payload-types';
import { blockComponents } from '@/payload/blocks/index';
import type { JSX } from 'react';
import React from 'react';

export function BlockRenderer({ layout }: { layout: Page['layout'] }): JSX.Element | null {
	if (!layout || layout.length === 0) return null;
	return (
		<>
			{layout.map((block, i) => {
				const key = block.id ?? `${block.blockType}-${i}`;
				const { blockType } = block;
				const Block = blockComponents[blockType];
				return Block ? (
					<div key={key}>
						{/* @ts-expect-error there may be some mismatch between the expected types here */}
						<Block {...block} />
					</div>
				) : null;
			})}
		</>
	);
}
