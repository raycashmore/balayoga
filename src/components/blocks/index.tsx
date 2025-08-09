/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/non-nullable-type-assertion-style */
import React from 'react';
import type { JSX } from 'react';

// Minimal renderer for Payload blocks

type AnyBlock = Record<string, unknown> & { id?: string; blockType?: string };

const Hero: React.FC<any> = ({ heading, subheading }) => (
	<section className="py-8">
		{heading ? <h2 className="text-3xl font-semibold">{String(heading)}</h2> : null}
		{subheading ? <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: '' }} /> : null}
	</section>
);

const RichText: React.FC<any> = ({ content }) => (
	<div className="prose max-w-none">{/* Rendered by Lexical on client/admin; SSR rendering TBD */}</div>
);

const Image: React.FC<any> = ({ image, alt, caption }) => (
	<figure className="my-6">
		{/* At render time, you would map Media to <Image/>; stub only */}
		<div className="h-48 w-full rounded bg-gray-100" aria-label={alt as string}></div>
		{caption ? <figcaption className="text-sm text-gray-500">{String(caption)}</figcaption> : null}
	</figure>
);

const CTAButton: React.FC<any> = ({ label, url, variant }) => (
	<a
		href={String(url)}
		className={`inline-block rounded px-4 py-2 text-white ${variant === 'secondary' ? 'bg-gray-600' : variant === 'link' ? 'bg-transparent text-blue-600 underline' : 'bg-blue-600'}`}
	>
		{String(label)}
	</a>
);

const FeatureList: React.FC<any> = ({ title, items }) => (
	<section className="py-6">
		{title ? <h3 className="mb-2 text-2xl font-medium">{String(title)}</h3> : null}
		<ul className="space-y-2">
			{Array.isArray(items) &&
				items.map((it: any, i: number) => (
					<li key={it?.id ?? i} className="flex items-start gap-3">
						<div className="h-6 w-6 rounded bg-gray-200" />
						<div>
							<div className="font-semibold">{String(it?.title ?? '')}</div>
							<div className="text-sm text-gray-700">{/* body rich text not SSR-rendered yet */}</div>
						</div>
					</li>
				))}
		</ul>
	</section>
);

const TwoColumn: React.FC<any> = ({ left, right }) => (
	<section className="grid gap-6 py-6 md:grid-cols-2">
		<div className="prose max-w-none">{/* left rich text */}</div>
		<div className="prose max-w-none">{/* right rich text */}</div>
	</section>
);

const Contact: React.FC<any> = ({ heading }) => (
	<section className="py-6">
		{heading ? <h3 className="mb-2 text-2xl font-medium">{String(heading)}</h3> : null}
		{/* form placeholder */}
	</section>
);

const Badge: React.FC<any> = ({ text, link }) => (
	<a className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm" href={link ? String(link) : undefined}>
		<span className="h-4 w-4 rounded-full bg-gray-300" />
		<span>{String(text ?? '')}</span>
	</a>
);

const FamilyYoga: React.FC<any> = ({ title }) => (
	<section className="py-6">
		<h3 className="text-2xl font-medium">{String(title ?? 'Family yoga')}</h3>
		{/* Detailed rendering to be implemented in Phase 4 */}
	</section>
);

const blocksMap: Record<string, React.FC<any>> = {
	hero: Hero,
	richText: RichText,
	image: Image,
	ctaButton: CTAButton,
	featureList: FeatureList,
	twoColumn: TwoColumn,
	contact: Contact,
	badge: Badge,
	familyYoga: FamilyYoga
};

export function BlockRenderer({ layout }: { layout: AnyBlock[] | null | undefined }): JSX.Element | null {
	if (!layout || layout.length === 0) return null;
	return (
		<>
			{layout.map((block, i) => {
				const key = (block.id as string) ?? `${block.blockType ?? 'block'}-${i}`;
				const Comp = blocksMap[String(block.blockType ?? '')];
				if (!Comp) return null;
				return <Comp key={key} {...block} />;
			})}
		</>
	);
}
