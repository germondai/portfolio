<template>
  <div class="FlareCont">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.FlareCont:hover .FlareItem::before,
.FlareCont:hover .FlareItem::after {
  opacity: 1;
}
</style>
