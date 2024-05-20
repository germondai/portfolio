<template>
  <DevOnly>
    <aside
      v-if="sections"
      class="fixed lg:top-1/2 xs:top-[90%] max-xs:top-[94%] lg:left-[95%] max-lg:left-1/2 z-30"
    >
      <FlareItem
        class="p-0.5 rounded-2xl"
        :after="{ color: '#ffffff11', size: 128 }"
        :before="{ color: '#ffffff44', size: 512 }"
      >
        <ul
          class="flex lg:flex-col items-center justify-center gap-2 p-2 bg-[#1d1c30cc] rounded-2xl"
        >
          <li
            v-for="(section, index) in sections"
            :key="index"
            :style="section.id == largestSection ? 'background: #45307f' : ''"
          >
            <NuxtLink :href="`#${section.id}`" :title="section.id">
              <Icon
                :name="icons[section.id] ?? 'line-md:question-circle'"
                class="size-8 opacity-80 hover:opacity-100"
              />
            </NuxtLink>
          </li>
          <template v-if="y > 500">
            <li class="divider"></li>
            <li>
              <BtnScrollToTop />
            </li>
          </template>
        </ul>
      </FlareItem>
    </aside>
  </DevOnly>
</template>

<script lang="ts" setup>
const { y } = useWindowScroll({ behavior: 'smooth' })
const { largestSection, sections } = usePageSections()
const icons: Record<string, string> = {
  welcome: 'mdi:hand-wave-outline',
  about: 'material-symbols:account-circle-outline',
  timeline: 'mdi:timeline-clock-outline',
  work: 'material-symbols:work-outline',
  contact: 'material-symbols:call-log',
}
</script>

<style lang="scss" scoped>
aside {
  transform: translate(-50%, -50%);

  ul li {
    &:not(.divider) {
      @apply grid place-items-center rounded-xl aspect-square size-12 overflow-hidden shadow-xl bg-[#2b2242] hover:bg-[#36275e] transition-colors;
    }

    &.divider {
      @apply w-11/12 h-px  bg-[#ffffff44];
    }
  }
}
</style>
