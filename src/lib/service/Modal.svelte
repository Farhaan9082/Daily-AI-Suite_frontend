<script>
    import { BarLoader } from 'svelte-loading-spinners';
</script>

<div class="z-10 fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-neutral-900 bg-opacity-60">
    <div class="flex flex-col items-center max-w-md rounded-lg p-5 bg-neutral-100 lg:p-7">
        <div class="pb-3">
            <h1 class="uppercase text-xs tracking-large text-neutral-600 font-semibold lg:text-sm">loading</h1>
        </div>
        <BarLoader color="#7C3AED"/>
    </div>
</div>