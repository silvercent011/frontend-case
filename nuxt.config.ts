import type { ViteConfig } from "nuxt/schema";

const viteConfig = {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "~/assets/scss/_variables.scss" as *;',
      },
    },
  },
} satisfies ViteConfig;

export default defineNuxtConfig({
  modules: ["@nuxt/devtools", "nuxt-icon", "@nuxt/test-utils/module"],
  devtools: { enabled: true },
  css: ["@/assets/scss/global.scss"],
  vite: viteConfig,
});
