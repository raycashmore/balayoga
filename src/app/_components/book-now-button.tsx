export function BookNowButton() {
	return (
		<form
			action="https://app.squareup.com/appointments/book/classes/bro8gvstcef3zz/L2Y5ECFR9ASJT/classes"
			className="mt-4 flex justify-center sm:justify-start"
		>
			<button
				type="submit"
				className="rounded-md bg-[#8C52FF] px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:ring-blue-300 focus:outline-none disabled:opacity-50 sm:w-auto"
			>
				Book now
			</button>
		</form>
	);
}
