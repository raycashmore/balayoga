export default function Glow() {
	return (
		<div className="absolute bottom-0 left-0 right-0 top-0 -z-10 block overflow-hidden">
			<div
				className="absolute left-1/2 top-1/2 -z-10 h-[200dvh] w-[200dvw] -translate-x-3/4 -translate-y-2/3 lg:-translate-y-3/4 lg:translate-x-[-80%]"
				style={{
					background: "radial-gradient(circle at 50% 50%, rgba(116, 196, 246, 0.7), rgba(116, 196, 246, 0) 60%)",
				}}
			/>
		</div>
	);
}
