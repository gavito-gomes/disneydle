<template>
    <div
        class="bg-primary-op border-primary border-2 text-center"
        :style="`border-radius: ${borderRadius}`"
    >
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'roundBottom'
    },
    customRadius: {
        type: String,
        default: ''
    }
})

const borderRadius = computed(() => {
    switch (props.type) {
        case 'custom':
            return props.customRadius
        case 'rounded':
            return '20px'
        case 'roundTop':
            return '30% 30% 20px 20px / 60% 60% 20px 20px'
        case 'roundBottom':
        default:
            return '20px 20px 30% 30% / 20px 20px 60% 60%'
    }
})
</script>
