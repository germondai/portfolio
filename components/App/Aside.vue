<template>
  <aside>
    <ul>
      <li v-for="(section, index) in sections" :key="index">
        {{ section }}
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
const { largestSection, sections } = usePageSections()
</script>

<style lang="scss"></style>
