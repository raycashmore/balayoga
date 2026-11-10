import { BookNowButton } from '@/app/_components/book-now-button';
import { ClassCard } from '@/app/_components/class-card';
import { SectionTitle } from '@/app/_components/section-title';
import type { KidsYogaBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { FEATURE_FLAGS, getBooleanFeatureFlag } from '@/server/feature-flags';
import Image from 'next/image';

export async function KidsYogaBlock(props: KidsYogaBlockProps) {
	const isKidsEnabled = await getBooleanFeatureFlag(FEATURE_FLAGS.KIDS_YOGA_BLOCK, false);

	return <KidsYogaBlockContent {...props} isKidsEnabled={isKidsEnabled} />;
}

function KidsYogaBlockContent({ kids, teens, title, isKidsEnabled }: KidsYogaBlockProps & { isKidsEnabled: boolean }) {
	return (
		<ClassCard
			id="kids-yoga"
			tone="white"
			heading={
				<div className="flex items-center gap-4 md:gap-6">
					<SectionTitle>{title}</SectionTitle>
					<Image
						src="/activekids-logo.webp"
						alt="Active kids approved provider"
						width={100}
						height={100}
						className="h-16 w-16 md:h-20 md:w-20"
					/>
				</div>
			}
		>
			{isKidsEnabled && kids && <ClassRow image="/kids-yoga.webp" content={kids} />}
			{teens && <ClassRow image="/teens-yoga.webp" content={teens} />}
		</ClassCard>
	);
}

function ClassRow({ image, content }: { image: string; content: NonNullable<KidsYogaBlockProps['teens']> }) {
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
