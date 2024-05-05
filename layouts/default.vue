<template>
    <div
        class="font-body text-white w-screen h-screen overflow-x-hidden overflow-y-auto"
    >
        <div class="background fixed w-screen h-screen -z-50 top-0 left-0" />
        <slot></slot>
    </div>
</template>

<style>
.background {
    background-image: url('/img/background.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
