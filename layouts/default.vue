<template>
    <div class="background text-body text-white">
        <slot></slot>
    </div>
</template>

<style>
.background {
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url('/img/background.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
