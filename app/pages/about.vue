<template>
  <main>
    <SectionAbout />
    <LazySectionTimeline />
  </main>
</template>

<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: () => t('about.sub'),
  ogTitle: () => t('about.sub'),
  twitterTitle: () => t('about.sub'),
  description: () => t('about.description'),
  ogDescription: () => t('about.description'),
  twitterDescription: () => t('about.description'),
  keywords: () => t('about.keywords'),
})
</script>
