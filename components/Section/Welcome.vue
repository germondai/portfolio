<template>
  <section id="welcome">
    <div
      class="w-4/5 h-full mx-auto flex max-md:flex-col gap-8 items-center justify-center"
    >
      <div
        v-motion
        :initial="{ x: $isMobile() ? 0 : -100, opacity: 0 }"
        :visible-once="{ x: 0, opacity: 1 }"
        class="max-md:w-[98%] w-3/5 flex flex-col max-md:items-center max-md:gap-2 max-md:text-center anim-left"
      >
        <sub>{{ $t('welcome.sub') }}</sub>
        <h1 class="max-md:leading-tight">
          {{ $t('welcome.title') }}
          <span class="text-gradient">Germond</span>
        </h1>
        <div class="flex items-center max-sm:flex-col gap-1">
          <p class="whitespace-nowrap">{{ $t('welcome.content.base') }}</p>
          <b class="truncate">
            <TypeWriter
              :type-array="[
                $t('welcome.content.typewriter.0'),
                $t('welcome.content.typewriter.1'),
              ]"
            />
          </b>
        </div>
        <LangSwitcher
          class="max-md:mt-6 mt-12 max-md:items-center max-md:gap-2"
        />
      </div>
      <div
        v-motion
        :initial="{ y: $isMobile() ? 0 : -50, opacity: 0 }"
        :visible-once="{ y: 0, opacity: 1 }"
        class="relative max-md:3/5 w-2/5 h-[90%] py-12 flex items-center justify-center anim-bottom"
      >
        <NuxtImg
          src="3D-rocket.webp"
          alt="3D Rocket"
          loading="lazy"
          class="absolute max-h-[90%] max-w-[528px] flex py-4 blur-[8px] opacity-30 animate-[float_2s_infinite_ease-in-out]"
        />
        <NuxtImg
          src="germond-model.webp"
          alt="Germond Model"
          loading="lazy"
          class="max-h-[90%] max-w-[40%] animate-[float_2s_infinite_ease-in-out] drop-shadow-custom z-10"
        />
      </div>
    </div>
    <ParallaxBgWelcome />
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
