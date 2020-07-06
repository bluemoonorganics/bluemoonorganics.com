<template>
	<div class="content">
		<h1>{{ $page.deliveryArea.title }}</h1>
		<p>(delivery day is {{ $page.deliveryArea.delivery_day }})</p>

		<p>
			A local family business since 1997, Blue Moon Organics delivers fresh 100%
			Certified Organic Fruits and Vegetables right to your door in
			{{ $page.deliveryArea.title }} every
			{{ $page.deliveryArea.delivery_day }}.
		</p>

		<p>
			The regular cost of a bin is $38.00, with a one-time refundable deposit of
			$20. Every week the content of your bin will be a little bit different,
			depending what is in season and what is available.
		</p>

		<p>
			We update our web-page every Friday, so you can see what is offered the
			following week, and you can make as many changes as you want. Just go on
			to our web-pages home page, check out what is offered and click on the
			“click here for substitutions” button. Fill out the form and submit it.
		</p>

		<p>
			We always try to make it $38.00, but if you order extras or go over the
			$38.00, we will e-mail you with your new total.
		</p>

		<p>
			We also offer <g-link to="/groceries">grocery items</g-link> and high
			quality <g-link to="/pet-food">Pet Food</g-link>. Call Blue Moon Organics
			today, or <g-link to="/sign-up">SIGN UP</g-link> right now!
		</p>
		<p>Antal, Jessy and Kelly Boros</p>
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
		delivery_day
	}
}
</page-query>
