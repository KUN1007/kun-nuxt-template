// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  devServer: {
    host: '127.0.0.1',
    port: 1007
  },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'dayjs-nuxt'
  ],
  imports: {
    dirs: ['./composables', './utils', './store/**/*.ts']
  },

  // Frontend
  css: ['~/assets/css/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "~/assets/css/mixins.scss" as *;'
        }
      }
    },
    esbuild: {
      drop: ['console', 'debugger']
    }
  },

  eslint: {
    config: {
      stylistic: false
    }
  },

  piniaPersistedstate: {
    cookieOptions: {
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'strict'
    }
  },
  i18n: {
    langDir: './language',
    locales: [
      {
        code: 'en-us',
        language: 'en-US',
        file: 'en.json'
      },
      {
        code: 'zh-cn',
        language: 'zh-CN',
        file: 'zh-CN.json'
      }
    ],
    baseUrl: process.env.KUN_SITE_URL,
    defaultLocale: 'en-us',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'kun-language',
      redirectOn: 'root'
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__KUN_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: 'kun-',
    classSuffix: '-mode',
    storageKey: 'kun-color-mode'
  }
})
