<template>
  <section id="contact">
    <div
      class="max-md:w-[95%] w-4/5 h-full mx-auto flex max-md:flex-col-reverse items-center justify-center"
    >
      <div
        v-motion
        :initial="{ opacity: 0, x: $device.isMobile ? 0 : -100 }"
        :visible-once="{ x: 0, opacity: 1 }"
        class="relative max-md:w-full max-lg:w-2/3 w-3/5 h-auto flex flex-col justify-center"
      >
        <FlareItem
          class="max-md:w-full max-xl:w-11/12 w-[70%] p-0.5 rounded-2xl bg-[#ffffff1a] box-shadow-custom backdrop-blur-lg"
        >
          <Form
            :validation-schema="schema"
            method="post"
            class="form relative w-full h-full flex flex-col p-6 rounded-2xl bg-[#0d0d0faa] z-20"
            @submit="onSubmit"
          >
            <sub>{{ $t('contact.sub') }}</sub>
            <h1>{{ $t('contact.title') }}</h1>

            <div
              v-if="result"
              class="w-full h-full p-8 mt-2 flex flex-col items-center justify-center gap-4"
            >
              <Icon
                :name="
                  result?.pending
                    ? 'eos-icons:three-dots-loading'
                    : result?.data?.insert
                      ? 'ooui:success'
                      : 'ooui:error'
                "
                :color="
                  result?.pending
                    ? ''
                    : result?.data?.insert
                      ? 'limegreen'
                      : 'red'
                "
                class="size-24"
              />
              <b>{{
                result?.pending
                  ? ''
                  : result?.data?.insert
                    ? $t('contact.success')
                    : $t('contact.fail')
              }}</b>
              <button
                v-if="
                  (!result?.pending && result?.status == 'error') ||
                  (!result?.pending && result?.data?.insert == false) ||
                  (result.pending && canCancel && !result?.data?.insert)
                "
                class="px-8 py-2 rounded-2xl text-center text-inherit bg-[#3B3B3B] hover:bg-[#26272ccc] shadow-2xl transition-colors"
                @click="result.pending && canCancel ? cancel() : retry()"
              >
                {{
                  !result?.pending && !result?.data?.insert
                    ? $t('contact.retry')
                    : canCancel
                      ? $t('contact.cancel')
                      : ''
                }}
              </button>
            </div>
            <template v-else>
              <div class="field">
                <Field
                  id="name"
                  type="text"
                  name="name"
                  autocomplete="name"
                  :placeholder="$t('contact.name.label')"
                  required
                />
                <ErrorMessage name="name" />
                <label for="name">{{ $t('contact.name.label') }}</label>
              </div>
              <div class="field">
                <Field
                  id="email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  :placeholder="$t('contact.email.label')"
                  required
                />
                <ErrorMessage name="email" />
                <label for="email">{{ $t('contact.email.label') }}</label>
              </div>
              <div class="field textarea">
                <Field
                  id="message"
                  as="textarea"
                  name="message"
                  autocomplete="false"
                  :placeholder="$t('contact.message.label')"
                  required
                ></Field>
                <ErrorMessage name="message" />
                <label for="message">{{ $t('contact.message.label') }}</label>
              </div>
              <button
                type="submit"
                name="saveContact"
                class="w-full h-10 my-2 p-1 rounded-2xl text-center text-inherit bg-[#3B3B3B] hover:bg-[#26272ccc] shadow-2xl transition-colors"
              >
                {{ $t('contact.button') }}
              </button>
            </template>
          </Form>
        </FlareItem>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, y: $device.isMobile ? 0 : -50 }"
        :visible-once="{ y: 0, opacity: 1 }"
        class="relative w-2/5 max-lg:w-1/3 h-[90%] py-12 flex items-center justify-center"
      >
        <NuxtImg
          src="3D-envelope.webp"
          alt="Envelope Mail"
          loading="lazy"
          class="absolute max-w-[528px] max-h-[90%] flex py-4 opacity-30 blur animate-[float_2s_infinite_ease-in-out]"
          sizes="sm:128px md:144px lg:160px xl:176px"
        />
        <NuxtImg
          src="3D-devices.webp"
          alt="Devices"
          loading="lazy"
          class="max-w-full max-h-[90%] drop-shadow-custom animate-[float_2s_infinite_ease-in-out]"
          sizes="xs:96px sm:128px md:144px lg:160px xl:176px"
        />
      </div>
    </div>
    <ParallaxBgContact />
  </section>
</template>

<script lang="ts" setup>
import * as Yup from 'yup'

const { t } = useI18n()

const schema = computed(() => {
  return Yup.object({
    name: Yup.string().max(64).required(t('contact.name.required')),
    email: Yup.string()
      .email(t('contact.email.error'))
      .max(128)
      .required(t('contact.email.required')),
    message: Yup.string().min(4).max(256).required(t('contact.email.required')),
  })
})

const result = ref()
const canCancel = ref(false)

const onSubmit = getSubmitFn(schema.value, async (values) => {
  setTimeout(() => (canCancel.value = true), 5000)
  result.value = await {
    ...useAsyncData('contact', () =>
      $fetch('https://api.germondai.com/contact/insert', {
        method: 'post',
        body: values,
      }),
    ),
  }
})

const retry = () => {
  result.value?.refresh()
  canCancel.value = false
  result.value.data.insert = undefined
  setTimeout(() => (canCancel.value = true), 5000)
}

const cancel = () => {
  canCancel.value = false
  result.value?.clear()
  result.value = undefined
}

// https://github.com/logaretm/vee-validate/issues/3521
function getSubmitFn<Schema extends Yup.ObjectSchema<Record<string, any>>>(
  _: Schema,
  callback: (values: Yup.InferType<Schema>) => void,
) {
  return (values: Record<string, any>) => {
    return callback(values)
  }
}
</script>

<style lang="scss" scoped></style>
