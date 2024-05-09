<template>
    <div :key="updatePageKey" class="my-10 md:my-20">
        <div class="flex justify-center items-center">
            <div class="w-7"></div>
            <img src="/img/logo.png" class="w-8/12 sm:max-w-[350px]" />
            <LanguageSelector class="ml-3" />
        </div>

        <div class="flex flex-col items-center justify-center mt-4">
            <BoardComponent class="w-11/12 max-w-[550px]">
                <p class="md:text-xl font-display">
                    {{ $t('home.guess_the_movie') }}
                </p>
                <p class="text-sm mt-3 mb-2 sm:text-base">
                    {{ $t('home.choose_anyone') }}
                </p>
            </BoardComponent>
            <AutocompleteMovie v-model="movie" @submit="guessMovie" />
            <GuessList :key="guessUpdateKey" />
        </div>

        <div class="flex flex-col items-center text-shadow mt-4">
            <YestedayMovie />
        </div>
    </div>
</template>

<script setup>
const { $api, $storage } = useNuxtApp()

const movie = ref('')
const updatePageKey = ref(0)
const guessUpdateKey = ref(0)

async function guessMovie() {
    try {
        // console.log('guess movie: ', movie.value)
        const {
            data: { result }
        } = await $api.get('/movies/guess', {
            params: {
                movieId: movie.value
            }
        })
        addGuess(movie.value, result)
        guessUpdateKey.value++
    } catch (error) {
        console.log(error)
    }
}

async function addGuess(id, guess) {
    const list = $storage.getItem('guessList') || []
    const exists = list.find((movie) => movie.id === id)
    if (!exists) {
        guess.id = id
        $storage.setItem('guessList', [guess, ...list])
    }
}

watch(useNuxtApp().$i18n.global.locale, () => {
    updatePageKey.value++
})
</script>
