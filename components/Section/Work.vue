<template>
  <FlareCont id="work" :tag="'section'">
    <div
      class="w-4/5 h-full mx-auto flex flex-col items-center justify-center gap-6"
    >
      <div class="w-full flex flex-col">
        <sub>{{ $t('work.sub') }}</sub>
        <h1>{{ $t('work.title') }}</h1>
        <p class="text-justify" v-html="$t('work.content')"></p>
      </div>
      <div
        class="w-[98%] grid xl:grid-cols-[repeat(auto-fill,minmax(370px,1fr))] grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4"
      >
        <HoloTilt
          v-for="(project, i) in $tm('work.projects')"
          :key="i"
          :scale="1.025"
          class="w-full z-20"
        >
          <FlareItem
            class="flex flex-col p-0.5 rounded-xl bg-[#ffffff1a] backdrop-blur-lg shadow-xl"
          >
            <div
              class="absolute top-[18px] right-[18px] flex items-center justify-center gap-1.5 z-30"
            >
              <template v-for="(lValue, lKey, j) in project.links" :key="j">
                <a
                  v-if="$rt(lValue) != ''"
                  :href="$rt(lValue)"
                  class="size-8 bg-[#121316be] backdrop-blur flex items-center justify-center rounded-full overflow-hidden outline outline-1"
                >
                  <img
                    :src="`/img/${$rt(lKey)}-light.webp`"
                    alt=""
                    class="size-6"
                /></a>
              </template>
            </div>
            <a
              :href="$rt(project.href)"
              target="'.($row['href'] === './' ? '_self' : '_blank').'"
              class="h-full flex flex-col bg-[#0d0d0faa] z-20 p-3 rounded-xl"
            >
              <div>
                <img
                  :src="$rt(project.src)"
                  :alt="$rt(project.alt)"
                  loading="lazy"
                  class="w-full rounded-lg aspect-video"
                />
                <h4 class="my-2">{{ $rt(project.title) }}</h4>
              </div>
              <p
                class="text-justify mb-2 line-clamp-5"
                v-html="$rt(project.content)"
              ></p>
              <div class="flex items-center flex-wrap gap-x-2">
                <template v-for="(tValue, tKey, k) in project.tags" :key="k">
                  <sub
                    v-if="$rt(tValue) == 1"
                    :class="`tag-${$rt(tKey).toLocaleLowerCase()}`"
                    >#{{ $rt(tKey) }}</sub
                  >
                </template>
              </div>
            </a>
          </FlareItem>
        </HoloTilt>
      </div>
    </div>
    <ParallaxBgWork />
  </FlareCont>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
