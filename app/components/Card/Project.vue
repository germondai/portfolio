<template>
  <div>
    <HoloTilt :is="holo ? 'HoloTilt' : 'div'">
      <FlareItem
        :is="flare ? 'FlareItem' : 'div'"
        class="flex flex-col p-0.5 rounded-xl bg-[#ffffff1a] backdrop-blur-lg box-shadow-custom"
      >
        <div
          v-if="project.links"
          class="absolute top-[18px] right-[18px] flex items-center justify-center gap-1.5 z-30"
        >
          <template v-for="(link, lKey, j) in project.links" :key="j">
            <NuxtLink
              v-if="rt(link) != ''"
              :href="rt(link)"
              target="_blank"
              :title="rt(lKey)"
              class="size-8 bg-[#121316be] backdrop-blur flex items-center justify-center rounded-full overflow-hidden outline outline-1 aspect-square"
            >
              <Icon
                :name="`akar-icons:${rt(lKey)}-${rt(lKey) == 'link' ? 'chain' : 'fill'}`"
                class="size-6"
              />
            </NuxtLink>
          </template>
        </div>
        <NuxtLink
          :is="rt(project.href) ? 'NuxtLink' : 'div'"
          :href="rt(project.href)"
          :target="rt(project.href) === './' ? '_self' : '_blank'"
          class="h-full flex flex-col bg-[#0d0d0faa] z-20 p-3 rounded-xl gap-2"
        >
          <div class="flex flex-col gap-2">
            <NuxtImg
              v-if="project.src"
              :src="rt(project.src)"
              :alt="rt(project.alt)"
              loading="lazy"
              class="w-full rounded-lg aspect-video"
            />
            <b class="text-2xl">{{ rt(project.title) }}</b>
          </div>
          <p class="text-justify line-clamp-6" v-html="rt(project.content)"></p>
          <div v-if="project.tags" class="flex items-center gap-x-2 truncate">
            <template v-for="(tag, tKey, k) in project.tags" :key="k">
              <sub
                v-if="rt(tag) == 1"
                :class="`tag-${rt(tKey).toLowerCase()} last:truncate`"
                >#{{ rt(tKey) }}</sub
              >
            </template>
          </div>
        </NuxtLink>
      </FlareItem>
    </HoloTilt>
  </div>
</template>

<script lang="ts" setup>
const { rt } = useI18n()

const {
  project,
  holo = true,
  flare = true,
} = defineProps<{
  project: {
    href?: string
    src?: string
    alt?: string
    title: string
    content: string
    links?: Array<{ key: string; value: string }>
    tags?: Array<{ key: string; value: string }>
  }
  holo?: boolean
  flare?: boolean
}>()
</script>
