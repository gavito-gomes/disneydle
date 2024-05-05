import axios from 'axios'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    axios.defaults.baseURL = config.public.apiUrl + '/disney-api'
    let api = axios.create({
        timeout: 10000
    })
    return {
        provide: {
            api
        }
    }
})
