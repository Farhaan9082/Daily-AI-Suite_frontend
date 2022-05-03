<script>
	import '../app.css';
	import Navbar from "$lib/symbols/Navbar.svelte";
	import Footer from '$lib/symbols/Footer.svelte';
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href="/favicon.svg">
	<title>AI Suite | AI-driven suite of tools to help you get things done</title>
</svelte:head>

<Navbar/>
<slot />
<Footer/>