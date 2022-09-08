const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-bc8cabdd.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "layouts/app.vue",
      "layouts/default.vue",
      "pages/fabi/[id].vue",
      "pages/fabi/index.vue",
      "pages/fabi/rechenspiel/index.vue",
      "pages/index.vue",
      "components/Multiplier.vue",
      "_TheGame-737b859a.mjs"
    ],
    "css": [
      "assets/entry.d0ff2753.css"
    ]
  },
  "components/Multiplier.vue": {
    "file": "Multiplier-2c6100ba.mjs",
    "src": "components/Multiplier.vue",
    "isDynamicEntry": true,
    "imports": [
      "_numbers-1937e703.mjs",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/Multiplier.ae70fbd3.css"
    ]
  },
  "_numbers-1937e703.mjs": {
    "file": "numbers-1937e703.mjs"
  },
  "_TheGame-737b859a.mjs": {
    "file": "TheGame-737b859a.mjs",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/TheGame.e52e0946.css"
    ]
  },
  "pages/fabi/[id].vue": {
    "file": "[id]-f4b2d09b.mjs",
    "src": "pages/fabi/[id].vue",
    "isDynamicEntry": true,
    "imports": [
      "components/Multiplier.vue",
      "node_modules/nuxt3/dist/app/entry.mjs",
      "_numbers-1937e703.mjs"
    ]
  },
  "pages/fabi/index.vue": {
    "file": "index-bf1acbf5.mjs",
    "src": "pages/fabi/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/Multiplier.vue",
      "node_modules/nuxt3/dist/app/entry.mjs",
      "_numbers-1937e703.mjs"
    ]
  },
  "pages/fabi/rechenspiel/index.vue": {
    "file": "index-70d8d199.mjs",
    "src": "pages/fabi/rechenspiel/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs",
      "_TheGame-737b859a.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-18708407.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/index.10fabedf.css"
    ]
  },
  "layouts/app.vue": {
    "file": "app-c412068d.mjs",
    "src": "layouts/app.vue",
    "isDynamicEntry": true,
    "imports": [
      "_numbers-1937e703.mjs",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/app.0ea0a94a.css"
    ]
  },
  "layouts/default.vue": {
    "file": "default-b0b0ccf0.mjs",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/default.c37a692f.css"
    ]
  }
};

export { client_manifest as default };