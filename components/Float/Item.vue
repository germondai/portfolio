<template>
  <component
    :is="tag"
    ref="float"
    class="FloatItem"
    :class="preset ?? ''"
    :style="{
      transform: `translate(${parallaxStyle.x}px, ${parallaxStyle.y}px)`,
    }"
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

const { isMobile } = useDevice()

const float = ref()
const {
  elementX: x,
  elementY: y,
  elementWidth: elW,
  elementHeight: elH,
} = useSharedMouseInElement(undefined, { type: 'client' })

const parallaxStyle = computed(() => {
  return {
    x: !isMobile ? (((x.value - elW.value / 2) * velocity) / 100).toFixed() : 0,
    y: !isMobile
      ? (((y.value - elH.value / 10) * velocity) / 200).toFixed()
      : 0,
  }
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
