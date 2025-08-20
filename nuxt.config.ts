// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    'nuxt-typed-router',
    'nuxt-aos',
    '@vueuse/nuxt',
    '@formkit/auto-animate',
  ],
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBase: 'http://landing.qarah.tharadtech.com/api/', // overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',

  aos: {
    once: true,
    debounceDelay: 20,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Almarai',
        weights: ['400', '500', '700'],
      },
    ],
  },

  i18n: {
    strategy: 'prefix_except_default',
    lazy: true,
    locales: [
      {
        code: 'ar',
        name: 'AR',
        file: 'ar.ts',
        dir: 'rtl',
        language: 'ar-SA',
      },
      {
        code: 'en',
        name: 'EN',
        file: 'en.ts',
        dir: 'ltr',
        language: 'en-US',
      },
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
    },
    baseUrl: 'https://qarah-app.com',
  },

  image: {
    quality: 85,
    format: ['avif', 'webp'],
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './app/components/ui',
  },
})
