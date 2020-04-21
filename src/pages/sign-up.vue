<template>
	<Layout>
		<h1>Sign up</h1>
		<p>
			Thank you for your interest in Blue Moon Organics. Please complete the
			Sign-up form and we will contact you to confirm your first delivery date.
		</p>
		<form>
			<label for="fullName">Full name*</label>
			<input
				placeholder="John Appleseed"
				v-model="fullName"
				type="text"
				name="fullName"
			/>

			<label for="phone">Phone number*</label>
			<input
				placeholder="123-123-1234"
				v-model="phone"
				type="tel"
				name="phone"
			/>

			<label for="address1">Address - line 1*</label>
			<input
				placeholder="502 Infinite Way"
				v-model="address1"
				type="text"
				name="address1"
			/>

			<label for="address2">Address - line 2</label>
			<input
				placeholder="Unit 15"
				v-model="address2"
				type="text"
				name="address2"
			/>

			<label for="city">City*</label>
			<input placeholder="Coquitlam" v-model="city" type="text" name="city" />

			<label for="email">Email address*</label>
			<input
				placeholder="john@appleseed.com"
				v-model="email"
				type="email"
				name="email"
			/>

			<label>How often would you like delivery?*</label>
			<input
				id="everyweek"
				type="radio"
				name="frequency"
				value="Every week"
				v-model="frequency"
			/>
			<label class="radio" for="everyweek">Every week</label>

			<input
				id="everyotherweek"
				type="radio"
				name="frequency"
				v-model="frequency"
				value="Every other week"
			/>
			<label class="radio" for="everyotherweek">Every other week</label>

			<label for="startDate">Start date*</label>
			<input v-model="startDate" type="date" name="startDate" />

			<label for="promocode">Promo code</label>
			<input v-model="promoCode" type="text" name="promoCode" />

			<!-- the following input is a honeypot -->
			<label for="captcha"></label>
			<input v-model="captcha" type="text" name="captcha" id="captcha" />

			<button @click="submit" type="submit">Submit</button>
		</form>
	</Layout>
</template>

<script>
export default {
	methods: {
		submit(event) {
			event.preventDefault();
			console.log("Submitting...");
			let data = {
				fullName: this.fullName
			};
			fetch(".netlify/functions/sendEmail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})
				.then(response => console.log(response.data))
				.catch(error => console.error(error));
		}
	},
	data() {
		return {
			fullName: "",
			phone: "",
			address1: "",
			address2: "",
			city: "",
			frequency: "",
			email: "",
			startDate: "",
			promoCode: "",
			captcha: ""
		};
	}
};
</script>
