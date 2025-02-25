"use client";

import { ContactDialog } from "@/app/_components/contact-dialog";
import Socials from "@/app/_components/socials";
import { headerFont } from "@/styles/fonts";
import { useState } from "react";

export function Contact() {
	const [contactDialogVisible, setContactDialogVisible] = useState(false);

	return (
		<>
			<div className="flex flex-col justify-center gap-8 p-8 pt-4 text-[#fff] opacity-80">
				<a id="contact" />
				<h2 className={`${headerFont.className} text-center text-[32px]`}>Get in touch</h2>

				<div className="flex max-w-[600px] flex-col gap-2 text-center">
					<p>If you would like to find out more about what I offer, please send me a message.</p>
					<p>I would love to be part of your yoga journey!</p>
				</div>

				<button
					onClick={() => setContactDialogVisible(true)}
					type="submit"
					className="self-center rounded-md bg-[#2B80E9] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 sm:w-auto"
				>
					Send a message
				</button>
			</div>

			<ContactDialog visible={contactDialogVisible} onClose={() => setContactDialogVisible(false)} />

			<Socials />
		</>
	);
}
