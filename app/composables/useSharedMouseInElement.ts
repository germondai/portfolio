import { defaultWindow, watchThrottled, unrefElement } from '@vueuse/core'
import type { MaybeElementRef, MouseInElementOptions } from '@vueuse/core'

export function useSharedMouseInElement(
  target?: MaybeElementRef,
  options: MouseInElementOptions = {},
) {
  const { x, y } = useMouse(options)

  const targetRef = ref(target ?? window?.document.body)
  const elementX = ref(0)
  const elementY = ref(0)
  const elementWidth = ref(0)
  const elementHeight = ref(0)
  const isOutside = ref<boolean>()

  if (defaultWindow) {
    watchThrottled(
      [targetRef, x, y],
      () => {
        const el = unrefElement(targetRef)
        if (!el) {
          return
        }

        const { top, right, bottom, left } = el.getBoundingClientRect()

        const eX = x.value - (left + defaultWindow!.scrollX)
        const eY = y.value - (top + defaultWindow!.scrollY)

        if (
          Math.abs(eX) > 1500 ||
          Math.abs(eY) > 1500 ||
          defaultWindow!.screen.width <= 768
        ) {
          return
        }

        elementX.value = eX
        elementY.value = eY
        elementWidth.value = el.clientWidth
        elementHeight.value = el.clientHeight
        isOutside.value =
          elementX.value < left ||
          elementX.value > right ||
          elementY.value < top ||
          elementY.value > bottom
      },
      { immediate: true, throttle: 50 },
    )
  }

  return {
    x,
    y,
    elementX,
    elementY,
    elementWidth,
    elementHeight,
    isOutside,
  }
}
