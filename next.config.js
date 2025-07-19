import { withPayload } from "@payloadcms/next/withPayload";
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
	async redirects() {
		return [
			{
				source: "/register-interest",
				destination: "/#kids-yoga",
				permanent: true,
			},
			{
				source: "/about",
				destination: "/#about",
				permanent: true,
			},
			{
				source: "/adults-yoga",
				destination: "/#adults-yoga",
				permanent: true,
			},
			{
				source: "/contact",
				destination: "/#contact",
				permanent: true,
			},
			{
				source: "/kids-yoga",
				destination: "/#kids-yoga",
				permanent: true,
			},
		];
	},
};

export default withPayload(config);
