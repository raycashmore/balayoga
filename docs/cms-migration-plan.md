# Migration Plan: Convert Static Frontend Components to CMS-Driven (Payload CMS)

This plan outlines how to migrate the static components under `src/app/(frontend)/` to CMS-driven components powered by Payload CMS while minimizing disruption and enabling a staged rollout.

Repository context (Aug 2025):
- Payload is already configured (`src/payload.config.ts`) with collections: `Users`, `Media`, `Pages` and a `Header` global.
- `Pages` is minimal (title + slug). No blocks yet.
- Static React components exist under `src/app/(frontend)/` (e.g., `family.tsx`).

Goals:
- Model page content in Payload using flexible Blocks.
- Introduce a rendering layer in Next.js that maps Payload blocks to React components.
- Preserve existing routes and styles, adding draft/preview and image/media support.
- Migrate incrementally page-by-page.

---

## Phase 1 — Data Modeling

1. Expand `Pages` collection to be block-driven
   - Add a `layout` field of type `blocks`.
   - Define an initial set of blocks to cover existing content patterns:
     - `HeroBlock` — heading, subheading, background image, CTA(s).
     - `RichTextBlock` — lexical-richtext content.
     - `ImageBlock` — single image with caption and alt.
     - `CTAButtonBlock` — label, URL, variant.
     - `FeatureListBlock` — title + array of items (icon/image, label, body).
     - `TwoColumnBlock` — left/right content (images, text, lists) with responsive options.
     - `FamilyYogaBlock` — tailored to existing `family.tsx` section (see Phase 2) to accelerate migration.
     - `ContactBlock`, `BadgeBlock` to match `contact.tsx`, `badge.tsx` if those are also static.
   - Keep `title` and `slug` (already present). Consider `meta` group for SEO (description, og image) later.

2. Media handling
   - Reuse existing `Media` collection for images and files.
   - Ensure upload constraints (image types, sizes) and automatic alt text fields.

3. Globals
   - Expand `Header` global to include navigation items and logo if needed.
   - Add a `Footer` global for site footer navigation/content - but it will be empty for now.

4. Access control & versions
   - Enable drafts on `Pages` via `versions: { drafts: true }`.
   - Define basic `read` access for public content; restrict `create/update/delete` to authenticated users.

---

## Phase 2 — Block Specifications (fields overview)

Below are suggested fields. Finalize after reviewing existing content.

- HeroBlock
  - heading (text)
  - subheading (text / richtext)
  - background (relation: Media)
  - ctas (array of { label, url, style })

- RichTextBlock
  - content (richText - lexical)

- ImageBlock
  - image (relation: Media)
  - alt (text)
  - caption (text)
  - width/height or aspect controls (select)

- CTAButtonBlock
  - label (text)
  - url (text)
  - variant (select: primary | secondary | link)

- FeatureListBlock
  - title (text)
  - items (array of { icon?: Media, title: text, body: richText | text })

- TwoColumnBlock
  - left (richText | image | list)
  - right (richText | image | list)
  - layout (select: imageLeft | imageRight | split)

- FamilyYogaBlock (maps to `family.tsx`)
  - title (text, default: "Family yoga")
  - image (Media)
  - upcomingDates (array of date or text for human-readable lists)
  - time (text)
  - locationLabel (text)
  - locationUrl (text)
  - suitability (text)
  - intro (richText)
  - bulletPoints (array of text)
  - description (richText)
  - bookingUrl (text)

- ContactBlock (optional)
  - heading (text)
  - body (richText)
  - formConfig (JSON or references, depending on chosen form strategy)

- BadgeBlock (optional)
  - text (text)
  - image (Media)
  - link (text)

---

## Phase 2 — Actionable Checklist (Next Steps)

Use this checklist to complete Phase 2 before any implementation work.

1. Confirm block list and naming ✓/✗
   - HeroBlock, RichTextBlock, ImageBlock, CTAButtonBlock, FeatureListBlock, TwoColumnBlock, FamilyYogaBlock, ContactBlock, BadgeBlock
   - Decide whether ContactBlock and BadgeBlock are in-scope for initial rollout.

2. Field definitions (finalize) ✓/✗
   - HeroBlock
     - heading: text (required?)
     - subheading: text or richText (pick one; recommend richText for formatting)
     - background: upload -> Media (required?)
     - ctas: array of { label: text, url: text, style: select[primary|secondary|link] }
   - RichTextBlock
     - content: richText (lexical)
   - ImageBlock
     - image: upload -> Media (required)
     - alt: text (required)
     - caption: text (optional)
     - aspect: select[auto|1:1|4:3|16:9] (optional)
   - CTAButtonBlock
     - label: text (required)
     - url: text (required)
     - variant: select[primary|secondary|link] (default: primary)
   - FeatureListBlock
     - title: text (required?)
     - items: array of { icon?: Media, title: text, body: richText or text (choose) }
   - TwoColumnBlock
     - left: richText (primary) — images can be embedded via ImageBlock or rich text uploads later
     - right: richText (primary)
     - layout: select[imageLeft|imageRight|split] (default: split)
   - FamilyYogaBlock (based on src/app/(frontend)/family.tsx)
     - title: text (default: "Family yoga")
     - image: Media (required)
     - upcomingDates: array of { label: text }
     - time: text
     - locationLabel: text
     - locationUrl: text
     - suitability: text
     - intro: richText
     - bulletPoints: array of { text: text }
     - description: richText
     - bookingUrl: text
   - ContactBlock (optional)
     - heading: text
     - body: richText
     - formConfig: json (placeholder until form strategy is decided)
   - BadgeBlock (optional)
     - text: text
     - image: Media
     - link: text

