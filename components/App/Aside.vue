<template>
  <DevOnly>
    <aside class="fixed top-1/2 left-0 z-30">
      <ul>
        <li
          v-for="(section, index) in sections"
          :key="index"
          :class="section.id == largestSection ? 'bg-slate-300' : ''"
        >
          <NuxtLink :href="`#${section.id}`">
            {{ section.id }}
          </NuxtLink>
        </li>
      </ul>
      {{ sections }}
    </aside>
  </DevOnly>
</template>

<script lang="ts" setup>
const { largestSection, sections } = usePageSections()
</script>

<style lang="scss" scoped>
aside {
  transform: translate(0, -50%);
}
</style>
