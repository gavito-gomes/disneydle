<template>
    <div :key="updatePageKey" class="my-10 md:my-20">
        <div class="flex justify-center items-center">
            <HowToPlay />
            <img src="/img/logo.png" class="w-8/12 mx-3 sm:max-w-[350px]" />
            <LanguageSelector />
        </div>

        <ClientOnly>
            <div class="flex flex-col items-center justify-center mt-4">
                <BoardComponent class="w-11/12 max-w-[550px] p-5 text-shadow">
                    <p class="md:text-xl font-display">
                        {{ $t('home.guess_the_movie') }}
                    </p>
                    <p class="text-sm mt-3 mb-2 sm:text-base">
                        {{ $t('home.choose_anyone') }}
                    </p>
                </BoardComponent>
                <AutocompleteMovie
                    v-if="!guessedToday"
                    v-model="movie"
                    @submit="guessMovie"
                />

                <div
                    v-if="guessedToday"
                    ref="scrollTo"
                    class="w-11/12 max-w-[400px]"
                >
                    <VictoryPanel />
                </div>
                <GuessList :key="guessUpdateKey" />
            </div>
        </ClientOnly>

        <div class="flex flex-col items-center text-shadow mt-4">
            <YestedayMovie />
        </div>
    </div>
</template>

<script setup>
import moment from 'moment'
const { $api, $storage } = useNuxtApp()

const scrollTo = ref(null)
const movie = ref('')
const updatePageKey = ref(0)
const guessUpdateKey = ref(0)

const guessedToday = ref(false)

const lastCheck = computed(() => {
    return $storage.getItem('lastCheck')
})

onBeforeMount(async () => {
    await resetInfo()
})

onMounted(() => {
    guessedToday.value = $storage.getItem('guessedToday')
    scrollToVicory()
})

async function resetInfo() {
    try {
        const {
            data: { serverTime }
        } = await $api.get('/movies/timeRemaining')

        const reset =
            !lastCheck.value ||
            !moment(serverTime).isSame(moment(lastCheck.value), 'day')
        if (reset) {
            $storage.setItem('guessedToday', false)
            $storage.setItem('guessList', [])
            $storage.setItem('lastCheck', serverTime)
            updatePageKey.value++
        }
    } catch (error) {
        console.log(error)
    }
}

function scrollToVicory() {
    nextTick(() => {
        if (guessedToday.value) {
            console.log(scrollTo.value)
            scrollTo.value.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    })
}

async function guessMovie() {
    try {
        const {
            data: { result }
        } = await $api.post('/movies/guess', {
            movieIds: [movie.value]
        })
        addGuess(movie.value, result[0])
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

    if (guess.correctGuess) {
        $storage.setItem('guessedToday', true)
        guessedToday.value = true
        scrollToVicory()
    }
}

watch(useNuxtApp().$locale.get(), () => {
    updatePageKey.value++
})
</script>
