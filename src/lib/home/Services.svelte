<script>
    import { services } from "$lib/stores/servicestore";
</script>

<section class="py-4 px-4 mt-6 bg-neutral-300 flex flex-col items-center pb-10 md:pb-14" id="Services">
    <h1 class="text-2xl font-bold mt-5 xs:text-3xl">Our Services</h1>
    <div class="grid grid-cols-1 gap-5 mt-5 xs:mt-7 md:grid-cols-2 md:mt-9 lg:grid-cols-3">
        {#each $services as service}
            <a href={service.link} class="inline-block">
                <div class="bg-neutral-100 rounded-lg p-5 shadow-sm xs:p-7 lg:h-full lg:flex lg:flex-col lg:justify-between lg:max-w-[360px] hover:shadow-lg hover:-translate-y-1 group transition-all">
                    <img src="/services-icon.png" alt="icon" class="h-6 xs:h-7 lg:w-7">
                    <h1 class="text-lg mt-5 font-semibold leading-tight xs:mt-7 xs:text-xl">{service.title}</h1>
                    <p class="text-neutral-600 mt-3 w-64 text-xs  xs:text-sm xs:w-full xs:max-w-sm">
                        {service.detail}
                    </p>
                    <div class="flex mt-8 items-center xs:mt-9">
                        <h1 class="text-accent text-sm font-semibold xs:text-base">Explore</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5 xs:h-6 xs:w-6 text-accent group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</section>