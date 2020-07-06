<template>
	<div>
		<h1>Sign up</h1>
		<p>
			Thank you for your interest in Blue Moon Organics. Please complete the
			Sign-up form and we will contact you to confirm your first delivery date.
		</p>
		<div v-if="success" class="panel--success">
			<p>
				Thank you for signing up! We will be in touch with you shortly. 
			</p>
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
				v-model="formData.fullName"
				placeholder="John Appleseed"
				type="text"
				name="fullName"
				required
			/>

			<label for="phone">Phone number*</label>
			<input
				v-model="formData.phone"
				placeholder="123-123-1234"
				type="tel"
				name="phone"
				required
			/>

			<label for="address1">Address - line 1*</label>
			<input
				v-model="formData.address1"
				placeholder="502 Infinite Way"
				type="text"
				name="address1"
				required
			/>

			<label for="address2">Address - line 2</label>
			<input
				v-model="formData.address2"
				placeholder="Unit 15"
				type="text"
				name="address2"
			/>

			<label for="city">City*</label>
			<input
				v-model="formData.city"
				placeholder="Coquitlam"
				type="text"
				name="city"
				required
			/>

			<label for="email">Email address*</label>
			<input
				v-model="formData.email"
				placeholder="john@appleseed.com"
				type="email"
				name="email"
				required
			/>

			<label>How often would you like delivery?*</label>
			<input
				id="everyweek"
				v-model="formData.frequency"
				type="radio"
				name="frequency"
				value="Every week"
				required
			/>
			<label class="radio" for="everyweek">Every week</label>

			<input
				id="everyotherweek"
				v-model="formData.frequency"
				type="radio"
				name="frequency"
				value="Every other week"
			/>
			<label class="radio" for="everyotherweek">Every other week</label>

			<label for="startDate">Start date*</label>
			<input v-model="formData.startDate" type="date" name="startDate" required />

			<label for="promocode">Promo code</label>
			<input v-model="formData.promoCode" type="text" name="promoCode" />

			<!-- the following input is a honeypot -->
			<p id="captcha">
				If you're human, don't fill this out:
				<input v-model="formData.captcha" type="text" />
			</p>

			<button>Submit</button>
		</form>
	</div>
</template>

<script>
export default {
	metaInfo: {
		title: "Sign up"
	},
	mounted: function() {
		if (sessionStorage.getItem("signupData")) this.formData = JSON.parse(sessionStorage.getItem("signupData"));
	},
	data() {
		return {
			success: false,
			error: false,
			formData: {
				type: "Signup",
				fullName: "",
				phone: "",
				address1: "",
				address2: "",
				city: "",
				frequency: "",
				email: "",
				startDate: "",
				promoCode: "",
				captcha: "",
			}
		};
	},
	watch: {
		formData: {
			deep: true,
			handler() {
				sessionStorage.setItem("signupData", JSON.stringify(this.formData));
			}
		}
	},
	methods: {
		submit() {
			console.log("Submitting...");
			fetch("/.netlify/functions/nodeMailer", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(this.formData)
			})
				.then(response => {
					if (response.status == 200) {
						this.success = true;
						sessionStorage.removeItem("signupData");
					} else if (response.status == 400) {
						this.error = true;
					}
				})
				.catch(error => console.error(error));
		}
	}
};
</script>
