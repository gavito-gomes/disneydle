<template>
    <Transition name="fade">
        <div
            v-if="active"
            class="fixed w-svw h-svh top-0 z-50 bg-gradient-to-tr from-primary to-primary-dark flex justify-center items-center"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"
                >
                    <animateTransform
                        attributeName="transform"
                        dur="0.75s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="0 12 12;360 12 12"
                    />
                </path>
            </svg>
        </div>
    </Transition>
</template>

<script setup>
defineProps({
    active: {
        type: Boolean,
        default: false
    }
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
