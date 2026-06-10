<script lang="ts" setup>
import type { Direction } from "@nuxt/ui"

import * as uiLocales from "@nuxt/ui/locale"

const { locale } = useI18n()

const direction: Direction = "ltr"

useHead({
  titleTemplate: (title) => (title ? `${title} | Germond` : "Germond's Portfolio"),
  htmlAttrs: { lang: () => locale.value },
})
</script>

<template>
  <UApp :locale="uiLocales[locale]" :dir="direction">
    <NuxtPwaAssets />
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="var(--ui-primary)" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
