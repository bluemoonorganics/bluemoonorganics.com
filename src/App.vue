<template>
	<div id="app">
		<Layout>
			<router-view />
		</Layout>
	</div>
</template>
<script>
import Layout from "~/layouts/Default.vue";

export default {
	components: {
		Layout
	},
	metaInfo: {
		// This is where the template for page titles is defined.
		titleTemplate: "%s | Blue Moon Organics"
	}
};
</script>
