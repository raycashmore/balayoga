'use client';

import { useFormspark } from '@formspark/use-formspark';
import { type FormEvent, useState } from 'react';

const FORMSPARK_FORM_ID = 'G9aAoos7Y';

const labelClassName = 'text-ink mb-2 block text-sm font-semibold';
const fieldClassName =
	'border-rule text-ink focus:border-bala-purple focus:ring-bala-purple/20 block w-full rounded-xl border bg-white px-4 py-3 text-base transition-colors focus:ring-4 focus:outline-none';

export default function ContactForm() {
	const [submit, submitting] = useFormspark({
		formId: FORMSPARK_FORM_ID
	});

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [sent, setSent] = useState(false);

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		await submit({ name: name.trim(), email: email.trim(), message: message.trim() });
		setSent(true);
	};

	return sent ? (
		<p role="status" className="text-ink m-0 text-lg">
			Message sent, thank you.
		</p>
	) : (
		<form onSubmit={onSubmit} className="flex flex-col gap-5">
			<div>
				<label htmlFor="name" className={labelClassName}>
					Your name
				</label>
				<input
					type="text"
					id="name"
					autoComplete="name"
					className={fieldClassName}
					required
					maxLength={100}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="email" className={labelClassName}>
					Your email
				</label>
				<input
					type="email"
					id="email"
					autoComplete="email"
					className={fieldClassName}
					required
					maxLength={100}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="message" className={labelClassName}>
					Message
				</label>
				<textarea
					id="message"
					rows={5}
					maxLength={500}
					className={`${fieldClassName} resize-y`}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</div>

			<button
				type="submit"
				disabled={submitting}
				className="hover:bg-bala-purple-dark mt-1 inline-flex h-12 items-center justify-center rounded-full bg-[#6b4ec1] px-6 text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6b4ec1] disabled:opacity-60"
			>
				{submitting ? 'Sending…' : 'Send message'}
			</button>
		</form>
	);
}
