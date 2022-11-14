<script setup>
import { onMounted, shallowRef } from 'vue';
const Com = shallowRef(null)
const props = defineProps(['load'])

onMounted(() => {
    props.load().then((module) => {
        Com.value = module.default
    })
})
</script>

<template>
    <component :is="Com" />
</template>