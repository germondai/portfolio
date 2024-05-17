<template>
  <div v-if="!$device.isMobile" id="flyingRocket" class="-z-[999]">
    <div class="wrapz">
      <NuxtImg
        src="3D-rocket.webp"
        alt="3D Rocket"
        loading="lazy"
        class="aspect-square"
        width="192px"
        height="192px"
      />
      <div class="flame"></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
#flyingRocket {
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  // scale: 0.6;
  opacity: 0.2;
  filter: blur(16px);
}

@media (max-width: 425px) {
  #flyingRocket {
    // scale: 0.4;
  }
}

#flyingRocket .wrapz {
  animation: 40s flyAround infinite linear;
  width: 432px;
  height: 144px;
  display: flex;
  align-items: start;
  justify-content: start;
  z-index: 0;
}

#flyingRocket .wrapz .flame {
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

// #flyingRocket .wrapz .flame::after,
// #flyingRocket .wrapz .flame::before {
//   content: '';
//   width: 40px;
//   height: 40px;
//   display: block;
//   position: absolute;
//   background: linear-gradient(-45deg, red, orange);
//   animation: 1s flame infinite;
//   rotate: 20deg;
//   border-radius: 60px 60px 0px 60px;
//   top: 20px;
// }

// #flyingRocket .wrapz .flame::before {
//   top: 0;
//   animation-duration: 4.5s;
//   transform: scale(0.9) rotate(-15deg) translate(10px, 0px);
// }
</style>
