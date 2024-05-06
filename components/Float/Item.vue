<template>
  <div
    ref="parallaxEl"
    class="absolute pointer-events-none FloatItem"
    :style="{ transform: parallaxStyle }"
  >
    <!-- <div
    class="absolute pointer-events-none FloatItem"
    :style="{ '--v-e': velocity }"
  > -->
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

const parallaxEl = ref<HTMLElement>()

const { width: w, height: h } = useWindowSize()
const { x: clX, y: clY } = useMouseInElement(parallaxEl)

const parallaxStyle = computed(() => {
  const x = ((clX.value - w.value / 2) * velocity) / 150
  const y = ((clY.value - h.value / 2) * velocity) / 150
  return `translate(${x}px, ${y}px)`
})
</script>

<style lang="scss" scoped></style>
