export const usePageSections = () => {
  const { height } = useWindowSize()

  const largestSection = ref<string>('')
  const sections = ref<{ y: number; id: string }[]>([])

  if (process.client) {
    const calculateLargestSection = () => {
      let largestHeight = 0
      let largestSectionId = ''

      const allSections = document.querySelectorAll('main > section')

      if (allSections.length > 0) {
        allSections.forEach((section) => {
          const { top, bottom } = section.getBoundingClientRect()

          const elementPartHeight =
            Math.min(bottom, height.value) - Math.max(top, 0)

          const existingIndex = sections.value.findIndex(
            (info) => info.id === section.id,
          )

          if (elementPartHeight > largestHeight) {
            largestHeight = elementPartHeight
            largestSectionId = section.id
          }

          if (existingIndex !== -1) {
            sections.value[existingIndex].y = elementPartHeight
          } else {
            sections.value.push({
              id: section.id,
              y: elementPartHeight,
            })
          }
        })

        largestSection.value = largestSectionId
      }
    }

    onMounted(calculateLargestSection)
    useEventListener('scroll', calculateLargestSection)
  }

  return {
    largestSection,
    sections,
  }
}
