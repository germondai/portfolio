<template>
  <main>
    <SectionWelcome />
    <LazySectionAbout />
    <LazySectionTimeline />
    <LazySectionWork />
    <LazySectionContact />
  </main>
</template>

<script lang="ts" setup>
const desc =
  'An Aspiring Full-Stack Web Developer. Make sure to check out my creations!'

useSeoMeta({
  description: desc,
  ogDescription: desc,
})
</script>

<style lang="scss" scoped></style>
