<template>
  <section id="about">
    <div
      class="w-4/5 mx-auto h-full flex flex-col items-center justify-center gap-12"
    >
      <div class="w-full flex flex-col anim-bottom">
        <sub>{{ $t('about.sub') }}</sub>
        <h1>{{ $t('about.title') }}</h1>
        <p v-html="$t('about.content')"></p>
      </div>
      <div class="w-[90%] grid grid-cols-4 items-center justify-between gap-16">
        <div
          v-for="(skill, index) in $tm('about.skills')"
          :key="index"
          v-motion
          :initial="{ x: -100, opacity: 0 }"
          :visible-once="{ x: 0, opacity: 1 }"
          :delay="index * 50"
          class="flex flex-col items-center gap-2 anim-left"
        >
          <HoloTilt :scale="1.1" class="size-32">
            <img
              :src="$rt(skill.src)"
              :alt="$rt(skill.alt)"
              loading="lazy"
              class="max-w-full"
            />
          </HoloTilt>
          <b class="text-2xl">{{ $rt(skill.name) }}</b>
        </div>
      </div>
    </div>
    <ParallaxBgAbout />
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
