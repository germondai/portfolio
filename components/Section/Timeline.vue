<template>
  <section id="timeline" class="flex flex-col">
    <FlareCont>
      <ul class="pt-[150px]">
        <li
          v-for="(item, index) in $tm('timeline')"
          :key="index"
          class="group relative w-[7px] mx-auto bg-[#251e39] pt-[50px] first:pt-[200px] first:-mt-[200px] first:rounded-t-2xl last:pb-[200px] last:-mb-[200px] last:rounded-b-2xl"
        >
          <FlareItem
            v-motion
            :initial="{ x: index % 2 ? -100 : 100, opacity: 0 }"
            :visible="{ x: 0, opacity: 1 }"
            class="absolute bottom-0 group-odd:left-[50px] group-even:-left-[495px] w-[450px] p-0.5 rounded-xl bg-[#ffffff1a] drop-shadow-md before:absolute z-20"
          >
            <div class="rounded-xl z-10 bg-[#0d0d0faa]">
              <b
                class="rounded-t-xl flex items-center gap-4 py-4 pl-3 bg-[#251E39aa]"
              >
                <span class="px-4 py-1 bg-white text-black rounded-xl">
                  {{ $rt(item.year) }}
                </span>
                <span class="truncate">{{ $rt(item.title) }}</span>
              </b>
              <p class="px-4 py-2 text-justify">{{ $rt(item.content) }}</p>
              <button v-if="$rt(item.content_full)">
                {{ $rt(item.button) ? $rt(item.button) : '📖 👀' }}
              </button>
            </div>
          </FlareItem>
        </li>
      </ul>
    </FlareCont>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
