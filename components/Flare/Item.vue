<template>
  <div ref="lightEl" class="FlareItem relative" :style="lightStyle">
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface BeforeAfterProps {
  before?: {
    disabled?: boolean
    color?: string
    size?: number
  }
  after?: {
    disabled?: boolean
    color?: string
    size?: number
  }
}

const { before, after } = defineProps<BeforeAfterProps>()

const lightEl = ref<HTMLElement>()

const { elementX: x, elementY: y } = useMouseInElement(lightEl)

const lightStyle = computed<Record<string, string | number>>(() => {
  const styles: Record<string, string | number> = {
    '--mouse-x': `${x.value}px`,
    '--mouse-y': `${y.value}px`,
  }

  if (!before?.disabled) {
    styles['--flare-before-color'] = before?.color || '#ffffffaa'
    styles['--flare-before-size'] = before?.size || 600
  }

  if (!after?.disabled) {
    styles['--flare-after-color'] = after?.color || '#ffffff22'
    styles['--flare-after-size'] = after?.size || 400
  }

  return styles
})
</script>

<style lang="scss" scoped>
.FlareItem:hover::before,
.FlareItem:hover::after {
  opacity: 1;
}

.FlareItem::before,
.FlareItem::after {
  border-radius: inherit;
  content: '';
  height: 100%;
  left: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  transition: opacity 500ms;
  width: 100%;
  pointer-events: none;
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
