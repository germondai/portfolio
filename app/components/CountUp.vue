<template>
  <component :is="tag" ref="target">{{ count }}</component>
</template>

<script setup lang="ts">
const { tag, number, duration } = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  number: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 1000,
  },
})

const count = ref(number)
const animateCount = () => {
  const startTime = performance.now()

  const animate = (currentTime: number) => {
    const progress = Math.min(1, (currentTime - startTime) / duration)
    count.value = Math.floor(number * progress)

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

const target = ref(null)
const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animateCount()
    stop()
  }
})
</script>

<style lang="scss" scoped></style>
