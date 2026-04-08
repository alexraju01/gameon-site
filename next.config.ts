import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export", // enables static HTML export
	basePath: "/gameon-site", // only if deploying to github.io/your-repo-name
	assetPrefix: "/gameon-site/",

	images: {
		unoptimized: true,
	},

	/* config options here */
	reactStrictMode: true,
};

export default nextConfig;
