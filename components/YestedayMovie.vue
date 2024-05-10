<template>
    <div v-if="yesterdayMovie" class="text-center mt-10">
        <p class="">
            {{ $t('home.yesterday_movie') }}
        </p>
        <p class="text-lg text-primary-light font-display">
            - {{ yesterdayMovie.name[lang] }} -
        </p>
        <p class="mt-10">{{ $t('home.time_remaining') }} {{ nextMovieTime }}</p>
    </div>
</template>

<script setup>
const { $api, $locale } = useNuxtApp()

const lang = $locale.get().value
const yesterdayMovie = ref(null)
const remainingTime = ref(null)
const interval = ref(null)

const nextMovieTime = computed(() => {
    try {
        const h = Math.floor(remainingTime.value / 60)
        const m = remainingTime.value % 60
        return h > 0 ? `${h} h ${m} min` : `${m} min`
    } catch (error) {
        console.log(error)
        return ''
    }
})

onMounted(() => {
    getYesterdayMovie()
    getTimeRemaining()
})
onUnmounted(() => {
    clearInterval(interval.value)
})

async function getYesterdayMovie() {
    try {
        const { data } = await $api.get('/movies/yesterday', {
            params: {
                lang: useRoute().query.lang
            }
        })
        yesterdayMovie.value = data.movie
    } catch (error) {
        console.log(error)
    }
}

async function getTimeRemaining() {
    try {
        const {
            data: { remaining }
        } = await $api.get('/movies/timeRemaining')
        remainingTime.value = remaining
        interval.value = setInterval(
            () => {
                remainingTime.value--
            },
            1000 * 60 * 60
        )
    } catch (error) {
        console.log(error)
    }
}
</script>
