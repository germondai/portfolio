// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  // nitro: {
  //   prerender: {
  //     routes: [],
  //   },
  // },

  devtools: { enabled: true },

  site: {
    name: "Germond's Portfolio",
  },

  app: {
    head: {
      meta: [
        {
          name: 'description',
          content:
            "Germond's personal portfolio website. Make sure to check out my creations!",
        },
        {
          name: 'keywords',
          content:
            'web developer portfolio, website creations, web development services, custom websites, create website, website creation, website, web, germondai, germond, @germondai, @germond',
        },
        {
          name: 'author',
          content: '@germondai',
        },
        {
          name: 'theme-color',
          content: '#121316',
        },
      ],
    },
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    // '@nuxt/image',
    '@nuxtjs/seo',
  ],

  tailwindcss: {
    exposeConfig: true,
  },

  css: ['~/assets/scss/style.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/_variables.scss" as *;
            @use "@/assets/scss/_mixins.scss" as *;
            @use "@/assets/scss/_animations.scss" as *;
          `,
        },
      },
    },
  },

  image: {
    quality: 85,
    format: ['webp'],
    dir: 'public/img/',
  },

  i18n: {
    lazy: true,
    langDir: 'assets/locales/',
    // strategy: 'prefix_except_default',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'cs',
        iso: 'cs-CZ',
        name: 'Česky',
        file: 'cs.json',
      },
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root',
      fallbackLocale: 'en',
    },
    compilation: {
      strictMessage: false,
      escapeHtml: true,
    },
  },
})
