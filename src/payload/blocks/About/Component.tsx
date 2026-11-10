import type { AboutBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import Image from 'next/image';

type Props = {
	className?: string;
} & AboutBlockProps;

export function AboutBlock({ richText }: Props) {
	return (
		<section id="about" className="flex scroll-mt-24 flex-col gap-6 px-6 md:flex-row md:gap-10 md:px-12">
			<div className="md:shrink-0 md:basis-1/3">
				<Image
					src="/IMG_3751.webp"
					alt="Romana in a yoga pose"
					width={200}
					height={200}
					unoptimized={true}
					priority
					className="aspect-[4/3] w-full rounded-3xl object-cover object-[50%_30%] md:aspect-auto md:h-full md:rounded-[32px]"
				/>
			</div>
			<div className="text-base leading-relaxed font-medium text-white md:basis-2/3">
				{richText && <RichText data={richText} enableGutter={false} />}
			</div>
		</section>
	);
}
