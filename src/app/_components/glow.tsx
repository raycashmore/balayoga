export default function Glow() {
	return (
		<div className="absolute left-0 top-0 -z-10 block h-[100dvh] w-[100dvw] overflow-visible rounded-full">
			<div
				className="absolute left-[-100%] top-[-80%] -z-10 block h-[200dvh] w-[200dvw] overflow-visible rounded-full lg:top-[-100%]"
				style={{
					background: "radial-gradient(circle at 50% 50%, rgba(116, 196, 246, 0.7), rgba(116, 196, 246, 0) 60%)",
				}}
			/>
		</div>
	);
}
