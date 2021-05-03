<script>
	import Header from '$lib/Header/index.svelte';
	// import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<div id="wrapper" class="site">
	<Header />
	<slot />

	<!-- <Footer /> -->
</div>
