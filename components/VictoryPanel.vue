<template>
    <div
        class="w-full mt-12 mb-8 rounded-lg bg-green-op border-green-light border px-3 py-5 lg:p-8 text-center"
    >
        <h2 class="font-display text-2xl">
            {{ $t(`home.victory_panel.title.${titleLevel}`) }}
        </h2>
        <p class="mt-2">
            {{
                $t(
                    `home.victory_panel.${tries <= 1 ? 'first_try' : 'you_guessed'}`
                )
            }}
        </p>

        <ClientOnly>
            <div class="mt-8">
                <div
                    class="rounded border w-fit border-primary-light p-0.5 mx-auto"
                >
                    <img
                        :src="`${baseUrl}/${correctGuess.cover_image[lang]}`"
                        class="h-[65px] w-[120px]"
                    />
                </div>
                <p class="font-display text-lg">
                    {{ correctGuess.name[lang].value }}
                </p>
            </div>
        </ClientOnly>

        <p class="mt-10">
            {{ $t('home.victory_panel.number_of_tries') }}
            <span class="text-primary text-shadow font-bold">{{ tries }}</span>
        </p>
        <div
            class="bg-green-dark px-3 py-2 rounded mt-4 border border-primary-light"
        >
            <NextMovieIn />
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { $storage, $locale } = useNuxtApp()

const lang = $locale.get()
const baseUrl = config.public.apiUrl

const tries = computed(() => {
    return $storage.getItem('guessList').length || -1
})

const titleLevel = computed(() => {
    return tries.value <= 1
        ? 'wow'
        : tries.value <= 3
          ? 'excellent'
          : tries.value <= 5
            ? 'good'
            : 'ok'
})

const correctGuess = computed(() => {
    const list = $storage.getItem('guessList')
    return list.find((guess) => guess.correctGuess)
})
</script>
