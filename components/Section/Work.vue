<template>
  <section id="work">
    <div
      class="max-lg:w-[95%] w-4/5 h-full mx-auto flex flex-col items-center justify-center gap-6"
    >
      <div
        v-motion
        :initial="{ opacity: 0, y: $device.isMobile ? 0 : -50 }"
        :visible-once="{ y: 0, opacity: 1 }"
        class="w-full flex flex-col"
      >
        <sub>{{ $t('work.sub') }}</sub>
        <h1>{{ $t('work.title') }}</h1>
        <p v-dompurify-html="$t('work.content')" class="text-justify"></p>
      </div>
      <div
        class="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4"
      >
        <CardProject
          v-for="(project, i) in $tm('work.projects')"
          :key="i"
          v-motion
          :initial="{ opacity: 0, x: $device.isMobile ? 0 : -100 }"
          :visible-once="{ x: 0, opacity: 1 }"
          :delay="i * ($device.isMobile ? 0 : 100)"
          :hover="{ scale: 1.025 }"
          class="w-full h-full z-20"
          :project="project"
        />
      </div>
    </div>
    <BgBlob color="#251E3933" class="left-0 top-[25%] w-2/5" />
    <BgBlob color="#251E3988" class="left-[75%] top-[75%] w-1/4" />
    <BgBlob color="#251E3955" class="left-[25%] top-[105%] w-1/5" />
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
