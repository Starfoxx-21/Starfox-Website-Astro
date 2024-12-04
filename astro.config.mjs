// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import svelte from '@astrojs/svelte';

const githubURL = "https://starfox-website-astro.github.io";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  i18n: {
    locales: ["el", "en"],
    defaultLocale: "en",
  },
  site: githubURL,
  base: 'my-repo',
});