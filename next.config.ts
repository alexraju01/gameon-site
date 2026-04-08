import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	output: "export", // enables static HTML export
	basePath: isProd ? "/gameon-site" : "", // only if deploying to github.io/your-repo-name
	assetPrefix: isProd ? "/gameon-site" : "",

	images: {
		unoptimized: true,
	},

	/* config options here */
	reactStrictMode: true,
};

export default nextConfig;
