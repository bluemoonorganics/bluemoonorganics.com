<template>
	<div>
		<h1>Substitutions</h1>
		<div v-if="success" class="panel--success">
			<p>Substitution submitted successfully. You should receive an email with the information you provided.</p>
		</div>
		<div v-else-if="error" class="panel--error">
			<p>
				An error occurred: Submission was marked as spam. Please email
				<a href="mailto:info@bluemoonorganics.com">info@bluemoonorganics.com</a>
				directly.
			</p>
		</div>
		<form v-else @submit.prevent="submit">
			<label for="fullName">Full name*</label>
			<input
				v-model="fullName"
				placeholder="John Appleseed"
				type="text"
				name="fullName"
				required
			/>

			<label for="phone">Phone number*</label>
			<input
				v-model="phone"
				placeholder="123-123-1234"
				type="tel"
				name="phone"
				required
			/>

			<label for="address1">Address - line 1*</label>
			<input
				v-model="address1"
				placeholder="502 Infinite Way"
				type="text"
				name="address1"
				required
			/>

			<label for="address2">Address - line 2</label>
			<input
				v-model="address2"
				placeholder="Unit 15"
				type="text"
				name="address2"
			/>

			<label for="city">City*</label>
			<input
				v-model="city"
				placeholder="Coquitlam"
				type="text"
				name="city"
				required
			/>

			<label for="email">Email address*</label>
			<input
				v-model="email"
				placeholder="john@appleseed.com"
				type="email"
				name="email"
				required
			/>

			<label for="deliveryDay">Delivery day*</label>
			<input
				v-model="deliveryDay"
				placeholder="Monday"
				type="text"
				name="deliveryDay"
				required
			/>

			<label>Box type*</label>
			<input
				id="regularBox"
				v-model="boxType"
				type="radio"
				name="boxType"
				value="Regular box"
				required
			/>
			<label class="radio" for="regularBox">Regular box</label>

			<input
				id="fruitBox"
				v-model="boxType"
				type="radio"
				name="boxType"
				value="Fruit box"
			/>
			<label class="radio" for="fruitBox">Fruit box</label>

			<label for="itemsToRemove">Items to remove</label>
			<textarea v-model="itemsToRemove" name="itemsToRemove" />

			<label for="itemsToAdd">Items to add</label>
			<textarea v-model="itemsToAdd" name="itemsToAdd" />

			<label for="comments">Comments</label>
			<textarea v-model="comments" name="comments" />

			<!-- the following input is a honeypot -->
			<p id="captcha">
				If you're human, don't fill this out:
				<input v-model="captcha" type="text" />
			</p>

			<button>Submit</button>
		</form>
	</div>
</template>
<script>
export default {
	metaInfo: {
		title: "Substitutions"
	},
	data() {
		return {
			fullName: "",
			phone: "",
			email: "",
			address1: "",
			address2: "",
			city: "",
			deliveryDay: "",
			boxType: "",
			itemsToRemove: "",
			itemsToAdd: "",
			comments: "",
			captcha: "",
			success: false,
			error: false
		};
	},
	methods: {
		submit() {
			console.log("Submitting...");
			let data = {
				type: "Substitution",
				fullName: this.fullName,
				phone: this.phone,
				email: this.email,
				address1: this.address1,
				address2: this.address2,
				city: this.city,
				deliveryDay: this.deliveryDay,
				boxType: this.boxType,
				itemsToRemove: this.itemsToRemove,
				itemsToAdd: this.itemsToAdd,
				comments: this.comments,
				captcha: this.captcha
			};
			fetch("/.netlify/functions/nodeMailer", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})
				.then(response => {
					if (response.status == 200) {
						this.success = true;
					} else {
						if (response.status == 400) {
							this.error = true;
						}
					}
				})
				.catch(error => {
					console.error(error);
				});
		}
	}
};
</script>
