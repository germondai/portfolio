<template>
  <div class="flex flex-col items-start gap-1">
    <sub class="font-bold">{{ $t('welcome.select_language') }}</sub>
    <a
      v-for="locale in availableLocales"
      :key="locale.code"
      href="#"
      @click.prevent.stop="setLocale(locale.code)"
    >
      <img
        :src="`/img/flags/${locale.code}.svg`"
        class="w-12"
        :title="locale.name"
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
