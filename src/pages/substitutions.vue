<template>
	<div>
		<h1>Substitutions</h1>
		<div v-if="extras && specials">
			<h3>Extras</h3>
			<div v-html="extras"></div>
			<h3>Weekly specials</h3>
			<div v-html="specials"></div>
		</div>
		<div v-if="success" class="panel--success">
			<p>
				Substitution submitted successfully. 
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

			<label for="deliveryDay">Delivery day*</label>
			<input
				v-model="formData.deliveryDay"
				placeholder="Monday"
				type="text"
				name="deliveryDay"
				required
			/>

			<label>Box type*</label>
			<input
				id="regularBox"
				v-model="formData.boxType"
				type="radio"
				name="boxType"
				value="Regular box"
				required
			/>
			<label class="radio" for="regularBox">Regular box</label>

			<input
				id="fruitBox"
				v-model="formData.boxType"
				type="radio"
				name="boxType"
				value="Fruit box"
			/>
			<label class="radio" for="fruitBox">Fruit box</label>

			<label for="itemsToRemove">Items to remove</label>
			<textarea v-model="formData.itemsToRemove" name="itemsToRemove" />

			<label for="itemsToAdd">Items to add</label>
			<textarea v-model="formData.itemsToAdd" name="itemsToAdd" />

			<label for="comments">Comments</label>
			<textarea v-model="formData.comments" name="comments" />

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
		title: "Substitutions"
	},
	mounted: function() {
		if (sessionStorage.getItem("substitutionData")) this.formData = JSON.parse(sessionStorage.getItem("substitutionData"));
	},
	computed: {
		extras: function() {
			if (process.isClient) {
				try {
					var parser = new DOMParser();
					var htmlDoc = parser.parseFromString(this.$page.homePage.content, 'text/html');
					let extrasList = htmlDoc.getElementById("extras").nextElementSibling
					//TODO check if its a list
					return extrasList.outerHTML
				} catch (error) {
					console.error(error)
				}
			}
		},
		specials: function() {
			if (process.isClient) {
				try {
					var parser = new DOMParser();
					var htmlDoc = parser.parseFromString(this.$page.homePage.content, 'text/html');
					let specialsList = htmlDoc.getElementById("weekly-specials").nextElementSibling
					//TODO check if its a list
					return specialsList.outerHTML
				} catch (error) {
					console.error(error) 
				}
			}
		}
	},
	data() {
		return {
			success: false,
			error: false,
			formData: {
				type: "Substitution",
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
			}
		};
	},
	watch: {
		formData: {
			deep: true,
			handler() {
				sessionStorage.setItem("substitutionData", JSON.stringify(this.formData));
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
						console.log("Submission successful");
						sessionStorage.removeItem("substitutionData");
					} else {
						console.error("Submission error");
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

<page-query>
query {
  homePage: sitePage (path: "/") {
    title
    content
  }
}
</page-query>
