// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon'],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  content: {
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
});
