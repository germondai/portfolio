<template>
  <div class="flex flex-col items-start gap-1">
    <sub class="font-bold">{{ $t('welcome.swap_language') }}</sub>
    <a
      v-for="langLocale in availableLocales"
      :key="langLocale.code"
      href="#"
      @click.prevent.stop="setLocale(langLocale.code)"
    >
      <Icon :name="langLocale.icon" class="size-12" />
    </a>
  </div>
</template>

<script lang="ts" setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
</script>

<style lang="scss" scoped></style>
