<script>
	import '../app.css';
	import Navbar from "$lib/symbols/Navbar.svelte";
	import Footer from '$lib/symbols/Footer.svelte';
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href="/favicon.svg">
</svelte:head>

<Navbar/>
<slot />
<Footer/>