<template>
  <main>
    <SectionWelcome />
    <LazySectionAbout />
    <LazySectionTimeline hydrate-on-visible />
    <LazySectionWork hydrate-on-visible />
    <LazySectionContact lazy hydrate-on-interaction />
  </main>
</template>

<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  description: () => t('welcome.description'),
  ogDescription: () => t('welcome.description'),
  twitterDescription: () => t('welcome.description'),
  keywords: () => t('welcome.keywords'),
})
</script>
