<script setup lang="ts">
import type { Direction } from "@nuxt/ui"
import * as uiLocales from "@nuxt/ui/locale"
import type { NuxtError } from "#app"

defineProps<{ error: NuxtError }>()

const { t } = useI18n()

const { locale } = useI18n()

const { toaster } = useAppConfig()

const direction: Direction = "ltr"

useSeoMeta({
  title: t("common.error"),
  description: t("common.error"),
  robots: "noindex, nofollow",
})
</script>

<template>
  <UApp :locale="uiLocales[locale]" :dir="direction" :toaster>
    <NuxtPwaAssets />
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="var(--ui-primary)" />

    <AppHeader />

    <UMain>
      <UContainer>
        <UPage>
          <UError :error />
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />
  </UApp>
</template>
