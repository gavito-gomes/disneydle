<template>
    <DropDown v-model="showDrop" overlay menu-class="right-0 md:right-auto">
        <template #activator>
            <button class="rounded bg-primary hover:bg-primary-op w-8">
                <Icon
                    :name="selectedLang ? `flag:${selectedLang.icon}-4x3` : ''"
                />
            </button>
        </template>

        <ul class="bg-primary flex flex-col rounded">
            <li v-for="(lang, i) in languages" :key="i">
                <button
                    class="flex w-[160px] p-2 hover:bg-opdarken"
                    @click="setLang(lang.value)"
                >
                    <div class="w-7 mr-2">
                        <Icon :name="lang ? `flag:${lang.icon}-4x3` : ''" />
                    </div>
                    <span>{{ lang.name }}</span>
                </button>
            </li>
        </ul>
    </DropDown>
</template>

<script setup>
import { languages } from '~/i18n'
const { $locale } = useNuxtApp()
const router = useRouter()

const showDrop = ref(false)

const selectedLang = computed(() =>
    languages.find((lang) => lang.value === $locale.get().value)
)

async function setLang(lang) {
    await router.push({ query: { lang } })
    $locale.set(lang)
    showDrop.value = false
    // router.go()
}
</script>
