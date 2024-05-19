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
useSeoMeta({
  ogImage: '/img/portfolio-germondai.webp',
  ogTitle: "Germond's Portfolio",
  ogDescription:
    'An Aspiring Full-Stack Web Developer. Make sure to check out my creations!',
})
</script>

<style lang="scss" scoped></style>
