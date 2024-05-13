// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  ogImage: { enabled: false },
  schemaOrg: { enabled: false },

  devtools: { enabled: true },

  site: {
    name: "Germond's Portfolio",
    url: 'https://germondai.rf.gd/',
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
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    // '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/google-fonts',
    '@vee-validate/nuxt',
    'nuxt-icon',
  ],

  googleFonts: {
    display: 'swap',
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },

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

  // image: {
  //   quality: 85,
  //   format: ['webp'],
  //   dir: 'public/img/',
  // },

  i18n: {
    lazy: true,
    langDir: 'assets/locales/',
    // strategy: 'prefix_except_default',
    strategy: 'no_prefix',
    locales: [
      {
        icon: 'twemoji:flag-for-flag-united-kingdom',
        code: 'en',
        iso: 'en-US',
        name: 'English',
        files: ['en.json', 'common.json'],
      },
      {
        icon: 'twemoji:flag-czechia',
        code: 'cs',
        iso: 'cs-CZ',
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
  },

  motion: {
    directives: {
      // 'pop-bottom': {
      //   initial: {
      //     scale: 0,
      //     opacity: 0,
      //     y: 100,
      //   },
      //   visible: {
      //     scale: 1,
      //     opacity: 1,
      //     y: 0,
      //   },
      // },
    },
  },
})
