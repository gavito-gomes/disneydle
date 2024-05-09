export default defineNuxtPlugin(() => {
    const storage = {
        getItem(key) {
            if (process.client) {
                const value = JSON.parse(localStorage.getItem(key))
                return value
            } else {
                return undefined
            }
        },

        setItem(key, item) {
            if (process.client) {
                const value = JSON.stringify(item)
                localStorage.setItem(key, value)
            }
        }
    }
    return {
        provide: { storage }
    }
})
