<template>
  <div
    ref="HoloTiltTilt"
    :style="{
      transform: cardTransform,
      transition: 'transform 0.25s ease-out',
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const HoloTiltTilt = ref()

const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(HoloTiltTilt)

const cardTransform = computed(() => {
  const MAX_ROTATION = 10

  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2)

  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 1.5
  ).toFixed(2)

  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>

<style lang="scss" scoped>
/* .card {
  transform: v-bind(cardTransform);
  transition: transform 0.25s ease-out;
} */
</style>
