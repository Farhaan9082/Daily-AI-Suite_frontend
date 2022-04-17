<script>
    import { createEventDispatcher } from "svelte";
    import Clipboard from 'clipboard';
    import { onMount } from 'svelte';
    const dispatch = createEventDispatcher()
    export let apiResponse
    let buttonText = "copy"

    onMount(async () => {
        new Clipboard('#copy')
    })

    const handleClick = () => {
        buttonText = "copied"
    }

    const handleBack = () => {
        dispatch('revert')
    }
</script>

<div class="flex flex-col justify-center items-center bg-neutral-100 w-11/12 py-6 mt-6 rounded-xl xs:max-w-sm xs:mt-8 sm:max-w-lg sm:mt-10 md:max-w-xl lg:max-w-2xl xl:max-w-3xl md:pb-8">
    <textarea bind:value={apiResponse} spellcheck="false" readonly class="resize-none rounded-xl text-base w-11/12 h-72 border border-neutral-600 border-opacity-30 p-2 focus:outline-accent xs:p-3 md:h-80 lg:text-lg"></textarea>
    <div class="grid grid-cols-1 mt-8 gap-3 xs:gap-4 md:grid-cols-2 w-11/12 max-w-xs sm:grid-cols-2 md:max-w-sm xl:max-w-md xl:gap-10 xl:mt-9">
        <div class="sm:order-2">
            <button on:click={handleClick} type="submit" id="copy" data-clipboard-text={apiResponse} class="inline-block w-full text-center bg-accent text-neutral-100 uppercase text-xs font-medium py-3.5 px-8 rounded-md tracking-wider hover:shadow-lg hover:bg-accent-dark transition-colors xs:text-sm sm:py-3">{buttonText}</button>
        </div>
        <div class="sm:order-1">
            <button on:click={handleBack} class="inline-block w-full text-center bg-neutral-100 text-accent border border-accent uppercase text-xs font-medium py-3 px-8 rounded-md tracking-wider hover:shadow-lg xs:text-sm sm:py-3">go back</button>
        </div>
    </div>
</div>