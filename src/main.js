// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/assets/styles.scss";
const config = require("../gridsome.config.js");

export default function(Vue, { router, head, isClient }) {
	head.meta.push({
		name: "charset",
		content: "utf-8"
	});

	head.meta.push({
		name: "viewport",
		content: "width=device-width, initial-scale=1.0"
	});

	head.meta.push({
		name: "description",
		content: config.siteDescription
	});

	head.meta.push({
		name: "keywords",
		content:
			"organic, fruit, vegetable, delivery, bc, british columbia, vancouver, coquitlam, langley, surrey"
	});
}
