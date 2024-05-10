<template>
  <component :is="tag">
    {{ count }}
  </component>
</template>

<script lang="ts" setup>
const { tag, number } = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  number: {
    type: Number,
    default: 0,
  },
})

const count = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    if (count.value < number) {
      count.value++
    } else {
      clearInterval(interval)
    }
  }, 10)
})
</script>

<style lang="scss"></style>
