<script>
    const footerMenus = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Features",
            link: "#Features"
        },
        {
            name: "Services",
            link: "#Services"
        }
    ]
    const date = new Date()
    let year = date.getFullYear()
</script>

<footer class="px-4 py-4 flex flex-col items-center bg-neutral-900 md:grid md:grid-cols-2 md:gap-y-4 md:px-6 lg:grid-cols-3">
    <div class="py-6 border-b border-neutral-600 w-48 flex justify-center md:border-0 md:py-3 md:justify-start">
        <img src="footer-logo.png" alt="logo" class="h-5">
    </div>
    <div class="grid grid-cols-1 gap-6 text-center text-secondary my-7 md:grid-cols-3 md:gap-0 md:my-0 md:text-right md:justify-self-end md:gap-x-10 lg:justify-self-center lg:text-center">
        {#each footerMenus as footerMenu}
            <a href={footerMenu.link} class="text-xs uppercase hover:text-neutral-300 transition-colors">{footerMenu.name}</a>
        {/each}
    </div>
    <div class="md:col-span-2 md:place-self-center lg:col-span-1 lg:justify-self-end">
        <small class="text-neutral-100">&copy; {year} - <a href="/">AI Suite</a> | All Rights Reserved</small>
    </div>
</footer>