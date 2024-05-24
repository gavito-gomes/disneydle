<template>
    <div class="relative">
        <div @click="model = true">
            <slot name="activator" />
        </div>
        <div v-if="model">
            <div
                class="fixed top-0 left-0 z-40 w-screen h-screen flex justify-center items-center"
                :class="[overlayColor]"
                @click="model = !!persistent"
            >
                <div class="" @click.stop>
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const model = defineModel({ type: Boolean, required: true })
const props = defineProps({
    persistent: Boolean,
    overlayColor: {
        type: String,
        default: 'bg-[#00000066]'
    }
})
</script>
