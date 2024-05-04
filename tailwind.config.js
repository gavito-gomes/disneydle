/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue'
    ],
    theme: {
        colors: {
            primary: '#7595C3',
            white: '#FEFEFE',
            opdarken: '#00000033'
        },
        fontFamily: {
            display: 'OtomanopeeOne, sans-serif',
            body: 'Outfit, sans-serif'
        }
    },
    plugins: []
}
