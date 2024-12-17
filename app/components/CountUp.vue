<template>
  <component :is="tag" ref="target">{{ count }}</component>
</template>

<script setup lang="ts">
const {
  tag = 'div',
  number = 0,
  duration = 1000,
} = defineProps<{
  tag?: string
  number?: number
  duration?: number
}>()

const count = ref<number>(0)

const animateCount = () => {
  const startTime = performance.now()

  const animate = (currentTime: number) => {
    const progress = Math.min(1, (currentTime - startTime) / duration)
    count.value = Math.floor(number * progress)

    if (progress < 1) requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
}

const target = ref<HTMLElement>()

const { stop } = useIntersectionObserver(target, (entries) => {
  const entry = entries[0]
  if (!entry?.isIntersecting) return
  animateCount()
  stop()
})
</script>
