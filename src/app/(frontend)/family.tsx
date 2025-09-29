import { headerFont } from '@/styles/fonts';
import Image from 'next/image';

export function Family() {
	return (
		<section className="bg-opacity-80 flex flex-col gap-4 rounded-[32px] bg-[#F0F9F7] p-6 pb-8 text-[#1A1A1A] md:px-12">
			<a id="adults-yoga" />
			<h2 className={`${headerFont.className} pb-4 text-center leading-none md:text-left`}>Family yoga</h2>

			<div className="flex flex-col lg:flex-row lg:gap-8">
				<div>
					<div className="flex justify-center sm:justify-start">
						<Image
							src="/IMG_3554.webp"
							alt=""
							width={800}
							height={402}
							className="h-auto w-auto rounded-xl object-cover md:w-[420px]"
						/>
					</div>
					<div>
						<p>
							2025 upcoming dates:
							<br />
							17 August, 28 September, 2 November, 30 November
						</p>
						<p>
							Time: Sunday once a month 3 - 4 pm
							<br />
							Location: Hills Yoga,{' '}
							<a href="https://maps.app.goo.gl/KPU2hASqv25omecUA" target="_blank" className="underline">
								261 Old Northern Road, Castle Hill
							</a>
						</p>
						<p>Suitable for children aged 5 to 10 and their parents/carers.</p>
					</div>
				</div>
				<div className="flex-[1]">
					<p>
						Family yoga is a wonderful way to bond with your child through movement, mindfulness, and play. These sessions
						create a nurturing space where both kids and parents can explore:
					</p>
					<ul className="ml-6 list-outside list-disc space-y-1">
						<li>Fun yoga poses that build strength, flexibility, and balance</li>
						<li>Mindfulness tools to support focus and emotional awareness</li>
						<li>Playful breathing techniques to ease stress and boost calm</li>
						<li>Guided relaxation and visualisation to wind down together</li>
					</ul>
					<p>
						Spend an hour of meaningful connection while learning simple techniques you can use at home to help your child feel
						centred, calm, and confident - and enjoy the benefits yourself, too!
					</p>
					<form
						action="https://app.squareup.com/appointments/book/classes/bro8gvstcef3zz/L2Y5ECFR9ASJT/classes"
						className="flex justify-center pt-4"
					>
						<button
							type="submit"
							className="rounded-md bg-[#8C52FF] px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:ring-blue-300 focus:outline-none disabled:opacity-50 sm:w-auto"
						>
							Book now
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
