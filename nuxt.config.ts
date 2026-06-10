export default defineNuxtConfig({
  compatibilityDate: "2026-01-01",

  devtools: { enabled: true },

  features: { inlineStyles: true },

  future: { compatibilityVersion: 5 },

  experimental: {
    asyncContext: true,
    inlineRouteRules: true,
    typescriptPlugin: true,
  },

  vitalizer: { disableStylesheets: "entry" },

  typescript: {
    tsConfig: {
      include: ["../types/**/*.d.ts"],
    },
  },

  $development: {
    typescript: {
      typeCheck: true,
      strict: true,
    },

    site: {
      url: "http://localhost:3000",
    },
  },

  nitro: {
    preset: "bun",
    compressPublicAssets: true,
    routeRules: {
      "/_ipx/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
      "/_nuxt/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
      "/_fonts/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
      "/_scripts/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
    },
  },

  vite: {
    optimizeDeps: {
      include: ["@unhead/schema-org/vue", "@vue/devtools-core", "@vue/devtools-kit"],
    },

    build: {
      cssCodeSplit: true,
      cssMinify: "lightningcss",
      minify: "terser",
    },

    $client: {
      build: {
        sourcemap: false,
        minify: "terser",
      },
    },

    $server: {
      build: {
        rollupOptions: {
          output: {
            preserveModules: true,
          },
        },
      },
    },
  },

  app: {
    head: {
      link: [{ rel: "icon", type: "image/ico", href: "/favicon.ico" }],
      meta: [{ name: "author", content: "@germondai" }],
    },
  },

  modules: [
    "@nuxt/a11y",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@vite-pwa/nuxt",
    "@vueuse/motion/nuxt",
    "@vueuse/nuxt",
    "nuxt-security",
    "nuxt-vitalizer",
  ],

  appConfig: {
    ui: {
      colors: {
        primary: "indigo",
        neutral: "neutral",
      },
    },
  },

  ui: {
    experimental: {
      componentDetection: true,
    },
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
  },

  icon: {
    clientBundle: {
      scan: true,
    },
  },

  css: ["~/assets/css/tailwind.css"],

  image: {
    quality: 85,
    format: ["webp", "avif"],
    screens: {
      "3xs": 320,
      "2xs": 420,
      xs: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
      "3xl": 1920,
    },
  },

  security: {
    headers: {
      crossOriginEmbedderPolicy: "unsafe-none",
      contentSecurityPolicy: {
        "img-src": ["'self'", "data:"],
        "script-src": ["'self'", "https:", "'unsafe-inline'", "'nonce-{{nonce}}'", "'unsafe-eval'"],
        "script-src-attr": ["'unsafe-inline'"],
      },
    },
  },

  site: {
    name: "Germond's Portfolio",
    url: "https://germondai.com",
    description: "Germond's personal portfolio website. Make sure to check out my creations!",
    trailingSlash: false,
  },

  seo: {
    meta: {
      description:
        "Mentorize is a complete AI learning platform with AI Mentor, structured courses, real-time chat, cloud Drive, and collaborative Docs — powered by all major AI providers.",
      applicationName: "Mentorize",
      author: "Mentorize",
      twitterCard: "summary_large_image",
      colorScheme: "dark",
      themeColor: "#121316",
    },
  },

  robots: { blockNonSeoBots: true },

  schemaOrg: {
    identity: {
      type: "Person",
      name: "Germond",
      logo: "/favicon.ico",
      sameAs: ["https://github.com/germondai"],
    },
  },

  i18n: {
    defaultLocale: "en",
    customRoutes: "config",
    strategy: "prefix_except_default",
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json", dir: "ltr" },
      { code: "cs", iso: "cs-CZ", name: "Čeština", file: "cs.json", dir: "ltr" },
      { code: "sk", iso: "sk-SK", name: "Slovenčina", file: "sk.json", dir: "ltr" },
      { code: "pl", iso: "pl-PL", name: "Polski", file: "pl.json", dir: "ltr" },
    ],
    pages: { index: { en: "/", cs: "/", sk: "/", pl: "/" } },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  scripts: {
    registry: {
      googleAnalytics: { trigger: "onNuxtReady", proxy: false },
      googleTagManager: { trigger: "onNuxtReady", proxy: false },
    },
  },

  $production: {
    pwa: {
      strategies: "generateSW",
      registerType: "autoUpdate",
      manifest: {
        name: "Germond's Portfolio",
        short_name: "Germond",
        description:
          "Hi, I'm Germond, an aspiring Full-Stack Web Developer with expertise in Nuxt.js, PHP, MySQL and TailwindCSS. Check out my portfolio to explore modern web solutions and projects.",
        display: "standalone",
        theme_color: "#121316",
        background_color: "#121316",
        start_url: "/",
        shortcuts: [
          { name: "Welcome", url: "/" },
          { name: "About", url: "/about" },
          { name: "Work", url: "/work" },
          { name: "Contact", url: "/contact" },
        ],
        icons: [
          {
            src: "/pwa/icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa/icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/pwa/icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa/icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "/pwa/screenshots/germondai_com_narrow.webp",
            type: "image/webp",
            sizes: "540x720",
            form_factor: "narrow",
          },
          {
            src: "/pwa/screenshots/germondai_com_wide.webp",
            type: "image/webp",
            sizes: "1024x768",
            form_factor: "wide",
          },
        ],
      },
      workbox: {
        navigateFallback: undefined,
        globPatterns: ["*.{ico,png,webp,avif,svg}", "**/*.{js,css}", "**/*.woff2"],
        runtimeCaching: [
          {
            urlPattern: /^\/_ipx\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "ipx-images",
              expiration: { maxEntries: 50, maxAgeSeconds: 2592000 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /\.webp$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "static-images",
              expiration: { maxEntries: 30, maxAgeSeconds: 604800 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "document",
            handler: "NetworkFirst",
            options: {
              cacheName: "pages",
              networkTimeoutSeconds: 1,
              expiration: { maxEntries: 25, maxAgeSeconds: 86400 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ request }) =>
              request.destination === "script" ||
              request.destination === "style" ||
              request.url.includes("manifest.webmanifest"),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "assets",
              expiration: { maxEntries: 100 },
            },
          },
        ],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        cleanupOutdatedCaches: true,
      },
      client: { installPrompt: true },
    },
  },
})
