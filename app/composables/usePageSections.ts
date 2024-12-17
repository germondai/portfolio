export const usePageSections = () => {
  const { height } = useWindowSize()

  const largestSection = ref<string>('')
  const sections = ref<{ id: string; y: number }[]>()

  if (process.client) {
    const updateSectionsArray = () => {
      let largestHeight = 0
      let largestSectionId = ''

      const sectionElements = document.querySelectorAll('section')
      const newSections: { y: number; id: string }[] = []

      if (sectionElements.length > 0) {
        sectionElements.forEach((section) => {
          const { top, bottom } = section.getBoundingClientRect()

          const elementPartHeight =
            Math.min(bottom, height.value) - Math.max(top, 0)

          if (elementPartHeight > largestHeight) {
            largestHeight = elementPartHeight
            largestSectionId = section.id
          }

          newSections.push({ id: section.id, y: elementPartHeight })
        })
      }

      sections.value = newSections
      largestSection.value = largestSectionId
    }

    onMounted(() => {
      updateSectionsArray()
      useEventListener('scroll', updateSectionsArray)

      useMutationObserver(document.body, updateSectionsArray, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['id'],
      })
    })
  }

  return {
    largestSection,
    sections,
  }
}
