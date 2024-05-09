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
          class="w-[70%] p-0.5 rounded-2xl bg-[#ffffff1a] box-shadow-custom backdrop-blur-lg"
        >
          <Form
            :validation-schema="schema"
            method="post"
            class="form relative w-full h-full flex flex-col p-6 rounded-2xl bg-[#0d0d0faa] z-20"
            @submit="onSubmit"
            @invalid-submit="onInvalidSubmit"
          >
            <sub>{{ $t('contact.sub') }}</sub>
            <h1>{{ $t('contact.title') }}</h1>
            <div class="field">
              <Field
                id="name"
                type="text"
                name="name"
                :placeholder="$t('contact.name')"
                required
              />
              <ErrorMessage name="name" />
              <label for="name">{{ $t('contact.name') }}</label>
            </div>
            <div class="field">
              <Field
                id="email"
                type="email"
                name="email"
                :placeholder="$t('contact.email')"
                required
              />
              <ErrorMessage name="email" />
              <label for="email">{{ $t('contact.email') }}</label>
            </div>
            <div class="field textarea">
              <Field
                id="message"
                as="textarea"
                name="message"
                :placeholder="$t('contact.message')"
                required
              ></Field>
              <ErrorMessage name="message" />
              <label for="message">{{ $t('contact.message') }}</label>
            </div>
            <button
              type="submit"
              name="saveContact"
              class="w-full h-10 my-2 p-1 rounded-2xl text-center text-inherit bg-[#3B3B3B] hover:bg-[#26272ccc] shadow-2xl transition-colors"
            >
              {{ $t('contact.button') }}
            </button>
          </Form>
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
          class="max-w-full max-h-[90%] drop-shadow-custom animate-[float_2s_infinite_ease-in-out]"
        />
      </div>
      <span v-if="result && result.error">dw</span>
      {{ result }}
    </div>
    <ParallaxBgContact />
  </FlareCont>
</template>

<script lang="ts" setup>
import * as Yup from 'yup'

const schema = Yup.object({
  name: Yup.string().max(64).required('Please enter your name'),
  email: Yup.string().email().max(128).required('Please enter a valid email'),
  message: Yup.string().min(4).max(256).required('Please enter a message'),
})

const result = ref()
const onSubmit = async (values) => {
  const { data, pending, error, refresh } = await useFetch('', {
    method: 'post',
    body: { values },
  })

  result.value = { data, pending, error, refresh }
}

function onInvalidSubmit({ values, errors, results }) {
  // console.log(values)
  // console.log(errors)
  // console.log(results)
}
</script>

<style lang="scss" scoped></style>
