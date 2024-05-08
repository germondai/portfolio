<template>
  <FlareCont id="contact" :tag="'section'">
    <div
      class="w-4/5 h-full mx-auto flex max-md:flex-col-reverse items-center justify-center"
    >
      <div
        v-motion-slide-visible-once-left
        class="relative w-3/5 h-auto flex flex-col justify-center"
      >
        <FlareItem
          class="w-[70%] p-0.5 rounded-2xl bg-[#ffffff1a] shadow-lg backdrop-blur-lg"
        >
          <form
            action="actions/contact/save.php"
            method="POST"
            class="form relative w-full h-full flex flex-col p-6 rounded-2xl bg-[#0d0d0faa] z-20"
          >
            <sub>{{ $t('contact.sub') }}</sub>
            <h1>{{ $t('contact.title') }}</h1>
            <div class="field">
              <input
                id="name"
                type="text"
                name="name"
                maxlength="64"
                :placeholder="$t('contact.name')"
                required
              />
              <label for="name">{{ $t('contact.name') }}</label>
            </div>
            <div class="field">
              <input
                id="email"
                type="email"
                name="email"
                maxlength="128"
                :placeholder="$t('contact.email')"
                required
              />
              <label for="email">{{ $t('contact.email') }}</label>
            </div>
            <div class="field textarea">
              <textarea
                id="message"
                type="text"
                name="message"
                maxlength="256"
                :placeholder="$t('contact.message')"
                required
              ></textarea>
              <label for="message">{{ $t('contact.message') }}</label>
            </div>
            <button
              type="submit"
              name="saveContact"
              class="w-full h-10 my-2 p-1 rounded-2xl text-center text-inherit bg-[#3B3B3B] hover:bg-[#26272ccc] shadow-2xl transition-colors"
            >
              {{ $t('contact.button') }}
            </button>
          </form>
        </FlareItem>
      </div>
      <div
        v-motion-slide-visible-once-top
        class="relative w-2/5 h-[90%] py-12 flex items-center justify-center"
      >
        <img
          src="/public/img/3D-envelope.webp"
          alt="Envelope Mail"
          loading="lazy"
          class="absolute max-w-[528px] max-h-[90%] flex py-4 opacity-30 blur animate-[float_2s_infinite_ease-in-out]"
        />
        <img
          src="/public/img/3D-devices.webp"
          alt="Devices"
          loading="lazy"
          class="max-w-full max-h-[90%] drop-shadow-lg animate-[float_2s_infinite_ease-in-out]"
        />
      </div>
    </div>
    <ParallaxBgContact />
  </FlareCont>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
