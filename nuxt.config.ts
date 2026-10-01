import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/sitemap", "@nuxt/icon", "@pinia/nuxt"],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
          langs: [
            "ts",
            "js",
            "json",
            "vue",
            "yaml",
            "css",
            "html",
            "bash",
            "php"
          ]
        }
      }
    },
    renderer: {
      anchorLinks: false
    }
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" }
  },
  css: ["~/assets/main.css"],
  icon: {
    mode: "svg"
  },
  pinia: {
    storesDirs: ["app/stores/**"]
  },
  router: {
    options: {
      strict: true
    }
  },
  sitemap: {
    // catch-all category routes can't be discovered automatically
    urls: ["/webdesign", "/development", "/devops", "/archiv"]
  },
  routeRules: {
    "/whoami": { sitemap: false },
    "/datenschutz": { sitemap: false },
    "/impressum": { sitemap: false }
  },
  vite: {
    optimizeDeps: {
      include: []
    },
    plugins: [tailwindcss()]
  },
  devServer: {
    port: 1234
  }
});
