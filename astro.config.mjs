// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://naveen37.com',
  integrations: [icon(), mdx(), sitemap()],
  server: {
    host: 'localhost',
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});