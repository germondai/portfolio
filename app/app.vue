<template>
  <VitePwaManifest />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const img = '/portfolio-germondai.webp'

useSeoMeta({
  ogImage: img,
  twitterImage: img,
})
</script>
