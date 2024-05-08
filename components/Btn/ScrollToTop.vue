<template>
  <button
    v-if="y > 500"
    id="btnScrollToTop"
    title="Scroll To Top"
    @click="y = 0"
  ></button>
</template>

<script lang="ts" setup>
const { y } = useWindowScroll({ behavior: 'smooth' })
</script>

<style lang="scss">
#btnScrollToTop {
  background-image: url(/img/arrowTop-light.webp);
  background-size: calc(100% - 8px);
  background-repeat: no-repeat;
  background-position: center;
  background-color: #1f2023cc;
  display: flex;
  position: fixed;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  right: 25px;
  bottom: 25px;
  width: 50px;
  height: 50px;
  padding: 4px;
  font-size: 24px;
  transition: background-color 0.5s;
  z-index: 10;
  border: solid #fff 4px;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.6);
}

#btnScrollToTop:hover {
  background-color: #2b2244;
}

@media (max-width: 900px) {
  #btnScrollToTop {
    right: 10px;
    bottom: 10px;
  }
}
</style>
