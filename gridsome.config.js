// Changes here require a server restart.

module.exports = {
	siteName: "Blue Moon Organics",
	siteDescription:
		"Discover the convenience of having fresh Certified Organic Fruits and Vegetables delivered right to your home. A local family business since 1997, Blue Moon Organics delivers fresh 100% Certified Organic Fruits and Vegetables right to your home. We delivery to Anmore, Burnaby, Belcarra, Coquitlam, Langley, Port Coquitlam, Port Moody, Pitt Meadows, New Westminster, Maple Ridge and Mission and East Surrey.",
	plugins: [
		{
			use: "@gridsome/source-filesystem",
			options: {
				baseDir: "./content/pages",
				typeName: "SitePage",
				path: "*.md"
			}
		},
		{
			use: "@gridsome/source-filesystem",
			options: {
				baseDir: "./content/delivery-areas",
				typeName: "DeliveryArea",
				path: "*.md"
			}
		}
	],
	transformers: {
		remark: {
			externalLinksRel: ["noopener"],
			autolinkHeadings: false
		}
	}
};
