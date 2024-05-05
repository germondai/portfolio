<template>
  <div class="">
    <header
      class="fixed top-0 w-full h-[76px] flex items-end justify-center z-40"
    >
      <nav
        class="xl:w-3/4 lg:w-[90%] w-[95%] h-14 px-8 flex items-center justify-between gap-8 rounded-[56px] bg-[#1f2023cc] overflow-x-clip"
      >
        <ul class="w-full flex items-center justify-between gap-4">
          <li>
            <NuxtLink
              href="/"
              class="relative px-2 py-1 opacity-50 hover:opacity-100 transition-opacity"
            >
              {{ $t('header.welcome') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="about"
              class="relative px-2 py-1 opacity-50 hover:opacity-100 transition-opacity"
            >
              {{ $t('header.about') }}
            </NuxtLink>
          </li>
          <li>
            <a
              href="#work"
              class="relative px-2 py-1 opacity-50 hover:opacity-100 transition-opacity"
            >
              {{ $t('header.work') }}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              class="relative px-2 py-1 opacity-50 hover:opacity-100 transition-opacity"
            >
              {{ $t('header.contact') }}
            </a>
          </li>
        </ul>
        <a href="#" class="flex items-center justify-center h-[150%] z-20">
          <img
            src="/img/skull.ico"
            alt="Skull Icon"
            class="max-w-max h-full hover:animate-[shake_.3s] anim"
          />
        </a>
        <ul class="w-full flex items-center justify-between gap-8">
          <li>
            <a
              href="#"
              class="relative px-2 py-1 opacity-50 hover:opacity-100 transition-opacity"
            >
              <img
                src="/img/instagram-light.webp"
                alt="Instagram Logo"
                class="size-9 max-w-max"
              />
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative px-2 py-1 opacity-50 hover:opacity-100 transition-opacity"
            >
              <img
                src="/img/discord-light.webp"
                alt="Discord Logo"
                class="size-9 max-w-max"
              />
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative px-2 py-1 opacity-50 hover:opacity-100 transition-opacity"
            >
              <img
                src="/img/youtube-light.webp"
                alt="YouTube Logo"
                class="size-9 max-w-max"
              />
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative px-2 py-1 opacity-50 hover:opacity-100 transition-opacity"
            >
              <img
                src="/img/twitch-light.webp"
                alt="Twitch Logo"
                class="size-9 max-w-max"
              />
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative px-2 py-1 opacity-50 hover:opacity-100 transition-opacity"
            >
              <img
                src="/img/github-light.webp"
                alt="Github Logo"
                class="size-9 max-w-max"
              />
            </a>
          </li>
        </ul>
        <h2 class="sm:hidden flex order-2">Germond</h2>
        <button
          class="sm:hidden h-4/5 flex items-center justify-around mx-2 order-3 cursor-pointer bg-transparent"
          title="Menu"
        >
          <span class="block bg-white w-12 h-1.5 rounded-[4px]"></span>
          <span class="block bg-white w-12 h-1.5 rounded-[4px]"></span>
          <span class="block bg-white w-12 h-1.5 rounded-[4px]"></span>
        </button>
      </nav>
    </header>
    <div v-for="(item, index) in $t('')" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
