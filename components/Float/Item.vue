<template>
  <component
    :is="tag"
    ref="float"
    class="absolute pointer-events-none FloatItem will-change-transform"
    :class="presetClass"
    :style="{
      transform: `translate(${!$isMobile ? parallaxStyle.x : 0}px, ${!$isMobile ? parallaxStyle.y : 0}px)`,
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

const { $isMobile } = useNuxtApp()
const presetClass = preset === 'bg' ? `w-full h-full -z-[999]` : ''
const float = ref()
const {
  elementX: x,
  elementY: y,
  elementWidth: elW,
  elementHeight: elH,
} = useSharedMouseInElement(undefined, { type: 'client' })

const parallaxStyle = computed(() => {
  return {
    x: (((x.value - elW.value / 2) * velocity) / 100).toFixed(),
    y: (((y.value - elH.value / 10) * velocity) / 200).toFixed(),
  }
})
</script>

<style lang="scss" scoped></style>
