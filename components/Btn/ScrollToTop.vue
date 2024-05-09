<template>
  <button
    v-if="y > 500"
    id="btnScrollToTop"
    title="Scroll To Top"
    @click="y = 0"
  ></button>
</template>

<script lang="ts" setup>
const { y } = useWindowScroll({ behavior: 'smooth' })
</script>

<style lang="scss">
#btnScrollToTop {
  background-size: calc(100% - 8px);
  @apply fixed max-lg:bottom-3 bottom-6 max-lg:right-3 right-6 flex size-12 p-1 rounded-full text-2xl border-4 border-white z-[999] hover:bg-[#2b2244] bg-[#1f2023cc] bg-[url(/img/arrowTop-light.webp)] bg-no-repeat bg-center shadow-xl transition-colors duration-500;
}
</style>
