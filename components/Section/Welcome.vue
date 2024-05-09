<template>
  <section id="welcome">
    <div class="w-4/5 h-full mx-auto flex items-center justify-center">
      <div
        v-motion-slide-visible-once-left
        class="w-3/5 flex flex-col anim-left"
      >
        <sub v-motion-roll-bottom>{{ $t('welcome.sub') }}</sub>
        <h1>
          {{ $t('welcome.title') }}
          <span class="text-gradient">Germond</span>
        </h1>
        <p
          v-motion-slide-visible-once-left
          v-dompurify-html="$t('welcome.content')"
        ></p>
        <LangSwitcher class="mt-12" />
      </div>
      <div
        v-motion-slide-visible-once-top
        class="relative w-2/5 h-[90%] py-12 flex items-center justify-center anim-bottom"
      >
        <img
          src="/public/img/3D-rocket.webp"
          alt="3D Rocket"
          loading="lazy"
          class="absolute max-h-[90%] max-w-[528px] flex py-4 blur-[8px] opacity-30 animate-[float_2s_infinite_ease-in-out]"
        />
        <img
          src="/public/img/germond-model.webp"
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
