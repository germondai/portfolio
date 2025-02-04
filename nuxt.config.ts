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
      link: [{ rel: 'icon', type: 'image/ico', href: '/skull.ico' }],
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
    quality: 85,
    format: ['webp'],
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
        navigateFallback: undefined,
        globPatterns: [
          '**/*.{js,css,html}',
          '_fonts/**/*.{woff,woff2}',
          '_nuxt/**/*.{js,css}',
          '_ipx/**/*.{webp,png,jpg,jpeg,ico}',
        ],
      },
      manifest: {
        name: "Germond's Portfolio",
        short_name: 'Germond',
        description:
          "Hi, I'm Germond, an aspiring Full-Stack Web Developer with expertise in Nuxt.js, PHP, MySQL and TailwindCSS. Check out my portfolio to explore modern web solutions and projects.",
        display: 'standalone',
        theme_color: '#121316',
        background_color: '#121316',
        start_url: '/',
        shortcuts: [
          {
            name: 'Welcome',
            url: '/',
          },
          {
            name: 'About',
            url: '/about',
          },
          {
            name: 'Work',
            url: '/work',
          },
          {
            name: 'Contact',
            url: '/contact',
          },
        ],
        icons: [
          {
            src: '/pwa/icons/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/pwa/icons/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/pwa/icons/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/pwa/icons/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        screenshots: [
          {
            src: '/pwa/screenshots/germondai_com_narrow.webp',
            type: 'image/webp',
            sizes: '540x720',
            form_factor: 'narrow',
          },
          {
            src: '/pwa/screenshots/germondai_com_wide.webp',
            type: 'image/webp',
            sizes: '1024x768',
            form_factor: 'wide',
          },
        ],
      },
    },
  },
})
