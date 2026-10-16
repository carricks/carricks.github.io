// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://carricks.github.io",
  output: "static",
  i18n: {
    locales: ["en", "nl", "de"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
