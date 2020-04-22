<template>
	<div>
		<h1>Substitutions</h1>
		<div v-if="success" class="panel--success">
			<p>Substitution submitted successfully.</p>
		</div>
		<div v-else-if="error" class="panel--error">
			<p>An error occurred: {{ errorMessage }}</p>
		</div>
		<form v-else>
			<label for="fullName">Full name*</label>
			<input
				placeholder="John Appleseed"
				v-model="fullName"
				type="text"
				name="fullName"
				required
			/>

			<label for="phone">Phone number*</label>
			<input
				placeholder="123-123-1234"
				v-model="phone"
				type="tel"
				name="phone"
				required
			/>

			<label for="address1">Address - line 1*</label>
			<input
				placeholder="502 Infinite Way"
				v-model="address1"
				type="text"
				name="address1"
				required
			/>

			<label for="address2">Address - line 2</label>
			<input
				placeholder="Unit 15"
				v-model="address2"
				type="text"
				name="address2"
			/>

			<label for="city">City*</label>
			<input
				placeholder="Coquitlam"
				v-model="city"
				type="text"
				name="city"
				required
			/>

			<label for="email">Email address*</label>
			<input
				placeholder="john@appleseed.com"
				v-model="email"
				type="email"
				name="email"
				required
			/>

			<label for="deliveryDay">Delivery day*</label>
			<input
				placeholder="Monday"
				v-model="deliveryDay"
				type="text"
				name="deliveryDay"
				required
			/>

			<label>Box type*</label>
			<input
				id="regularBox"
				type="radio"
				name="boxType"
				value="Regular box"
				required
				v-model="boxType"
			/>
			<label class="radio" for="regularBox">Regular box</label>

			<input
				id="fruitBox"
				type="radio"
				name="boxType"
				v-model="boxType"
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
				<input type="text" v-model="captcha" />
			</p>

			<button @click="submit" type="submit">Submit</button>
		</form>
	</div>
</template>
<script>
export default {
	methods: {
		submit() {
			event.preventDefault();
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
			fetch(".netlify/functions/sendEmail", {
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
							this.errorMessage =
								"Substitution was marked as spam. Please email info@bluemoonorganics.com directly.";
						}
					}
				})
				.catch(error => {
					console.error(error);
				});
		}
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
			error: false,
			errorMessage: ""
		};
	}
};
</script>
