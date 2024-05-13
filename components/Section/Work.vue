<template>
  <FlareCont id="work" :tag="'section'">
    <div
      class="max-lg:w-[95%] w-4/5 h-full mx-auto flex flex-col items-center justify-center gap-6"
    >
      <div v-motion-slide-visible-once-top class="w-full flex flex-col">
        <sub>{{ $t('work.sub') }}</sub>
        <h1>{{ $t('work.title') }}</h1>
        <p v-dompurify-html="$t('work.content')" class="text-justify"></p>
      </div>
      <div
        class="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4"
      >
        <div
          v-for="(project, i) in $tm('work.projects')"
          :key="i"
          v-motion
          :initial="{ x: -100, opacity: 0 }"
          :visible-once="{ x: 0, opacity: 1 }"
          :delay="i * 100"
          :scale="1.025"
          class="w-full h-full z-20"
        >
          <HoloTilt>
            <FlareItem
              class="flex flex-col p-0.5 rounded-xl bg-[#ffffff1a] backdrop-blur-lg box-shadow-custom"
            >
              <div
                class="absolute top-[18px] right-[18px] flex items-center justify-center gap-1.5 z-30"
              >
                <template v-for="(lValue, lKey, j) in project.links" :key="j">
                  <a
                    v-if="$rt(lValue) != ''"
                    :href="$rt(lValue)"
                    target="_blank"
                    :title="$rt(lKey)"
                    class="size-8 bg-[#121316be] backdrop-blur flex items-center justify-center rounded-full overflow-hidden outline outline-1"
                  >
                    <Icon
                      :name="`akar-icons:${$rt(lKey)}-${$rt(lKey) == 'link' ? 'chain' : 'fill'}`"
                      color="white"
                      class="size-6"
                    />
                  </a>
                </template>
              </div>
              <a
                :href="$rt(project.href)"
                :target="$rt(project.href) == './' ? '_self' : '_blank'"
                class="h-full flex flex-col bg-[#0d0d0faa] z-20 p-3 rounded-xl"
              >
                <div class="flex flex-col gap-2">
                  <img
                    :src="$rt(project.src)"
                    :alt="$rt(project.alt)"
                    loading="lazy"
                    class="w-full rounded-lg aspect-video"
                  />
                  <b class="text-2xl">{{ $rt(project.title) }}</b>
                </div>
                <p
                  v-dompurify-html="$rt(project.content)"
                  class="text-justify my-2 line-clamp-6"
                ></p>
                <div class="flex items-center gap-x-2 truncate">
                  <template v-for="(tValue, tKey, k) in project.tags" :key="k">
                    <sub
                      v-if="$rt(tValue) == 1"
                      :class="`tag-${$rt(tKey).toLocaleLowerCase()} last:truncate`"
                      >#{{ $rt(tKey) }}</sub
                    >
                  </template>
                </div>
              </a>
            </FlareItem>
          </HoloTilt>
        </div>
      </div>
    </div>
    <ParallaxBgWork />
  </FlareCont>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
