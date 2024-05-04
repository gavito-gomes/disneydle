<template>
    <DropDown v-model="showDrop">
        <template #activator>
            <button class="rounded bg-primary p-0.5">
                <img
                    :src="selectedLang?.image || ''"
                    class="w-7 border-opdarken border"
                />
            </button>
        </template>

        <ul class="bg-primary flex flex-col rounded">
            <li v-for="(lang, i) in languages" :key="i">
                <button
                    class="flex w-[160px] p-2 hover:bg-opdarken"
                    @click="setLang(lang.value)"
                >
                    <img :src="lang.image" class="w-7 mr-2" />
                    <span>{{ lang.name }}</span>
                </button>
            </li>
        </ul>
    </DropDown>
</template>

<script setup>
import { languages } from '~/i18n'
const { $i18n } = useNuxtApp()
const router = useRouter()

const showDrop = ref(false)

const currLang = computed(() => $i18n.global.locale.value)
const selectedLang = computed(() =>
    languages.find((lang) => lang.value === currLang.value)
)

async function setLang(lang) {
    $i18n.global.locale.value = lang
    await router.push({ query: { lang } })
    showDrop.value = false
    // router.go()
}
</script>
