<template>
  <header
    class="fixed top-0 w-full h-[76px] flex items-end justify-center z-40"
  >
    <nav
      ref="menu"
      :class="navStyles ? 'max-lg:rounded-b-none' : ''"
      class="xl:w-3/4 lg:w-[90%] sm:w-[95%] w-[98%] h-14 sm:px-8 px-2 flex items-center justify-between max-2xs:justify-around sm:gap-8 gap-2 rounded-3xl bg-[#1f2023cc] backdrop-blur drop-shadow-md"
    >
      <ul
        :class="links ? '' : 'max-sm:hidden'"
        class="max-lg:order-2 w-full flex items-center justify-between gap-4 max-sm:gap-2 max-sm:absolute top-14 left-0 max-sm:bg-[#1f2023cc] max-sm:h-14 max-sm:px-4"
      >
        <li
          v-for="(link, index) in $tm('header')"
          :key="index"
          class="max-xs:first:hidden max-sm:first:flex max-md:first:hidden flex"
        >
          <NuxtLink
            :href="$rt(link.href)"
            class="relative px-2 py-1 opacity-50 hover:opacity-100 transition-opacity"
            @click="toggleUls(false)"
          >
            {{ $rt(link.name) }}
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink
        href="./"
        class="max-lg:order-1 flex items-center justify-center h-[76px] z-20"
        :title="$t('mainpagelink')"
      >
        <NuxtImg
          src="skull.ico"
          alt="Skull Icon"
          class="max-w-max h-full hover:animate-[shake_.3s] anim"
          width="76px"
          height="76px"
          @click="toggleUls(false)"
        />
      </NuxtLink>
      <ul
        :class="[icons ? '' : 'max-lg:hidden']"
        class="w-full flex items-center justify-between max-sm:justify-between max-lg:justify-around gap-4 max-sm:gap-2 max-sm:top-28 max-lg:top-14 left-0 max-lg:bg-[#1f2023cc] max-lg:absolute max-lg:h-14 max-lg:px-4 max-lg:rounded-b-3xl"
      >
        <li v-for="(social, index) in $tm('socials')" :key="index" class="flex">
          <NuxtLink
            :href="$rt(social.href)"
            target="blank"
            :title="$rt(social.name)"
            class="relative px-2 py-1 opacity-50 hover:opacity-100 transition-opacity"
            @click="toggleUls(false)"
          >
            <Icon :name="$rt(social.icon)" color="white" class="size-9" />
          </NuxtLink>
        </li>
      </ul>
      <h3 class="max-2xs:hidden sm:hidden flex order-2">Germond</h3>
      <button
        class="lg:hidden h-4/5 flex flex-col items-center justify-around mx-2 order-3 cursor-pointer bg-transparent"
        title="Menu"
        @click="toggleUls()"
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
// const { largestSection } = usePageSections()
const { width } = useWindowSize()

const menu = ref()
const links = ref(false)
const icons = ref(false)

const navStyles = computed(() => {
  return (width.value < 1024 && icons.value) ||
    (width.value < 640 && links.value)
    ? 'max-lg:rounded-b-none'
    : ''
})

const toggleUls = (val?: boolean) => {
  if (width.value >= 640 && width.value < 1024) {
    icons.value = val ?? !icons.value
  } else if (width.value < 640) {
    links.value = icons.value = val ?? !links.value
  }
}

const handleResize = () => {
  links.value = width.value >= 640
  icons.value = width.value >= 1024
}

onClickOutside(menu, () => toggleUls(false))
useEventListener(window, 'resize', handleResize)
</script>

<style lang="scss" scoped>
header nav a::after {
  @apply content-[''] absolute left-0 bottom-1 w-full h-0.5 rounded-2xl bg-white opacity-0 duration-300 transition-opacity;
}
</style>
