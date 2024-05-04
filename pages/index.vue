<template>
    <div>
        <div class="flex justify-center items-center mt-12">
            <div class="w-7"></div>
            <img src="/img/logo.png" />
            <LanguageSelector class="ml-3" />
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
