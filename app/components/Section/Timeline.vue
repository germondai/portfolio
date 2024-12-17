<template>
  <section id="timeline" class="flex flex-col">
    <TimeLine :timeline="tm('timeline')" class="w-full" />
    <BgBlob color="#251E3933" class="left-0 top-[25%] w-2/5" />
    <BgBlob color="#251E3966" class="left-full top-[75%] w-3/5" />
  </section>
</template>

<script lang="ts" setup>
const { tm } = useI18n()
</script>
