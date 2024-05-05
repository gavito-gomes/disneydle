export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiUrl: process.env.API_URL
        }
    },
    app: {
        head: {
            title: 'Disneydle',
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
        }
    },
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    modules: ['@nuxtjs/eslint-module', '@nuxtjs/google-fonts'],
    googleFonts: {
        families: {
            Outfit: true
        }
    }
})
