<template>
  <ClientOnly>
    <button
      v-if="condition ? y > 500 : false"
      id="btnScrollToTop"
      title="Scroll To Top"
      :class="{
        'fixed flex items-center justify-center bottom-12 max-md:bottom-3 max-xs:bottom-20 max-md:right-3 right-6 size-12 p-1 rounded-full text-2xl border-4 border-white z-[999] hover:bg-[#2b2244] bg-[#1f2023cc] shadow-xl transition-colors duration-500':
          styled,
      }"
      @click="y = 0"
    >
      <Icon name="material-symbols:arrow-warm-up-rounded" class="size-8" />
    </button>
  </ClientOnly>
</template>

<script lang="ts" setup>
const { y } = useWindowScroll({ behavior: 'smooth' })

const { condition = true, styled = false } = defineProps<{
  condition?: boolean
  styled?: boolean
}>()
</script>
