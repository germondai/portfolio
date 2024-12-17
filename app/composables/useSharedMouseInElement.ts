import {
  type MaybeElementRef,
  type MouseInElementOptions,
  defaultWindow,
} from '@vueuse/core'

export interface UseSharedMouseInElementProps {
  target?: MaybeElementRef
  options?: MouseInElementOptions
}

export const useSharedMouseInElement = ({
  target,
  options: { handleOutside = true, window = defaultWindow, ...options } = {},
}: UseSharedMouseInElementProps) => {
  const type = options.type || 'page'

  const { x, y, sourceType } = useMouse(options)

  const targetRef = ref(
    target && target !== null ? target : window?.document.body,
  )

  const elementX = ref<number>(0)
  const elementY = ref<number>(0)
  const elementPositionX = ref<number>(0)
  const elementPositionY = ref<number>(0)
  const elementHeight = ref<number>(0)
  const elementWidth = ref<number>(0)
  const isOutside = ref<boolean>(true)

  let stop = () => {}

  if (window) {
    stop = watchThrottled(
      [targetRef, x, y],
      () => {
        const el = unrefElement(targetRef)
        if (!el || !(el instanceof Element)) return

        const { left, top, width, height } = el.getBoundingClientRect()

        elementPositionX.value = left + (type === 'page' ? window.scrollX : 0)
        elementPositionY.value = top + (type === 'page' ? window.scrollY : 0)

        elementHeight.value = height
        elementWidth.value = width

        const elX = x.value - elementPositionX.value
        const elY = y.value - elementPositionY.value

        isOutside.value =
          width === 0 ||
          height === 0 ||
          elX < 0 ||
          elY < 0 ||
          elX > width ||
          elY > height

        if (handleOutside || !isOutside.value) {
          elementX.value = elX
          elementY.value = elY
        }
      },
      { immediate: true, throttle: 50 },
    )

    useEventListener(document, 'mouseleave', () => (isOutside.value = true))
  }

  return {
    x,
    y,
    sourceType,
    elementX,
    elementY,
    elementPositionX,
    elementPositionY,
    elementHeight,
    elementWidth,
    isOutside,
    stop,
  }
}
