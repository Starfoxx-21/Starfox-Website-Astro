// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import svelte from '@astrojs/svelte';

const githubURL = "https://starfoxx-21.github.io";
const repoName = "/Starfox-Website-Astro"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  i18n: {
    locales: ["el", "en"],
    defaultLocale: "en",
  },
  site: githubURL,
  base: repoName,
});