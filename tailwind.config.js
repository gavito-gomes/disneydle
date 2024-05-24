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
        fontFamily: {
            display: 'OtomanopeeOne, sans-serif',
            body: 'Outfit, sans-serif'
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#7595C3',
                    dark: '#46699D',
                    op: '#46699DE5',
                    light: '#C1D1EB'
                },
                white: '#FEFEFE',
                opdarken: '#00000033',
                green: {
                    DEFAULT: '#398E3C',
                    op: '#29732cE5',
                    light: '#66cc6a',
                    dark: '#226127'
                },
                yellow: '#C2931B',
                red: '#C32D23'
            }
        }
    },

    plugins: []
}
