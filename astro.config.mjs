// @ts-check
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), icon()],
  site: "https://simon-muenker.github.io",
  base: "Open-Text-Annotation-Tool",

  vite: {
    plugins: [tailwindcss()],
  },
});
