<template>
  <component :is="tag" class="FlareCont">
    <slot />
  </component>
</template>

<script lang="ts" setup>
const { tag } = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
})
</script>

<style lang="scss">
.FlareCont:hover .FlareItem {
  &::after,
  &::before {
    opacity: 1;
  }
}
</style>
