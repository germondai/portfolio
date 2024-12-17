<template>
  <main>
    <SectionAbout />
    <SectionTimeline />
  </main>
</template>

<script lang="ts" setup>
const desc =
  'Overview about me, my skills, technologies I use and timeline of my programming career.'

useSeoMeta({
  description: desc,
  ogDescription: desc,
})
</script>
