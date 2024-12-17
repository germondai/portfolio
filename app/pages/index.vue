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
const { t } = useI18n()

useSeoMeta({
  description: () => t('welcome.description'),
  ogDescription: () => t('welcome.description'),
})
</script>
