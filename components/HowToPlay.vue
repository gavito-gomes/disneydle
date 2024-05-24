<template>
    <ModalComponent v-model="active">
        <template #activator>
            <button class="rounded p-0.5 w-8" title="Como jogar">
                <Icon
                    name="bi:patch-question"
                    size="32px"
                    class="mb-0.5 text-primary-light hover:text-primary-dark"
                />
            </button>
        </template>
        <BoardComponent
            type="rounded"
            class="bg-primary-dark shadow-lg shadow-opdarken w-[92vw] max-w-[700px] overflow-hidden text-primary-light"
        >
            <div class="max-h-[80vh] overflow-y-auto p-4 bg-primary-dark">
                <div class="flex justify-between text-left">
                    <p
                        class="flex-grow font-display text-xl text-white lg:text-2xl"
                    >
                        {{ $t('home.how_to_play.title') }}
                    </p>
                    <button class="-mr-1" @click="active = false">
                        <Icon name="mdi:close" />
                    </button>
                </div>
                <div class="mt-4 text-left leading-5">
                    <p class="mb-4">{{ $t('home.how_to_play.text_1') }}</p>
                    <p class="mb-4">{{ $t('home.how_to_play.text_2') }}</p>

                    <p class="mb-4">
                        <span class="px-1 py-0.5 rounded bg-green text-white">
                            {{ $t('home.how_to_play.status_1') }}
                        </span>
                        {{ $t('home.how_to_play.status_1_desc') }}
                    </p>

                    <p class="mb-4">
                        <span class="px-1 py-0.5 rounded bg-yellow text-white">
                            {{ $t('home.how_to_play.status_2') }}
                        </span>
                        {{ $t('home.how_to_play.status_2_desc') }}
                    </p>

                    <p class="mb-4">
                        <span class="px-1 py-0.5 rounded bg-red text-white">
                            {{ $t('home.how_to_play.status_3') }}
                        </span>
                        {{ $t('home.how_to_play.status_3_desc') }}
                    </p>

                    <p
                        class="font-display text-lg mt-6 mb-4 text-white lg:text-xl"
                    >
                        {{ $t('home.how_to_play.props_title') }}
                    </p>

                    <div v-for="(prop, i) in headers" :key="i">
                        <p class="mb-2 text-white font-bold">
                            {{ $t(`home.table_headers.${prop}`) }}
                        </p>
                        <p class="mb-2">
                            {{ $t(`home.how_to_play.prop_${prop}`) }}
                        </p>
                        <p class="mb-6">
                            <span class="text-gray-100">{{
                                $t('home.how_to_play.possible_text')
                            }}</span>
                            {{ $t(`home.how_to_play.prop_possible_${prop}`) }}
                        </p>
                    </div>

                    <p class="text-lg mt-8 mb-4 text-white text-center">
                        {{ $t('home.how_to_play.good_luck') }}
                    </p>
                </div>

                <div
                    class="bg-opdarken w-fit px-12 py-2 mx-auto rounded my-4 border border-primary"
                >
                    <NextMovieIn />
                </div>
            </div>
        </BoardComponent>
    </ModalComponent>
</template>

<script setup>
import BoardComponent from './BoardComponent.vue'

const active = ref(false)

const headers = [
    'animation',
    'genre',
    'main_characters',
    'location',
    'box_office',
    'decade'
]
</script>

<style scoped>
/* Works on Firefox */
* {
    scrollbar-width: thin;
    scrollbar-color: #7595c3 #c1d1eb;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 10px;
}

*::-webkit-scrollbar-track {
    background: #c1d1eb;
}

*::-webkit-scrollbar-thumb {
    background-color: #7595c3;
    border-radius: 20px;
    border: 3px solid #c1d1eb;
}
</style>
