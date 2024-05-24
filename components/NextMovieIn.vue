<template>
    <div>
        <p>{{ $t('home.time_remaining') }}</p>
        <p class="my-2 text-3xl">{{ remainingTime }}</p>
    </div>
</template>

<script setup>
import moment from 'moment'
const { $api } = useNuxtApp()

const remainingTime = ref('')
const interval = ref(null)

onMounted(() => {
    getTimeRemaining()
})
onUnmounted(() => {
    clearInterval(interval.value)
})

async function getTimeRemaining() {
    try {
        const {
            data: { remaining }
        } = await $api.get('/movies/timeRemaining')
        remainingTime.value = moment()
            .startOf('day')
            .add(remaining * 60, 'seconds')
            .format('hh:mm:ss')

        interval.value = setInterval(() => {
            remainingTime.value = moment(remainingTime.value, 'hh:mm:ss')
                .subtract(1, 'second')
                .format('hh:mm:ss')
        }, 1000)
    } catch (error) {
        console.log(error)
    }
}
</script>
