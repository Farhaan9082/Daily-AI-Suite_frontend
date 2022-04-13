<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()

    let link = ""

    function validateYouTubeUrl(url) {
        if (url) {
            var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            if (url.match(regExp)) {
                return true;
            }
        }
        return false;
    }

    const clearLink = () => {
        link = ""
    }

    const submitLink = () => {
        if(validateYouTubeUrl(link)) {
            handleLink(link)
        } else {
            alert("Invalid YouTube link")
        }
    }

    const handleLink = (ytlink) => {
        dispatch('link', ytlink)
    }
</script>

<div class="flex justify-center items-center bg-neutral-100 w-11/12 py-8 rounded-xl mt-6 xs:mt-8 xs:max-w-sm sm:mb-4 sm:max-w-md sm:py-10 md:mt-10 lg:max-w-lg lg:py-12 xl:max-w-xl">
    <div class="flex flex-col items-center flex-grow">
        <form on:submit|preventDefault={submitLink} autocomplete="off" class="px-4 w-full max-w-xs md:max-w-sm xl:max-w-md">
            <input bind:value={link} required class="border border-neutral-600 border-opacity-30 p-2 w-full rounded-md placeholder:text-sm focus:outline-accent xs:p-3 lg:placeholder:text-base" type="text" name="link" id="link" placeholder="Youtube video link">
            <div class="grid grid-cols-1 mt-8 gap-3 xs:gap-4 md:grid-cols-2 w-full max-w-xs sm:grid-cols-2 md:max-w-sm xl:max-w-md xl:gap-10 xl:mt-9">
                <div class="sm:order-2">
                    <button type="submit" class="inline-block w-full text-center bg-accent text-neutral-100 uppercase text-xs font-medium py-3.5 px-8 rounded-md tracking-wider hover:shadow-lg hover:bg-accent-dark transition-colors xs:text-sm sm:py-3">confirm</button>
                </div>
                <div class="sm:order-1">
                    <button on:click|preventDefault={clearLink} class="inline-block w-full text-center bg-neutral-100 text-accent border border-accent uppercase text-xs font-medium py-3 px-8 rounded-md tracking-wider hover:shadow-lg xs:text-sm sm:py-3">clear</button>
                </div>
            </div>
        </form>
    </div>
</div>