<template>
  <component
    :is="tag"
    ref="lightEl"
    class="relative FlareItem"
    :style="{
      '--x': `${!$isMobile ? elementX.toFixed() : -9999}px`,
      '--y': `${!$isMobile ? elementY.toFixed() : -9999}px`,
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
const { tag, before, after } = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  before: {
    type: Object as () => {
      color: string
      size: number
    },
    default: () => ({
      color: '#ffffffaa',
      size: 600,
    }),
  },
  after: {
    type: Object as () => {
      color: string
      size: number
    },
    default: () => ({
      color: '#ffffff11',
      size: 400,
    }),
  },
})

const lightEl = ref<HTMLElement>()
const { elementX, elementY } = useSharedMouseInElement(lightEl)
</script>

<style lang="scss" scoped>
.FlareItem:hover::before,
.FlareItem:hover::after {
  @apply opacity-100 will-change-[background];
}

.FlareItem::before,
.FlareItem::after {
  @apply content-[''] absolute top-0 left-0 w-full h-full opacity-0 rounded-[inherit] pointer-events-none duration-500 transition-opacity;
}

.FlareItem::before {
  background: radial-gradient(
    var(--fbs) circle at var(--x) var(--y),
    var(--fbc),
    transparent 40%
  );
  z-index: -1;
}

.FlareItem::after {
  background: radial-gradient(
    var(--fas) circle at var(--x) var(--y),
    var(--fac),
    transparent 40%
  );
  z-index: 1;
}
</style>
