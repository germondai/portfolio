<template>
  <component :is="tag" class="FloatCont" :class="preset">
    <slot />
  </component>
</template>

<script lang="ts" setup>
const { tag = 'div', preset = 'bg' } = defineProps<{
  tag?: string
  preset?: 'bg'
}>()
</script>

<style lang="scss">
.FloatCont {
  @apply pointer-events-none;

  &.bg {
    @apply absolute top-0 w-full h-full -z-[150];
  }
}
</style>
