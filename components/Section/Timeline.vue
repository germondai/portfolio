<template>
  <section id="timeline" class="flex flex-col">
    <FlareCont>
      <ul class="pt-[150px]">
        <li
          v-for="(item, index) in $tm('timeline')"
          :key="index"
          class="group relative w-[7px] mx-auto bg-[#251e39] pt-[50px] first:pt-[200px] first:-mt-[200px] first:rounded-tr-2xl last:pb-[200px] last:-mb-[200px] last:rounded-bl-2xl z-20"
        >
          <FlareItem
            v-motion
            :initial="{ x: index % 2 ? -100 : 100, opacity: 0 }"
            :visible="{ x: 0, opacity: 1 }"
            class="absolute bottom-0 group-odd:left-[50px] group-even:-left-[495px] w-[450px] p-0.5 rounded-xl bg-[#ffffff1a] drop-shadow-md before:absolute"
          >
            <div class="p-2 rounded-lg z-10 bg-[#0d0d0faa]">
              <h3 class="title">
                <span
                  v-if="$rt(item.year).includes('-')"
                  class="year"
                  :title="$rt(item.year)"
                >
                  <span
                    class="anim-counter"
                    data-count="'.trim(explode('-', $row['year'])[0]).'"
                  ></span>
                  -
                  <span
                    class="anim-counter"
                    data-count="'.trim(explode('-', $row['year'])[1]).'"
                  ></span>
                </span>
                <span
                  v-else
                  class="year anim-counter"
                  data-count="'.$row['year'].'"
                  title="'.$row['year'].'"
                ></span>
                <span class="title-content">{{ $rt(item.title) }}</span>
              </h3>
              <p>{{ $rt(item.content) }}</p>
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
