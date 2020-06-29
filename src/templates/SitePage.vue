<template>
	<div class="content">
		<h1>{{ $page.sitePage.title }}</h1>
		<div v-html="$page.sitePage.content" />
	</div>
</template>

<script>
export default {
	metaInfo() {
		return {
			title: this.$page.sitePage.title
		};
	}
};
</script>

<page-query>
	query SitePage($id: ID!) {
		sitePage: sitePage(id: $id) {
			title
			content
		}
	}
</page-query>
