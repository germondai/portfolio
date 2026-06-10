<script setup lang="ts">
const { top = true } = defineProps<{ top?: boolean }>()
</script>

<template>
  <div aria-hidden="true" class="absolute pointer-events-none z-[-1] inset-0 overflow-hidden">
    <!-- Top-left -->
    <div v-if="top" class="absolute rounded-full dark:bg-primary/35 blur-[250px] size-64 -top-10 -left-20" />
    <!-- Top-right -->
    <div v-if="top" class="absolute rounded-full dark:bg-primary/20 blur-[200px] size-48 top-[8%] -right-16" />
    <!-- Mid-left -->
    <div class="absolute rounded-full dark:bg-primary/25 blur-[300px] size-80 top-[36%] -left-24" />
    <!-- Mid-right -->
    <div class="absolute rounded-full dark:bg-primary/15 blur-[220px] size-56 top-[54%] -right-20" />
    <!-- Lower-left -->
    <div class="absolute rounded-full dark:bg-primary/20 blur-[280px] size-64 bottom-[18%] left-[5%]" />
    <!-- Bottom-right -->
    <div class="absolute rounded-full dark:bg-primary/15 blur-[200px] size-44 bottom-[5%] right-[10%]" />
  </div>
</template>
