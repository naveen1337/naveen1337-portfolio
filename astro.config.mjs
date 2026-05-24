// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx()],
  server: {
    host: 'localhost',
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});