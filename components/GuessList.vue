<template>
    <div class="mt-5 w-11/12 max-w-[780px] overflow-x-auto">
        <div class="w-fit">
            <table class="border-separate border-spacing-1 w-fit table-fixed">
                <thead>
                    <tr>
                        <th
                            v-for="(header, i) in headers"
                            :key="i"
                            :width="header.width"
                            class="font-normal pb-2 border-primary border-b-4 text-sm"
                        >
                            {{ $t(`home.table_headers.${header.name}`) }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(guess, i) in guessList" :key="i">
                        <td v-for="(header, j) in headers" :key="j">
                            <div
                                :width="header.width"
                                class="box-border border h-[65px] border-primary my-1 overflow-hidden text-sm"
                                :class="[
                                    getBg(guess[header.field][lang].status)
                                ]"
                            >
                                <div v-if="j === 0">
                                    <img
                                        :src="`${baseUrl}/${guess[header.field][lang]}`"
                                        class="h-[65px] w-[120px]"
                                    />
                                </div>
                                <div
                                    v-else
                                    class="h-full flex justify-center items-center p-0.5 text-sm"
                                >
                                    <p class="text-center">
                                        {{ guess[header.field][lang].value }}
                                    </p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const { $storage, $locale } = useNuxtApp()

const lang = $locale.get()
const baseUrl = config.public.apiUrl

const guessList = ref([])

onMounted(() => {
    guessList.value = $storage.getItem('guessList') || []
})

const headers = [
    {
        name: 'movie',
        width: '120',
        field: 'cover_image'
    },
    {
        name: 'animation',
        width: '90',
        field: 'animation_style'
    },
    {
        name: 'genre',
        width: '120',
        field: 'genre'
    },
    {
        name: 'main_characters',
        width: '120',
        field: 'main_character_types'
    },
    {
        name: 'location',
        width: '120',
        field: 'location'
    },
    {
        name: 'box_office',
        width: '90',
        field: 'box_office'
    },
    {
        name: 'decade',
        width: '70',
        field: 'decade'
    }
]

function getBg(status) {
    switch (status) {
        case 'correct':
            return 'bg-green'
        case 'wrong':
            return 'bg-red'
        case 'partial':
            return 'bg-yellow'
        case 'less_than':
            return 'bg-less-than'
        case 'greater_than':
            return 'bg-greater-then'
        default:
            return ''
    }
}
</script>

<style scoped>
.bg-less-than {
    background: url('/img/status/less_than.png');
    background-position: center;
    background-size: auto 90px;
}
.bg-greater-then {
    background: url('/img/status/greater_than.png');
    background-position: center;
    background-size: auto 90px;
}
</style>
