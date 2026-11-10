import Image from 'next/image';
import React from 'react';

type AuthorsProps = {
	name?: string | null;
	thumbnail?: string | null;
};

export function Authors({ name, thumbnail }: AuthorsProps) {
	return (
		<div className="flex items-center gap-3 pt-1 lg:pt-2">
			{thumbnail && <Image src={thumbnail} alt="" width={40} height={40} className="h-9 w-9 rounded-full object-cover lg:h-10 lg:w-10" />}
			<span className="text-ink text-sm font-semibold">{name}</span>
		</div>
	);
}
