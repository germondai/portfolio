<template>
  <main>
    <SectionAbout />
    <SectionTimeline />
  </main>
</template>

<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: () => t('about.sub'),
  ogTitle: () => t('about.sub'),
  description: () => t('about.description'),
  ogDescription: () => t('about.description'),
})
</script>
