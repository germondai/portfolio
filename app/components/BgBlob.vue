<template>
  <div class="BgBlob" />
</template>

<script lang="ts" setup>
const { color = '#ffffff22' } = defineProps<{ color?: string }>()
</script>

<style lang="scss">
.BgBlob {
  @apply absolute min-w-64 min-h-64 aspect-square bg-[v-bind(color)] rounded-full blur-3xl -z-[300] pointer-events-none -translate-x-[50%] -translate-y-[50%];
}
</style>
