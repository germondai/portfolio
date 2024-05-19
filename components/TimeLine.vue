<template>
  <ul>
    <li
      v-for="(item, i) in timeline"
      :key="i"
      class="group relative w-[7px] mx-auto bg-[#251e39] max-lg:pt-6 pt-12 first:rounded-t-2xl last:rounded-b-2xl max-lg:ml-2.5"
    >
      <div
        v-motion
        :initial="{
          opacity: 0,
          x: $device.isMobile ? 0 : i % 2 ? -100 : 100,
        }"
        :visible-once="{ opacity: 1, x: 0 }"
        class="relative max-lg:w-[85vw] max-lg:left-8 bottom-0 lg:group-odd:left-[50px] lg:group-even:-left-[495px] w-[450px] rounded-xl bg-[#ffffff1a] box-shadow-custom z-20"
      >
        <FlareItem :is="flare ? 'FlareItem' : 'div'" class="rounded-xl p-0.5">
          <div
            class="max-lg:before:-left-4 max-lg:before:border-r-[16px] lg:group-odd:before:-left-4 lg:group-odd:before:border-r-[16px] lg:group-even:before:-right-4 lg:group-even:before:border-l-[16px] before:absolute before:top-2.5 before:border-y-8 before:border-[transparent_#ffffff1a] box rounded-xl z-10 bg-[#0d0d0faa]"
          >
            <b
              class="rounded-t-xl flex items-center gap-4 py-4 px-2.5 bg-[#251E39aa] whitespace-nowrap"
            >
              <span class="px-4 py-1 bg-white text-black rounded-xl">
                <CountUp :number="item.year" />
              </span>
              <span class="truncate">{{ $rt(item.title) }}</span>
            </b>
            <div class="flex flex-col gap-2 px-4 py-2">
              <p v-dompurify-html="$rt(item.content)" class="text-justify"></p>
              <button
                v-if="$rt(item.content_full)"
                class="p-2 rounded-xl shadow bg-[#2B2242] hover:bg-[#36275e] transition-colors"
              >
                {{ $rt(item.button) ? $rt(item.button) : '📖 👀' }}
              </button>
            </div>
          </div>
        </FlareItem>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const { timeline, flare } = defineProps({
  timeline: {
    type: Array as () => {
      year: number
      title: string
      content: string
      content_full?: string
      button?: string
    }[],
    default: () => [],
  },
  flare: {
    type: Boolean,
    default: true,
  },
})
</script>

<style lang="scss"></style>
