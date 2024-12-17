<template>
  <component :is="tag" ref="target">{{ count }}</component>
</template>

<script setup lang="ts">
const {
  tag = 'div',
  number = 0,
  duration = 1000,
} = defineProps<{ tag?: string; number?: number; duration?: number }>()

const count = ref(number)
const animateCount = () => {
  const startTime = performance.now()

  const animate = (currentTime: number) => {
    const progress = Math.min(1, (currentTime - startTime) / duration)
    count.value = Math.floor(number * progress)

    if (progress < 1) requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
}

const target = ref(null)

const { stop } = useIntersectionObserver(target, ({ isIntersecting }) => {
  if (!isIntersecting) return

  animateCount()
  stop()
})
</script>
