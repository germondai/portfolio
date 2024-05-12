<template>
  <div id="flyingRocket" class="-z-[999]">
    <div class="wrapz">
      <img src="/public/img/3D-rocket.webp" alt="3D Rocket" loading="lazy" />
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
  scale: 0.6;
  opacity: 0.4;
  z-index: -3;
}

@media (max-width: 425px) {
  #flyingRocket {
    scale: 0.4;
  }
}

#flyingRocket .wrapz {
  animation: 40s flyAround infinite linear;
  width: 900px;
  height: 300px;
  filter: blur(10px);
  display: flex;
  align-items: start;
  justify-content: start;
  z-index: 0;
}

#flyingRocket .wrapz img {
  height: 100%;
  aspect-ratio: 1/1;
  filter: blur(10px);
}

#flyingRocket .wrapz .flame {
  rotate: 90deg;
  z-index: -1;
  translate: -285px 160px;
  width: 150px;
  height: 150px;
  background: linear-gradient(-45deg, red, orange);
  border-radius: 150px 150px 0px 150px;
  animation: 0.5s flame infinite;
  filter: blur(10px);
  position: relative;
  box-shadow: 17px 20px 90px #700;
}

#flyingRocket .wrapz .flame::after,
#flyingRocket .wrapz .flame::before {
  content: '';
  width: 100px;
  height: 100px;
  display: block;
  position: absolute;
  background: linear-gradient(-45deg, red, orange);
  animation: 1s flame infinite;
  transform: scale(0.8) rotate(20deg);
  border-radius: 100px 100px 0px 100px;
  top: 20px;
}

#flyingRocket .wrapz .flame::before {
  top: 0;
  animation-duration: 4.5s;
  transform: scale(0.9) rotate(-15deg) translate(10px, 0px);
}
</style>
