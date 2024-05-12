<template>
  <component
    :is="tag"
    ref="HoloTilt"
    :style="{
      // display: 'contents',
      transform: transformStyle,
      transition: 'transform 0.15s ease-out',
    }"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
const { tag, scale } = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  scale: {
    type: Number,
    default: 1,
  },
})

const HoloTilt = ref()

const {
  elementX: elX,
  elementY: elY,
  isOutside: isO,
  elementHeight: elH,
  elementWidth: elW,
} = useMouseInElement(HoloTilt)

const transformStyle = computed(() => {
  const rMax = 10

  const rX = (rMax / 2 - (elY.value / elH.value) * rMax).toFixed(2)
  const rY = ((elX.value / elW.value) * rMax - rMax / 1.5).toFixed(2)

  return !isO.value
    ? `perspective(${elW.value}px)
      rotateX(${rX}deg)
      rotateY(${rY}deg)
      ${scale ? `scale(${scale})` : ''}`
    : ''
})
</script>

<style lang="scss" scoped>
/* .card {
  transform: v-bind(transformStyle);
  transition: transform 0.15s ease-out;
} */
</style>
