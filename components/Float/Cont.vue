<template>
  <component
    :is="tag"
    class="pointer-events-none FloatCont"
    :class="presetClass"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
const { tag, preset } = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  preset: {
    type: String,
    value: 'bg' || '...',
    default: '',
  },
})

const presetClass = computed(() => {
  return preset === 'bg' ? `absolute top-0 w-full h-full` : ''
})
</script>

<style lang="scss">
// .FloatCont:hover .FloatItem {
//   transform: none;
// }
</style>
