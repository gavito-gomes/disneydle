<template>
    <div>
        <div class="flex justify-center items-center mt-12">
            <div class="w-7"></div>
            <img src="/img/logo.png" class="w-8/12 sm:max-w-[350px]" />
            <LanguageSelector class="ml-3" />
        </div>

        <div class="flex flex-col items-center justify-center mt-4">
            <BoardComponent>
                <p class="sm:text-lg md:text-xl">
                    {{ $t('home.guess_the_movie') }}
                </p>
                <p class="text-sm mt-1 sm:text-base md:mt-3">
                    {{ $t('home.choose_anyone') }}
                </p>
            </BoardComponent>
            <AutocompleteMovie v-model="movie" @submit="guessMovie" />
            <div>
                <p v-for="(item, i) in list" :key="i">{{ item }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const movie = ref('')

const list = ref([])

function guessMovie() {
    console.log('guess movie: ', movie.value)
    list.value.push(movie.value)
}
</script>
