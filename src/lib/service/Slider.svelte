<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()
    let Range
    onMount(async () => {
        const module = await import("./Range.svelte")
        Range = module.default
    })

    let value = 48
    let isDragged = false
    let imageFile
    let keys
    const validExtensions = ['image/png','image/jpeg','image/jpg']

    const toggleActive = () => {
        isDragged = !isDragged
    }

    const handleDrop = (event) => {
        imageFile = event.dataTransfer.files[0]
        if(validExtensions.includes(imageFile.type)) {
            handleDispatch(imageFile)
        } else {
            alert("Invalid image")
        }
    }

    const handleInput = () => {
        if(imageFile[0]) {
            handleDispatch(imageFile[0])
        }
    }

    const handleDispatch = (image) => {
        keys = [image, value]
        dispatch('image', keys)
    }
</script>

<div class="flex flex-col justify-center items-center py-5 bg-neutral-100 w-11/12 mt-6 rounded-xl xs:max-w-sm xs:mt-8 sm:max-w-lg sm:mt-10 md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
    <p class="text-center italic text-neutral-600 text-sm w-64 xs:w-full xs:max-w-xs sm:max-w-lg lg:text-base">
        Select a value for compression
    </p>
    <div class="w-11/12 py-4">
        <svelte:component this={Range} bind:value/>
        <div class="flex justify-between">
            <small class="text-neutral-600">(high compression low quality)</small>
            <small class="text-neutral-600">(low compression high quality)</small>
        </div>
    </div>
    <div on:dragenter|preventDefault={toggleActive} on:dragleave|preventDefault={toggleActive} on:dragover|preventDefault on:drop|preventDefault={toggleActive} on:drop|preventDefault={handleDrop} class="flex justify-center items-center m-2 w-11/12 h-72 rounded-xl border border-dashed border-neutral-600 border-opacity-40 md:h-80 {isDragged ? 'bg-accent bg-opacity-10 border-opacity-100' : ''}">
        <div class="mx-3 flex flex-col items-center">
            <p class="text-center text-neutral-600 font-light text-sm lg:text-base">Drag & Drop your image here to upload</p>
            <p class="text-neutral-600 text-sm font-bold mt-3">OR</p>
            <div class="">
                <label for="input" class="inline-block w-40 mt-3 text-center bg-neutral-100 text-accent border border-accent uppercase text-xs font-medium py-3 px-6 rounded-md tracking-wider cursor-pointer hover:shadow-lg">Browse Images</label>
                <input bind:files={imageFile} on:change={handleInput} class="hidden" type="file" name="image" id="input" accept="image/png, image/jpeg">
            </div>
            <small class="text-xs mt-3 text-neutral-600">Supports: JPEG,JPG,PNG</small>
        </div>
    </div>
</div>