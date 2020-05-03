<template>
	<div>
		<header class="header">
			<nav
				:class="{ 'is-active': showMobileMenu }"
				class="navbar container"
				role="navigation"
				aria-label="main navigation"
			>
				<div class="navbar-brand">
					<strong>
						<g-link to="/">{{ $static.metadata.siteName }}</g-link>
					</strong>
					<button
						class="mobile-menu button--secondary"
						aria-label="menu"
						aria-expanded="false"
						@click="toggleMobileMenu"
					>
						<span>Menu</span>
					</button>
				</div>

				<div class="navbar-menu" @click="closeMobileMenu">
					<div class="navbar-end">
						<g-link class="nav__link" to="/">Home</g-link>
						<g-link class="nav__link" to="/about/">About</g-link>
						<g-link class="nav__link" to="/contact/">Contact</g-link>
						<g-link class="nav__link" to="/substitutions/">
							Substitutions
						</g-link>

						<g-link class="nav__link" to="/sign-up/">Sign Up</g-link>
						<div class="navbar-item has-dropdown is-hoverable">
							<a class="navbar-link">
								Delivery Areas
							</a>
							<div class="navbar-dropdown">
								<g-link class="nav__link" to="/coquitlam/">Coquitlam</g-link>
							</div>
						</div>

						<div class="navbar-item has-dropdown is-hoverable">
							<a class="navbar-link">
								Extras
							</a>
							<div class="navbar-dropdown">
								<g-link class="nav__link" to="/groceries/">Groceries</g-link>
								<g-link class="nav__link" to="/pet-food/">Pet Food</g-link
								><g-link class="nav__link" to="/faq/">FAQ</g-link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
		<main role="main">
			<div class="container">
				<g-image class="header-banner" src="~/assets/banner.jpg" />
				<slot />
			</div>
		</main>
		<footer>
			<div class="container">
				<ul>
					<li>Instagram</li>
				</ul>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	data() {
		return { showMobileMenu: false };
	},
	methods: {
		toggleMobileMenu() {
			this.showMobileMenu = !this.showMobileMenu;
		},
		closeMobileMenu() {
			this.showMobileMenu = false;
		}
	}
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
