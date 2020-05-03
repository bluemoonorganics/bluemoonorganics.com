// Changes here require a server restart.

module.exports = {
	siteName: "Blue Moon Organics",
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
	]
};
