import type { Page } from '@/payload-types';
import Badge from '@/payload/blocks/Badge/Component';
import Contact from '@/payload/blocks/Contact/Component';
import { ContentBlock } from '@/payload/blocks/Content/Component';
import CTAButton from '@/payload/blocks/CTAButton/Component';
import FamilyYoga from '@/payload/blocks/FamilyYoga/Component';
import FeatureList from '@/payload/blocks/FeatureList/Component';
import Hero from '@/payload/blocks/Hero/Component';
import ImageComponent from '@/payload/blocks/Image/Component';
import RichText from '@/payload/blocks/RichText/Component';
import { TwoColumn } from '@/payload/blocks/TwoColumn/Component';
import type { JSX } from 'react';
import React from 'react';

export function BlockRenderer({ layout }: { layout: Page['layout'] }): JSX.Element | null {
	if (!layout || layout.length === 0) return null;
	return (
		<>
			{layout.map((block, i) => {
				const key = block.id ?? `${block.blockType}-${i}`;
				switch (block.blockType) {
					case 'hero':
						return <Hero key={key} {...block} />;
					case 'richText':
						return <RichText key={key} {...block} />;
					case 'image':
						return <ImageComponent key={key} {...block} />;
					case 'ctaButton':
						return <CTAButton key={key} {...block} />;
					case 'featureList':
						return <FeatureList key={key} {...block} />;
					case 'twoColumn':
						return <TwoColumn key={key} {...block} />;
					case 'contact':
						return <Contact key={key} {...block} />;
					case 'badge':
						return <Badge key={key} {...block} />;
					case 'familyYoga':
						return <FamilyYoga key={key} {...block} />;
					case 'content':
						return <ContentBlock key={key} {...block} />;
					default:
						return null;
				}
			})}
		</>
	);
}
