<template>
  <component :is="tag" ref="HoloTilt" class="HoloTilt" :style="transformStyle">
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

const { isMobile } = useDevice()
const HoloTilt = ref()

const {
  elementX: elX,
  elementY: elY,
  elementWidth: elW,
  elementHeight: elH,
  isOutside: isO,
} = useMouseInElement(HoloTilt)

const transformStyle = computed(() => {
  const rMax = 10

  const rX = (rMax / 2 - (elY.value / elH.value) * rMax).toFixed()
  const rY = ((elX.value / elW.value) * rMax - rMax / 1.5).toFixed()

  return !isO.value && !isMobile
    ? `transform: perspective(${elW.value.toFixed()}px)
        rotateX(${rX}deg)
        rotateY(${rY}deg)
        ${scale ? `scale(${scale})` : ''};`
    : ''
})
</script>

<style lang="scss" scoped>
.HoloTilt {
  transform-style: preserve-3d;
  transition: 150ms linear all;
  @apply will-change-transform transform-gpu origin-center;
}
</style>
