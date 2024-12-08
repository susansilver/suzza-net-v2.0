// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import embeds from "astro-embed/integration";

// https://astro.build/config
export default defineConfig({
  site: "https://suzza.net",

  integrations: [embeds(), mdx(), tailwind(), sitemap()],
});
