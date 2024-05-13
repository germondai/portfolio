<template>
  <component
    :is="tag"
    class="absolute pointer-events-none FloatItem"
    :class="presetClass"
    :style="parallaxStyle"
  >
    {{ parallaxStyle }}
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
const { x: cX, y: cY } = useMouse({ type: 'client' })

const parallaxStyle = computed(() => {
  const x = ((cX.value ?? 1 - wW.value / 2) * velocity) / 150
  const y = ((cY.value ?? 1 - wH.value) * velocity) / 150
  return `transform: translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`
})
</script>

<style lang="scss" scoped></style>
