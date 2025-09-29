import type { ContentBlock as ContentBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { cn } from '@/payload/utils/ui';

export function ContentBlock(props: ContentBlockProps) {
	const { columns } = props;

	const colsSpanClasses = {
		full: '12',
		half: '6',
		oneThird: '4',
		twoThirds: '8'
	};

	return (
		<div className="container my-16">
			<div className="grid grid-cols-4 gap-x-16 gap-y-8 lg:grid-cols-12">
				{columns &&
					columns.length > 0 &&
					columns.map((col, index) => {
						const { richText, size } = col;

						return (
							<div
								className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]}`, {
									'md:col-span-2': size !== 'full'
								})}
								key={index}
							>
								{richText && <RichText data={richText} enableGutter={false} />}
							</div>
						);
					})}
			</div>
		</div>
	);
}
