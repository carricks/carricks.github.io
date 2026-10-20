// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// GitHub Actions supplies the owner so a username rename also updates metadata.
const githubUsername = process.env.PUBLIC_GITHUB_USERNAME || 'dc-x1';

// https://astro.build/config
export default defineConfig({
  site: `https://${githubUsername}.github.io`,
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
