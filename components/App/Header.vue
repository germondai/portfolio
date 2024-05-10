<template>
  <header
    v-motion-slide-visible-once-bottom
    class="fixed top-0 w-full h-[76px] flex items-end justify-center z-40"
  >
    <nav
      ref="menu"
      :class="navStyles"
      class="xl:w-3/4 lg:w-[90%] sm:w-[95%] w-[98%] h-14 sm:px-8 px-2 flex items-center justify-between max-2xs:justify-around sm:gap-8 gap-2 rounded-3xl bg-[#1f2023cc] backdrop-blur drop-shadow-md overflow-x-clip"
    >
      <ul
        :style="`display: ${dropdown.links ? 'flex' : 'none'}`"
        class="max-lg:order-2 max-sm:hidden w-full flex items-center justify-between gap-4 max-sm:gap-2 max-sm:absolute top-14 left-0 max-sm:bg-[#1f2023cc] max-sm:h-14 max-sm:px-4"
      >
        <li
          v-for="(link, index) in $tm('header')"
          :key="index"
          class="max-xs:first:hidden max-sm:first:flex max-md:first:hidden flex"
        >
          <NuxtLink
            :href="$rt(link.href)"
            :class="`#${mvSect}` == $rt(link.href) ? 'active' : ''"
            class="relative px-2 py-1 opacity-50 hover:opacity-100 transition-opacity"
          >
            {{ $rt(link.name) }}
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink
        href="./"
        class="max-lg:order-1 flex items-center justify-center h-[76px] z-20"
      >
        <img
          src="/img/skull.ico"
          alt="Skull Icon"
          class="max-w-max h-full hover:animate-[shake_.3s] anim"
        />
      </NuxtLink>
      <ul
        :style="`display: ${dropdown.icons ? 'flex' : 'none'}`"
        class="max-lg:hidden w-full flex items-center justify-between gap-8 max-sm:gap-2 max-sm:top-28 max-lg:top-14 left-0 max-lg:bg-[#1f2023cc] max-lg:absolute max-lg:h-14 max-lg:px-4 max-lg:rounded-b-3xl"
      >
        <li v-for="(social, index) in $tm('socials')" :key="index">
          <NuxtLink
            :href="$rt(social.href)"
            target="blank"
            class="relative px-2 py-1 opacity-50 hover:opacity-100 transition-opacity"
          >
            <img
              :src="$rt(social.src)"
              :alt="$rt(social.alt)"
              class="size-9 max-w-max"
            />
          </NuxtLink>
        </li>
      </ul>
      <h3 class="max-2xs:hidden sm:hidden flex order-2">Germond</h3>
      <button
        class="lg:hidden h-4/5 flex flex-col items-center justify-around mx-2 order-3 cursor-pointer bg-transparent"
        title="Menu"
        @click.stop="menuToggle(true)"
      >
        <span
          v-for="index in 3"
          :key="index"
          class="block bg-white w-12 h-1.5 rounded-[4px]"
        ></span>
      </button>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const { width, height } = useWindowSize()

// dropdown links and icons
const dropdown = ref({
  links: false,
  icons: false,
})

const navStyles = computed(() => {
  return (width.value < 1024 && dropdown.value.icons) ||
    (width.value < 640 && dropdown.value.links)
    ? 'max-lg:rounded-b-none'
    : ''
})

const menuToggle = (val: boolean) => {
  dropdown.value.icons =
    width.value < 1024 && dropdown.value.icons ? false : val
  dropdown.value.links =
    width.value < 640 ? dropdown.value.icons : dropdown.value.links
}

watchEffect(() => {
  dropdown.value.links = width.value >= 640 ? true : dropdown.value.icons
  dropdown.value.icons =
    width.value >= 1024 || (width.value < 640 && dropdown.value.icons)
})

const menu = ref(null)
onClickOutside(menu, () => menuToggle(dropdown.value.icons))

// Highlight link by section
onMounted(() => {
  calculateLargestSection()
  window.addEventListener('scroll', calculateLargestSection)
})

const mvSect = ref('')
const calculateLargestSection = () => {
  const sections = document.querySelectorAll('main > section')
  const sectionsInfo: { y: number; id: string }[] = []

  sections.forEach((section) => {
    const { top, bottom } = useElementBounding(section as HTMLElement)
    const elementPartHeight =
      Math.min(bottom.value, height.value) - Math.max(top.value, 0)
    sectionsInfo.push({
      y: elementPartHeight,
      id: section.id == 'timeline' ? 'about' : section.id,
    })
  })

  mvSect.value = sectionsInfo.sort((a, b) => b.y - a.y)[0].id
}
</script>

<style lang="scss" scoped>
header nav a::after {
  @apply content-[''] absolute left-0 bottom-1 w-full h-0.5 rounded-2xl bg-white opacity-0 duration-300 transition-opacity;
}

header nav a.active::after {
  @apply opacity-70 hover:opacity-100;
}
</style>
