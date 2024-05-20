<template>
  <span>
    <span :class="writerClass" v-html="typeValue"></span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
  </span>
</template>

<script lang="ts" setup>
const { writerClass, typeArray } = defineProps({
  writerClass: {
    type: String,
    default: '',
  },
  typeArray: {
    type: Array as () => string[],
    required: true,
    default: () => [''],
  },
})

const typeValue = ref('')
const typeStatus = ref(false)
const typingSpeed = 200
const erasingSpeed = 100
const newTextDelay = 2000
let typeArrayIndex = 0
let charIndex = 0

const typeText = () => {
  if (charIndex < typeArray[typeArrayIndex].length) {
    if (!typeStatus.value) typeStatus.value = true

    typeValue.value += typeArray[typeArrayIndex].charAt(charIndex)
    charIndex += 1

    setTimeout(typeText, typingSpeed)
  } else {
    typeStatus.value = false
    setTimeout(eraseText, newTextDelay)
  }
}

const eraseText = () => {
  if (charIndex > 0) {
    if (!typeStatus.value) typeStatus.value = true

    typeValue.value = typeArray[typeArrayIndex].substring(0, charIndex - 1)
    charIndex -= 1
    setTimeout(eraseText, erasingSpeed)
  } else {
    typeStatus.value = false
    typeArrayIndex += 1
    if (typeArrayIndex >= typeArray.length) typeArrayIndex = 0

    setTimeout(typeText, typingSpeed + 1000)
  }
}

onMounted(() => {
  setTimeout(typeText, newTextDelay + 200)
})
</script>

<style scoped>
.cursor {
  @apply inline-block w-1 ml-1 bg-white animate-[cursorBlink_1s_infinite];
}

.cursor.typing {
  @apply animate-none;
}

@keyframes cursorBlink {
  0% {
    background-color: transparent;
  }
  50% {
    background-color: #fff;
  }
  100% {
    background-color: transparent;
  }
}
</style>
