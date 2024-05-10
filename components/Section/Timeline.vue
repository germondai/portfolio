<template>
  <FlareCont id="timeline" :tag="'section'" class="flex flex-col">
    <ul class="pt-[150px] w-full">
      <li
        v-for="(item, index) in $tm('timeline')"
        :key="index"
        class="group relative w-[7px] mx-auto bg-[#251e39] max-lg:pt-6 pt-12 first:pt-[200px] first:-mt-[200px] first:rounded-t-2xl last:pb-[200px] last:-mb-[200px] last:rounded-b-2xl max-lg:ml-2.5"
      >
        <FlareItem
          v-motion
          :initial="{ x: index % 2 ? -100 : 100, opacity: 0 }"
          :visible="{ x: 0, opacity: 1 }"
          class="max-lg:w-[85vw] max-lg:left-8 absolute bottom-0 lg:group-odd:left-[50px] lg:group-even:-left-[495px] w-[450px] p-0.5 rounded-xl bg-[#ffffff1a] box-shadow-custom z-20"
        >
          <div
            class="max-lg:before:-left-4 max-lg:before:border-r-[16px] lg:group-odd:before:-left-4 lg:group-odd:before:border-r-[16px] lg:group-even:before:-right-4 lg:group-even:before:border-l-[16px] before:absolute before:top-2.5 before:border-y-8 before:border-[transparent_#ffffff1a] box rounded-xl z-10 bg-[#0d0d0faa]"
          >
            <b
              class="rounded-t-xl flex items-center gap-4 py-4 px-2.5 bg-[#251E39aa] whitespace-nowrap"
            >
              <span class="px-4 py-1 bg-white text-black rounded-xl">
                {{ $rt(item.year) }}
              </span>
              <span class="truncate">{{ $rt(item.title) }}</span>
            </b>
            <p
              v-dompurify-html="$rt(item.content)"
              class="px-4 py-2 text-justify"
            ></p>
            <button v-if="$rt(item.content_full)">
              {{ $rt(item.button) ? $rt(item.button) : '📖 👀' }}
            </button>
          </div>
        </FlareItem>
      </li>
    </ul>
  </FlareCont>
</template>

<script lang="ts" setup></script>

<style lang="scss">
// @media (max-width: 1024px) {
//   #timeline ul li .box {
//     width: 375px;
//   }

//   #timeline ul li:nth-child(even) .box {
//     left: -425px;
//   }
// }

// @media (max-width: 900px) {
//   #timeline ul li .box {
//     width: 42.5vw;
//   }

//   #timeline ul li:nth-child(even) .box:beofre {
//     left: -16px;
//     border-width: 8px 16px 8px 0px;
//   }

//   /* right side */
//   #timeline ul li:nth-child(odd) .box {
//     left: 30px;
//   }

//   /* left side */
//   #timeline ul li:nth-child(even) .box {
//     left: -45.5vw;
//   }
// }

// @media (max-width: 768px) {
//   #timeline ul li {
//     margin-left: 10px;
//   }

//   #timeline ul li .box {
//     width: 85vw;
//   }

//   /* left side conte */
//   #timeline ul li:nth-child(even) .box {
//     left: 30px;
//   }

//   #timeline ul li:nth-child(even) .box:before {
//     left: -16px;
//     border-width: 8px 16px 8px 0px;
//   }
// }
</style>
