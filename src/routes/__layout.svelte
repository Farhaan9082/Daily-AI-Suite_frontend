<script>
	import '../app.css';
	import Navbar from "$lib/symbols/Navbar.svelte";
	import Footer from '$lib/home/Footer.svelte';
</script>

<Navbar/>
<slot />
<Footer/>