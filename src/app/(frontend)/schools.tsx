'use client';

import { ContactDialog } from '@/app/_components/contact-dialog';
import { headerFont } from '@/styles/fonts';
import { useState } from 'react';

export function Schools() {
	const [contactDialogVisible, setContactDialogVisible] = useState(false);

	return (
		<section className="bg-opacity-70 flex flex-col gap-2 rounded-[32px] bg-[#FBF9F5] p-6 pb-8 text-[#1A1A1A] md:px-12">
			<a id="schools" />
			<h2 className={`${headerFont.className} text-center leading-tight md:text-left`}>Yoga and mindfulness at schools</h2>
			<div>
				<p>
					With <strong>anxiety increasingly affecting</strong> children and adolescents, yoga offers a powerful way to{' '}
					<strong>foster calmness and balance</strong>, helping to alleviate and prevent stress. Through mindfulness practices,
					yoga teaches self-awareness, empowering children to regulate their emotions. It enhances{' '}
					<strong>focus and concentration</strong>, providing a <strong>holistic approach to well-being</strong>.
				</p>
				<p>
					Yoga meets the physical, emotional, cognitive, social, and spiritual needs of today’s children. Studies show that{' '}
					<strong>regular yoga practice improves both mental and physical health</strong>, making it a valuable addition to the
					school environment.
				</p>
				<p>
					Mindfulness and movement-based learning encourage students to explore the{' '}
					<strong>connection between body and mind</strong>, improving self-awareness, emotional regulation, and overall
					well-being.
				</p>
				<p>
					Whether your school is looking to introduce regular yoga classes or occasional incursions, I can create a tailored
					program that meets the unique needs of your students - both in content and session length.{' '}
					<strong>Let’s bring the benefits of yoga into your school community!</strong>
				</p>
			</div>
			<div className="mt-2 flex justify-center sm:justify-start">
				<button
					onClick={() => setContactDialogVisible(true)}
					type="submit"
					className="self-start rounded-md bg-[#8C52FF] px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:ring-blue-300 focus:outline-none disabled:opacity-50 sm:w-auto"
				>
					Send a message
				</button>
			</div>

			<ContactDialog visible={contactDialogVisible} onClose={() => setContactDialogVisible(false)} />
		</section>
	);
}
