<template>
    <div
        :class="`test-border bg-primary-op
         border-primary border-2 text-shadow
         text-center p-5`"
    >
        <div class="bg-">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.test-border {
    border-radius: 20px 20px 30% 30% / 20px 20px 60% 60%;
}
</style>
