// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },

  modules: [
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
  ],

  components: {
    global: true,
    dirs: ['~/components'],
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  router: {
    options: {
      strict: true,
    },
  },

  routeRules: {
    '/whoami': { sitemap: false },
    '/datenschutz': { sitemap: false },
    '/impressum': { sitemap: false },
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: [
            'ts',
            'js',
            'json',
            'vue',
            'yaml',
            'css',
            'html',
            'bash',
            'php',
          ],
        },
      },
    },
    renderer: {
      anchorLinks: false,
    },
  },

  site: {
    url: 'https://www.der-alex.com',
  },

  compatibilityDate: '2024-10-17',
});
