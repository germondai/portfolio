<template>
  <div class="FloatCont" :class="style">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const { preset } = defineProps({
  preset: {
    type: String,
    value: 'bg' || '...',
    default: '',
  },
})

const style = computed(() => {
  return preset === 'bg' ? `absolute top-0 w-full h-full` : ''
})
</script>

<style lang="scss">
// .FloatCont:hover .FloatItem {
//   transform: none;
// }
</style>
