export default function Glow() {
	return (
		<div className="absolute inset-0 -z-10">
			<div
				className="absolute inset-0 -z-10 min-h-screen"
				style={{
					background: "radial-gradient(circle at 30% 30%, rgba(116, 196, 246, 0.7), rgba(116, 196, 246, 0) 50%)",
				}}
			/>
			<div
				className="absolute inset-0 -z-10 min-h-screen"
				style={{
					background: "radial-gradient(circle at 100% 25%, rgba(236, 194, 126, 0.4), rgba(236, 194, 126, 0) 60%)",
				}}
			/>
		</div>
	);
}
