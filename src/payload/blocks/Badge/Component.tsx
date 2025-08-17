import type { Page } from '@/payload-types';

export type BlockUnion = NonNullable<Page['layout']>[number];
export type Props = Pick<Extract<BlockUnion, { blockType: 'badge' }>, 'text' | 'link'>;

const Component: React.FC<Props> = ({ text, link }) => (
	<a className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm" href={link ?? undefined}>
		<span className="h-4 w-4 rounded-full bg-gray-300" />
		<span>{text ?? ''}</span>
	</a>
);

export default Component;