3. Validation and defaults ✓/✗
   - Mark required fields (e.g., image alt text, CTA label/url).
   - Choose reasonable defaults (e.g., CTA variant=primary; TwoColumnBlock layout=split).
   - Add admin descriptions where helpful (e.g., upcomingDates guidance).

4. Shared field fragments ✓/✗
   - Decide if you want shared field helpers for CTA and Media reference to avoid duplication later (Phase 3).
   - For now, only document the shapes; don’t implement code changes yet.

5. Accessibility and content guidelines ✓/✗
   - Ensure ImageBlock requires alt text unless explicitly decorative.
   - Encourage meaningful headings and ARIA-friendly links in CTAs.

6. i18n and future-proofing ✓/✗
   - Decide whether any fields need localization now (likely no for initial rollout).
   - Keep field names stable and kebab/camel case consistent.

7. Acceptance criteria for Phase 2 ✓/✗
   - All blocks above have finalized field sets with types, required/optional, select options, defaults.
   - Any optional blocks (Contact, Badge) are either included or explicitly deferred.
   - Notes on validation, accessibility, and defaults are captured here.
   - No code changes beyond documentation are required in this phase.

Notes:
- FamilyYogaBlock is already defined in code at src/blocks/FamilyYoga.ts and referenced by Pages.layout. You only need to confirm the spec matches your content needs.
- The rest of the blocks will be implemented in Phase 3/4, after this checklist is completed.

---

### Phase 2 status update (Aug 2025)
- Implemented baseline Payload blocks in code: HeroBlock, RichTextBlock, ImageBlock, CTAButtonBlock, FeatureListBlock, TwoColumnBlock.
- Registered these in Pages.layout alongside FamilyYogaBlock so editors can begin creating content.
- Optional blocks (ContactBlock, BadgeBlock) are deferred pending confirmation.

## Phase 3 — Next.js Rendering Layer

### Home page migration instructions
1. Start the dev server: npm run dev (ensure PAYLOAD_SECRET and DATABASE_URL are set).
2. Open the Admin: http://localhost:3000/admin and log in or create a user.
3. Go to Pages and click Create New.
4. Fill title: Home; slug: home.
5. In layout, add blocks such as:
   - Hero: heading="Welcome to Bala Yoga"; optional subheading; optional background; add one CTA with label "Learn more" and url="#about".
   - FeatureList: title="Why practice"; add 3 items with titles and short bodies.
   - TwoColumn: leave layout=split, add brief content to left/right.
   - Contact: heading="Get in touch"; optional body.
6. Save and publish (or keep as draft; the route will fetch latest). 
7. Visit http://localhost:3000/cms/home to see it render. The renderer is minimal and does not yet map Media to Next/Image or render Lexical content; that’s planned for the enhanced rendering step.

1. Data fetching helper
   - Create a server-side helper (e.g., `src/lib/payload/fetchPageBySlug.ts`) that uses the Payload Node client or REST to fetch `pages` by `slug` with `draft` support in Preview Mode.
   - Consider caching (Next.js `revalidate` or `cache: 'no-store'` for preview) and error handling.

2. Dynamic page route
   - Implement `[slug]/page.tsx` (or `app/[...slug]/page.tsx`) that:
     - Fetches `Page` by slug.
     - Renders `layout` blocks via a `BlockRenderer` that maps block slugs to React components.
     - Handles 404 when not found.
   - Keep current static routes running during migration; only route migrated pages via the dynamic page once their content exists in CMS.

3. Block components
   - Create React components under `src/components/blocks/` for each Payload block with props matching the block schema.
   - For `FamilyYogaBlock`, replicate the current design in `family.tsx` but drive content from props.
   - Add a `blocksMap` that maps `blockType` (or `blockType`/`blockName`) to component modules.

4. Media and images
   - Use Next.js `<Image>` with URLs composed from Payload uploads (consider a small helper to resolve absolute URLs and add `srcset` if needed).

5. SEO and metadata
   - Optionally fetch SEO fields from `Page` and set metadata in `generateMetadata` in the route component.

6. Draft/Preview
   - Implement Next.js preview mode API route that enables draft rendering by passing `draft: true` and `depth` to Payload queries.

