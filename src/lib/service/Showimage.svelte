<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()
    export let apiResponse
    let buttonText = "download"

    const handleBack = () => {
        dispatch('revert')
    }
</script>

<div class="flex flex-col justify-center items-center bg-neutral-100 w-11/12 py-6 mt-6 rounded-xl xs:max-w-sm xs:mt-8 sm:max-w-lg sm:mt-10 md:max-w-xl lg:max-w-2xl xl:max-w-3xl md:pb-8">
    <div class="flex flex-col items-center flex-grow px-4 w-full max-w-xs xs:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div class="aspect-w-3 aspect-h-3 w-full xs:aspect-w-5 xs:aspect-h-4 sm:mt-3 md:aspect-w-3 md:aspect-h-2 lg:mt-4">
            <img src={apiResponse} alt="" class="object-cover object-center rounded-lg">
        </div>
        <div class="w-full max-w-xs md:max-w-sm xl:max-w-md">
            <div class="grid grid-cols-1 mt-8 gap-3 xs:gap-4 md:grid-cols-2 w-full max-w-xs sm:grid-cols-2 md:max-w-sm xl:max-w-md xl:gap-10 xl:mt-9">
                <div class="sm:order-2">
                    <a href={apiResponse} download="modified-image-ai-suite" class="inline-block w-full text-center bg-accent text-neutral-100 uppercase text-xs font-medium py-3.5 px-8 rounded-md tracking-wider hover:shadow-lg hover:bg-accent-dark transition-colors xs:text-sm sm:py-3 cursor-pointer">{buttonText}</a>
                </div>
                <div class="sm:order-1">
                    <button on:click={handleBack} class="inline-block w-full text-center bg-neutral-100 text-accent border border-accent uppercase text-xs font-medium py-3 px-8 rounded-md tracking-wider hover:shadow-lg xs:text-sm sm:py-3">go back</button>
                </div>
            </div>
        </div>
    </div>
</div>