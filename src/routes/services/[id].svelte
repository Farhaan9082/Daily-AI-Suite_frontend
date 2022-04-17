<script context="module">
    export async function load({params}) {
        const id = params.id - 1
        return {props: {id}}
    }
</script>

<script>
    import Showtext from "$lib/service/Showtext.svelte";
    import Modal from "$lib/service/Modal.svelte";
    import Linkcard from "$lib/service/Linkcard.svelte";
    import Upload from "$lib/service/Upload.svelte";
    import { services } from "$lib/stores/servicestore";
    export let id
    let service = $services[id]
    let submit = false
    let gotResponse = false
    let apiResponse

    $: if(apiResponse) {
        gotResponse = true
    }


    const mapComponent = {
        'Upload': Upload,
        'Linkcard': Linkcard
    }

    const handleApi = async (apidata) => {
        let formdata = new FormData()
        if(id == 1) {
            formdata.append('link', apidata)
        } else {
            formdata.append('image', apidata)
        }

        try {
            const response = await fetch(service.apiUrl, {
                method: "POST",
                body: formdata
            })

            const data = await response.json()
            if (response.ok) {
                submit = false
                console.log(data[service.responseKey])
                apiResponse = data[service.responseKey]
            } else {
                throw Error(response.statusText)
            }
        } catch (error) {
            console.log(error)
            alert("Server not responding")
            submit = false
        }
    }

    const handleImage = (e) => {
        submit = true
        handleApi(e.detail)
    }

    const handleYtlink = (e) => {
        submit = true
        handleApi(e.detail)
    }

    const handleRevert = () => {
        gotResponse = false
        apiResponse = undefined
    }
</script>

<main>
    <section class="flex flex-col items-center bg-neutral-300 mx-4 mt-2 mb-6 rounded-xl py-6 xs:py-8 md:py-10 lg:max-w-[992px] lg:mx-auto xl:max-w-[1180px] xl:py-12">
        <h1 class="text-2xl px-2 max-w-xs leading-7 font-bold text-center xs:text-3xl sm:text-4xl sm:max-w-sm lg:text-5xl lg:max-w-lg xl:text-6xl xl:max-w-xl">{service.title}</h1>
        <p class="mt-5 text-center text-neutral-600 text-sm w-64 xs:w-full xs:max-w-xs sm:max-w-lg lg:text-base">
            Extract text from photos and transfer it to your clipboard with ease
        </p>
        {#if !gotResponse}
            <svelte:component this={mapComponent[service.inputComponent]} on:link={handleYtlink} on:image={handleImage}/>
        {:else}
            <Showtext {apiResponse} on:revert={handleRevert}/>
        {/if}

        {#if submit}
            <Modal/>
        {/if}
    </section>
</main>