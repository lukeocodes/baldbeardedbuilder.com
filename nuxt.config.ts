import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  dev: true,

  publicRuntimeConfig: {
    PUBLIC_SANITY_PROJECT_ID: process.env.PUBLIC_SANITY_PROJECT_ID || null,
    PUBLIC_SANITY_DATASET: process.env.PUBLIC_SANITY_DATASET || null,
    PUBLIC_SANITY_READ_TOKEN: process.env.PUBLIC_SANITY_READ_TOKEN || null,
  },

  router: {
    trailingSlash: true
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        }
      }
    },
  }
})