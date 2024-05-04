import { createI18n } from 'vue-i18n'

import { messages } from '~/i18n/index.mjs'

export default defineNuxtPlugin((nuxtApp) => {
    const route = useRoute()
    let locale = route.query.lang
    if (!(locale in messages)) {
        locale = 'pt-BR'
    }

    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale,
        messages
    })

    nuxtApp.vueApp.use(i18n)
    return {
        provide: {
            i18n
        }
    }
})
