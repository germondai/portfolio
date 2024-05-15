<template>
  <section id="welcome">
    <div
      class="w-4/5 h-full mx-auto flex max-md:flex-col max-md:gap-4 gap-8 items-center justify-center"
    >
      <div
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
        class="relative max-md:3/5 w-2/5 h-[90%] py-12 flex items-center justify-center anim-bottom animate-[float_2s_infinite_ease-in-out]"
      >
        <NuxtImg
          src="3D-rocket.webp"
          alt="3D Rocket"
          class="absolute max-h-[90%] max-w-[528px] flex py-4 blur-[8px] opacity-30"
          sizes="xs:112px sm:128px md:144px lg:160px xl:176px"
        />
        <NuxtImg
          src="germond-model.webp"
          alt="Germond Model"
          class="max-h-[90%] max-w-[40%] drop-shadow-custom z-10"
          sizes="sm:96px md:112px lg:128px xl:144px"
        />
      </div>
    </div>
    <ParallaxBgWelcome />
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
