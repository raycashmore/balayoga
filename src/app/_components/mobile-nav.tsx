'use client';

import { HamburgerIcon } from '@/app/_components/hamburger-icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export type MobileNavPost = {
	title: string;
	slug?: string | null;
};

type AnimationState = 'idle' | 'expanding' | 'opening' | 'open' | 'closing' | 'shrinking';

export function MobileNav({ posts }: { posts: MobileNavPost[] }) {
	const [animationState, setAnimationState] = useState<AnimationState>('idle');
	const [isBlogOpen, setIsBlogOpen] = useState(true);
	const pathname = usePathname();

	useEffect(() => {
		setAnimationState('idle');
	}, [pathname]);

	const getLinkClassName = (path: string) => {
		const isActive = path === '/' ? pathname === path : pathname.startsWith(path);
		return `text-white ${isActive ? 'font-bold' : 'font-normal'}`;
	};

	const toggleMenu = () => {
		if (animationState === 'idle') {
			setAnimationState('expanding');
		} else if (animationState === 'open') {
			setAnimationState('closing');
		}
	};

	// Handle animation state transitions
	useEffect(() => {
		if (animationState === 'expanding') {
			// Immediately trigger the opening animation
			const timer = setTimeout(() => {
				setAnimationState('opening');
			}, 10); // Small delay to ensure initial render
			return () => clearTimeout(timer);
		} else if (animationState === 'opening') {
			// Wait for size animation to complete, then show content
			const timer = setTimeout(() => {
				setAnimationState('open');
			}, 500);
			return () => clearTimeout(timer);
		} else if (animationState === 'closing') {
			// Wait for content fade out first, then shrink will happen automatically
			// No timer needed - we'll use a new state
		}
	}, [animationState]);

	const isVisible = animationState !== 'idle';
	const showContent = animationState === 'open';

	// Handle content fade-out completion, then trigger shrink
	useEffect(() => {
		if (animationState === 'closing') {
			// Wait for content to fade out (250ms)
			const timer = setTimeout(() => {
				setAnimationState('shrinking');
			}, 250);
			return () => clearTimeout(timer);
		} else if (animationState === 'shrinking') {
			// Wait for shrink animation to complete (500ms)
			const timer = setTimeout(() => {
				setAnimationState('idle');
			}, 500);
			return () => clearTimeout(timer);
		}
	}, [animationState]);

	// Calculate panel dimensions based on animation state
	const getPanelStyle = () => {
		const baseStyle = {
			viewTransitionName: 'mobile-nav-panel'
		};

		if (animationState === 'idle' || animationState === 'closing') {
			return baseStyle;
		}

		return baseStyle;
	};

	const closeMenu = () => {
		if (animationState === 'open') {
			setAnimationState('closing');
		}
	};

	return (
		<div className="lg:hidden">
			<button
				onClick={toggleMenu}
				className="border-bala-purple-dark fixed top-3 left-8 z-50 cursor-pointer rounded-full border-1 bg-black p-3 text-white"
				aria-label={animationState === 'idle' ? 'Open menu' : 'Close menu'}
			>
				<HamburgerIcon />
			</button>

			{isVisible && (
				<div
					className={`fixed top-0 left-0 z-30 h-full w-full bg-black/10 transition-opacity duration-1000 ${
						animationState === 'open' ? 'opacity-100' : 'pointer-events-none opacity-0'
					}`}
					onClick={closeMenu}
				></div>
			)}

			{isVisible && (
				<div
					className={`bg-bala-purple-dark fixed z-40 overflow-hidden rounded-[32px] text-white shadow-2xl transition-all duration-500 ${
						animationState === 'expanding' || animationState === 'shrinking'
							? 'top-1 left-6 h-12 w-12 opacity-0'
							: 'top-1 left-6 h-[90vh] w-[min(400px,calc(100vw-48px))] opacity-100'
					}`}
					style={{
						...getPanelStyle(),
						transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
					}}
				>
					<div
						className={`flex h-full flex-col p-6 transition-opacity duration-[250ms] ${showContent ? 'opacity-100' : 'opacity-0'}`}
					>
						<nav className="h-full overflow-y-auto pt-16">
							<ul className="flex flex-col gap-4 text-xl">
								<li>
									<Link href="/" className={getLinkClassName('/')}>
										Home
									</Link>
								</li>
								<li>
									<Link href="/yoga" className={getLinkClassName('/yoga')}>
										Yoga
									</Link>
								</li>
								<li>
									<div className="flex items-center justify-between">
										<Link href="/blog" className={getLinkClassName('/blog')}>
											Blog
										</Link>
										<button onClick={() => setIsBlogOpen(!isBlogOpen)} className="text-white">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className={`transition-transform ${isBlogOpen ? 'rotate-180' : ''}`}
											>
												<polyline points="6 9 12 15 18 9" />
											</svg>
										</button>
									</div>
									{isBlogOpen && (
										<ul className="mt-2 flex flex-col gap-2 pl-4 text-sm">
											{posts.map((post) => (
												<li key={post.slug}>
													<Link href={`/blog/${post.slug}`} className={getLinkClassName(`/blog/${post.slug}`)}>
														{post.title}
													</Link>
												</li>
											))}
										</ul>
									)}
								</li>
								<li>
									<Link href="/contact" className={getLinkClassName('/contact')}>
										Contact
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			)}

			<style jsx global>{`
				@supports (view-transition-name: none) {
					::view-transition-group(mobile-nav-panel) {
						animation-duration: 0.5s;
						animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
					}

					::view-transition-old(mobile-nav-panel),
					::view-transition-new(mobile-nav-panel) {
						animation-duration: 0.5s;
						animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
					}
				}
			`}</style>
		</div>
	);
}
