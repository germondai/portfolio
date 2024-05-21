<template>
  <span>
    <span :class="writerClass" v-html="typeValue"></span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
  </span>
</template>

<script lang="ts" setup>
const props = defineProps({
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

const { typeArray, writerClass } = toRefs(props)
const typeValue = ref('')
const typeStatus = ref(false)
const typingSpeed = 200
const erasingSpeed = 100
const newTextDelay = 2000
let typeArrayIndex = 0
let charIndex = 0
let typingTimeout: ReturnType<typeof setTimeout>

const typeText = () => {
  if (charIndex < typeArray.value[typeArrayIndex].length) {
    if (!typeStatus.value) typeStatus.value = true

    typeValue.value += typeArray.value[typeArrayIndex].charAt(charIndex)
    charIndex += 1

    typingTimeout = setTimeout(typeText, typingSpeed)
  } else {
    typeStatus.value = false
    typingTimeout = setTimeout(eraseText, newTextDelay)
  }
}

const eraseText = () => {
  if (charIndex > 0) {
    if (!typeStatus.value) typeStatus.value = true

    typeValue.value = typeArray.value[typeArrayIndex].substring(
      0,
      charIndex - 1,
    )
    charIndex -= 1
    typingTimeout = setTimeout(eraseText, erasingSpeed)
  } else {
    typeStatus.value = false
    typeArrayIndex += 1
    if (typeArrayIndex >= typeArray.value.length) typeArrayIndex = 0

    typingTimeout = setTimeout(typeText, typingSpeed + 1000)
  }
}
const resetTyping = () => {
  typeArrayIndex = 0
  charIndex = 0
  typeValue.value = ''
  clearTimeout(typingTimeout)
  typeText()
}

watch(
  typeArray,
  () => {
    resetTyping()
  },
  { deep: true },
)

onMounted(() => typeText())
</script>

<style lang="scss" scoped>
.cursor {
  @apply inline-block w-1 ml-1 bg-white animate-[cursorBlink_1s_infinite];

  &.typing {
    @apply animate-none;
  }
}
</style>
