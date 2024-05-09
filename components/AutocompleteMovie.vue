<template>
    <div class="relative flex justify-center mt-3 w-11/12 max-w-[500px]">
        <div class="relative w-full flex items-center h-[60px] z-30">
            <input
                v-model="text"
                type="text"
                :placeholder="$t('home.type_the_name')"
                class="w-full font-body outline-primary focus:outline focus:outline-2 bg-primary-op rounded-full border border-primary pl-6 pr-16 py-2"
                @keyup="handleKeyUp"
                @input="search"
            />
            <button
                class="absolute -right-2 top-0 bg-primary hover:bg-primary-op border-4 border-primary-light size-[60px] rounded-full flex items-center justify-center"
                @click="submitMovieId"
            >
                <img src="/img/icons/submit.svg" class="w-8 ml-1" />
            </button>
        </div>
        <div v-if="menuActive">
            <div
                class="fixed top-0 left-0 z-10 w-screen h-screen"
                @click="menuActive = false"
            />
            <div class="absolute z-20 left-0 top-1/2 w-full">
                <div class="mt-5 w-11/12 mx-auto bg-primary p-1">
                    <div v-if="menuLoading">
                        <LoadingSVG width="50" height="40" class="mx-auto" />
                    </div>
                    <div v-else-if="movies.length">
                        <button
                            v-for="(item, i) in moviesList"
                            :key="i"
                            class="w-full p-1 hover:bg-opdarken text-left flex items-center"
                            :class="{
                                'border border-primary-light':
                                    i === focusedMovie
                            }"
                            @click="() => pickMovie(i)"
                        >
                            <img
                                :src="item.cover_image"
                                width="80"
                                height="40"
                            />
                            <span class="ml-2">{{ item.name }}</span>
                        </button>
                    </div>
                    <div v-else>
                        <p class="p-2">{{ $t('home.movie_not_found') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { $api, $debounce, $storage } = useNuxtApp()
const emit = defineEmits(['submit'])

const model = defineModel({ type: String, required: true })

const menuActive = ref(false)
const menuLoading = ref(false)
const text = ref('')
const movies = ref([])
const focusedMovie = ref(0)

const moviesList = computed(() =>
    movies.value.map((movie) => ({
        ...movie,
        cover_image: `${config.public.apiUrl}/${movie.cover_image}`
    }))
)

function setFocusedMovie(id) {
    if (id < 0) focusedMovie.value = 0
    else if (id >= movies.value.length)
        focusedMovie.value = movies.value.length - 1
    else focusedMovie.value = id
}

function handleKeyUp({ key }) {
    if (key === 'Enter') {
        submitMovieId()
        return
    } else if (key === 'ArrowDown') {
        setFocusedMovie(focusedMovie.value + 1)
    } else if (key === 'ArrowUp') {
        setFocusedMovie(focusedMovie.value - 1)
    } else {
        setFocusedMovie(0)
    }
}

function pickMovie(id) {
    setFocusedMovie(id)
    submitMovieId()
}

function submitMovieId() {
    if (!menuActive.value) return

    if (movies.value.length) {
        const picked = movies.value[focusedMovie.value]
        model.value = picked._id
        text.value = ''
        emit('submit')
    }
    menuActive.value = false
}

const search = () => {
    menuActive.value = true
    menuLoading.value = true

    $debounce(async () => {
        try {
            const guessIds =
                $storage.getItem('guessList')?.map((guess) => guess.id) || []
            const route = useRoute()
            const { data } = await $api.get('/movies/autocomplete', {
                params: {
                    text: text.value,
                    lang: route.query.lang.split('-')[0]
                }
            })
            movies.value = data.movies.filter(
                (movie) => !guessIds.includes(movie._id)
            )
            menuLoading.value = false
        } catch (error) {
            console.log(error)
        }
    }, 500)
}
</script>
