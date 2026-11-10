import { BookNowButton } from '@/app/_components/book-now-button';
import type { KidsYogaBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import Image from 'next/image';

type YogaClassRowProps = {
	image: string;
	content: NonNullable<KidsYogaBlockProps['teens']>;
};

export function YogaClassRow({ image, content }: YogaClassRowProps) {
	return (
		<div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
			<Image
				src={image}
				alt=""
				width={350}
				height={350}
				className="h-auto w-full rounded-2xl md:order-last md:w-[350px] md:shrink-0"
			/>
			<div className="flex-1">
				<RichText data={content} enableGutter={false} />
				<div className="mt-6">
					<BookNowButton />
				</div>
			</div>
		</div>
	);
}
