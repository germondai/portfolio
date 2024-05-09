<template>
  <div class="flex flex-col items-start gap-1">
    <sub class="font-bold">{{ $t('welcome.swap_language') }}</sub>
    <a
      v-for="langLocale in availableLocales"
      :key="langLocale.code"
      href="#"
      @click.prevent.stop="setLocale(langLocale.code)"
    >
      <img
        :src="`/img/flags/${langLocale.code}.svg`"
        class="w-12"
        :title="langLocale.name"
      />
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
