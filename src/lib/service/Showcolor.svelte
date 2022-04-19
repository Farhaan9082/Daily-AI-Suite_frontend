<script>
    import { createEventDispatcher } from "svelte";
    import Clipboard from 'clipboard';
    import 'tippy.js/dist/tippy.css';
    import 'tippy.js/animations/scale.css';
    import 'tippy.js/themes/translucent.css';
    import { delegate } from 'tippy.js';
    import { onMount } from 'svelte';
    const dispatch = createEventDispatcher()
    export let apiResponse
    let buttonText = "copy all"

    onMount(async () => {
        delegate('#colors-group', {
            trigger: 'click',
            target: '#copy-color',
            animation: 'scale',
            theme: 'translucent',
        })

        new Clipboard('#copy-color')
        new Clipboard('#copy-colors')
    })

    const handleClick = () => {
        buttonText = "copied"
    }

    const handleBack = () => {
        dispatch('revert')
    }
</script>

<div class="flex justify-center items-center bg-neutral-100 w-11/12 py-8 rounded-xl mt-6 xs:mt-8 xs:max-w-sm sm:mb-4 sm:max-w-md sm:py-10 md:mt-10 lg:max-w-lg lg:py-12 xl:max-w-xl">
    <div class="flex flex-col items-center flex-grow px-4 w-full max-w-xs md:max-w-sm xl:max-w-md">
        <p class="text-center italic text-neutral-600 text-sm w-64 xs:w-full xs:max-w-xs sm:max-w-lg lg:text-base">
            Click a color to copy it's hex-code
        </p>
        <div id="colors-group" class="mt-4 grid grid-cols-5 overflow-hidden w-full bg-neutral-600 rounded-lg border border-neutral-600 border-opacity-30">
            {#each apiResponse as color}
                <div id="copy-color" data-tippy-content="copied!" data-clipboard-text={color} class="w-full h-14 cursor-pointer" style="background-color: {color};"></div>
            {/each}
        </div>
        <div class="grid grid-cols-1 mt-8 gap-3 xs:gap-4 md:grid-cols-2 w-full max-w-xs sm:grid-cols-2 md:max-w-sm xl:max-w-md xl:gap-10 xl:mt-9">
            <div class="sm:order-2">
                <button id="copy-colors" data-clipboard-text={apiResponse} on:click={handleClick} class="inline-block w-full text-center bg-accent text-neutral-100 uppercase text-xs font-medium py-3.5 px-8 rounded-md tracking-wider hover:shadow-lg hover:bg-accent-dark transition-colors xs:text-sm sm:py-3">{buttonText}</button>
            </div>
            <div class="sm:order-1">
                <button on:click={handleBack} class="inline-block w-full text-center bg-neutral-100 text-accent border border-accent uppercase text-xs font-medium py-3 px-8 rounded-md tracking-wider hover:shadow-lg xs:text-sm sm:py-3">go back</button>
            </div>
        </div>
    </div>
</div>