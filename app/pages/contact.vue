<template>
  <main>
    <SectionContact />
  </main>
</template>

<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: () => t('contact.sub'),
  ogTitle: () => t('contact.sub'),
  description: () => t('contact.description'),
  ogDescription: () => t('contact.description'),
})
</script>
