<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  number: Number,
})

const displayNumber = ref(0)

onMounted(() => {
  let start = 0
  const end = props.number
  const duration = 2000
  const stepTime = Math.abs(Math.floor(duration / end))

  const timer = setInterval(() => {
    start += 1
    displayNumber.value = start
    if (start >= end) {
      clearInterval(timer)
    }
  }, stepTime)
})
</script>

<template>
  <span>{{ displayNumber }}+</span>
</template>
