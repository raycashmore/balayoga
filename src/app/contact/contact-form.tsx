"use client";

import { useFormspark } from "@formspark/use-formspark";
import { type FormEvent, useState } from "react";

const FORMSPARK_FORM_ID = "G9aAoos7Y";

export default function ContactForm() {
	const [submit, submitting] = useFormspark({
		formId: FORMSPARK_FORM_ID,
	});

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [sent, setSent] = useState(false);

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		await submit({ name: name.trim(), email: email.trim(), message: message.trim() });
		setSent(true);
	};

	return sent ? (
		<div className="text-xl font-extralight text-white">Message sent, thank you.</div>
	) : (
		<form onSubmit={onSubmit} className="flex min-w-[200px] max-w-[400px] flex-col gap-4">
			<div>
				<label htmlFor="name" className="text-md mb-2 text-sm leading-8 text-white">
					Your name
				</label>
				<input
					type="text"
					id="name"
					className="focus:text-red-60 text-md block w-full rounded-md border p-2.5 text-black opacity-80 focus:border-blue-500 focus:ring-blue-500"
					required
					maxLength={100}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="email" className="text-md mb-2 text-sm leading-8 text-white">
					Your email
				</label>
				<input
					type="email"
					id="email"
					className="focus:text-red-60 text-md block w-full rounded-md border p-2.5 text-black opacity-80 focus:border-blue-500 focus:ring-blue-500"
					required
					maxLength={100}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="message" className="text-md mb-2 text-sm leading-8 text-white">
					Message
				</label>
				<textarea
					id="message"
					rows={5}
					maxLength={500}
					className="focus:text-red-60 text-md block w-full rounded-md border p-2.5 text-black opacity-80 focus:border-blue-500 focus:ring-blue-500"
					onChange={(e) => setMessage(e.target.value)}
				/>
			</div>

			<button
				type="submit"
				disabled={submitting}
				className="rounded-md bg-[#ACA1DE] px-5 py-2.5 text-center text-sm font-medium opacity-80 hover:opacity-100 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 sm:w-auto"
			>
				SEND
			</button>
		</form>
	);
}
