<template>
  <section id="about">
    <div
      class="max-md:w-[95%] w-4/5 mx-auto h-full flex flex-col items-center justify-center gap-12"
    >
      <div
        v-motion-slide-visible-once-top
        class="w-full flex flex-col anim-bottom text-justify"
      >
        <sub>{{ $t('about.sub') }}</sub>
        <h1>{{ $t('about.title') }}</h1>
        <p v-dompurify-html="$t('about.content')"></p>
      </div>
      <div
        class="w-[90%] grid max-xs:grid-cols-3 max-md:grid-cols-4 max-lg:grid-cols-5 grid-cols-6 items-center justify-between max-md:gap-8 gap-16"
      >
        <div
          v-for="(skill, index) in $tm('skills')"
          :key="index"
          v-motion
          :initial="{ x: -100, opacity: 0 }"
          :visible-once="{ x: 0, opacity: 1 }"
          :delay="index * 50"
          class="flex flex-col items-center gap-2 anim-left"
        >
          <HoloTilt :scale="1.1">
            <Icon
              :name="$rt(skill.icon)"
              class="max-md:size-12 max-lg:size-16 size-24"
            />
          </HoloTilt>
          <b class="max-sm:text-md max-md:text-lg text-2xl truncate">
            {{ $rt(skill.name) }}
          </b>
        </div>
      </div>
    </div>
    <ParallaxBgAbout />
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
