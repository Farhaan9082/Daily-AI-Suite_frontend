<script>
    let features = ['Modern and intuitive design','Full customizable components','Modern and intuitive design','Full customizable components']
</script>

<section class="md:flex md:flex-col md:items-center" id="Features">
    <div class="py-4 px-4 mt-6 flex flex-col items-center xs:ml-3 md:ml-0 md:grid md:grid-cols-2 md:gap-5 md:gap-x-0 md:max-w-[810px] md:p-8 lg:max-w-[1000px] lg:p-12">
        <div class="">
            <h1 class="uppercase text-accent font-semibold text-xs tracking-large xs:text-sm lg:text-base">Features</h1>
            <h1 class="mt-3 text-2xl font-bold w-64 xs:text-3xl xs:w-full xs:max-w-md xs:mt-4 md:max-w-xs lg:text-4xl lg:max-w-sm">Everything you need in one intuitive place</h1>
        </div>
        <img src="/features.png" alt="features" class="max-h-64 mt-2 xs:mt-4 xs:max-h-80 md:row-span-2 md:h-full md:mt-0 md:w-full md:object-cover md:object-center lg:object-left">
        <div class="-ml-3 grid grid-cols-1 py-2 gap-5 xs:grid-cols-2 xs:max-w-md xs:mt-2 xs:-ml-0 md:grid-cols-1 md:mt-0 md:max-w-none md:gap-4">
            {#each features as feature}
                <div class="flex items-center">
                    <img src="/features-icon.png" alt="icon" class="h-5">
                    <h1 class="ml-3 text-neutral-600 text-sm xs:text-base lg:text-lg">{feature}</h1>
                </div>
            {/each}
        </div>
    </div>
</section>