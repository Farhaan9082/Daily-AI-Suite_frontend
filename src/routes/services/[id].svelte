<script context="module">
    export async function load({params}) {
        const id = params.id - 1
        return {props: {id}}
    }
</script>

<script>
    import Slider from "$lib/service/Slider.svelte";
    import Showcolor from "$lib/service/Showcolor.svelte";
    import Showimage from "$lib/service/Showimage.svelte";
    import Showtext from "$lib/service/Showtext.svelte";
    import Modal from "$lib/service/Modal.svelte";
    import Linkcard from "$lib/service/Linkcard.svelte";
    import Upload from "$lib/service/Upload.svelte";
    import { services } from "$lib/stores/servicestore";
    export let id
    $: service = $services[id]
    let submit = false
    let gotResponse = false
    let apiResponse

    $: if(apiResponse) {
        gotResponse = true
    }

    $: {
        id,
        gotResponse = false
        apiResponse = undefined
    }


    const mapComponent = {
        'Upload': Upload,
        'Linkcard': Linkcard,
        'Showtext': Showtext,
        'Showimage': Showimage,
        'Showcolor': Showcolor,
        'Slider': Slider,
    }

    const handleApi = async (apidata) => {
        let formdata = new FormData()
        if(id == 1) {
            formdata.append('link', apidata[0])
            formdata.append('value', apidata[1])
        } else if(id == 4) {
            formdata.append('image', apidata[0])
            formdata.append('value', apidata[1])
        } else {
            formdata.append('image', apidata)
        }

        try {
            const response = await fetch(service.apiUrl, {
                method: "POST",
                body: formdata
            })
            
            let data
            if(id == 3 || id == 4 || id == 5) {
                data = await response.blob()
            } else {
                data = await response.json()
            }

            if (response.ok) {
                submit = false
                if(id == 3 || id == 4 || id == 5) {
                    let objectURL = URL.createObjectURL(data)
                    apiResponse = objectURL
                } else {
                    apiResponse = data[service.responseKey]
                }
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
            {service.metaDetail}
        </p>
        {#if !gotResponse}
            <svelte:component this={mapComponent[service.inputComponent]} on:link={handleYtlink} on:image={handleImage}/>
        {:else}
            <svelte:component this={mapComponent[service.outputComponent]} {apiResponse} on:revert={handleRevert}/>
        {/if}

        {#if submit}
            <Modal/>
        {/if}
    </section>
</main>