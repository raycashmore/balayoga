import { BookNowButton } from '@/app/_components/book-now-button';
import { ClassCard } from '@/app/_components/class-card';
import { SectionTitle } from '@/app/_components/section-title';
import type { FamilyYogaBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import Image from 'next/image';

export function FamilyYogaBlock({ details, description, title }: FamilyYogaBlockProps) {
	return (
		<ClassCard id="family-yoga" tone="olive" heading={<SectionTitle>{title}</SectionTitle>}>
			<div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
				<div className="flex flex-col gap-6 lg:w-[420px] lg:shrink-0">
					<Image
						src="/IMG_3554.webp"
						alt=""
						width={800}
						height={402}
						className="h-auto w-full rounded-2xl object-cover md:w-[420px]"
					/>
					{details && <RichText data={details} enableGutter={false} />}
				</div>
				<div className="flex-1">
					{description && <RichText data={description} enableGutter={false} />}
					<div className="mt-6">
						<BookNowButton />
					</div>
				</div>
			</div>
		</ClassCard>
	);
}
