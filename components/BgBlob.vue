<template>
  <div class="BgBlob" />
</template>

<script lang="ts" setup>
const { color } = defineProps({
  color: {
    type: String,
    default: '#ffffff22',
  },
})
</script>

<style lang="scss">
.BgBlob {
  @apply absolute min-w-16 min-h-16 aspect-square bg-[v-bind(color)] rounded-full blur-3xl -z-[300] pointer-events-none -translate-x-[50%] -translate-y-[50%];
}
</style>
