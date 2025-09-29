import type { AboutBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import Image from 'next/image';

type Props = {
	className?: string;
} & AboutBlockProps;

export function AboutBlock({ richText }: Props) {
	return (
		<section className="px-2 pb-6 md:flex md:flex-row md:px-12">
			<a id="about" />
			<aside className="float-left pt-2 md:basis-1/3 md:pt-0">
				<Image
					src="/IMG_3751.webp"
					alt="Romana in a yoga pose"
					width={200}
					height={200}
					unoptimized={true}
					priority
					className="mr-6 mb-4 rounded-lg md:mr-0 md:mb-0 md:h-full md:w-full md:rounded-[32px] md:object-cover"
				/>
			</aside>
			<div className="text-lg text-white md:basis-2/3 md:pl-8 md:text-black">
				{richText && <RichText data={richText} enableGutter={false} />}
			</div>
		</section>
	);
}
