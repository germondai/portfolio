<template>
  <header
    v-motion-slide-visible-once-bottom
    class="fixed top-0 w-full h-[76px] flex items-end justify-center z-40"
  >
    <nav
      class="xl:w-3/4 lg:w-[90%] sm:w-[95%] w-[98%] h-14 sm:px-8 px-2 flex items-center justify-between max-2xs:justify-around sm:gap-8 gap-2 rounded-[56px] bg-[#1f2023cc] backdrop-blur drop-shadow-md overflow-x-clip"
    >
      <ul
        class="max-lg:order-2 max-sm:hidden w-full flex items-center justify-between gap-4"
      >
        <li
          v-for="(link, index) in $tm('header')"
          :key="index"
          class="max-md:first:hidden flex"
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
        class="max-lg:order-1 flex items-center justify-center max-lg:h-[125%] h-[150%] z-20"
      >
        <img
          src="/img/skull.ico"
          alt="Skull Icon"
          class="max-w-max h-full hover:animate-[shake_.3s] anim"
        />
      </NuxtLink>
      <ul class="max-lg:hidden w-full flex items-center justify-between gap-8">
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
const { height } = useWindowSize()
const mvSect = ref('')

onMounted(() => {
  calculateLargestSection()
  window.addEventListener('scroll', calculateLargestSection)
})

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
