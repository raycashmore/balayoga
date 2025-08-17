import React from 'react';

export function TwoColumn() {
	return (
		<section className="grid gap-6 py-6 md:grid-cols-2">
			<div className="prose max-w-none">123</div>
			<div className="prose max-w-none">456</div>
		</section>
	);
}