---

## Phase 4 — Migration Strategy (Incremental)

1. Content authoring
   - In Payload Admin, create initial pages mirroring existing routes. Example: create a `family` page with a `layout` that includes a `FamilyYogaBlock` configured to match the current content.

2. Feature flag / toggling
   - Add a simple environment-based switch to choose CMS content over static for each route while migrating.

3. Route-by-route swap
   - Start with pages that are easiest to model:
     - Migrate `family.tsx` → `FamilyYogaBlock` inside a `Page` with slug `family`.
     - Next consider `contact.tsx` and `badge.tsx` (either as blocks or rich text + image blocks).

4. Validation and parity
   - Compare rendered CMS page vs current static page visually and by content parity.

5. Rollout
   - Once parity is confirmed, replace the static route with a dynamic page using CMS data (or redirect the static route to the dynamic slug-based page).

---

## Phase 5 — Access Control, Roles, and Editorial Workflow

- Configure `Users` roles (e.g., Admin, Editor) with appropriate permissions.
- Enable `versions: { drafts: true }` on `Pages` so editors can preview before publish.
- Add `updatedAt` and `publishedAt` fields for clarity, or rely on Payload defaults.

---

## Phase 6 — Performance & Caching

- Use ISR via `export const revalidate = X` in page route.
- For frequently updated pages, consider lower revalidate times.
- In preview mode, disable caching to reflect drafts immediately.

---

## Phase 7 — Developer Tasks Checklist (Proposed PR sequence)

1. Schema
   - [ ] Add Blocks to `Pages` and implement block definitions (including `FamilyYogaBlock`).
   - [ ] Add `versions: { drafts: true }` and basic access control.
2. Frontend
   - [ ] Add `src/components/blocks/*` and `blocksMap`.
   - [ ] Create `src/lib/payload/client.ts` and `fetchPageBySlug.ts`.
   - [ ] Add dynamic `app/[slug]/page.tsx` (or catch-all) with rendering.
   - [ ] Implement preview mode API route.
   - [ ] Add image URL helper for Payload `Media`.
3. Content
   - [ ] Seed or create initial CMS content for `family` page.
4. Swap
   - [ ] Toggle `family` route to CMS-driven page.
   - [ ] Migrate next pages (`contact`, `badge`, etc.).

---

## Phase 8 — Optional Enhancements

- Add `Footer` global and navigation collections.
- Add `Redirects` collection for route management.
- Add `SEO` group on `Pages` with meta description, Open Graph fields.
- Add `Sitemaps` generation based on Pages collection.

---

## Notes for This Repository

- `Pages` currently only includes `title` and `slug`; introducing `layout: blocks` will be the main step.
- The `family.tsx` static component is a good candidate for a dedicated `FamilyYogaBlock` due to its structured data (dates, time, location, bullet points, booking URL, image).
- `lexicalEditor` is already configured in `payload.config.ts`, making rich text straightforward.
- Database adapter is `@payloadcms/db-vercel-postgres`; keep migrations compatible and consider data backups before rollout.

---

## Example: FamilyYogaBlock (sketch)

Pseudo-code for Payload block (to be implemented in `src/blocks/FamilyYoga.ts`):

```ts
import type { Block } from 'payload';

export const FamilyYogaBlock: Block = {
  slug: 'familyYoga',
  fields: [
    { name: 'title', type: 'text', required: true, defaultValue: 'Family yoga' },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'upcomingDates', type: 'array', fields: [{ name: 'label', type: 'text' }] },
    { name: 'time', type: 'text' },
    { name: 'locationLabel', type: 'text' },
    { name: 'locationUrl', type: 'text' },
    { name: 'suitability', type: 'text' },
    { name: 'intro', type: 'richText' },
    { name: 'bulletPoints', type: 'array', fields: [{ name: 'text', type: 'text' }] },
    { name: 'description', type: 'richText' },
    { name: 'bookingUrl', type: 'text' },
  ],
};
```

Example React renderer (sketch) mapping to existing markup:

```tsx
export function FamilyYoga({ image, title, upcomingDates, time, locationLabel, locationUrl, suitability, intro, bulletPoints, description, bookingUrl }) {
  // Render similar to src/app/(frontend)/family.tsx but with props
}
```

---

## Rollback Plan

- Keep static pages until each corresponding CMS page is validated.
- Feature-flag per route to fall back to static render if CMS fetch fails or content is incomplete.
- Maintain backups and export of Payload data before schema changes.

---

## Timeline (suggested)

- Week 1: Schema blocks + Family page rendering + preview mode.
- Week 2: Migrate Contact/Badge + Header/Footer globals + SEO basics.
- Week 3: Navigation, redirects, sitemap; finalize editorial workflows.

---

This document provides a blueprint to proceed with low-risk, incremental migration from static components to Payload-powered content while preserving the existing UI/UX.
