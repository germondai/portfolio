<template>
  <div v-if="!$device.isMobile" id="flyingRocket" class="-z-[999]">
    <div class="wrapz">
      <div class="size-[192px] aspect-square">
        <NuxtImg
          src="/3D-rocket.webp"
          alt="3D Rocket"
          class="size-full"
          width="16px"
          height="16px"
          loading="lazy"
          :quality="1"
        />
      </div>
      <div class="flame" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#flyingRocket {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  opacity: 0.2;
  filter: blur(16px);

  .wrapz {
    animation: 40s flyAround infinite linear;
    width: 432px;
    height: 144px;
    display: flex;
    align-items: start;
    justify-content: start;
    z-index: 0;

    .flame {
      rotate: 86deg;
      z-index: -1;
      translate: -240px 120px;
      width: 48px;
      height: 48px;
      background: linear-gradient(-45deg, red, orange);
      border-radius: 48px 48px 0px 48px;
      animation: 2s flame infinite;
      position: relative;
      box-shadow: 17px 20px 90px #700;
    }
  }
}
</style>
