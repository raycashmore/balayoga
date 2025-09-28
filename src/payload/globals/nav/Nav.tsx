import { DesktopNav } from '@/app/_components/desktop-nav';
import { MobileNav } from '@/app/_components/mobile-nav';
import configPromise from '@payload-config';
import { getPayload } from 'payload';

export async function Nav() {
	const payload = await getPayload({ config: configPromise });

	const posts = await payload.find({
		collection: 'posts',
		depth: 1,
		limit: 100, // TODO: implement pagination
		sort: '-publishedAt',
		select: {
			title: true,
			slug: true
		}
	});

	return (
		<>
			<div className="hidden lg:block">
				<DesktopNav />
			</div>
			<div className="lg:hidden">
				<MobileNav posts={posts.docs} />
			</div>
		</>
	);
}