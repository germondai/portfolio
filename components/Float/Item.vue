<template>
  <div class="absolute FloatItem" :style="{ transform: parallaxStyle }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const { velocity } = defineProps({
  velocity: {
    type: Number,
    default: 1,
  },
})

const mouseX = ref(0)
const mouseY = ref(0)

const parallaxStyle = computed(() => {
  const x = ((mouseX.value - window.innerWidth / 2) * velocity) / 150
  const y = ((mouseY.value - window.innerHeight) * velocity) / 150
  return `translate(${x}px, ${y}px)`
})

const handleMouseMove = (event: any) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})
</script>

<style lang="scss" scoped></style>
