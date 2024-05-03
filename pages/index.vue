<template>
    <div>
        <div class="flex justify-center">
            <img src="/img/logo.png" class="mt-12" />
        </div>

        <div class="flex justify-center mt-4">
            <BoardComponent class="w-[600px] text-center">
                <p class="text-xl">
                    {{ $t('home.guess_the_movie') }}
                </p>
                <p class="mt-3">
                    {{ $t('home.choose_anyone') }}
                </p>
            </BoardComponent>
        </div>
    </div>
</template>

<script setup></script>

<style></style>
