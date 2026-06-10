<script lang="ts" setup>
const title = "Germond's Portfolio"
const description = "An Aspiring Full-Stack Web Developer"

useSeoMeta({ title, description })
</script>

<template>
  <UPageHero :title :description>
    <template #top>
      <div
        class="absolute rounded-full dark:bg-primary blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-1/2 -translate-y-80"
      />

      <LazyBgStars hydrateOnIdle />
    </template>
  </UPageHero>
</template>
