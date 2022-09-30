<svelte:head>
    <title>JBWIZARD</title>
</svelte:head>

<script>
    import Nav from "$lib/component/+nav.svelte";
    import { onMount } from "svelte";
    import {api_data, projectName, projectImages} from "./store.js";

    onMount(async() => {
        fetch ("https://5s5if3lu.directus.app/items/work_projects")
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            api_data.set(data);
        }).catch(error=>{
            console.log(error);
            return [];
        });
    });
</script>

<Nav></Nav>

<main>
    <h1>Projectos</h1>
    <div class="projectos">
    
            {#each $projectImages as pic}
            <img src={"https://5s5if3lu.directus.app/assets/" + pic} alt="">
            {/each}
        
    </div>
</main>
