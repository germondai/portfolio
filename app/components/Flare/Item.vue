<template>
  <component
    :is="tag"
    ref="target"
    class="FlareItem"
    :style="{
      '--x': `${Math.round(elementX)}px`,
      '--y': `${Math.round(elementY)}px`,
      '--fbc': before.color,
      '--fbs': `${before.size}px`,
      '--fac': after.color,
      '--fas': `${after.size}px`,
    }"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import type { Flare } from './types'

const {
  tag = 'div',
  before = { color: '#ffffffaa', size: 600 },
  after = { color: '#ffffff11', size: 400 },
} = defineProps<{
  tag?: Component
  before?: Flare
  after?: Flare
}>()

const target = templateRef<HTMLElement>('target')
const { elementX, elementY } = useSharedMouseInElement({ target })
</script>

<style lang="scss" scoped>
.FlareItem {
  @apply relative;

  &:hover {
    &::before,
    &::after {
      @apply opacity-100 will-change-[background];
    }
  }

  &::before,
  &::after {
    @apply content-[''] absolute top-0 left-0 w-full h-full rounded-[inherit] pointer-events-none duration-500 transition-opacity;
  }

  &::before {
    background: radial-gradient(
      var(--fbs) circle at var(--x) var(--y),
      var(--fbc),
      transparent 40%
    );
    z-index: -1;
  }

  &::after {
    background: radial-gradient(
      var(--fas) circle at var(--x) var(--y),
      var(--fac),
      transparent 40%
    );
    z-index: 1;
  }
}
</style>
