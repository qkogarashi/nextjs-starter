/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		dirs: ["src"],
	},

	reactStrictMode: true,

	// domain whitelist

	// images: {
	//   remotePatterns: [
	//     {
	//       protocol: 'https',
	//       hostname: 'res.cloudinary.com',
	//     },
	//   ]
	// },

	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.(".svg")
		)
		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			{
				test: /\.svg$/i,
				issuer: { not: /\.(css|scss|sass)$/ },
				resourceQuery: { not: /url/ },
				loader: "@svgr/webpack",
				options: {
					dimensions: false,
					titleProp: true,
				},
			}
		)
		fileLoaderRule.exclude = /\.svg$/i

		return config
	},
}

module.exports = nextConfig
