<template>
    <div v-if="yesterdayMovie" class="text-center mt-10">
        <p class="">
            {{ $t('home.yesterday_movie') }}
        </p>
        <p class="text-lg text-primary-light font-display">
            - {{ yesterdayMovie.name[lang] }} -
        </p>
    </div>
</template>

<script setup>
const { $api, $locale } = useNuxtApp()

const lang = $locale.get().value
const yesterdayMovie = ref(null)

onMounted(() => {
    getYesterdayMovie()
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
</script>
