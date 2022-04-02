<script context="module">
    export async function load({params}) {
        const id = params.id - 1
        return {props: {id}}
    }
</script>

<script>
    import Upload from "$lib/service/Upload.svelte";
    import { services } from "$lib/stores/servicestore";
    export let id
    let service = $services[id]
</script>

<main>
    <section class="flex flex-col items-center bg-neutral-300 mx-4 mt-2 mb-6 rounded-xl py-6 xs:py-8 md:py-10 lg:max-w-[992px] lg:mx-auto xl:max-w-[1180px] xl:py-12">
        <h1 class="text-2xl px-2 max-w-xs leading-7 font-bold text-center xs:text-3xl sm:text-4xl sm:max-w-sm lg:text-5xl lg:max-w-lg xl:text-6xl xl:max-w-xl">{service.title}</h1>
        <p class="mt-5 text-center text-neutral-600 text-sm w-64 xs:w-full xs:max-w-xs sm:max-w-lg lg:text-base">
            Extract text from photos and transfer it to your clipboard with ease
        </p>
        <Upload/>
    </section>
</main>