<template>
  <component :is="tag" class="FloatCont" :class="preset ?? ''">
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
</script>

<style lang="scss">
.FloatCont {
  @apply pointer-events-none;
  &.bg {
    @apply absolute top-0 w-full h-full -z-[999];
  }
}
</style>
