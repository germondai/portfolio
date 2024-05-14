<template>
  <component
    :is="tag"
    ref="lightEl"
    class="relative FlareItem"
    :style="lightStyle"
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
      disabled?: boolean
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
      disabled?: boolean
      color: string
      size: number
    },
    default: () => ({
      color: '#ffffff22',
      size: 400,
    }),
  },
})

const lightEl = ref<HTMLElement>()
const { $isMobile } = useNuxtApp()
const { elementX: x, elementY: y } = useMouseInElement(lightEl)

const lightStyle = !$isMobile()
  ? computed<Record<string, string | number>>(() => {
      const styles: Record<string, string | number> = {
        '--mouse-x': `${x.value}px`,
        '--mouse-y': `${y.value}px`,
      }

      if (!before.disabled) {
        styles['--flare-before-color'] = before.color
        styles['--flare-before-size'] = before.size
      }

      if (!after.disabled) {
        styles['--flare-after-color'] = after.color
        styles['--flare-after-size'] = after.size
      }

      return styles
    })
  : ''
</script>

<style lang="scss" scoped>
.FlareItem:hover::before,
.FlareItem:hover::after {
  @apply opacity-100;
}

.FlareItem::before,
.FlareItem::after {
  @apply content-[''] absolute top-0 left-0 w-full h-full opacity-0 rounded-[inherit] pointer-events-none duration-500 transition-opacity;
}

.FlareItem::before {
  background: radial-gradient(
    calc(var(--flare-before-size) * 1px) circle at var(--mouse-x) var(--mouse-y),
    var(--flare-before-color),
    transparent 40%
  );
  z-index: -1;
}

.FlareItem::after {
  background: radial-gradient(
    calc(var(--flare-after-size) * 1px) circle at var(--mouse-x) var(--mouse-y),
    var(--flare-after-color),
    transparent 40%
  );
  z-index: 1;
}
</style>
