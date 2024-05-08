<template>
  <section id="work">
    <div
      class="w-4/5 h-full mx-auto flex flex-col items-center justify-center gap-6"
    >
      <div class="w-full flex flex-col">
        <sub>{{ $t('work.sub') }}</sub>
        <h1>{{ $t('work.title') }}</h1>
        <p class="text-justify">{{ $t('work.content') }}</p>
      </div>
      <FlareCont
        class="w-[98%] grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(370px,1fr)] gap-4"
      >
        <FlareItem
          v-for="(project, i) in $tm('work.projects')"
          :key="i"
          class="w-full flex flex-col p-0.5 rounded-xl bg-[#ffffff1a] shadow-xl backdrop-blur-lg hover:scale-[1.025] transition-transform z-20"
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
            <p class="text-justify mb-2 line-clamp-5">
              {{ $rt(project.content) }}
            </p>
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
      </FlareCont>
    </div>
    <ParallaxBgWork />
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.tag-html5 {
  color: #fd8458;
}

.tag-css3 {
  color: #51abf6;
}

.tag-php {
  color: #a4a4cc;
}

.tag-mysql {
  color: #00b7db;
}

.tag-sass {
  color: #cc6699;
}

.tag-js,
.tag-javascript {
  color: #ffdf00;
}

.tag-jquery {
  color: #46adf6;
}

.tag-ajax {
  color: #21b0f2;
}
</style>
