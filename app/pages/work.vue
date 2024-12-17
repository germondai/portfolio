<template>
  <main>
    <SectionWork />
    <LangSwitcher />
  </main>
</template>

<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: () => t('work.sub'),
  ogTitle: () => t('work.sub'),
  description: () => t('work.description'),
  ogDescription: () => t('work.description'),
})
</script>
