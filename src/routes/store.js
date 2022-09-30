import {writable, derived} from "svelte/store";

export const api_data = writable([])

export const projectName = derived(api_data, ($api_data)=>{
    if($api_data.data){
        return $api_data.data.map(name=>name.name)
    }
    return [];
});

export const projectImages = derived(api_data, ($api_data) => {
    if($api_data.data) {
        return $api_data.data.map(pic=>pic.project_image)
    }
    return [];
});

