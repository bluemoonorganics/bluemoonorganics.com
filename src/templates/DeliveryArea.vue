<template>
	<div class="content">
		<h1>{{ $page.deliveryArea.title }}</h1>
		<p>We deliver to {{ $page.deliveryArea.title }}</p>
	</div>
</template>

<script>
export default {
	metaInfo() {
		return {
			title: this.$page.deliveryArea.title
		};
	}
};
</script>

<page-query>
query DeliveryArea($id: ID!) {
  deliveryArea: deliveryArea(id: $id) {
    title
  }
}
</page-query>
