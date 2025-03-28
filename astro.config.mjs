// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://ericccp.github.io',
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
  integrations: [
    mdx()
  ],
  adapter: node({
    mode: 'standalone'
  })
});