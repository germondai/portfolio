<template>
  <component
    :is="tag"
    ref="float"
    class="FloatItem"
    :class="preset"
    :style="parallaxStyle"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
const {
  tag = 'div',
  velocity = 1,
  preset = 'bg',
} = defineProps<{ tag?: string; velocity?: number; preset?: 'bg' }>()

const { isMobile } = useDevice()

const float = ref()
const {
  elementX: elX,
  elementY: elY,
  elementWidth: elW,
  elementHeight: elH,
} = useSharedMouseInElement({ target: float })

const parallaxStyle = computed(() => {
  const x = !isMobile
    ? Math.round((elX.value - elW.value / 2) * velocity) / 100
    : 0
  const y = !isMobile
    ? Math.round(((elY.value - elH.value / 10) * velocity) / 200)
    : 0

  return `transform: translate(${x}px, ${y}px);`
})
</script>

<style lang="scss" scoped>
.FloatItem {
  transform-style: preserve-3d;
  transition: 75ms linear all;
  @apply absolute pointer-events-none will-change-transform origin-center;

  &.bg {
    @apply w-full h-full -z-[999];
  }
}
</style>
