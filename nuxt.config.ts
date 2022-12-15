// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { antdTheme } from './theme/antdTheme'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],
  css: ['swiper/css'],
  build: {
    transpile: ['swiper'],
  },
  i18n: {
    strategy: 'prefix',
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'fr',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
        dir: 'ltr',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.json',
        dir: 'ltr',
      },
    ],
    vueI18n: {
    },
  },
  typescript: { strict: true },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // https://www.antdv.com/docs/vue/customize-theme/#Ant-Design-Vue-Less-variables
          modifyVars: antdTheme(),
        },
      },
    },
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver({ resolveIcons: true, importStyle: 'less' })],
      }),
    ],
    ssr: {
      noExternal: ['ant-design-vue', '@ant-design/icons-vue'],
    },
  },
})
