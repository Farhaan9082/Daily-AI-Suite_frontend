<script>
    const menus = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Features",
            link: "/#Features"
        },
        {
            name: "Services",
            link: "/#Services"
        }
    ]
    let isOpen = false

    const toggleMenu = () => {
        isOpen = !isOpen
    }
</script>

<header class="md:flex md:justify-between md:items-center md:p-2">
    <div class="py-4 px-4 flex justify-between items-center">
        <div class="">
            <img class="h-4" src="/logo.svg" alt="logo">
        </div>
        <div class="cursor-pointer md:hidden" on:click={() => toggleMenu()}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                {#if isOpen}
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                {:else}
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                {/if}
            </svg>
        </div>
    </div>
    <div class="pb-5 border-b border-neutral-300 md:border-0 {isOpen ? 'block' : 'hidden'} md:block md:pb-0">
        <ul class="md:flex md:items-center">
            {#each menus as menu}
               <li class="mx-2 mt-1 md:mt-0 rounded hover:bg-neutral-300"><a on:click={() => toggleMenu()} class="block py-1 px-2 text-sm font-medium" href={menu.link}>{menu.name}</a></li> 
            {/each}
        </ul>
        <div class="mt-4 px-4 md:hidden">
            <a on:click={() => toggleMenu()} href="/#Services" class="inline-block bg-accent text-neutral-100 uppercase text-xs font-medium py-2 px-3 rounded hover:shadow-lg hover:bg-accent-dark transition-colors">get started</a>
        </div>
    </div>
    <div class="mt-4 px-4 hidden md:block md:mt-0">
        <a href="/#Services" class="inline-block bg-accent text-neutral-100 uppercase text-xs font-medium py-2 px-3 rounded hover:shadow-lg hover:bg-accent-dark transition-colors">get started</a>
    </div>
</header>