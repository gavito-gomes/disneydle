import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'pt',
        messages: {
            en: {
                home: {
                    guess_the_movie: `Guess today's Disney movie`,
                    choose_anyone: 'Choose anyone to get started'
                }
            },
            pt: {
                home: {
                    guess_the_movie: 'Adivinhe o filme da Disney de hoje',
                    choose_anyone: 'Escolha qualquer um para começar'
                }
            }
        }
    })

    vueApp.use(i18n)
})
