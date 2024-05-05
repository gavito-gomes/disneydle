<template>
    <div class="relative">
        <div @click="model = true">
            <slot name="activator" />
        </div>
        <div v-if="model">
            <div
                class="fixed top-0 left-0 z-10 w-screen h-screen"
                :class="{ 'bg-opdarken': overlay }"
                @click="model = false"
            />
            <div class="absolute z-20" :class="props.menuClass">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
const model = defineModel({ type: Boolean, required: true })
const props = defineProps({
    menuClass: {
        type: String,
        default: ''
    },
    overlay: Boolean
})
</script>
