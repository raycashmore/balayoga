import { BookNowButton } from '@/app/_components/book-now-button';
import { ClassCard } from '@/app/_components/class-card';
import { SectionTitle } from '@/app/_components/section-title';
import type { AdultsYogaBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import Image from 'next/image';

export function AdultsYogaBlock({ richText, title }: AdultsYogaBlockProps) {
	return (
		<ClassCard id="adults-yoga" tone="blue" heading={<SectionTitle>{title}</SectionTitle>}>
			<div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
				<div className="shrink-0">
					<Image src="/s2.webp" alt="" width={200} height={200} className="h-auto w-48 rounded-2xl object-cover" />
				</div>
				<div className="flex-1">
					{richText && <RichText data={richText} enableGutter={false} />}
					<div className="mt-6">
						<BookNowButton />
					</div>
				</div>
			</div>
		</ClassCard>
	);
}
