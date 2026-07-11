// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { site } from './src/site.config.ts';

// https://astro.build/config
export default defineConfig({
  // sitemap / RSS / canonical URL の絶対化に使う。デプロイ先に合わせて site.config.ts で変更する
  site: site.url,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
