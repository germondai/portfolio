<template>
  <component
    :is="tag"
    class="absolute pointer-events-none FloatItem"
    :class="presetClass"
    :style="{ transform: parallaxStyle }"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
const { tag, velocity, preset } = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  velocity: {
    type: Number,
    default: 1,
  },
  preset: {
    type: String,
    value: 'bg' || '...',
    default: '',
  },
})

const presetClass = computed(() => {
  return preset === 'bg' ? `w-full h-full` : ''
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
