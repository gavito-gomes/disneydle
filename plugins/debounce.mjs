export default defineNuxtPlugin(() => {
    function createDebounce() {
        let timeout = null
        return function (fnc, delayMs) {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                fnc()
            }, delayMs || 500)
        }
    }

    return {
        provide: {
            debounce: createDebounce()
        }
    }
})
