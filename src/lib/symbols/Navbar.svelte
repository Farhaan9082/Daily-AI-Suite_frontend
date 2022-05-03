<script>
    const menus = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Features",
            link: "/#Features"
        }
    ]

    const subMenus = [
        {
            name: "Ocr",
            link: "/services/1"
        },
        {
            name: "Summarizer",
            link: "/services/2"
        },
        {
            name: "Extract Colours",
            link: "/services/3"
        },
        {
            name: "Background Remover",
            link: "/services/4"
        },
        {
            name: "Enhance/Compress",
            link: "/services/5"
        },
        {
            name: "Colorization",
            link: "/services/6"
        },
    ]

    let isOpen = false
    let linkOpen = false

    const toggleMenu = () => {
        isOpen = !isOpen
    }

    const toggleLinks = () => {
        linkOpen = !linkOpen
    }
</script>

<header class="md:flex md:justify-between md:items-center md:p-2">
    <div class="py-4 px-4 flex justify-between items-center">
        <a href="/">
            <img class="h-4" src="/logo.svg" alt="logo">
        </a>
        <div class="cursor-pointer md:hidden" on:click={() => toggleMenu()} on:click={() => linkOpen = false}>
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
        <ul class="md:flex md:items-center relative">
            {#each menus as menu}
               <li class="mx-2 mt-1 md:mt-0 rounded hover:bg-neutral-300"><a on:click={() => toggleMenu()} class="block py-1 px-2 text-sm font-medium" href={menu.link}>{menu.name}</a></li> 
            {/each}
            <li class="mx-2 mt-1 md:mt-0 rounded hover:bg-neutral-300 select-none">
                <div on:click={toggleLinks} on:focus={() => linkOpen = true} on:blur on:mouseover={() => linkOpen = true} on:mouseout={() => linkOpen = false} class="flex cursor-pointer items-center py-1 px-2 text-sm font-medium" href="/">
                    <p>Services</p>
                    <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
            </li>
            <div on:focus on:blur on:mouseover={() => linkOpen = true} on:mouseout={() => linkOpen = false} class="z-10 py-2 w-48 shadow-md ml-4 bg-neutral-100 rounded absolute {linkOpen ? 'block' : 'hidden'} md:top-7 md:left-28">
                {#each subMenus as subMenu}
                    <li class="mx-2 mt-1 md:mt-0 rounded hover:bg-neutral-300"><a on:click={() => toggleMenu()} on:click={() => toggleLinks()} class="block py-1 px-2 text-sm font-medium" href={subMenu.link}>{subMenu.name}</a></li> 
                {/each}
            </div>
        </ul>
        <div class="mt-4 px-4 md:hidden">
            <a on:click={() => toggleMenu()} href="/#Services" class="inline-block bg-accent text-neutral-100 uppercase text-xs font-medium py-2 px-3 rounded hover:shadow-lg hover:bg-accent-dark transition-colors">get started</a>
        </div>
    </div>
    <div class="mt-4 px-4 hidden md:block md:mt-0">
        <a href="/#Services" class="inline-block bg-accent text-neutral-100 uppercase text-xs font-medium py-2 px-3 rounded hover:shadow-lg hover:bg-accent-dark transition-colors">get started</a>
    </div>
</header>