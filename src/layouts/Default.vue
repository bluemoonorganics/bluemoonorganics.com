<template>
	<div>
		<header class="header">
			<div class="container">
				<strong>
					<g-link to="/">{{ $static.metadata.siteName }}</g-link>
				</strong>
				<nav class="nav">
					<g-link class="nav__link" to="/">Home</g-link>
					<g-link class="nav__link" to="/about/">About</g-link>
				</nav>
			</div>
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

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
