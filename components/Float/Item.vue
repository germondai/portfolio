<template>
  <component
    :is="tag"
    class="absolute pointer-events-none FloatItem"
    :class="presetClass"
    :style="parallaxStyle"
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

const presetClass = preset === 'bg' ? `w-full h-full` : ''

const { width: wW, height: wH } = useWindowSize()
const { $isMobile } = useNuxtApp()
const parentEl = useParentElement()
const { isOutside } = useMouseInElement(parentEl)
const { x: cX, y: cY } = useMouse({ type: 'client' })

const lastStyle = ref()
const parallaxStyle = computed(() => {
  if (!$isMobile() && !isOutside.value) {
    const x = (((cX.value ?? 1) - wW.value / 2) * velocity) / 150
    const y = (((cY.value ?? 1) - wH.value) * velocity) / 150
    lastStyle.value = `transform: translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`
    return lastStyle.value
  }
  return lastStyle.value || ''
})
</script>

<style lang="scss" scoped></style>
