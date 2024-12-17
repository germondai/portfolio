// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-12-17',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  vue: { propsDestructure: true },
  eslint: { config: { typescript: true } },

  site: {
    name: "Germond's Portfolio",
    url: 'https://germondai.com',
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/ico', href: '/img/skull.ico' }],
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
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@vee-validate/nuxt',
    '@nuxtjs/device',
    '@vite-pwa/nuxt',
  ],

  vite: { css: { preprocessorOptions: { scss: { api: 'modern' } } } },

  css: ['~/assets/scss/style.scss'],

  tailwindcss: {
    exposeConfig: true,
    config: {
      theme: {
        screens: {
          '2xs': '320px',
          xs: '480px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },

  image: {
    // quality: 85,
    // format: ['webp'],
    dir: '~~/public/img/',
  },

  i18n: {
    lazy: true,
    strategy: 'no_prefix',
    locales: [
      {
        icon: 'twemoji:flag-for-flag-united-kingdom',
        code: 'en',
        language: 'en',
        name: 'English',
        files: ['en.json', 'common.json'],
      },
      {
        icon: 'twemoji:flag-czechia',
        code: 'cs',
        language: 'cs',
        name: 'Česky',
        files: ['cs.json', 'common.json'],
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
      escapeHtml: false,
    },
    experimental: { typedOptionsAndMessages: 'default' },
  },

  $production: {
    pwa: {
      registerType: 'autoUpdate',
      workbox: {
        navigateFallback: '/',
        globPatterns: [
          '**/*.{js,css,html}',
          '_nuxt/**/*.{js,css,woff2}',
          '_ipx/**/*.{webp,ico}',
        ],
      },
      manifest: {
        name: "Germond's Portfolio",
        short_name: 'Germond',
        description:
          'An Aspiring Full-Stack Web Developer. Make sure to check out my creations!',
        display: 'standalone',
        theme_color: '#121316',
        background_color: '#121316',
        start_url: '/',
        icons: [
          {
            src: 'img/pwa/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'img/pwa/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'img/pwa/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'img/pwa/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    },
  },
})
