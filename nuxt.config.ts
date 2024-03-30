// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
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
  sitemap: {
    strictNuxtContentPaths: true,
  },
  router: {
    options: {
      strict: true
    }
  },
  routeRules: {
    '/whoami': { sitemap: false },
    '/datenschutz': { sitemap: false },
    '/impressum': { sitemap: false },
  },

  content: {
    documentDriven: {
      navigation: false,
      page: false,
      surround: false
    },
  
    
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: 'github-dark',
      preload: [
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
  site: {
    url: 'https://www.der-alex.com',
  },
});
