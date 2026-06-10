<script lang="ts" setup>
import type { CommandPaletteGroup, CommandPaletteItem } from "@nuxt/ui"

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => (open.value = !open.value),
  },
  "/": {
    usingInput: true,
    handler: () => (open.value = !open.value),
  },
})

const open = shallowRef<boolean>(false)

const search = shallowRef<string>("")

const { t } = useI18n()
const colorMode = useColorMode()
const appConfig = useAppConfig()

const groups: CommandPaletteGroup[] = [
  {
    id: "theme",
    label: t("dashboardSearch.theme"),
    items: [
      {
        label: t("colorMode.system"),
        icon: appConfig.ui.icons.system,
        active: colorMode.preference === "system",
        onSelect: () => (colorMode.preference = "system"),
      },
      {
        label: t("colorMode.light"),
        icon: appConfig.ui.icons.light,
        active: colorMode.preference === "light",
        onSelect: () => (colorMode.preference = "light"),
      },
      {
        label: t("colorMode.dark"),
        icon: appConfig.ui.icons.dark,
        active: colorMode.preference === "dark",
        onSelect: () => (colorMode.preference = "dark"),
      },
    ],
  },
]

const onSelect = (item: CommandPaletteItem) => {
  if (item.disabled) return
  open.value = false
  search.value = ""
}
</script>

<template>
  <UModal v-model:open="open" title="Search" description="Search for anything in the app">
    <UTooltip text="Search" :kbds="['meta', 'K']">
      <UButton title="Search" variant="ghost" icon="lucide:search" />
    </UTooltip>
    <template #content>
      <UCommandPalette
        v-model:searchTerm="search"
        :groups
        placeholder="Search for anything..."
        @update:modelValue="onSelect"
      />
    </template>
  </UModal>
</template>
